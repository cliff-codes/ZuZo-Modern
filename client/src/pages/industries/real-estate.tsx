import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { InlineBookingCTA } from '@/components/cta/inline-booking-cta';
import { MiniTrustBar } from '@/components/trust/mini-trust-bar';
import { ServiceSchema } from '@/components/seo/service-schema';
import { Link } from 'wouter';
import {
    Home as HomeIcon,
    Target,
    Clock,
    Users,
    UserCheck,
    Calendar,
    FileText,
    Wrench,
    ChevronRight,
    CheckCircle2,
} from 'lucide-react';
import { CallToAction } from '@/components/cta/callToAction';

export default function RealEstatePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <ServiceSchema
                    name="Real Estate BPO Solutions"
                    description="Lead qualification and tenant support for real estate businesses"
                    url="/industries/real-estate"
                    category="Real Estate Services"
                />
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <Badge
                                variant="secondary"
                                className="text-sm"
                                data-testid="industry-badge"
                            >
                                Real Estate Solutions
                            </Badge>
                            <h1
                                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl"
                                data-testid="heading-hero"
                            >
                                Convert More Leads with 24/7 Real Estate Support
                            </h1>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-hero-description"
                            >
                                Never miss an inquiry with round-the-clock lead management, property
                                inquiries, and tenant support. Qualify leads faster, schedule
                                viewings efficiently, and deliver exceptional service while reducing
                                operational costs by 60%.
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
                </section>

                <MiniTrustBar />

                {/* Why Choose ZuZo */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-benefits"
                            >
                                Why Choose ZuZo for Real Estate
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-benefits-subtitle"
                            >
                                Purpose-built support solutions that understand the fast-paced real
                                estate industry
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-qualification"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Target className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-qualification"
                                    >
                                        Lead Qualification
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-qualification"
                                    >
                                        Increase conversion rates with professional lead
                                        qualification and nurturing. Our trained agents identify
                                        serious buyers and renters, collect critical information,
                                        and route hot leads to your agents instantly—so you focus on
                                        closing deals.
                                    </p>
                                </CardHeader>
                            </Card>

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
                                        24/7 Availability
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-availability"
                                    >
                                        Capture leads any time with 24/7 call answering and inquiry
                                        management. Real estate happens outside business
                                        hours—weekends, evenings, holidays. We're always available
                                        to answer inquiries and book viewings.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-scheduling"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-scheduling"
                                    >
                                        Appointment Management
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-scheduling"
                                    >
                                        Streamline property viewings, inspections, and client
                                        meetings with efficient appointment scheduling. Coordinate
                                        calendars, send reminders, and reduce no-shows so your
                                        agents maximize their productive time.
                                    </p>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Real Estate Solutions */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-solutions"
                            >
                                Real Estate Solutions
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-solutions-subtitle"
                            >
                                Comprehensive support services for real estate agencies and property
                                management
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <Card data-testid="service-card-lead-management">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Users className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-lead-management"
                                        >
                                            Lead Management & Qualification
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-lead-management"
                                    >
                                        Capture, qualify, and nurture leads from all sources—website
                                        forms, portals (Zillow, Realtor.com), phone calls, and
                                        social media. Score leads based on buying intent and route
                                        qualified prospects to your top agents.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Instant inquiry response and lead capture
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Budget, timeline, and preference qualification
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                CRM integration and lead scoring
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-property-inquiries">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <HomeIcon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-property-inquiries"
                                        >
                                            Property Inquiries & Information
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-property-inquiries"
                                    >
                                        Answer detailed questions about property features, pricing,
                                        availability, and neighborhoods. Provide virtual tour links,
                                        send listing details, and guide prospects through your
                                        available inventory.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Property details and specifications
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Pricing, availability, and HOA information
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Virtual tour coordination and listing delivery
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-tenant-support">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <UserCheck className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-tenant-support"
                                        >
                                            Tenant Support Services
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-tenant-support"
                                    >
                                        Provide comprehensive support for your property management
                                        operations. Handle tenant inquiries, application processing,
                                        lease renewals, and general communication to improve tenant
                                        satisfaction and retention.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Tenant inquiries and general support
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Application screening and processing
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Lease renewal coordination
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-scheduling">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Calendar className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-scheduling"
                                        >
                                            Appointment Scheduling & Coordination
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-scheduling"
                                    >
                                        Manage property viewings, inspections, appraisals, and
                                        client meetings across your entire team. Coordinate
                                        calendars, send automated reminders, and handle rescheduling
                                        to maximize showing efficiency.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Property showing scheduling and coordination
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Automated reminders and confirmations
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Open house registration and management
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-documents">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <FileText className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-documents"
                                        >
                                            Document Processing Support
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-documents"
                                    >
                                        Streamline paperwork with support for lease agreements,
                                        applications, disclosures, and transaction documents.
                                        Collect required documentation, verify completeness, and
                                        route for signatures.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Application and lease document processing
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Document collection and verification
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                E-signature coordination and follow-up
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-maintenance">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Wrench className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-maintenance"
                                        >
                                            Maintenance Request Management
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-maintenance"
                                    >
                                        Handle tenant maintenance requests efficiently from intake
                                        to resolution. Triage urgent issues, dispatch vendors, track
                                        work orders, and communicate status updates to keep tenants
                                        satisfied.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                24/7 maintenance request intake
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Priority classification and vendor dispatch
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Work order tracking and tenant communication
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How We Support Real Estate */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-process"
                            >
                                How We Support Real Estate Businesses
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-process-subtitle"
                            >
                                Our proven methodology for delivering exceptional real estate
                                support
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-8">
                            <Card data-testid="process-card-1">
                                <CardContent className="p-8 flex gap-6">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-heading font-bold text-xl text-primary">
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            className="font-heading font-semibold text-xl mb-3"
                                            data-testid="process-title-1"
                                        >
                                            Market & Inventory Training
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-1"
                                        >
                                            Our team learns your market area, property inventory,
                                            pricing strategies, and neighborhood details.
                                            Comprehensive training ensures agents can speak
                                            knowledgeably about your listings and local real estate
                                            market.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card data-testid="process-card-2">
                                <CardContent className="p-8 flex gap-6">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-heading font-bold text-xl text-primary">
                                            2
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            className="font-heading font-semibold text-xl mb-3"
                                            data-testid="process-title-2"
                                        >
                                            CRM & Systems Integration
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-2"
                                        >
                                            Integrate with your CRM (Salesforce, Follow Up Boss,
                                            BoomTown), MLS systems, and calendar tools. Seamless
                                            workflows ensure lead data flows correctly and
                                            appointments sync across platforms.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card data-testid="process-card-3">
                                <CardContent className="p-8 flex gap-6">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-heading font-bold text-xl text-primary">
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            className="font-heading font-semibold text-xl mb-3"
                                            data-testid="process-title-3"
                                        >
                                            Lead Qualification Protocols
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-3"
                                        >
                                            Define clear qualification criteria and lead scoring
                                            models tailored to your business. Establish hot lead
                                            notification protocols so your agents can respond
                                            immediately to high-intent prospects.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card data-testid="process-card-4">
                                <CardContent className="p-8 flex gap-6">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-heading font-bold text-xl text-primary">
                                            4
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            className="font-heading font-semibold text-xl mb-3"
                                            data-testid="process-title-4"
                                        >
                                            Performance Monitoring & Optimization
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-4"
                                        >
                                            Track response times, lead conversion rates, appointment
                                            show rates, and customer satisfaction. Weekly reporting
                                            and continuous optimization ensure maximum ROI from your
                                            support investment.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 lg:px-8 py-16">
                    <InlineBookingCTA
                        title="Convert More Real Estate Leads"
                        description="Never miss a property inquiry again. See how ZuZo helps real estate agencies capture more leads, schedule more viewings, and close more deals with 24/7 support. Book your consultation."
                    />
                </div>

                {/* Stats Section */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-stats"
                            >
                                Real Estate Impact Metrics
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <Card className="text-center" data-testid="stat-card-conversion">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-conversion"
                                    >
                                        45%
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-conversion"
                                    >
                                        Lead Conversion Increase
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-response">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-response"
                                    >
                                        &lt;5 min
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-response"
                                    >
                                        Avg Response Time
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-satisfaction">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-satisfaction"
                                    >
                                        4.8/5
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-satisfaction"
                                    >
                                        Tenant Satisfaction
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-cost-savings">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-cost-savings"
                                    >
                                        60%
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-cost-savings"
                                    >
                                        Cost Reduction
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <CallToAction
                    title="Ready to Convert More Leads and Close More Deals?"
                    description="Join successful real estate agencies who trust ZuZo for lead management and support."
                    primaryButton={{
                        text: 'Schedule Your Demo',
                        href: '/book-demo',
                    }}
                    secondaryButton={{
                        text: 'Contact Sales',
                        href: '/contact',
                    }}
                />
                {/* <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl"
                                data-testid="heading-cta"
                            >
                                Ready to Convert More Leads and Close More Deals?
                            </h2>
                            <p
                                className="text-xl text-muted-foreground"
                                data-testid="text-cta-description"
                            >
                                Join successful real estate agencies who trust ZuZo for lead
                                management and support.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link href="/book-demo">
                                    <Button size="lg" data-testid="button-cta-demo">
                                        Schedule Your Demo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        data-testid="button-cta-contact"
                                    >
                                        Contact Sales
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <Footer />
        </div>
    );
}
