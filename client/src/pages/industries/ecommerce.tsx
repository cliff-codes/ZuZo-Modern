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
    ShoppingCart,
    Clock,
    TrendingUp,
    Package,
    MessageSquare,
    Mail,
    RefreshCw,
    Users,
    ChevronRight,
    CheckCircle2,
} from 'lucide-react';
import { CallToAction } from '@/components/cta/callToAction';
import { SectionBackground } from '@/components/patterns/section-background';

export default function EcommercePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <ServiceSchema
                    name="E-commerce & Retail BPO Solutions"
                    description="24/7 customer support and order management for e-commerce businesses"
                    url="/industries/ecommerce"
                    category="E-commerce Services"
                />
                {/* Hero Section */}
                {/* <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5"> */}
                <SectionBackground variant="gradient" pattern="circuit" className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <Badge
                                variant="secondary"
                                className="text-sm"
                                data-testid="industry-badge"
                            >
                                E-commerce & Retail Solutions
                            </Badge>
                            <h1
                                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl"
                                data-testid="heading-hero"
                            >
                                Scale Your E-commerce with 24/7 Customer Support
                            </h1>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-hero-description"
                            >
                                Handle peak seasons, reduce cart abandonment, and delight customers
                                around the clock with our specialized e-commerce BPO solutions. Save
                                60% on operational costs while delivering exceptional shopping
                                experiences.
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
                {/* </section> */}

                <MiniTrustBar />

                {/* Why Choose ZuZo */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-benefits"
                            >
                                Why Choose ZuZo for E-commerce
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-benefits-subtitle"
                            >
                                Purpose-built support solutions that understand the unique demands
                                of online retail
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="overflow-visible" data-testid="benefit-card-support">
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-support"
                                    >
                                        24/7 Customer Support
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-support"
                                    >
                                        Never miss a sale with round-the-clock customer service
                                        across all channels—live chat, email, phone, and social
                                        media. Our agents are trained to handle inquiries any time,
                                        increasing conversion rates and customer satisfaction.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-scalability"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-scalability"
                                    >
                                        Peak Season Scalability
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-scalability"
                                    >
                                        Scale your team up or down instantly during Black Friday,
                                        holiday rushes, or promotional events. No hiring delays,
                                        training costs, or capacity constraints—just seamless
                                        support when you need it most.
                                    </p>
                                </CardHeader>
                            </Card>

                            <Card
                                className="overflow-visible"
                                data-testid="benefit-card-order-management"
                            >
                                <CardHeader className="gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Package className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3
                                        className="font-heading font-semibold text-2xl"
                                        data-testid="benefit-title-order-management"
                                    >
                                        Order Management Excellence
                                    </h3>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="benefit-description-order-management"
                                    >
                                        Reduce order errors, process returns efficiently, and handle
                                        shipping inquiries with precision. Our specialized teams
                                        ensure every transaction is smooth, building customer
                                        loyalty and repeat purchases.
                                    </p>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* E-commerce Solutions */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-solutions"
                            >
                                E-commerce Solutions
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-solutions-subtitle"
                            >
                                Comprehensive support services tailored for online retail success
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <Card data-testid="service-card-customer-service">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Users className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-customer-service"
                                        >
                                            Multi-Channel Customer Service
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-customer-service"
                                    >
                                        Omnichannel support across live chat, email, phone, and
                                        social media. Trained agents handle pre-sales questions,
                                        product recommendations, and post-purchase support with
                                        expertise in your catalog and brand voice.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Product expertise and recommendations
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Cart abandonment recovery outreach
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Order tracking and status updates
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-order-processing">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Package className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-order-processing"
                                        >
                                            Order Processing & Fulfillment Support
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-order-processing"
                                    >
                                        Streamline order entry, verification, and coordination with
                                        fulfillment centers. Handle complex orders, customization
                                        requests, and special shipping requirements with accuracy
                                        and speed.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Order verification and fraud screening
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Inventory coordination and backorder management
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Shipping exception resolution
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-returns">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <RefreshCw className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-returns"
                                        >
                                            Returns & Refunds Management
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-returns"
                                    >
                                        Turn returns into retention opportunities. Process return
                                        requests quickly, issue refunds or exchanges efficiently,
                                        and identify patterns to reduce future returns while
                                        maintaining customer satisfaction.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Return authorization and label generation
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Refund processing and account credits
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Exchange facilitation and upselling
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-live-chat">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <MessageSquare className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-live-chat"
                                        >
                                            Live Chat Support
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-live-chat"
                                    >
                                        Increase conversions with real-time chat assistance. Engage
                                        shoppers at critical moments, answer questions instantly,
                                        and guide them through checkout to reduce cart abandonment.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Proactive engagement based on browsing behavior
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Product recommendations and sizing assistance
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Checkout support and payment troubleshooting
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-email-support">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-email-support"
                                        >
                                            Email Support Management
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-email-support"
                                    >
                                        Manage your support inbox with fast, personalized responses.
                                        Categorize inquiries, escalate urgent issues, and maintain
                                        your brand voice across every email interaction.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                24-hour response time guarantee
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Intelligent ticket routing and prioritization
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Branded templates and tone consistency
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>

                            <Card data-testid="service-card-product-inquiries">
                                <CardHeader className="gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <ShoppingCart className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3
                                            className="font-heading font-semibold text-xl"
                                            data-testid="service-title-product-inquiries"
                                        >
                                            Product Inquiries & Catalog Support
                                        </h3>
                                    </div>
                                    <p
                                        className="text-muted-foreground"
                                        data-testid="service-description-product-inquiries"
                                    >
                                        Expert knowledge of your product catalog to answer detailed
                                        questions about specifications, availability, compatibility,
                                        and features. Drive informed purchases and reduce returns.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Technical specifications and compatibility guidance
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Stock availability and restock notifications
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">
                                                Cross-sell and upsell recommendations
                                            </span>
                                        </li>
                                    </ul>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How We Support E-commerce */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2
                                className="font-heading font-bold text-3xl md:text-4xl mb-6"
                                data-testid="heading-process"
                            >
                                How We Support E-commerce Businesses
                            </h2>
                            <p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                data-testid="text-process-subtitle"
                            >
                                Our proven methodology for delivering exceptional e-commerce support
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
                                            Platform & Catalog Integration
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-1"
                                        >
                                            We integrate with your e-commerce platform (Shopify,
                                            WooCommerce, Magento, custom), learn your product
                                            catalog, and configure our systems to match your
                                            workflows and business rules.
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
                                            Brand Voice Training
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-2"
                                        >
                                            Our agents undergo intensive training on your brand
                                            guidelines, tone of voice, product knowledge, and
                                            customer service philosophy to become true extensions of
                                            your team.
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
                                            Multi-Channel Deployment
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-3"
                                        >
                                            Launch support across all your channels—live chat,
                                            email, phone, social media—with unified ticket
                                            management and customer history tracking for seamless
                                            experiences.
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
                                            Track key metrics like response time, resolution rate,
                                            customer satisfaction, and conversion impact. Weekly
                                            reporting and continuous optimization ensure peak
                                            performance.
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
                                            Scale with Your Growth
                                        </h3>
                                        <p
                                            className="text-muted-foreground"
                                            data-testid="process-description-5"
                                        >
                                            As your business grows and seasons change, we flex our
                                            team size up or down in real-time. Add 50 agents for
                                            Black Friday or scale down post-holidays—with zero
                                            hiring friction.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 lg:px-8 py-16">
                    <InlineBookingCTA
                        title="Scale Your E-commerce Customer Support"
                        description="Discover how ZuZo helps online retailers reduce cart abandonment and increase conversions with 24/7 customer support. Book a consultation to explore your options."
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
                                E-commerce Impact Metrics
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                                        Cost Savings
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-cart-recovery">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-cart-recovery"
                                    >
                                        35%
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-cart-recovery"
                                    >
                                        Cart Recovery Rate
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="text-center" data-testid="stat-card-response-time">
                                <CardContent className="p-8">
                                    <div
                                        className="font-heading font-bold text-4xl text-primary mb-2"
                                        data-testid="stat-value-response-time"
                                    >
                                        &lt;2 min
                                    </div>
                                    <div
                                        className="text-muted-foreground"
                                        data-testid="stat-label-response-time"
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
                                        Customer Satisfaction
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <CallToAction
                    title="Ready to Transform Your E-commerce Customer Experience?"
                    description="Join leading online retailers who trust ZuZo to deliver exceptional support at scale."
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
