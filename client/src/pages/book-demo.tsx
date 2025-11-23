import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BookingForm } from "@/components/forms/booking-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function BookDemo() {
  useEffect(() => {
    document.title = "Book a Free Demo - ZuZo BPO Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
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
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* What to Expect */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Needs Assessment</div>
                      <p className="text-sm text-muted-foreground">
                        We'll analyze your current operations and identify optimization opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Custom Solution Design</div>
                      <p className="text-sm text-muted-foreground">
                        Tailored BPO strategy aligned with your business objectives
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">ROI Projection</div>
                      <p className="text-sm text-muted-foreground">
                        Clear breakdown of potential cost savings and efficiency gains
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Implementation Roadmap</div>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step plan for 48-hour deployment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Session Includes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>30-minute expert consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Custom proposal document</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>ROI calculator analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Q&A with BPO specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>No obligation or commitment</span>
                  </div>
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
