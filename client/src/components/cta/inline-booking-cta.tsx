import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, CheckCircle, TrendingUp } from "lucide-react";

interface InlineBookingCTAProps {
  title?: string;
  description?: string;
  showBenefits?: boolean;
}

export function InlineBookingCTA({ 
  title = "Ready to Transform Your Operations?",
  description = "Book a free 30-minute strategy session and discover how ZuZo can help you reduce costs by 60% while delivering exceptional customer experiences.",
  showBenefits = true 
}: InlineBookingCTAProps) {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20" data-testid="inline-booking-cta">
      <CardContent className="p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {description}
          </p>
          
          {showBenefits && (
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                <span>No commitment</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-success flex-shrink-0" />
                <span>Custom ROI analysis</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-success flex-shrink-0" />
                <span>30-minute session</span>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book-demo">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-inline-book-demo">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Strategy Session
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-inline-contact">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
