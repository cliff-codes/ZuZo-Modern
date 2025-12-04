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
    Heart,
    Shield,
    Calendar,
    FileHeart,
    CreditCard,
    Video,
    Pill,
    UserCheck,
    ChevronRight,
    CheckCircle2,
} from 'lucide-react';
import { CallToAction } from '@/components/cta/callToAction';

export default function HealthcarePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <ServiceSchema
                    name="Healthcare BPO Solutions"
                    description="HIPAA-compliant patient support and healthcare operations"
                    url="/industries/healthcare"
                    category="Healthcare Services"
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
                                Healthcare Solutions
                            </Badge>
                            <h1
                                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl"
                                data-testid="heading-hero"
                            >
                                HIPAA-Compliant Healthcare BPO Solutions
                            </h1>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-hero-description"
                            >
                                Deliver compassionate patient care with fully HIPAA-compliant
                                support services. From appointment scheduling to billing support,
                                our healthcare-trained teams help you improve patient satisfaction
                                while reducing operational costs by 60%.
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
                                Why Choose ZuZo for Healthcare
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-benefits-subtitle"
                            >
                                Specialized healthcare support that prioritizes patient care and
                                regulatory compliance
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="overflow-visible" data-testid="benefit-card-hipaa">
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-hipaa"
                                    >
                                        HIPAA Compliance
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-hipaa"
                                    >
                                        Fully HIPAA-compliant operations with BAA agreements,
                                        encrypted communications, secure data handling, and
                                        comprehensive staff training on patient privacy regulations.
                                        Your patients' protected health information (PHI) is always
                                        secure.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-satisfaction"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Heart className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-satisfaction"
                                    >
                                        Patient Satisfaction
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-satisfaction"
                                    >
                                        Compassionate, patient-centered support that improves
                                        satisfaction scores and reduces no-shows. Our
                                        healthcare-trained agents understand medical terminology,
                                        billing processes, and how to deliver empathetic care.
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
                                        Reduce appointment no-shows by up to 40% with proactive
                                        scheduling, automated reminders, and efficient rescheduling.
                                        Maximize provider utilization and patient access with
                                        optimized appointment workflows.
                                    </p>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Healthcare Solutions */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-solutions"
                            >
                                Healthcare Solutions
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-solutions-subtitle"
                            >
                                Comprehensive support services for healthcare providers and patients
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                                            Appointment Scheduling
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-scheduling"
                                    >
                                        Comprehensive appointment management including booking,
                                        rescheduling, cancellations, and automated reminder calls.
                                        Integrate with your EHR system for real-time availability
                                        and reduce scheduling conflicts.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Multi-channel booking (phone, web, mobile)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Automated appointment reminders and confirmations
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Waitlist management and same-day scheduling
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-records">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <FileHeart className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-records"
                                        >
                                            Patient Records Management
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-records"
                                    >
                                        Secure handling of medical records requests, release
                                        authorizations, and document management. HIPAA-compliant
                                        processing ensures patient privacy while providing timely
                                        access to authorized parties.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Medical records release and authorization
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Document scanning and digitization
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Records transfer coordination between providers
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-billing">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <CreditCard className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-billing"
                                        >
                                            Medical Billing Support
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-billing"
                                    >
                                        Handle patient billing inquiries, payment processing,
                                        insurance verification, and payment plan setup. Reduce
                                        billing disputes and improve collections with clear,
                                        compassionate communication.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Patient billing inquiries and explanations
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Payment plan setup and collections
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Insurance claim status and coordination
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-telehealth">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Video className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-telehealth"
                                        >
                                            Telehealth Coordination
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-telehealth"
                                    >
                                        Support your virtual care programs with appointment
                                        scheduling, technical support, pre-visit patient
                                        preparation, and post-visit follow-up. Ensure smooth
                                        telehealth experiences for patients and providers.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Virtual visit scheduling and confirmation
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Platform technical support and troubleshooting
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Pre-visit questionnaires and intake
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-insurance">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <UserCheck className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-insurance"
                                        >
                                            Insurance Verification
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-insurance"
                                    >
                                        Verify patient insurance coverage, eligibility, and benefits
                                        before appointments. Reduce claim denials and improve
                                        revenue cycle efficiency with proactive verification and
                                        pre-authorization support.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Real-time eligibility and benefits verification
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Pre-authorization and referral processing
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Coverage explanation and patient communication
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-prescriptions">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Pill className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-prescriptions"
                                        >
                                            Prescription Refill Management
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-prescriptions"
                                    >
                                        Handle prescription refill requests, coordinate with
                                        pharmacies, and communicate with patients about medication
                                        availability. Streamline the refill process while
                                        maintaining appropriate clinical oversight.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Refill request intake and routing
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Pharmacy coordination and transfer requests
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Patient notification of refill status
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How We Support Healthcare */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-process"
                            >
                                How We Support Healthcare Organizations
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-process-subtitle"
                            >
                                Our HIPAA-compliant methodology for healthcare support services
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
                                            HIPAA Compliance Setup
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-1"
                                        >
                                            Execute Business Associate Agreement (BAA), configure
                                            secure systems with end-to-end encryption, establish
                                            access controls, and ensure all team members complete
                                            HIPAA privacy and security training.
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
                                            Healthcare-Specific Training
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-2"
                                        >
                                            Comprehensive training on medical terminology, your
                                            specialty area, EMR/EHR systems, insurance processes,
                                            and compassionate patient communication. Our agents
                                            become true healthcare support professionals.
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
                                            EMR/EHR Integration
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-3"
                                        >
                                            Securely integrate with your electronic health records
                                            system (Epic, Cerner, Athenahealth, etc.) for real-time
                                            scheduling, patient data access, and seamless workflow
                                            coordination.
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
                                            Quality Monitoring & Patient Experience
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-4"
                                        >
                                            Track patient satisfaction scores, call quality,
                                            appointment adherence, and clinical escalation
                                            protocols. Regular quality reviews ensure compassionate,
                                            accurate patient interactions.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card data-testid="process-card-5">
                                <CardContent className="p-8 flex gap-6">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-heading font-bold text-xl text-primary">
                                            5
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            className="font-heading font-semibold text-xl mb-3"
                                            data-testid="process-title-5"
                                        >
                                            Continuous Improvement & Compliance Audits
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-5"
                                        >
                                            Regular compliance audits, patient feedback analysis,
                                            and process optimization ensure we maintain the highest
                                            standards of care quality, security, and regulatory
                                            compliance.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 lg:px-8 py-16">
                    <InlineBookingCTA
                        title="Transform Your Healthcare Operations"
                        description="Discover how ZuZo helps healthcare providers reduce costs while improving patient satisfaction with HIPAA-compliant support solutions. Book your consultation today."
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
                                Healthcare Impact Metrics
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <Card className="text-center" data-testid="stat-card-compliance">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-compliance"
                                    >
                                        100%
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-compliance"
                                    >
                                        HIPAA Compliance
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-no-shows">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-no-shows"
                                    >
                                        40%
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-no-shows"
                                    >
                                        Reduction in No-Shows
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-satisfaction">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-satisfaction"
                                    >
                                        4.9/5
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-satisfaction"
                                    >
                                        Patient Satisfaction
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
                    title="Ready to Improve Patient Care with HIPAA-Compliant Support?"
                    description="Join healthcare providers who trust ZuZo for compassionate, compliant patient support."
                    primaryButton={{
                        text: 'Schedule Your Demo',
                        href: '/book-demo',
                    }}
                    secondaryButton={{
                        text: 'Contact Sales',
                        href: '/contact',
                    }}
                />
            </main>
            <Footer />
        </div>
    );
}
