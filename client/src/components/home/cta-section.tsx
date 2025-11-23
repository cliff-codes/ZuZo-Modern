import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ businesses that have reduced costs by 60% and scaled without limits. Get your free strategy session today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/book-demo">
              <Button size="lg" className="text-base px-8 py-6 h-auto" data-testid="button-cta-book-demo">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto backdrop-blur-sm" data-testid="button-cta-contact">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground" data-testid="text-cta-benefits">
            ✓ No credit card required  ✓ 30-minute consultation  ✓ Custom proposal included
          </p>
        </div>
      </div>
    </section>
  );
}
