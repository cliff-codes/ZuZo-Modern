import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCalApi } from '@calcom/embed-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { SEOHead, getPartnerProgramSchema } from '@/components/seo/seo-head';
import { Link } from 'wouter';
import {
    CheckCircle,
    ChevronRight,
    Shield,
    TrendingUp,
    Phone,
    Users,
    Zap,
    ArrowDown,
    Calendar,
    BarChart3,
} from 'lucide-react';

// Import new modular components
import { PartnerNavigation } from '@/components/partner-portal/partner-navigation';
import { PartnerHero } from '@/components/partner-portal/partner-hero';
import { PartnerTracksSection } from '@/components/partner-portal/partner-tracks-section';
import { MarginCalculator } from '@/components/partner-portal/margin-calculator';
import { ResourcesSection } from '@/components/partner-portal/resources-section';
import { BookingSection } from '@/components/partner-portal/booking-section';
import { DownloadModal } from '@/components/partner-portal/download-modal';

export default function PartnerPortal() {
    const [downloadModalOpen, setDownloadModalOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

    // Initialize Cal.com with Partner Portal purple theme
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: 'partner-30min' });
            cal('ui', {
                cssVarsPerTheme: {
                    light: { 'cal-brand': '#7c3aed' },
                    dark: { 'cal-brand': '#7c3aed' },
                },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

    const scrollToCalculator = () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToBooking = () => {
        document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownloadClick = (assetName: string) => {
        setSelectedAsset(assetName);
        setDownloadModalOpen(true);
    };

    const handleDownload = (_assetName: string) => {
        // Download handled in modal component
        setDownloadModalOpen(false);
        setSelectedAsset(null);
    };

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white">
            <SEOHead
                title="Partner Portal - White Label BPO Platform | ZuZo"
                description="Scale your margins, not your headcount. The invisible fulfillment engine for MSPs, 3PLs, and NDIS Providers. White-label BPO from Ghana. Access QContact integration, margin calculator, and gated resources."
                canonical="/partner-portal"
                keywords="white label BPO, partner program, MSP helpdesk, 3PL logistics, fulfillment center, NDIS claim processing, WISMO support, outsourcing partner, QContact, technology stack integration, arbitrage BPO"
                schema={getPartnerProgramSchema()}
            />

            <PartnerNavigation
                onScrollToCalculator={scrollToCalculator}
                onScrollToBooking={scrollToBooking}
            />

            <PartnerHero onScrollToCalculator={scrollToCalculator} />

            <PartnerTracksSection />

            <MarginCalculator />

            <ResourcesSection onDownloadClick={handleDownloadClick} />

            {/* Interoperability Stack Section */}
            <section className="py-20 lg:py-28 bg-[#0d1321]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                            data-testid="text-tech-stack-title"
                        >
                            We Speak Your Language
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
                            ZuZo acts as a seamless extension of your team. We don't force you to
                            adapt to our systems; we plug directly into yours.
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <Tabs defaultValue="ccaas" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#1a1f35] p-1 h-auto gap-1">
                                <TabsTrigger
                                    value="ccaas"
                                    className="py-3 text-sm data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                                    data-testid="tab-ccaas"
                                >
                                    Contact Center
                                </TabsTrigger>
                                <TabsTrigger
                                    value="msp"
                                    className="py-3 text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                    data-testid="tab-msp"
                                >
                                    IT Services
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ecommerce"
                                    className="py-3 text-sm data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                                    data-testid="tab-ecommerce"
                                >
                                    E-Commerce
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ndis"
                                    className="py-3 text-sm data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
                                    data-testid="tab-ndis"
                                >
                                    Healthcare
                                </TabsTrigger>
                            </TabsList>

                            {/* CCaaS Tab */}
                            <TabsContent value="ccaas" className="mt-8">
                                <Card
                                    className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30"
                                    data-testid="card-ccaas-stack"
                                >
                                    <CardContent className="p-8 lg:p-12">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            Certified CCaaS Platforms
                                        </h3>
                                        <p className="text-white/60 mb-8">
                                            Enterprise-grade contact center capabilities for Master
                                            Agents and resellers.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {[
                                                {
                                                    name: 'QContact',
                                                    desc: 'Rated #1 mid-market contact center—omnichannel (voice, chat, email, WhatsApp, social) + built-in CRM',
                                                },
                                                {
                                                    name: 'Five9',
                                                    desc: 'The #1 cloud contact center platform',
                                                },
                                                {
                                                    name: 'Genesys Cloud CX',
                                                    desc: 'Enterprise-scale omnichannel orchestration',
                                                },
                                                {
                                                    name: 'Nice CXone',
                                                    desc: 'AI-powered customer experience platform',
                                                },
                                                {
                                                    name: 'RingCentral',
                                                    desc: 'Mid-market communication leader',
                                                },
                                                {
                                                    name: 'Dialpad',
                                                    desc: 'AI-native cloud communications',
                                                },
                                            ].map((platform, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-white/5 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all"
                                                >
                                                    <div className="font-bold text-purple-300 mb-1">
                                                        {platform.name}
                                                    </div>
                                                    <div className="text-sm text-white/60">
                                                        {platform.desc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-white/50 text-sm mt-8 italic">
                                            Our agents are pre-trained on all platforms above,
                                            reducing your client's Time-to-Value by 40%.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* MSP Tab */}
                            <TabsContent value="msp" className="mt-8">
                                <Card
                                    className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30"
                                    data-testid="card-msp-stack"
                                >
                                    <CardContent className="p-8 lg:p-12">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            Seamless ITSM Workflow Integration
                                        </h3>
                                        <p className="text-white/60 mb-8">
                                            Work directly inside your PSA, RMM, and documentation
                                            platforms.
                                        </p>
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-lg font-bold text-blue-300 mb-4">
                                                    Ticketing & PSA
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'QContact',
                                                            desc: 'Full-featured ticketing + omnichannel case management',
                                                        },
                                                        {
                                                            name: 'ConnectWise PSA',
                                                            desc: 'Industry standard for MSPs',
                                                        },
                                                        {
                                                            name: 'Autotask (Datto)',
                                                            desc: 'Enterprise ITSM platform',
                                                        },
                                                        {
                                                            name: 'HaloPSA',
                                                            desc: 'Fastest-growing PSA in 2025',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-blue-500/20"
                                                        >
                                                            <div className="font-bold text-blue-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-blue-300 mb-4">
                                                    Monitoring & RMM
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'NinjaOne',
                                                            desc: 'Modern unified endpoint management',
                                                        },
                                                        {
                                                            name: 'ConnectWise Automate',
                                                            desc: 'Deep PSA integration',
                                                        },
                                                        {
                                                            name: 'Kaseya VSA',
                                                            desc: 'Enterprise RMM solution',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-blue-500/20"
                                                        >
                                                            <div className="font-bold text-blue-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-blue-300 mb-4">
                                                    Documentation
                                                </h4>
                                                <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                                                    <div className="font-bold text-blue-300 mb-1">
                                                        IT Glue
                                                    </div>
                                                    <div className="text-sm text-white/60">
                                                        SOP documentation and knowledge base
                                                        integration
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white/50 text-sm mt-8 italic">
                                            Our Tier 1 techs work directly inside your PSA board,
                                            resolving tickets and documenting every step.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* E-Commerce Tab */}
                            <TabsContent value="ecommerce" className="mt-8">
                                <Card
                                    className="bg-gradient-to-br from-orange-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-orange-500/30"
                                    data-testid="card-ecommerce-stack"
                                >
                                    <CardContent className="p-8 lg:p-12">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            E-Commerce & Logistics Engine
                                        </h3>
                                        <p className="text-white/60 mb-8">
                                            Resolve WISMO tickets directly in your systems without
                                            warehouse escalation.
                                        </p>
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-lg font-bold text-orange-300 mb-4">
                                                    Support Platforms
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'QContact',
                                                            desc: 'Omnichannel support (voice, email, WhatsApp, live chat, SMS, social)',
                                                        },
                                                        {
                                                            name: 'Gorgias',
                                                            desc: '#1 helpdesk for Shopify stores',
                                                        },
                                                        {
                                                            name: 'Zendesk',
                                                            desc: 'Enterprise support platform',
                                                        },
                                                        {
                                                            name: 'Intercom',
                                                            desc: 'In-app messaging and ticketing',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-orange-500/20"
                                                        >
                                                            <div className="font-bold text-orange-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-orange-300 mb-4">
                                                    Order & Fulfillment Systems
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'Shopify Plus',
                                                            desc: 'Order modifications and refund processing',
                                                        },
                                                        {
                                                            name: 'ShipStation',
                                                            desc: 'Tracking and shipping label management',
                                                        },
                                                        {
                                                            name: 'AfterShip',
                                                            desc: 'Proactive tracking updates',
                                                        },
                                                        {
                                                            name: 'NetSuite',
                                                            desc: 'ERP for large-scale 3PLs',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-orange-500/20"
                                                        >
                                                            <div className="font-bold text-orange-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white/50 text-sm mt-8 italic">
                                            We resolve "Where is my order?" tickets directly in
                                            Gorgias and ShipStation, keeping your warehouse team
                                            focused on fulfillment.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* NDIS Tab */}
                            <TabsContent value="ndis" className="mt-8">
                                <Card
                                    className="bg-gradient-to-br from-cyan-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-cyan-500/30"
                                    data-testid="card-ndis-stack"
                                >
                                    <CardContent className="p-8 lg:p-12">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            NDIS & Allied Health Administration
                                        </h3>
                                        <p className="text-white/60 mb-8">
                                            Government-certified compliance and specialized plan
                                            management expertise.
                                        </p>
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-lg font-bold text-cyan-300 mb-4">
                                                    Government Portals
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'QContact',
                                                            desc: 'Unified communication hub for client outreach + case tracking',
                                                        },
                                                        {
                                                            name: 'PRODA',
                                                            desc: 'Provider Digital Access (instant trust signal)',
                                                        },
                                                        {
                                                            name: 'PACE',
                                                            desc: 'Next-gen NDIS computer system',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-cyan-500/20"
                                                        >
                                                            <div className="font-bold text-cyan-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-cyan-300 mb-4">
                                                    Plan Management
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'Lumary',
                                                            desc: 'Market-leading plan management',
                                                        },
                                                        {
                                                            name: 'ShiftCare',
                                                            desc: 'Rostering and care coordination',
                                                        },
                                                        {
                                                            name: 'CareMaster',
                                                            desc: 'Comprehensive care management',
                                                        },
                                                        {
                                                            name: 'Brevity',
                                                            desc: 'Streamlined plan admin',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-cyan-500/20"
                                                        >
                                                            <div className="font-bold text-cyan-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-cyan-300 mb-4">
                                                    Accounting & Compliance
                                                </h4>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        {
                                                            name: 'Xero',
                                                            desc: 'Australian accounting standard',
                                                        },
                                                        {
                                                            name: 'MYOB',
                                                            desc: 'Local NDIS-compliant bookkeeping',
                                                        },
                                                    ].map((tool, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-white/5 rounded-lg p-4 border border-cyan-500/20"
                                                        >
                                                            <div className="font-bold text-cyan-300 mb-1">
                                                                {tool.name}
                                                            </div>
                                                            <div className="text-sm text-white/60">
                                                                {tool.desc}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white/50 text-sm mt-8 italic">
                                            Our admin teams are PRODA-verified and proficient in
                                            Lumary and Xero, ensuring compliant overnight invoice
                                            processing.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                        {/* Platform Agnostic Message - HIGHLIGHTED */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-16 text-center relative"
                        >
                            {/* Glow effect background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 rounded-2xl blur-2xl" />

                            {/* Main card */}
                            <div className="relative bg-gradient-to-br from-amber-950/40 to-orange-950/40 rounded-2xl p-10 md:p-12 border-2 border-amber-500/50 shadow-2xl">
                                {/* Top accent line */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />

                                {/* Content */}
                                <div className="flex flex-col items-center gap-4">
                                    <Zap className="h-8 w-8 text-amber-400" />
                                    <div>
                                        <p className="text-white text-lg md:text-xl">
                                            <span className="text-amber-300 font-bold text-2xl">
                                                Don't see your stack?
                                            </span>
                                        </p>
                                        <p className="text-amber-100 text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
                                            We are{' '}
                                            <span className="font-bold text-white">
                                                platform-agnostic
                                            </span>
                                            . Our{' '}
                                            <span className="font-bold text-amber-300">
                                                Rapid Implementation Protocol
                                            </span>{' '}
                                            allows us to train a dedicated pod on your proprietary
                                            software in{' '}
                                            <span className="font-bold text-yellow-300 underline underline-offset-2">
                                                under 10 days
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 10-Day Onboarding Timeline */}
            <section className="py-20 lg:py-28 bg-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-timeline-title"
                        >
                            Your 10-Day Onboarding Path
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            From assessment to full deployment in just 10 days.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        {/* Desktop Timeline - Enhanced Design */}
                        <div className="hidden lg:block relative">
                            {/* Animated Timeline Line */}
                            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-500 to-green-500 rounded-full opacity-30" />
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-500 to-green-500 rounded-full origin-left"
                            />

                            <div className="grid grid-cols-4 gap-8 relative pt-8">
                                {[
                                    {
                                        days: '1-2',
                                        title: 'Assessment & Setup',
                                        description:
                                            'Tool stack review, security protocols, team allocation.',
                                        color: 'purple',
                                        delay: 0,
                                        icon: '🔍',
                                    },
                                    {
                                        days: '3-5',
                                        title: 'Training & Integration',
                                        description:
                                            'Hands-on platform training, PSA/API setup, documentation.',
                                        color: 'blue',
                                        delay: 0.15,
                                        icon: '⚙️',
                                    },
                                    {
                                        days: '6-8',
                                        title: 'Pilot Launch',
                                        description:
                                            'Soft launch with limited clients, performance monitoring.',
                                        color: 'cyan',
                                        delay: 0.3,
                                        icon: '🚀',
                                    },
                                    {
                                        days: '9-10',
                                        title: 'Full Deployment',
                                        description:
                                            'Scale to full production, performance optimization, ongoing support.',
                                        color: 'green',
                                        delay: 0.45,
                                        icon: '✅',
                                    },
                                ].map((step) => {
                                    const colorMap = {
                                        purple: {
                                            badge: 'bg-purple-600/30 border-purple-500',
                                            card: 'from-purple-950/40 border-purple-500/30',
                                            text: 'text-purple-300',
                                            dot: 'bg-purple-500',
                                            glow: 'shadow-purple-500/20',
                                        },
                                        blue: {
                                            badge: 'bg-blue-600/30 border-blue-500',
                                            card: 'from-blue-950/40 border-blue-500/30',
                                            text: 'text-blue-300',
                                            dot: 'bg-blue-500',
                                            glow: 'shadow-blue-500/20',
                                        },
                                        cyan: {
                                            badge: 'bg-cyan-600/30 border-cyan-500',
                                            card: 'from-cyan-950/40 border-cyan-500/30',
                                            text: 'text-cyan-300',
                                            dot: 'bg-cyan-500',
                                            glow: 'shadow-cyan-500/20',
                                        },
                                        green: {
                                            badge: 'bg-green-600/30 border-green-500',
                                            card: 'from-green-950/40 border-green-500/30',
                                            text: 'text-green-300',
                                            dot: 'bg-green-500',
                                            glow: 'shadow-green-500/20',
                                        },
                                    };

                                    const colors = colorMap[step.color as keyof typeof colorMap];

                                    return (
                                        <motion.div
                                            key={step.days}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: step.delay,
                                                duration: 0.6,
                                                ease: 'easeOut',
                                            }}
                                            className="relative"
                                        >
                                            {/* Timeline Dot */}
                                            <div className="flex justify-center mb-6 relative z-10">
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    whileInView={{ scale: 1, rotate: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: step.delay + 0.3,
                                                        type: 'spring',
                                                        stiffness: 200,
                                                        damping: 15,
                                                    }}
                                                    className={`w-24 h-24 rounded-full ${colors.badge} border-2 flex flex-col items-center justify-center backdrop-blur-sm shadow-xl ${colors.glow} group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <span className="text-2xl mb-1">
                                                        {step.icon}
                                                    </span>
                                                    <span className="font-bold text-white text-sm">
                                                        Days {step.days}
                                                    </span>
                                                </motion.div>
                                            </div>

                                            {/* Card */}
                                            <Card
                                                className={`bg-gradient-to-br ${colors.card} to-[#1a1f35] border-2 hover:border-opacity-80 transition-all duration-300 h-full group hover:shadow-2xl ${colors.glow}`}
                                            >
                                                <CardContent className="p-6">
                                                    <h4 className="font-bold text-white text-xl mb-3 group-hover:text-white transition-colors">
                                                        {step.title}
                                                    </h4>
                                                    <p className="text-white/70 text-sm leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Timeline - Vertical */}
                        <div className="lg:hidden space-y-8">
                            {[
                                {
                                    days: '1-2',
                                    title: 'Assessment & Setup',
                                    description:
                                        'Tool stack review, security protocols, team allocation.',
                                    color: 'purple',
                                    delay: 0,
                                    icon: '🔍',
                                },
                                {
                                    days: '3-5',
                                    title: 'Training & Integration',
                                    description:
                                        'Hands-on platform training, PSA/API setup, documentation.',
                                    color: 'blue',
                                    delay: 0.15,
                                    icon: '⚙️',
                                },
                                {
                                    days: '6-8',
                                    title: 'Pilot Launch',
                                    description:
                                        'Soft launch with limited clients, performance monitoring.',
                                    color: 'cyan',
                                    delay: 0.3,
                                    icon: '🚀',
                                },
                                {
                                    days: '9-10',
                                    title: 'Full Deployment',
                                    description:
                                        'Scale to full production, performance optimization, ongoing support.',
                                    color: 'green',
                                    delay: 0.45,
                                    icon: '✅',
                                },
                            ].map((step, index) => {
                                const colorMap = {
                                    purple: {
                                        badge: 'bg-purple-600/30 border-purple-500',
                                        card: 'from-purple-950/40 border-purple-500/30',
                                        text: 'text-purple-300',
                                        dot: 'bg-purple-500',
                                        glow: 'shadow-purple-500/20',
                                    },
                                    blue: {
                                        badge: 'bg-blue-600/30 border-blue-500',
                                        card: 'from-blue-950/40 border-blue-500/30',
                                        text: 'text-blue-300',
                                        dot: 'bg-blue-500',
                                        glow: 'shadow-blue-500/20',
                                    },
                                    cyan: {
                                        badge: 'bg-cyan-600/30 border-cyan-500',
                                        card: 'from-cyan-950/40 border-cyan-500/30',
                                        text: 'text-cyan-300',
                                        dot: 'bg-cyan-500',
                                        glow: 'shadow-cyan-500/20',
                                    },
                                    green: {
                                        badge: 'bg-green-600/30 border-green-500',
                                        card: 'from-green-950/40 border-green-500/30',
                                        text: 'text-green-300',
                                        dot: 'bg-green-500',
                                        glow: 'shadow-green-500/20',
                                    },
                                };

                                const colors = colorMap[step.color as keyof typeof colorMap];

                                return (
                                    <motion.div
                                        key={step.days}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: step.delay, duration: 0.5 }}
                                        className="relative pl-16"
                                    >
                                        {/* Vertical Timeline Line */}
                                        {index < 3 && (
                                            <div
                                                className={`absolute left-8 top-16 bottom-0 w-0.5 ${colors.dot}/30`}
                                            />
                                        )}

                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-0 z-10">
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                whileInView={{ scale: 1, rotate: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: step.delay + 0.2,
                                                    type: 'spring',
                                                    stiffness: 200,
                                                    damping: 15,
                                                }}
                                                className={`w-16 h-16 rounded-full ${colors.badge} border-2 flex flex-col items-center justify-center backdrop-blur-sm shadow-lg ${colors.glow}`}
                                            >
                                                <span className="text-lg">{step.icon}</span>
                                                <span className="font-bold text-white text-xs">
                                                    {step.days}
                                                </span>
                                            </motion.div>
                                        </div>

                                        {/* Card */}
                                        <Card
                                            className={`bg-gradient-to-br ${colors.card} to-[#1a1f35] border-2 hover:border-opacity-80 transition-all duration-300 hover:shadow-xl ${colors.glow}`}
                                        >
                                            <CardContent className="p-5">
                                                <h4 className="font-bold text-white text-lg mb-2">
                                                    {step.title}
                                                </h4>
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* What Happens Next */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-next-steps-title"
                        >
                            What Happens Next
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            Your journey to partnership in 4 clear steps.
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600/30 border-2 border-purple-500 flex-shrink-0 mt-1">
                                    <span className="font-bold text-white text-lg">1</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h4
                                        className="text-xl font-bold text-white mb-2"
                                        data-testid="text-step-1"
                                    >
                                        Book Your Demo
                                    </h4>
                                    <p className="text-white/70">
                                        Click "Become a Launch Partner" to schedule a 30-minute
                                        partnership consultation.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Arrow */}
                            <div className="flex justify-center py-2">
                                <ArrowDown className="h-6 w-6 text-purple-400 animate-bounce" />
                            </div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600/30 border-2 border-blue-500 flex-shrink-0 mt-1">
                                    <span className="font-bold text-white text-lg">2</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h4
                                        className="text-xl font-bold text-white mb-2"
                                        data-testid="text-step-2"
                                    >
                                        Partner Package Sent
                                    </h4>
                                    <p className="text-white/70">
                                        Receive your customized partnership proposal with pricing,
                                        terms, and integration roadmap.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Arrow */}
                            <div className="flex justify-center py-2">
                                <ArrowDown className="h-6 w-6 text-blue-400 animate-bounce" />
                            </div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cyan-600/30 border-2 border-cyan-500 flex-shrink-0 mt-1">
                                    <span className="font-bold text-white text-lg">3</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h4
                                        className="text-xl font-bold text-white mb-2"
                                        data-testid="text-step-3"
                                    >
                                        Onboarding Call
                                    </h4>
                                    <p className="text-white/70">
                                        Kickoff meeting with your dedicated partner success manager
                                        to confirm timeline and requirements.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Arrow */}
                            <div className="flex justify-center py-2">
                                <ArrowDown className="h-6 w-6 text-cyan-400 animate-bounce" />
                            </div>

                            {/* Step 4 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600/30 border-2 border-green-500 flex-shrink-0 mt-1">
                                    <span className="font-bold text-white text-lg">✓</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h4
                                        className="text-xl font-bold text-white mb-2"
                                        data-testid="text-step-4"
                                    >
                                        10-Day Launch
                                    </h4>
                                    <p className="text-white/70">
                                        Your team goes live. Our Rapid Implementation Protocol
                                        begins – full deployment in under 10 days.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Partner Metrics Dashboard */}
            <section className="py-20 lg:py-28 bg-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-metrics-title"
                        >
                            Live Partner Metrics
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            Real-time proof of our partner success.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Partners Metric */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full"
                                data-testid="card-partners-metric"
                            >
                                <CardContent className="p-8 text-center">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/30 border border-purple-500 mb-4"
                                    >
                                        <Users className="h-8 w-8 text-purple-300" />
                                    </motion.div>
                                    <div
                                        className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-2"
                                        data-testid="text-partners-count"
                                    >
                                        500+
                                    </div>
                                    <p className="text-white/70 text-lg font-semibold">
                                        Partners Generating Revenue
                                    </p>
                                    <p className="text-white/50 text-sm mt-2">
                                        Across 50+ countries and 12+ industries
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Tickets Metric */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30 h-full"
                                data-testid="card-tickets-metric"
                            >
                                <CardContent className="p-8 text-center">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/30 border border-blue-500 mb-4"
                                    >
                                        <BarChart3 className="h-8 w-8 text-blue-300" />
                                    </motion.div>
                                    <div
                                        className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text mb-2"
                                        data-testid="text-tickets-count"
                                    >
                                        2M+
                                    </div>
                                    <p className="text-white/70 text-lg font-semibold">
                                        Tickets Resolved Monthly
                                    </p>
                                    <p className="text-white/50 text-sm mt-2">
                                        Across all partnership tiers and regions
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Retention Metric */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-green-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-green-500/30 h-full"
                                data-testid="card-retention-metric"
                            >
                                <CardContent className="p-8 text-center">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/30 border border-green-500 mb-4"
                                    >
                                        <TrendingUp className="h-8 w-8 text-green-300" />
                                    </motion.div>
                                    <div
                                        className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text mb-2"
                                        data-testid="text-retention-rate"
                                    >
                                        98%
                                    </div>
                                    <p className="text-white/70 text-lg font-semibold">
                                        Partner Retention Rate
                                    </p>
                                    <p className="text-white/50 text-sm mt-2">
                                        Year-over-year repeat business
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partner Support Commitment */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-support-title"
                        >
                            Our Partner Support Commitment
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            We don't just launch your partnership – we actively manage your success.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* 24/7 Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-2 border-amber-500/30 h-full hover:border-amber-500/60 transition-all group"
                                data-testid="card-24-7-support"
                            >
                                <CardContent className="p-8">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-600/30 border border-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                        <Phone className="h-7 w-7 text-amber-300" />
                                    </div>
                                    <h4
                                        className="text-xl font-bold text-white mb-3"
                                        data-testid="text-support-24-7"
                                    >
                                        24/7 Partner Hotline
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Dedicated emergency support line. Critical issues resolved
                                        within 1 hour. Direct escalation path to our leadership
                                        team.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Dedicated Manager */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full hover:border-purple-500/60 transition-all group"
                                data-testid="card-dedicated-manager"
                            >
                                <CardContent className="p-8">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-600/30 border border-purple-500 mb-6 group-hover:scale-110 transition-transform">
                                        <Users className="h-7 w-7 text-purple-300" />
                                    </div>
                                    <h4
                                        className="text-xl font-bold text-white mb-3"
                                        data-testid="text-support-manager"
                                    >
                                        Dedicated Success Manager
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Named partner account manager. Direct communication channel.
                                        Proactive optimization and strategic reviews.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* 90-Day Check-ins */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-[#1a1f35] to-[#0d1321] border-2 border-cyan-500/30 h-full hover:border-cyan-500/60 transition-all group"
                                data-testid="card-90-day-checkin"
                            >
                                <CardContent className="p-8">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-600/30 border border-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                                        <Calendar className="h-7 w-7 text-cyan-300" />
                                    </div>
                                    <h4
                                        className="text-xl font-bold text-white mb-3"
                                        data-testid="text-support-checkins"
                                    >
                                        Weekly Check-ins (90 Days)
                                    </h4>
                                    <p className="text-white/70 leading-relaxed">
                                        Structured optimization sessions during your launch phase.
                                        Performance review, agent quality tuning, process
                                        refinement.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partner Tier Pricing Breakdown */}
            <section className="py-20 lg:py-28 bg-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-pricing-tiers-title"
                        >
                            Partnership Tier Pricing
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            Scale your margins as you grow. Clear, transparent pricing at every
                            tier.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Tier 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-blue-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-blue-500/30 h-full hover:border-blue-500/60 transition-all"
                                data-testid="card-tier-1"
                            >
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        <h4
                                            className="text-2xl font-bold text-white mb-2"
                                            data-testid="text-tier-1-name"
                                        >
                                            Tier 1: Starter
                                        </h4>
                                        <p className="text-blue-300 font-semibold">1-10 Agents</p>
                                    </div>
                                    <div className="bg-blue-600/20 rounded-lg p-4 mb-6 border border-blue-500/30">
                                        <div
                                            className="text-4xl font-bold text-blue-300 mb-2"
                                            data-testid="text-tier-1-margin"
                                        >
                                            35%
                                        </div>
                                        <p className="text-white/70 text-sm">
                                            Your margin per agent
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-blue-400" />
                                            <span className="text-sm">Standard onboarding</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-blue-400" />
                                            <span className="text-sm">Email support</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-blue-400" />
                                            <span className="text-sm">Monthly check-ins</span>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-xs mt-6 italic">
                                        Perfect for testing the partnership model.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Tier 2 - Featured */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="relative">
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-bold"
                                    data-testid="badge-popular"
                                >
                                    Most Popular
                                </div>
                                <Card
                                    className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/60 h-full hover:border-purple-500/80 transition-all shadow-lg shadow-purple-500/20"
                                    data-testid="card-tier-2"
                                >
                                    <CardContent className="p-8">
                                        <div className="mb-6">
                                            <h4
                                                className="text-2xl font-bold text-white mb-2"
                                                data-testid="text-tier-2-name"
                                            >
                                                Tier 2: Growth
                                            </h4>
                                            <p className="text-purple-300 font-semibold">
                                                11-50 Agents
                                            </p>
                                        </div>
                                        <div className="bg-purple-600/20 rounded-lg p-4 mb-6 border border-purple-500/30">
                                            <div
                                                className="text-4xl font-bold text-purple-300 mb-2"
                                                data-testid="text-tier-2-margin"
                                            >
                                                45%
                                            </div>
                                            <p className="text-white/70 text-sm">
                                                Your margin per agent
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-white/70">
                                                <CheckCircle className="h-4 w-4 text-purple-400" />
                                                <span className="text-sm">
                                                    Rapid Implementation Protocol
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/70">
                                                <CheckCircle className="h-4 w-4 text-purple-400" />
                                                <span className="text-sm">
                                                    Dedicated success manager
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/70">
                                                <CheckCircle className="h-4 w-4 text-purple-400" />
                                                <span className="text-sm">
                                                    Weekly optimization calls
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/70">
                                                <CheckCircle className="h-4 w-4 text-purple-400" />
                                                <span className="text-sm">Priority support</span>
                                            </div>
                                        </div>
                                        <p className="text-white/50 text-xs mt-6 italic">
                                            Rapid growth path with dedicated support.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>

                        {/* Tier 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-green-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-green-500/30 h-full hover:border-green-500/60 transition-all"
                                data-testid="card-tier-3"
                            >
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        <h4
                                            className="text-2xl font-bold text-white mb-2"
                                            data-testid="text-tier-3-name"
                                        >
                                            Tier 3: Enterprise
                                        </h4>
                                        <p className="text-green-300 font-semibold">51+ Agents</p>
                                    </div>
                                    <div className="bg-green-600/20 rounded-lg p-4 mb-6 border border-green-500/30">
                                        <div
                                            className="text-4xl font-bold text-green-300 mb-2"
                                            data-testid="text-tier-3-margin"
                                        >
                                            50%+
                                        </div>
                                        <p className="text-white/70 text-sm">
                                            Your margin per agent
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-sm">Custom pricing & terms</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-sm">
                                                Dedicated partnership manager
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-sm">24/7 priority hotline</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-sm">Custom API access</span>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-xs mt-6 italic">
                                        Enterprise solution with full customization.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partner FAQ - Tabbed */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-faq-title"
                        >
                            Partner FAQ
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            Everything you need to know about partnering with ZuZo. Transparent
                            answers to your toughest questions.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="pricing" className="w-full" data-testid="faq-tabs">
                            <TabsList
                                className="!grid !w-full grid-cols-2 md:grid-cols-4 gap-1 mb-8 bg-white/5 border border-white/10 p-1 rounded-lg overflow-hidden !inline-grid"
                                data-testid="faq-tab-list"
                            >
                                <TabsTrigger
                                    value="pricing"
                                    className="text-xs sm:text-sm md:text-base py-2.5 px-2 sm:px-3 !rounded-md data-[state=active]:!bg-white data-[state=active]:!text-[#0a0f1a] data-[state=active]:shadow-sm transition-all min-w-0"
                                    data-testid="tab-pricing"
                                >
                                    Pricing
                                </TabsTrigger>
                                <TabsTrigger
                                    value="white-label"
                                    className="text-xs sm:text-sm md:text-base py-2.5 px-2 sm:px-3 !rounded-md data-[state=active]:!bg-white data-[state=active]:!text-[#0a0f1a] data-[state=active]:shadow-sm transition-all min-w-0"
                                    data-testid="tab-white-label"
                                >
                                    White Label
                                </TabsTrigger>
                                <TabsTrigger
                                    value="operations"
                                    className="text-xs sm:text-sm md:text-base py-2.5 px-2 sm:px-3 !rounded-md data-[state=active]:!bg-white data-[state=active]:!text-[#0a0f1a] data-[state=active]:shadow-sm transition-all min-w-0"
                                    data-testid="tab-operations"
                                >
                                    Operations
                                </TabsTrigger>
                                <TabsTrigger
                                    value="tech"
                                    className="text-xs sm:text-sm md:text-base py-2.5 px-2 sm:px-3 !rounded-md data-[state=active]:!bg-white data-[state=active]:!text-[#0a0f1a] data-[state=active]:shadow-sm transition-all min-w-0"
                                    data-testid="tab-tech"
                                >
                                    Tech
                                </TabsTrigger>
                            </TabsList>

                            {/* Tab 1: Pricing & Margins */}
                            <TabsContent
                                value="pricing"
                                className="space-y-4"
                                data-testid="faq-pricing-content"
                            >
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="pricing-1"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-pricing-model"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            How does the "Margin Per Agent" model actually work?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            We operate on a{' '}
                                            <span className="font-semibold text-white">
                                                Wholesale BPO model
                                            </span>
                                            . ZuZo provides you with a "Buy Rate" (e.g., for a
                                            dedicated agent) that is significantly lower than market
                                            value. You are free to set your own "Sell Rate" to your
                                            end-client.
                                            <br />
                                            <br />
                                            <span className="text-white/90 font-semibold">
                                                Example:
                                            </span>{' '}
                                            If your Buy Rate is $9/hr and you sell the seat at
                                            $18/hr, you keep 50% margin. We do not dictate your
                                            pricing strategy.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="pricing-2"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-tier-pricing"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            What is included in the "Tier 2 & 3" pricing?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Unlike the Starter tier, Tiers 2 and 3 include our{' '}
                                            <span className="font-semibold text-white">
                                                Rapid Implementation Protocol
                                            </span>{' '}
                                            (setup in &lt;14 days) and a{' '}
                                            <span className="font-semibold text-white">
                                                Dedicated Partner Success Manager
                                            </span>
                                            . This manager is your single point of contact, ensuring
                                            you don't have to manage the agents yourself—we manage
                                            the performance, you manage the client relationship.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="pricing-3"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-downtime-pay"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            Do I pay for agents when they aren't on calls?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Our standard model is{' '}
                                            <span className="font-semibold text-white">
                                                Dedicated Staffing
                                            </span>
                                            , meaning you pay a flat monthly rate for a dedicated
                                            resource who works exclusively for your brand (or your
                                            client's brand). This ensures they are fully trained on{' '}
                                            <span className="italic">your</span> specific SOPs and
                                            culture, unlike a shared "minute-based" call center.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="pricing-4"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-roi-timeline"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            How long until we see ROI?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Most partners see positive ROI within{' '}
                                            <span className="font-semibold text-white">
                                                30 days of launch
                                            </span>
                                            . At our $9/hr rate vs. typical $15-25/hr hiring costs,
                                            the math works immediately. If you reach profitability
                                            within 30 days, great. If not, we extend free training
                                            at no cost.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>

                            {/* Tab 2: White Label & Security */}
                            <TabsContent
                                value="white-label"
                                className="space-y-4"
                                data-testid="faq-white-label-content"
                            >
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="wl-1"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-client-invisibility"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            Will my clients know I am outsourcing to ZuZo?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            No. We operate as a{' '}
                                            <span className="font-semibold text-white">
                                                100% White Label extension
                                            </span>{' '}
                                            of your team.
                                            <ul className="list-disc list-inside mt-3 space-y-2">
                                                <li>
                                                    <span className="font-semibold text-white">
                                                        Email:
                                                    </span>{' '}
                                                    We use your domain (e.g.,
                                                    support@youragency.com)
                                                </li>
                                                <li>
                                                    <span className="font-semibold text-white">
                                                        Phone:
                                                    </span>{' '}
                                                    We answer with your custom greeting
                                                </li>
                                                <li>
                                                    <span className="font-semibold text-white">
                                                        Systems:
                                                    </span>{' '}
                                                    We work directly inside your ticketing system
                                                    (ConnectWise, Zendesk, Salesforce)
                                                </li>
                                            </ul>
                                            <br />
                                            To your client, our agent is just another member of your
                                            team—they just happen to be sitting in Accra.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="wl-2"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-client-protection"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            How do you protect my client relationship?
                                            (Non-Solicitation)
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Trust is our currency. All Partnership Agreements
                                            include a strict{' '}
                                            <span className="font-semibold text-white">
                                                Non-Solicitation & Non-Compete Clause
                                            </span>
                                            . ZuZo is legally bound not to solicit or accept
                                            business directly from your end-clients. Your book of
                                            business belongs to you, forever.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="wl-3"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-facility-visits"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            Can I visit the facility or send my clients to visit?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Absolutely. We encourage it. If you bring a client to
                                            our Accra facility, we will rebrand the meeting space
                                            with <span className="italic">your</span> agency's logo
                                            for the day. We are{' '}
                                            <span className="font-semibold text-white">
                                                your office in Africa
                                            </span>
                                            .
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="wl-4"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-data-sovereignty"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            How do you handle Data Sovereignty (GDPR/Australian
                                            Privacy)?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            We utilize a{' '}
                                            <span className="font-semibold text-white">
                                                VDI (Virtual Desktop Infrastructure)
                                            </span>{' '}
                                            environment. This means your customer data never
                                            actually leaves your server; our agents merely view it
                                            through a secure, encrypted window. No data is stored
                                            locally on hard drives in Ghana, ensuring full
                                            compliance with GDPR, HIPAA, and Australian Privacy
                                            Principles.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>

                            {/* Tab 3: Operations */}
                            <TabsContent
                                value="operations"
                                className="space-y-4"
                                data-testid="faq-operations-content"
                            >
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="ops-1"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-accents"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            How do you handle accents and cultural nuances?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Ghana is a Commonwealth nation with English as the
                                            official language. Our agents are college-educated and
                                            speak with a{' '}
                                            <span className="font-semibold text-white">
                                                neutral, "Global English" accent
                                            </span>{' '}
                                            that is highly rated for clarity in US and UK markets.
                                            We invite you to "blind test" our agents before signing
                                            a contract.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="ops-2"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-quality-monitoring"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            How do I monitor quality if I'm not there?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Radical transparency. As a partner, you get:
                                            <ol className="list-decimal list-inside mt-3 space-y-2">
                                                <li>
                                                    <span className="font-semibold text-white">
                                                        Real-Time Access:
                                                    </span>{' '}
                                                    Login access to call recordings and live screen
                                                    monitoring
                                                </li>
                                                <li>
                                                    <span className="font-semibold text-white">
                                                        Weekly Calibration:
                                                    </span>{' '}
                                                    A weekly QA score (CSAT/QA) report sent to you
                                                </li>
                                                <li>
                                                    <span className="font-semibold text-white">
                                                        The "Red Flag" System:
                                                    </span>{' '}
                                                    If an agent falls below your KPI threshold for 2
                                                    weeks, we automatically place them on a
                                                    Performance Improvement Plan (PIP) or replace
                                                    them at no cost to you
                                                </li>
                                            </ol>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="ops-3"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-escalations"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            Do you handle escalations?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Absolutely. Our agents are trained to identify
                                            escalation-worthy issues and flag them immediately. For
                                            Tier 2+ partners, we have a{' '}
                                            <span className="font-semibold text-white">
                                                dedicated escalation manager available 24/7
                                            </span>
                                            . Your SLAs are our SLAs – we don't cut corners on
                                            critical issues.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="ops-4"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-scaling"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            What happens if I need to scale up for a busy season
                                            (like Q4)?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            This is where our{' '}
                                            <span className="font-semibold text-white">
                                                Tier 3 (Enterprise)
                                            </span>{' '}
                                            status shines. We maintain a "bench" of pre-vetted
                                            talent. For partners in the Growth or Enterprise tiers,
                                            we can ramp up 5-10 additional agents in as little as{' '}
                                            <span className="font-semibold text-white">
                                                10 business days
                                            </span>
                                            .
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>

                            {/* Tab 4: Tech Specs */}
                            <TabsContent
                                value="tech"
                                className="space-y-4"
                                data-testid="faq-tech-content"
                            >
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="tech-1"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-tech-setup"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            What technical setup is required from my side?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Very little. We need:
                                            <ol className="list-decimal list-inside mt-3 space-y-2">
                                                <li>
                                                    Provisioned licenses for your tools (e.g., a
                                                    seat on your Salesforce/Zendesk)
                                                </li>
                                                <li>VPN access (if required)</li>
                                                <li>Training manuals (SOPs)</li>
                                            </ol>
                                            <br />
                                            Our IT team handles the rest, ensuring our hardware
                                            matches your security specs.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="tech-2"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-integrations"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            Can we use this for our own clients?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Yes – that's exactly what our{' '}
                                            <span className="font-semibold text-white">
                                                White Label ("The Ghost")
                                            </span>{' '}
                                            track is for. Your clients never know ZuZo exists. Your
                                            agents use your domain, your branding, your systems. You
                                            control the entire relationship and pricing. No
                                            restrictions on resale.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="tech-3"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-integration-support"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            What systems do we currently integrate with?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            Our platform integrates with{' '}
                                            <span className="font-semibold text-white">
                                                Salesforce, HubSpot, Zendesk, ConnectWise,
                                                Freshdesk, Jira, Microsoft Teams, Slack, and Zapier
                                            </span>
                                            . If you use a system not listed, our API team can
                                            typically establish integration within 5-7 business
                                            days. For Tier 3 partners, custom API access is
                                            included.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value="tech-4"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4"
                                        data-testid="faq-contracts"
                                    >
                                        <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-white/80 transition-colors text-left">
                                            What are the contract terms?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 mt-4">
                                            <span className="font-semibold text-white">
                                                Tier 1-2 partners:
                                            </span>{' '}
                                            6-month rolling contract with 30-day exit.{' '}
                                            <span className="font-semibold text-white">
                                                Tier 3 enterprise partners:
                                            </span>{' '}
                                            Custom terms based on volume. All contracts are designed
                                            to protect both parties while giving you flexibility. No
                                            lock-in traps.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Partner Badge/Certification Program */}
            <section className="py-20 lg:py-28 bg-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            data-testid="text-certification-title"
                        >
                            Partner Certification Program
                        </h2>
                        <p className="text-white/70 text-xl max-w-3xl mx-auto">
                            Earn recognition. Build credibility. Grow faster.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* ZuZo Certified Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-purple-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-purple-500/30 h-full hover:border-purple-500/60 transition-all"
                                data-testid="card-certified-badge"
                            >
                                <CardContent className="p-8">
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-600/20 border-2 border-purple-500 mb-4">
                                            <CheckCircle className="h-10 w-10 text-purple-300" />
                                        </div>
                                        <h4
                                            className="text-2xl font-bold text-white"
                                            data-testid="text-certified-title"
                                        >
                                            ZuZo Certified Partner
                                        </h4>
                                    </div>
                                    <p className="text-white/70 mb-6 leading-relaxed">
                                        Earned after completing your first month as an active
                                        partner. Includes downloadable email signature badge,
                                        website badge, and LinkedIn verification.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">
                                                Email signature badge (4 formats)
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">
                                                Website embed code
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">
                                                LinkedIn profile badge
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm italic">
                                        Boost credibility with your prospects and clients.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Top Performer Recognition */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card
                                className="bg-gradient-to-br from-amber-950/40 via-[#1a1f35] to-[#0d1321] border-2 border-amber-500/30 h-full hover:border-amber-500/60 transition-all"
                                data-testid="card-top-performer"
                            >
                                <CardContent className="p-8">
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-600/20 border-2 border-amber-500 mb-4">
                                            <TrendingUp className="h-10 w-10 text-amber-300" />
                                        </div>
                                        <h4
                                            className="text-2xl font-bold text-white"
                                            data-testid="text-top-performer-title"
                                        >
                                            Top Performer Recognition
                                        </h4>
                                    </div>
                                    <p className="text-white/70 mb-6 leading-relaxed">
                                        Awarded quarterly to partners achieving 98%+ retention,
                                        highest agent quality, or fastest scaling. Featured in
                                        partner newsletter and case studies.
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">
                                                Quarterly feature in partner newsletter
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">
                                                Exclusive Q/A interview rights
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">
                                                5% margin bonus for 3 months
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm italic">
                                        Excellence rewarded. Growth accelerated.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            <BookingSection />

            {/* Trust & Compliance Footer */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0d1321] to-[#0a0f1a]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2
                            className="text-2xl md:text-3xl font-bold mb-8"
                            data-testid="text-compliance-title"
                        >
                            Enterprise-Grade Compliance
                        </h2>

                        {/* Compliance Badges */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16">
                            <div
                                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2"
                                data-testid="badge-iso"
                            >
                                <Shield className="h-5 w-5 text-green-400" />
                                <span className="text-white/80 text-sm font-medium">
                                    ISO 27001 Aligned
                                </span>
                            </div>
                            <div
                                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2"
                                data-testid="badge-gdpr"
                            >
                                <Shield className="h-5 w-5 text-blue-400" />
                                <span className="text-white/80 text-sm font-medium">
                                    GDPR Compliant
                                </span>
                            </div>
                            <div
                                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2"
                                data-testid="badge-hipaa"
                            >
                                <Shield className="h-5 w-5 text-purple-400" />
                                <span className="text-white/80 text-sm font-medium">
                                    HIPAA Ready
                                </span>
                            </div>
                            <div
                                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2"
                                data-testid="badge-soc2"
                            >
                                <Shield className="h-5 w-5 text-cyan-400" />
                                <span className="text-white/80 text-sm font-medium">
                                    SOC2 Ready
                                </span>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="max-w-2xl mx-auto">
                            <h3
                                className="text-3xl md:text-4xl font-bold mb-4"
                                data-testid="text-final-cta"
                            >
                                Ready to Scale Your Margins?
                            </h3>
                            <p className="text-white/60 mb-8">
                                Join the next generation of fulfillment partners.
                            </p>
                            <Button
                                size="lg"
                                onClick={scrollToBooking}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 text-lg px-10 py-6 h-auto"
                                data-testid="button-become-launch-partner"
                            >
                                Book Your Partner Call
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        {/* Footer links */}
                        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
                            <div>
                                &copy; {new Date().getFullYear()} ZuZo LTD. All rights reserved.
                            </div>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-white/60 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/security"
                                    className="hover:text-white/60 transition-colors"
                                >
                                    Security
                                </Link>
                                <Link
                                    href="/contact"
                                    className="hover:text-white/60 transition-colors"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <DownloadModal
                open={downloadModalOpen}
                onOpenChange={setDownloadModalOpen}
                selectedAsset={selectedAsset}
                onDownload={handleDownload}
            />
        </div>
    );
}
