import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InlineBookingCTA } from "@/components/cta/inline-booking-cta";
import { MiniTrustBar } from "@/components/trust/mini-trust-bar";
import { ServiceSchema } from "@/components/seo/service-schema";
import { Link } from "wouter";
import { 
  Truck, 
  Package, 
  MapPin, 
  Phone, 
  ClipboardCheck, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users
} from "lucide-react";

export default function LogisticsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <ServiceSchema 
          name="Logistics & Transportation BPO Solutions"
          description="Shipment tracking and carrier coordination for logistics companies"
          url="/industries/logistics"
          category="Logistics Services"
        />
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <Badge className="mb-4" data-testid="industry-badge">
                Logistics & Transportation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6" data-testid="heading-hero">
                Optimize Your Supply Chain Operations
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
                Enhance your logistics operations with specialized BPO solutions for shipment tracking, carrier coordination, and customer support. From warehouse management to last-mile delivery, we help transportation companies deliver exceptional service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="gap-2" data-testid="button-hero-demo">
                    Book a Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button size="lg" variant="outline" data-testid="button-hero-roi">
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <MiniTrustBar />

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-benefits">
                Why Choose ZuZo for Logistics Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
                Specialized support built for the fast-paced logistics industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="benefit-card-realtime">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid="benefit-title-realtime">
                    Real-Time Shipment Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid="benefit-description-realtime">
                    24/7 customer support for tracking inquiries, delivery updates, and shipment status across all transportation modes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card data-testid="benefit-card-efficiency">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid="benefit-title-efficiency">
                    Operational Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid="benefit-description-efficiency">
                    Streamline dispatch coordination, carrier communication, and warehouse operations with dedicated support teams.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card data-testid="benefit-card-scalability">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid="benefit-title-scalability">
                    Scalable Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid="benefit-description-scalability">
                    Flex capacity up or down based on seasonal demand, peak shipping periods, and business growth without hiring challenges.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-solutions">
                Comprehensive Logistics BPO Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-solutions-subtitle">
                End-to-end support for shipping, warehousing, and transportation operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="service-card-tracking">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-tracking">
                    Shipment Tracking & Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-tracking">
                    Handle customer inquiries about shipment status, delivery estimates, and package location with real-time tracking integration.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-carrier">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-carrier">
                    Carrier Coordination
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-carrier">
                    Manage communication with carriers, coordinate pickups and deliveries, and resolve transportation issues promptly.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-routing">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-routing">
                    Route Optimization Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-routing">
                    Assist with delivery scheduling, route planning queries, and last-mile coordination to improve delivery efficiency.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-customer">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-customer">
                    Customer Service Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-customer">
                    Provide comprehensive customer support for shipping inquiries, address changes, delivery preferences, and issue resolution.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-warehouse">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <ClipboardCheck className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-warehouse">
                    Warehouse & Inventory Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-warehouse">
                    Handle order processing, inventory inquiries, returns management, and fulfillment coordination for warehouse operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-claims">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-claims">
                    Claims & Exception Handling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-claims">
                    Process shipping claims, manage delivery exceptions, coordinate re-deliveries, and handle damaged or lost package cases.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          <InlineBookingCTA 
            title="Optimize Your Logistics Operations"
            description="Discover how ZuZo helps logistics companies improve delivery success rates, reduce support costs by 35%, and provide 24/7 shipment tracking assistance. Book your consultation today."
          />
        </div>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-process">
                Our Implementation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-subtitle">
                Seamless integration with your logistics operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative" data-testid="process-step-assessment">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-assessment">
                  01
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-assessment">
                  Logistics Assessment
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-assessment">
                  We evaluate your shipping volume, customer touchpoints, and operational challenges to design the right support solution.
                </p>
              </div>

              <div className="relative" data-testid="process-step-integration">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-integration">
                  02
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-integration">
                  System Integration
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-integration">
                  Our team integrates with your TMS, WMS, and tracking systems for seamless access to shipment data and customer information.
                </p>
              </div>

              <div className="relative" data-testid="process-step-training">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-training">
                  03
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-training">
                  Team Training
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-training">
                  Agents receive specialized training on logistics operations, your service standards, and industry-specific protocols.
                </p>
              </div>

              <div className="relative" data-testid="process-step-optimization">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-optimization">
                  04
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-optimization">
                  Continuous Optimization
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-optimization">
                  We monitor performance metrics and optimize processes to reduce response times and improve delivery success rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-stats">
                Proven Results for Logistics Companies
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center" data-testid="stat-costs">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-costs">
                  35%
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-costs">
                  Reduction in Support Costs
                </div>
              </div>

              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-satisfaction">
                  4.7/5
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-satisfaction">
                  Customer Satisfaction Score
                </div>
              </div>

              <div className="text-center" data-testid="stat-resolution">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-resolution">
                  90%
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-resolution">
                  First-Contact Resolution
                </div>
              </div>

              <div className="text-center" data-testid="stat-coverage">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-coverage">
                  24/7
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-coverage">
                  Global Support Coverage
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6" data-testid="heading-cta">
              Ready to Streamline Your Logistics Operations?
            </h2>
            <p className="text-lg mb-8 opacity-90" data-testid="text-cta-description">
              Join leading logistics and transportation companies who trust ZuZo for their customer support needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo">
                <Button size="lg" variant="secondary" className="gap-2" data-testid="button-cta-demo">
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-cta-contact">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
