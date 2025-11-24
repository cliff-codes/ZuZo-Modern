import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, TrendingDown, Clock, Zap, Users, Calculator, Calendar } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { SEOHead } from "@/components/seo/seo-head";

const comparisonData = [
  {
    category: "Cost",
    icon: TrendingDown,
    zuzo: {
      text: "60% cost reduction",
      value: "$6.19/hour",
      advantage: true,
      details: "From $6.19/hour with flexible billing",
    },
    inHouse: {
      text: "High overhead costs",
      value: "$25-45/hour",
      advantage: false,
      details: "Salaries, benefits, office space, equipment",
    },
    traditionalBPO: {
      text: "Moderate costs",
      value: "$15-25/hour",
      advantage: false,
      details: "Long-term contracts, hidden fees",
    },
  },
  {
    category: "Setup Time",
    icon: Clock,
    zuzo: {
      text: "48-hour launch",
      value: "2 days",
      advantage: true,
      details: "Rapid deployment with pre-trained teams",
    },
    inHouse: {
      text: "Lengthy hiring",
      value: "3-6 months",
      advantage: false,
      details: "Recruitment, training, onboarding",
    },
    traditionalBPO: {
      text: "Slow setup",
      value: "4-8 weeks",
      advantage: false,
      details: "Contract negotiation, infrastructure setup",
    },
  },
  {
    category: "Scalability",
    icon: Zap,
    zuzo: {
      text: "Instant scaling",
      value: "Same day",
      advantage: true,
      details: "Scale up or down within hours",
    },
    inHouse: {
      text: "Difficult to scale",
      value: "Weeks/months",
      advantage: false,
      details: "New hiring cycles for each expansion",
    },
    traditionalBPO: {
      text: "Limited flexibility",
      value: "2-4 weeks",
      advantage: false,
      details: "Contract amendments required",
    },
  },
  {
    category: "Technology",
    icon: Zap,
    zuzo: {
      text: "AI-powered automation",
      value: "Advanced",
      advantage: true,
      details: "Latest AI tools, analytics, and integrations",
    },
    inHouse: {
      text: "Self-managed tech",
      value: "Variable",
      advantage: false,
      details: "Requires investment in tools and IT staff",
    },
    traditionalBPO: {
      text: "Basic technology",
      value: "Limited",
      advantage: false,
      details: "Outdated systems, limited innovation",
    },
  },
  {
    category: "Quality",
    icon: CheckCircle,
    zuzo: {
      text: "4.5/5 CSAT score",
      value: "Excellent",
      advantage: true,
      details: "Continuous training, QA monitoring",
    },
    inHouse: {
      text: "Control-dependent",
      value: "Variable",
      advantage: false,
      details: "Depends on hiring and management quality",
    },
    traditionalBPO: {
      text: "Inconsistent quality",
      value: "Moderate",
      advantage: false,
      details: "High turnover, limited accountability",
    },
  },
  {
    category: "Management Overhead",
    icon: Users,
    zuzo: {
      text: "Minimal oversight",
      value: "Low",
      advantage: true,
      details: "Dedicated account manager handles operations",
    },
    inHouse: {
      text: "High management",
      value: "High",
      advantage: false,
      details: "HR, payroll, performance management",
    },
    traditionalBPO: {
      text: "Moderate oversight",
      value: "Medium",
      advantage: false,
      details: "Regular coordination and escalations",
    },
  },
];

const zuzoAdvantages = [
  {
    title: "60% Cost Reduction",
    description: "Save significantly compared to in-house teams while maintaining quality",
    icon: TrendingDown,
  },
  {
    title: "48-Hour Launch",
    description: "Go live in 2 days with pre-trained, ready-to-deploy teams",
    icon: Clock,
  },
  {
    title: "AI-Powered Excellence",
    description: "Advanced automation and analytics for superior results",
    icon: Zap,
  },
  {
    title: "Flexible Scaling",
    description: "Scale your team up or down instantly based on demand",
    icon: Users,
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="ZuZo vs In-House vs Traditional BPO"
        description="Compare ZuZo's BPO services with in-house teams and traditional outsourcing. 60% cost reduction, 48-hour setup, AI-powered technology, and flexible scaling."
        canonical="/compare"
        keywords="BPO comparison, in-house vs outsourcing, traditional BPO vs modern, cost comparison, outsourcing benefits"
      />
      <Header />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        {/* Hero Section */}
        <section className="mb-16 lg:mb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6">Comprehensive Comparison</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                ZuZo vs. In-House Teams vs. Traditional BPO
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Make an informed decision with a side-by-side comparison of your outsourcing options
              </p>
            </div>
          </div>
        </section>

        <MiniTrustBar />

        {/* Comparison Table */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <Card>
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-6 font-heading font-bold text-xl">Feature</th>
                          <th className="text-center p-6 font-heading font-bold text-xl">
                            <div className="flex flex-col items-center gap-2">
                              <Badge className="bg-primary">Recommended</Badge>
                              <span>ZuZo</span>
                            </div>
                          </th>
                          <th className="text-center p-6 font-heading font-bold text-xl">In-House Team</th>
                          <th className="text-center p-6 font-heading font-bold text-xl">Traditional BPO</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => {
                          const Icon = row.icon;
                          return (
                            <tr key={index} className="border-t" data-testid={`comparison-row-${index}`}>
                              <td className="p-6">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <div className="font-heading font-semibold text-lg">{row.category}</div>
                                  </div>
                                </div>
                              </td>
                              
                              <td className="p-6 bg-primary/5">
                                <div className="text-center">
                                  <div className="flex items-center justify-center gap-2 mb-2">
                                    <CheckCircle className="h-5 w-5 text-success" />
                                    <span className="font-semibold text-lg">{row.zuzo.text}</span>
                                  </div>
                                  <div className="text-2xl font-bold text-primary mb-1">{row.zuzo.value}</div>
                                  <div className="text-sm text-muted-foreground">{row.zuzo.details}</div>
                                </div>
                              </td>

                              <td className="p-6 text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                  <X className="h-5 w-5 text-destructive" />
                                  <span className="font-semibold">{row.inHouse.text}</span>
                                </div>
                                <div className="text-xl font-bold mb-1">{row.inHouse.value}</div>
                                <div className="text-sm text-muted-foreground">{row.inHouse.details}</div>
                              </td>

                              <td className="p-6 text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                  <X className="h-5 w-5 text-destructive" />
                                  <span className="font-semibold">{row.traditionalBPO.text}</span>
                                </div>
                                <div className="text-xl font-bold mb-1">{row.traditionalBPO.value}</div>
                                <div className="text-sm text-muted-foreground">{row.traditionalBPO.details}</div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-6">
                {comparisonData.map((row, index) => {
                  const Icon = row.icon;
                  return (
                    <Card key={index} data-testid={`comparison-card-${index}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-heading">
                          <Icon className="h-5 w-5 text-primary" />
                          {row.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-5 w-5 text-success" />
                            <span className="font-semibold">ZuZo</span>
                            <Badge variant="outline" className="ml-auto">Best</Badge>
                          </div>
                          <div className="text-xl font-bold text-primary mb-1">{row.zuzo.value}</div>
                          <div className="text-sm text-muted-foreground">{row.zuzo.details}</div>
                        </div>

                        <div className="p-4 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <X className="h-5 w-5 text-destructive" />
                            <span className="font-semibold">In-House</span>
                          </div>
                          <div className="text-lg font-bold mb-1">{row.inHouse.value}</div>
                          <div className="text-sm text-muted-foreground">{row.inHouse.details}</div>
                        </div>

                        <div className="p-4 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <X className="h-5 w-5 text-destructive" />
                            <span className="font-semibold">Traditional BPO</span>
                          </div>
                          <div className="text-lg font-bold mb-1">{row.traditionalBPO.value}</div>
                          <div className="text-sm text-muted-foreground">{row.traditionalBPO.details}</div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ZuZo Advantages */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Why Choose ZuZo?
              </h2>
              <p className="text-lg text-muted-foreground">
                The modern approach to business process outsourcing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {zuzoAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`advantage-card-${index}`}>
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROI Calculator CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Calculator className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                    Calculate Your Savings
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    See exactly how much you can save by switching to ZuZo. Our ROI calculator provides a detailed breakdown of your potential cost reduction.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/roi-calculator">
                      <Button size="lg" data-testid="button-roi-calculator">
                        <Calculator className="mr-2 h-5 w-5" />
                        Calculate Your ROI
                      </Button>
                    </Link>
                    <Link href="/resources/bpo-roi-guide">
                      <Button size="lg" variant="outline" data-testid="button-roi-guide">
                        Download ROI Guide
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <InlineBookingCTA 
              title="Ready to Make the Switch?"
              description="Book a free consultation to discuss how ZuZo can deliver better results at 60% lower cost than your current solution."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
