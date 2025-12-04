import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { SEOHead, getSoftwareApplicationSchema } from '@/components/seo/seo-head';
import { CallToAction } from '@/components/cta/callToAction';
import { SectionBackground } from '@/components/patterns/section-background';
import { PricingSection } from '@/components/home/pricing-section';

const services = [
    { name: 'Contact Center Support', hourly: '$6.19', daily: '$45', monthly: '$990' },
    { name: 'Executive Virtual Assistant', hourly: '$7.50', daily: '$55', monthly: '$1,200' },
    { name: 'Technical Support Specialist', hourly: '$8.00', daily: '$60', monthly: '$1,300' },
    { name: 'Data Entry & Processing', hourly: '$5.50', daily: '$40', monthly: '$880' },
    { name: 'Social Media Management', hourly: '$6.50', daily: '$48', monthly: '$1,050' },
    { name: 'Lead Generation', hourly: '$7.00', daily: '$52', monthly: '$1,140' },
];

export default function Pricing() {
    return (
        <div className="min-h-screen">
            <SectionBackground variant="gradient" pattern="circuit" className="bg-background">
                <SEOHead
                    title="Transparent BPO Pricing"
                    description="ZuZo BPO pricing from $6.19/hour. Flexible hourly, daily ($45), and monthly ($990) plans. No hidden fees. 60% cost savings guaranteed. Contact center, virtual assistants, and AI automation."
                    canonical="/pricing"
                    keywords="BPO pricing, virtual assistant cost, contact center pricing, outsourcing rates, Ghana BPO costs"
                    schema={getSoftwareApplicationSchema()}
                />
            </SectionBackground>
            <Header />

            <PricingSection />

            <main className="pt-16 pb-12 lg:pt-4 lg:pb-8">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Service-Specific Pricing */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
                            Service-Specific Pricing
                        </h2>
                        <Card>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left p-6 font-heading font-semibold">
                                                    Service
                                                </th>
                                                <th className="text-center p-6 font-heading font-semibold">
                                                    Hourly
                                                </th>
                                                <th className="text-center p-6 font-heading font-semibold">
                                                    Daily (8hrs)
                                                </th>
                                                <th className="text-center p-6 font-heading font-semibold">
                                                    Monthly
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {services.map((service, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b last:border-b-0 hover-elevate"
                                                >
                                                    <td className="p-6 font-medium">
                                                        {service.name}
                                                    </td>
                                                    <td className="p-6 text-center text-muted-foreground">
                                                        {service.hourly}
                                                    </td>
                                                    <td className="p-6 text-center text-muted-foreground">
                                                        {service.daily}
                                                    </td>
                                                    <td className="p-6 text-center text-muted-foreground">
                                                        {service.monthly}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Features Included */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h3 className="font-heading font-bold text-2xl text-center mb-8">
                            All Plans Include
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-success mt-0.5" />
                                <div>
                                    <div className="font-semibold mb-1">
                                        ISO 27001 Aligned Processes
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Enterprise-grade security standards
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-success mt-0.5" />
                                <div>
                                    <div className="font-semibold mb-1">
                                        Data Protection Certified
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Certified data protection practices
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-success mt-0.5" />
                                <div>
                                    <div className="font-semibold mb-1">24/7 Support</div>
                                    <p className="text-sm text-muted-foreground">
                                        Round-the-clock assistance
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-success mt-0.5" />
                                <div>
                                    <div className="font-semibold mb-1">No Setup Fees</div>
                                    <p className="text-sm text-muted-foreground">
                                        Start immediately with no upfront costs
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-success mt-0.5" />
                                <div>
                                    <div className="font-semibold mb-1">Flexible Scaling</div>
                                    <p className="text-sm text-muted-foreground">
                                        Scale up or down instantly
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-success mt-0.5" />
                                <div>
                                    <div className="font-semibold mb-1">Performance Dashboards</div>
                                    <p className="text-sm text-muted-foreground">
                                        Real-time metrics and reporting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="max-w-3xl mx-auto text-center">
                        <h3 className="font-heading font-bold text-3xl mb-6">
                            Ready to Get Started?
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                            Book a free consultation to discuss your specific needs and get a custom
                            proposal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-demo">
                                <Button size="lg" data-testid="button-pricing-book-demo">
                                    Book Free Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/roi-calculator">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    data-testid="button-pricing-calculator"
                                >
                                    Calculate Your Savings
                                </Button>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </main>
            {/* CTA */}
            <CallToAction
                className="max-w-full mx-auto text-center"
                title="Ready to Get Started?"
                description="Book a free consultation to discuss your specific needs and get a custom proposal."
                primaryButton={{
                    text: 'Book Free Demo',
                    href: '/book-demo',
                }}
                secondaryButton={{
                    text: 'Calculate Your Savings',
                    href: '/roi-calculator',
                }}
            />
            <Footer />
        </div>
    );
}
