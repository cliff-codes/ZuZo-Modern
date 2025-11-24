import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { SEOHead, getSoftwareApplicationSchema } from "@/components/seo/seo-head";

const pricingTiers = [
  {
    name: "Hourly",
    price: "$6.19",
    period: "per hour",
    description: "Flexible, pay-as-you-go support",
    features: [
      "15-minute billing increments",
      "No minimum commitment",
      "All services included",
      "Flexible scheduling",
      "Real-time billing",
      "Cancel anytime",
    ],
    popular: false,
  },
  {
    name: "Daily",
    price: "$45",
    period: "per day (8 hours)",
    description: "Best value for ongoing needs",
    features: [
      "8-hour dedicated support",
      "Priority scheduling",
      "Same-day deployment available",
      "Daily performance reports",
      "Highest ROI",
      "Scalable capacity",
    ],
    popular: true,
  },
  {
    name: "Monthly",
    price: "$990",
    period: "per dedicated VA",
    description: "Consistent, dedicated support",
    features: [
      "22 working days per month",
      "Fully dedicated team member",
      "Advanced skill training",
      "Personal account manager",
      "Priority support",
      "Maximum consistency",
    ],
    popular: false,
  },
];

const services = [
  { name: "Contact Center Support", hourly: "$6.19", daily: "$45", monthly: "$990" },
  { name: "Executive Virtual Assistant", hourly: "$7.50", daily: "$55", monthly: "$1,200" },
  { name: "Technical Support Specialist", hourly: "$8.00", daily: "$60", monthly: "$1,300" },
  { name: "Data Entry & Processing", hourly: "$5.50", daily: "$40", monthly: "$880" },
  { name: "Social Media Management", hourly: "$6.50", daily: "$48", monthly: "$1,050" },
  { name: "Lead Generation", hourly: "$7.00", daily: "$52", monthly: "$1,140" },
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Transparent BPO Pricing"
        description="ZuZo BPO pricing from $6.19/hour. Flexible hourly, daily ($45), and monthly ($990) plans. No hidden fees. 60% cost savings guaranteed. Contact center, virtual assistants, and AI automation."
        canonical="/pricing"
        keywords="BPO pricing, virtual assistant cost, contact center pricing, outsourcing rates, Ghana BPO costs"
        schema={getSoftwareApplicationSchema()}
      />
      <Header />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Transparent, Flexible Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the pricing model that fits your business needs. No hidden fees, no long-term contracts, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 ${
                  tier.popular ? "border-primary shadow-lg scale-105" : "hover-elevate"
                }`}
                data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">BEST VALUE</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-heading text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mb-2">
                    <span className="font-heading font-bold text-5xl text-primary">{tier.price}</span>
                    <div className="text-sm text-muted-foreground mt-1">{tier.period}</div>
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
                      data-testid={`button-get-started-${tier.name.toLowerCase()}`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service-Specific Pricing */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Service-Specific Pricing
            </h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-6 font-heading font-semibold">Service</th>
                        <th className="text-center p-6 font-heading font-semibold">Hourly</th>
                        <th className="text-center p-6 font-heading font-semibold">Daily (8hrs)</th>
                        <th className="text-center p-6 font-heading font-semibold">Monthly</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service, index) => (
                        <tr key={index} className="border-b last:border-b-0 hover-elevate">
                          <td className="p-6 font-medium">{service.name}</td>
                          <td className="p-6 text-center text-muted-foreground">{service.hourly}</td>
                          <td className="p-6 text-center text-muted-foreground">{service.daily}</td>
                          <td className="p-6 text-center text-muted-foreground">{service.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Included */}
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="font-heading font-bold text-2xl text-center mb-8">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">ISO 27001 Aligned Processes</div>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Data Protection Certified</div>
                  <p className="text-sm text-muted-foreground">Certified data protection practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">24/7 Support</div>
                  <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">No Setup Fees</div>
                  <p className="text-sm text-muted-foreground">Start immediately with no upfront costs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Flexible Scaling</div>
                  <p className="text-sm text-muted-foreground">Scale up or down instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Performance Dashboards</div>
                  <p className="text-sm text-muted-foreground">Real-time metrics and reporting</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading font-bold text-3xl mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation to discuss your specific needs and get a custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo">
                <Button size="lg" data-testid="button-pricing-book-demo">
                  Book Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button size="lg" variant="outline" data-testid="button-pricing-calculator">
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
