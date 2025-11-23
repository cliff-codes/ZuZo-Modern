import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Per Hour",
    price: "$6.19",
    period: "per hour",
    description: "Perfect for ad-hoc needs",
    features: [
      "15-minute increments",
      "Flexible scheduling",
      "No long-term commitment",
      "Pay as you go",
      "Access to all services",
    ],
    popular: false,
  },
  {
    name: "Per Day",
    price: "$45",
    period: "per day",
    description: "Best value for regular support",
    features: [
      "8-hour workday",
      "Dedicated support",
      "Priority scheduling",
      "Daily reporting",
      "Best ROI",
    ],
    popular: true,
  },
  {
    name: "Monthly VA",
    price: "$990",
    period: "per month",
    description: "Dedicated team member",
    features: [
      "22 working days",
      "Fully dedicated VA",
      "Advanced training",
      "Account manager",
      "Maximum consistency",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-card/50 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Transparent Pricing That Makes Sense
          </h2>
          <p className="text-lg text-muted-foreground">
            Pay only for what you need. No hidden fees. No surprises. Scale up or down instantly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 ${
                tier.popular
                  ? "border-primary shadow-lg scale-105"
                  : "hover-elevate"
              }`}
              data-testid={`pricing-card-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-heading text-xl mb-2">{tier.name}</CardTitle>
                <div className="mb-2">
                  <span className="font-heading font-bold text-4xl text-primary">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{tier.period}</span>
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    data-testid={`button-get-started-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            All plans include: ISO 27001 compliance • GDPR certified • 24/7 support • No setup fees
          </p>
          <Link href="/pricing">
            <Button variant="outline" size="lg" data-testid="button-view-full-pricing">
              View Full Pricing & Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
