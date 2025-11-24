import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Calendar } from "lucide-react";
import { Link } from "wouter";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [showUpsell, setShowUpsell] = useState(false);
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      return await apiRequest("POST", "/api/subscribers", { email: emailAddress });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setShowUpsell(true);
      
      // Hide upsell after 10 seconds
      setTimeout(() => setShowUpsell(false), 10000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10"
            data-testid="input-newsletter-email"
          />
        </div>
        <Button
          type="submit"
          disabled={subscribeMutation.isPending}
          data-testid="button-newsletter-submit"
        >
          {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      
      {/* Post-subscription upsell */}
      {showUpsell && (
        <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg animate-in slide-in-from-bottom-2" data-testid="newsletter-upsell">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1">Want to take it a step further?</p>
              <p className="text-xs text-muted-foreground mb-2">
                Book a free 30-minute consultation and get a custom BPO strategy for your business.
              </p>
              <Link href="/book-demo">
                <Button size="sm" variant="outline" className="text-xs" data-testid="button-upsell-book-demo">
                  Book Free Consultation →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
