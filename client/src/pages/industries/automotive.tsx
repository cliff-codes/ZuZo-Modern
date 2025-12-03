import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { InlineBookingCTA } from '@/components/cta/inline-booking-cta';
import { MiniTrustBar } from '@/components/trust/mini-trust-bar';
import { ServiceSchema } from '@/components/seo/service-schema';
import { Link } from 'wouter';
import { SectionBackground } from '@/components/patterns/section-background';
import {
    Car,
    Headphones,
    Calendar,
    Wrench,
    ShieldCheck,
    UserCheck,
    Clock,
    TrendingUp,
    ChevronRight,
    Users,
} from 'lucide-react';
import { CallToAction } from '@/components/cta/callToAction';

export default function AutomotivePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <ServiceSchema
                    name="Automotive BPO Solutions"
                    description="Dealership and service center support for automotive industry"
                    url="/industries/automotive"
                    category="Automotive Services"
                />
                <SectionBackground variant="gradient" pattern="circuit" className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <Badge
                                variant="secondary"
                                className="text-sm"
                                data-testid="industry-badge"
                            >
                                Automotive Solutions
                            </Badge>
                            <h1
                                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl"
                                data-testid="heading-hero"
                            >
                                Automotive BPO Solutions for Dealerships
                            </h1>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-hero-description"
                            >
                                Enhance your dealership operations with specialized BPO solutions
                                for sales support, service scheduling, and customer retention. From
                                lead qualification to post-purchase care, we help automotive
                                businesses deliver exceptional customer experiences while reducing
                                costs by up to 50%.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link href="/book-demo">
                                    <Button size="lg" data-testid="button-hero-demo">
                                        Schedule a Demo
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/roi-calculator">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        data-testid="button-hero-roi"
                                    >
                                        Calculate Your Savings
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionBackground>

                <MiniTrustBar />

                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-benefits"
                            >
                                Why Choose ZuZo for Automotive
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-benefits-subtitle"
                            >
                                Specialized automotive support that prioritizes customer
                                satisfaction and operational efficiency
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-availability"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-availability"
                                    >
                                        24/7 Service Availability
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-availability"
                                    >
                                        Round-the-clock support for service appointments, parts
                                        inquiries, and roadside assistance requests across all time
                                        zones. Our teams are available whenever your customers need
                                        assistance.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-conversions"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-conversions"
                                    >
                                        Increased Sales Conversions
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-conversions"
                                    >
                                        Professional lead qualification and follow-up that turns
                                        website visitors and showroom inquiries into vehicle sales.
                                        Our trained agents understand the automotive sales cycle and
                                        customer journey.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card className="overflow-visible" data-testid="benefit-card-retention">
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-retention"
                                    >
                                        Enhanced Customer Retention
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-retention"
                                    >
                                        Proactive service reminders, warranty follow-ups, and
                                        customer care that builds long-term relationships and repeat
                                        business. Our retention strategies keep customers coming
                                        back to your dealership.
                                    </p>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-solutions"
                            >
                                Comprehensive Automotive BPO Solutions
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-solutions-subtitle"
                            >
                                End-to-end support for dealerships, service centers, and automotive
                                retailers
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card
                                className="h-full overflow-visible transition-all hover:shadow-lg"
                                data-testid="service-card-customer-service"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Headphones className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-xl"
                                        data-testid="service-title-customer-service"
                                    >
                                        Customer Service & Support
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-customer-service"
                                    >
                                        Handle vehicle inquiries, product information requests, and
                                        general customer support with automotive expertise. Our
                                        agents are trained in automotive terminology and customer
                                        service best practices.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="h-full overflow-visible transition-all hover:shadow-lg"
                                data-testid="service-card-scheduling"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-xl"
                                        data-testid="service-title-scheduling"
                                    >
                                        Service Appointment Scheduling
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-scheduling"
                                    >
                                        Manage service appointments, maintenance bookings, and test
                                        drive scheduling with automated confirmations and reminders.
                                        Our system integrates with your DMS for real-time
                                        availability and scheduling.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="h-full overflow-visible transition-all hover:shadow-lg"
                                data-testid="service-card-parts"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Wrench className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-xl"
                                        data-testid="service-title-parts"
                                    >
                                        Parts & Accessories
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-parts"
                                    >
                                        Assist customers with parts availability, pricing,
                                        compatibility checks, and accessory recommendations. Our
                                        team is trained to use your parts catalog and inventory
                                        systems for accurate information.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="h-full overflow-visible transition-all hover:shadow-lg"
                                data-testid="service-card-warranty"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <ShieldCheck className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-xl"
                                        data-testid="service-title-warranty"
                                    >
                                        Warranty & Claims
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-warranty"
                                    >
                                        Process warranty claims, extended warranty inquiries, and
                                        service contract management with compliance expertise. We
                                        handle all the paperwork and follow-up to ensure quick
                                        resolution for your customers.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="h-full overflow-visible transition-all hover:shadow-lg"
                                data-testid="service-card-leads"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <UserCheck className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-xl"
                                        data-testid="service-title-leads"
                                    >
                                        Sales Lead Qualification
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-leads"
                                    >
                                        Qualify and nurture leads from online inquiries, showroom
                                        visits, and promotional campaigns to increase conversion
                                        rates. Our team is trained to identify high-intent buyers
                                        and route them to your sales team at the right moment.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="h-full overflow-visible transition-all hover:shadow-lg"
                                data-testid="service-card-followup"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Car className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-xl"
                                        data-testid="service-title-followup"
                                    >
                                        Post-Purchase Follow-Up
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-followup"
                                    >
                                        Conduct satisfaction surveys, service reminders, trade-in
                                        evaluations, and referral program management. Our follow-up
                                        system ensures customers feel valued and connected to your
                                        dealership long after their purchase.
                                    </p>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 lg:px-8 py-16">
                    <InlineBookingCTA
                        title="Drive Dealership Excellence"
                        description="See how ZuZo helps automotive dealerships increase sales conversions, improve service appointment bookings, and enhance customer satisfaction with 24/7 support. Schedule your demo."
                    />
                </div>

                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-process"
                            >
                                Our Implementation Process
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-process-subtitle"
                            >
                                Seamless integration with your dealership operations
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="relative" data-testid="process-step-assessment">
                                <div
                                    className="text-6xl font-bold text-primary/10 mb-4"
                                    data-testid="process-number-assessment"
                                >
                                    01
                                </div>
                                <h3
                                    className="text-xl font-semibold font-heading mb-3"
                                    data-testid="process-title-assessment"
                                >
                                    Needs Assessment
                                </h3>
                                <p
                                    className="text-muted-foreground"
                                    data-testid="process-description-assessment"
                                >
                                    We analyze your dealership operations, service volume, and
                                    customer touchpoints to design the optimal support solution.
                                </p>
                            </div>

                            <div className="relative" data-testid="process-step-training">
                                <div
                                    className="text-6xl font-bold text-primary/10 mb-4"
                                    data-testid="process-number-training"
                                >
                                    02
                                </div>
                                <h3
                                    className="text-xl font-semibold font-heading mb-3"
                                    data-testid="process-title-training"
                                >
                                    Team Training
                                </h3>
                                <p
                                    className="text-muted-foreground"
                                    data-testid="process-description-training"
                                >
                                    Our agents receive comprehensive training on your vehicle
                                    models, service processes, DMS systems, and brand standards.
                                </p>
                            </div>

                            <div className="relative" data-testid="process-step-integration">
                                <div
                                    className="text-6xl font-bold text-primary/10 mb-4"
                                    data-testid="process-number-integration"
                                >
                                    03
                                </div>
                                <h3
                                    className="text-xl font-semibold font-heading mb-3"
                                    data-testid="process-title-integration"
                                >
                                    System Integration
                                </h3>
                                <p
                                    className="text-muted-foreground"
                                    data-testid="process-description-integration"
                                >
                                    We integrate with your dealership management system, CRM, and
                                    scheduling platforms for seamless operations.
                                </p>
                            </div>

                            <div className="relative" data-testid="process-step-optimization">
                                <div
                                    className="text-6xl font-bold text-primary/10 mb-4"
                                    data-testid="process-number-optimization"
                                >
                                    04
                                </div>
                                <h3
                                    className="text-xl font-semibold font-heading mb-3"
                                    data-testid="process-title-optimization"
                                >
                                    Launch & Optimization
                                </h3>
                                <p
                                    className="text-muted-foreground"
                                    data-testid="process-description-optimization"
                                >
                                    We launch with full support coverage and continuously optimize
                                    based on customer feedback and performance metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-stats"
                            >
                                Proven Results for Automotive Businesses
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-stats-subtitle"
                            >
                                Delivering measurable impact for dealerships and service centers
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8">
                            <div
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                data-testid="stat-bookings"
                            >
                                <div
                                    className="text-5xl font-bold text-primary mb-3"
                                    data-testid="stat-value-bookings"
                                >
                                    40%
                                </div>
                                <h3
                                    className="text-lg font-medium text-foreground mb-1"
                                    data-testid="stat-label-bookings"
                                >
                                    Increase in Service Bookings
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    For dealerships using our appointment scheduling service
                                </p>
                            </div>

                            <div
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                data-testid="stat-satisfaction"
                            >
                                <div
                                    className="text-5xl font-bold text-primary mb-3"
                                    data-testid="stat-value-satisfaction"
                                >
                                    4.8/5
                                </div>
                                <h3
                                    className="text-lg font-medium text-foreground mb-1"
                                    data-testid="stat-label-satisfaction"
                                >
                                    Customer Satisfaction
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Average rating from service and sales customers
                                </p>
                            </div>

                            <div
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                data-testid="stat-leads"
                            >
                                <div
                                    className="text-5xl font-bold text-primary mb-3"
                                    data-testid="stat-value-leads"
                                >
                                    3.5x
                                </div>
                                <h3
                                    className="text-lg font-medium text-foreground mb-1"
                                    data-testid="stat-label-leads"
                                >
                                    Increase in Qualified Leads
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Compared to dealerships without our lead qualification service
                                </p>
                            </div>

                            <div
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-colors"
                                data-testid="stat-resolution"
                            >
                                <div
                                    className="text-5xl font-bold text-primary mb-3"
                                    data-testid="stat-value-resolution"
                                >
                                    99.2%
                                </div>
                                <h3
                                    className="text-lg font-medium text-foreground mb-1"
                                    data-testid="stat-label-resolution"
                                >
                                    First-Call Resolution
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Of customer inquiries resolved on first contact
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <CallToAction
                    title="Ready to Transform Your Automotive Customer Experience?"
                    description="Join leading dealerships and automotive retailers who trust ZuZo for their customer support needs. Schedule a demo to see how we can help you drive better results."
                    descriptionClassName="text"
                    primaryButton={{
                        text: 'Schedule a Demo',
                        href: '/book-demo',
                    }}
                    secondaryButton={{
                        text: 'Contact Sales',
                        href: '/contact',
                    }}
                    variant="gradient"
                    data-testid="cta-section"
                />
            </main>

            <Footer />
        </div>
    );
}
