import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BookingForm } from "@/components/forms/booking-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Server, Shield, Users } from "lucide-react";
import { SEOHead, getOrganizationSchema, getPartnerProgramSchema } from "@/components/seo/seo-head";
import { Link } from "wouter";
import { CompactTestimonials } from "@/components/testimonials/compact-testimonials";

export default function BookDemo() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Book a Free Strategy Session"
        description="Schedule your free 30-minute BPO consultation with ZuZo experts. Get custom solutions, ROI projections, and implementation roadmap. No obligation required."
        canonical="/book-demo"
        keywords="book demo, free consultation, BPO strategy session, business process outsourcing demo"
        schema={getOrganizationSchema()}
      />
      <Header />
      <main className="pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Book Your Free Strategy Session
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover how ZuZo can transform your operations. Our experts will analyze your needs and design a custom solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left: Booking Form + Session Includes */}
            <div className="lg:col-span-2 space-y-6">
              <BookingForm />
              
              {/* Session Includes */}
              <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20" data-testid="session-includes">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Session Includes</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>30-minute expert consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Custom proposal document</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>ROI calculator analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>Q&A with BPO specialist</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>No obligation or commitment</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Needs Assessment</div>
                      <p className="text-xs text-muted-foreground">
                        Analyze operations and identify opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Custom Solution Design</div>
                      <p className="text-xs text-muted-foreground">
                        Tailored BPO strategy for your business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">ROI Projection</div>
                      <p className="text-xs text-muted-foreground">
                        Cost savings and efficiency gains breakdown
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Implementation Roadmap</div>
                      <p className="text-xs text-muted-foreground">
                        48-hour deployment plan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partner Solutions */}
              <Card className="border-blue-200/50 bg-blue-50/50" data-testid="card-partner-solutions">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Partner Solutions Available</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">MSP Partnership</div>
                      <p className="text-xs text-muted-foreground">
                        Tier 1 support for IT helpdesk + ConnectWise, Autotask, HaloPSA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Server className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">3PL Logistics</div>
                      <p className="text-xs text-muted-foreground">
                        WISMO support in Gorgias, Shopify, ShipStation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">NDIS Providers</div>
                      <p className="text-xs text-muted-foreground">
                        Claim processing in Lumary, Xero, PRODA-verified
                      </p>
                    </div>
                  </div>

                  <Link href="/partner-portal">
                    <div className="mt-4 p-3 bg-blue-100/50 rounded-md hover:bg-blue-100 transition-colors cursor-pointer">
                      <p className="text-sm font-medium text-blue-700">Explore white-label partnership →</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>

              {/* Social Proof - Testimonials */}
              <Card data-testid="testimonials-section">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-2">
                    What Our Clients Say
                    <span className="text-xs font-normal text-muted-foreground">★ Trusted by 500+ businesses</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CompactTestimonials limit={2} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
