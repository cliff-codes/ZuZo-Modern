import { Card } from "@/components/ui/card";

export function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Trusted by Leading Businesses
          </p>
          <h3 className="font-heading font-bold text-2xl md:text-3xl">
            Join 500+ Companies Worldwide
          </h3>
        </div>

        {/* Industry Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          <Card className="px-6 py-3 border-muted hover-elevate transition-all" data-testid="industry-badge-ecommerce">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-sm">E-commerce</span>
            </div>
          </Card>
          <Card className="px-6 py-3 border-muted hover-elevate transition-all" data-testid="industry-badge-fintech">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-sm">Financial Services</span>
            </div>
          </Card>
          <Card className="px-6 py-3 border-muted hover-elevate transition-all" data-testid="industry-badge-healthcare">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-sm">Healthcare</span>
            </div>
          </Card>
          <Card className="px-6 py-3 border-muted hover-elevate transition-all" data-testid="industry-badge-saas">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-sm">SaaS</span>
            </div>
          </Card>
          <Card className="px-6 py-3 border-muted hover-elevate transition-all" data-testid="industry-badge-realestate">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-sm">Real Estate</span>
            </div>
          </Card>
          <Card className="px-6 py-3 border-muted hover-elevate transition-all" data-testid="industry-badge-logistics">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-sm">Logistics</span>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Global Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
