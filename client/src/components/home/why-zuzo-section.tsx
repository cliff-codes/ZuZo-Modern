import { Shield, Clock, TrendingDown, Zap, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    icon: TrendingDown,
    title: "60% Cost Reduction",
    description: "Cut operational expenses dramatically while maintaining quality",
    badge: "Proven Savings"
  },
  {
    icon: Clock,
    title: "48-Hour Launch",
    description: "Fastest deployment in the industry with zero downtime",
    badge: "Rapid Setup"
  },
  {
    icon: Users,
    title: "24/7 Global Coverage",
    description: "Round-the-clock support across all time zones",
    badge: "Always Available"
  },
  {
    icon: Zap,
    title: "AI-Powered Excellence",
    description: "Cutting-edge automation combined with human expertise",
    badge: "Smart Technology"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global standards",
    badge: "Certified Secure"
  },
  {
    icon: Award,
    title: "500+ Happy Clients",
    description: "Trusted by leading businesses across 12+ industries",
    badge: "Industry Leader"
  }
];

export function WhyZuzoSection() {
  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose ZuZo?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge AI technology with expert human support to deliver unmatched results
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-differentiator-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-5 w-5 text-success" />
            <span className="font-semibold">ISO 27001 Aligned</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-5 w-5 text-success" />
            <span className="font-semibold">Data Protection Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Award className="h-5 w-5 text-success" />
            <span className="font-semibold">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-5 w-5 text-success" />
            <span className="font-semibold">500+ Businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
