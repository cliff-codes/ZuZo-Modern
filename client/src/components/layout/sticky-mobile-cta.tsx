import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary/90 shadow-lg border-t border-primary-foreground/20">
      <div className="container mx-auto px-4 py-3">
        <Link href="/book-demo">
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full text-base font-semibold shadow-md"
            data-testid="button-sticky-mobile-cta"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Free Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
