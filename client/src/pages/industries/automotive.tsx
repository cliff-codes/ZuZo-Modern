import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Car, 
  Headphones, 
  Calendar, 
  Wrench, 
  ShieldCheck, 
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users
} from "lucide-react";

export default function AutomotivePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <Badge className="mb-4" data-testid="industry-badge">
                Automotive Industry
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6" data-testid="heading-hero">
                Drive Customer Satisfaction & Service Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-hero-description">
                Enhance your dealership operations with specialized BPO solutions for sales support, service scheduling, and customer retention. From lead qualification to post-purchase care, we help automotive businesses deliver exceptional customer experiences.
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

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-benefits">
                Why Choose ZuZo for Automotive Support
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
                Specialized support designed for the automotive industry's unique challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-testid="benefit-card-availability">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid="benefit-title-availability">
                    24/7 Service Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid="benefit-description-availability">
                    Round-the-clock support for service appointments, parts inquiries, and roadside assistance requests across all time zones.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card data-testid="benefit-card-conversions">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid="benefit-title-conversions">
                    Increased Sales Conversions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid="benefit-description-conversions">
                    Professional lead qualification and follow-up that turns website visitors and showroom inquiries into vehicle sales.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card data-testid="benefit-card-retention">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid="benefit-title-retention">
                    Enhanced Customer Retention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid="benefit-description-retention">
                    Proactive service reminders, warranty follow-ups, and customer care that builds long-term relationships and repeat business.
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
                Comprehensive Automotive BPO Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-solutions-subtitle">
                End-to-end support for dealerships, service centers, and automotive retailers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="service-card-customer-service">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-customer-service">
                    Customer Service & Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-customer-service">
                    Handle vehicle inquiries, product information requests, and general customer support with automotive expertise.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-scheduling">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-scheduling">
                    Service Appointment Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-scheduling">
                    Manage service appointments, maintenance bookings, and test drive scheduling with automated confirmations and reminders.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-parts">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-parts">
                    Parts & Accessories Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-parts">
                    Assist customers with parts availability, pricing, compatibility checks, and accessory recommendations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-warranty">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-warranty">
                    Warranty & Claims Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-warranty">
                    Process warranty claims, extended warranty inquiries, and service contract management with compliance expertise.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-leads">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-leads">
                    Sales Lead Qualification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-leads">
                    Qualify and nurture leads from online inquiries, showroom visits, and promotional campaigns to increase conversion rates.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="service-card-followup">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg" data-testid="service-title-followup">
                    Post-Purchase Follow-Up
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription data-testid="service-description-followup">
                    Conduct satisfaction surveys, service reminders, trade-in evaluations, and referral program management.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-process">
                Our Implementation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-subtitle">
                Seamless integration with your dealership operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative" data-testid="process-step-assessment">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-assessment">
                  01
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-assessment">
                  Needs Assessment
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-assessment">
                  We analyze your dealership operations, service volume, and customer touchpoints to design the optimal support solution.
                </p>
              </div>

              <div className="relative" data-testid="process-step-training">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-training">
                  02
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-training">
                  Team Training
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-training">
                  Our agents receive comprehensive training on your vehicle models, service processes, DMS systems, and brand standards.
                </p>
              </div>

              <div className="relative" data-testid="process-step-integration">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-integration">
                  03
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-integration">
                  System Integration
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-integration">
                  We integrate with your dealership management system, CRM, and scheduling platforms for seamless operations.
                </p>
              </div>

              <div className="relative" data-testid="process-step-optimization">
                <div className="text-6xl font-bold text-primary/10 mb-4" data-testid="process-number-optimization">
                  04
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3" data-testid="process-title-optimization">
                  Launch & Optimization
                </h3>
                <p className="text-muted-foreground" data-testid="process-description-optimization">
                  We launch with full support coverage and continuously optimize based on customer feedback and performance metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4" data-testid="heading-stats">
                Proven Results for Automotive Businesses
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center" data-testid="stat-bookings">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-bookings">
                  40%
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-bookings">
                  Increase in Service Bookings
                </div>
              </div>

              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-satisfaction">
                  4.8/5
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-satisfaction">
                  Average Customer Satisfaction
                </div>
              </div>

              <div className="text-center" data-testid="stat-conversion">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-conversion">
                  25%
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-conversion">
                  Higher Lead Conversion Rate
                </div>
              </div>

              <div className="text-center" data-testid="stat-resolution">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="stat-value-resolution">
                  99.2%
                </div>
                <div className="text-muted-foreground" data-testid="stat-label-resolution">
                  First-Call Resolution Rate
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6" data-testid="heading-cta">
              Ready to Transform Your Automotive Customer Experience?
            </h2>
            <p className="text-lg mb-8 opacity-90" data-testid="text-cta-description">
              Join leading dealerships and automotive retailers who trust ZuZo for their customer support needs.
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
