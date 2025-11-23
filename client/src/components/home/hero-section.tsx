import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in" data-testid="badge-trust">
            <CheckCircle className="h-4 w-4" />
            <span>Trusted by 500+ businesses worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 animate-fade-in">
            Human-AI Powered Support,{" "}
            <span className="text-primary">24/7</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in">
            From Virtual Assistants to Omnichannel CX, We Scale Your Business Without Limits
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">60% Cost Reduction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">48-Hour Launch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">Scale Instantly</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Link href="/book-demo">
              <Button size="lg" className="text-base px-8 py-6 h-auto" data-testid="button-hero-book-demo">
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto backdrop-blur-sm" data-testid="button-hero-roi-calculator">
                <Play className="mr-2 h-5 w-5" />
                Calculate Your Savings
              </Button>
            </Link>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground animate-fade-in" data-testid="text-no-commitment">
            No credit card required • 30-minute consultation • No commitment
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
}
