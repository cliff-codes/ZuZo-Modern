import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Check, ArrowRight, Sparkles, TrendingDown, Shield, Clock } from 'lucide-react';

const pricingTiers = [
    {
        name: 'Per Hour',
        price: '$6.19',
        period: 'per hour',
        description: 'Perfect for ad-hoc needs',
        savings: null,
        features: [
            '15-minute increments',
            'Flexible scheduling',
            'No long-term commitment',
            'Pay as you go',
            'Access to all services',
        ],
        popular: false,
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Per Day',
        price: '$45',
        period: 'per day',
        description: 'Best value for regular support',
        savings: 'Save 25%',
        features: [
            '8-hour workday',
            'Dedicated support',
            'Priority scheduling',
            'Daily reporting',
            'Best ROI',
        ],
        popular: true,
        gradient: 'from-primary to-primary/80',
    },
    {
        name: 'Monthly VA',
        price: '$990',
        period: 'per month',
        description: 'Dedicated team member',
        savings: 'Save 40%',
        features: [
            '22 working days',
            'Fully dedicated VA',
            'Advanced training',
            'Account manager',
            'Maximum consistency',
        ],
        popular: false,
        gradient: 'from-purple-500 to-pink-500',
    },
];

export function PricingSection({ displayFullPricing = false }: { displayFullPricing?: boolean }) {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        <span>Flexible Pricing</span>
                    </div>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                        Transparent Pricing That Makes Sense
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                        Pay only for what you need. No hidden fees. No surprises. Scale up or down
                        instantly.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative group ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                            data-testid={`pricing-card-${tier.name
                                .toLowerCase()
                                .replace(/\s+/g, '-')}`}
                        >
                            {/* Popular Badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 text-xs font-bold shadow-lg">
                                        MOST POPULAR
                                    </Badge>
                                </div>
                            )}

                            {/* Glow Effect for Popular */}
                            {tier.popular && (
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                            )}

                            <Card
                                className={`relative h-full transition-all duration-500 ${
                                    tier.popular
                                        ? 'border-2 border-primary shadow-2xl shadow-primary/20 bg-gradient-to-br from-card to-card/50'
                                        : 'border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 bg-card/50 backdrop-blur-sm'
                                } hover:-translate-y-2`}
                            >
                                <CardHeader className="text-center pb-6 sm:pb-8 pt-8 sm:pt-10">
                                    {/* Savings Badge */}
                                    {tier.savings && (
                                        <div className="inline-flex items-center gap-1.5 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                            <TrendingDown className="h-3 w-3" />
                                            {tier.savings}
                                        </div>
                                    )}

                                    <CardTitle className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">
                                        {tier.name}
                                    </CardTitle>

                                    {/* Price Display */}
                                    <div className="mb-3">
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground">
                                                {tier.price}
                                            </span>
                                        </div>
                                        <div className="text-sm sm:text-base text-muted-foreground mt-1">
                                            {tier.period}
                                        </div>
                                    </div>

                                    <CardDescription className="text-sm sm:text-base">
                                        {tier.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="px-6 sm:px-8 pb-8">
                                    {/* Features List */}
                                    <ul className="space-y-3 sm:space-y-4 mb-8">
                                        {tier.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 group/item"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5 group-hover/item:bg-success/20 transition-colors">
                                                    <Check className="h-4 w-4 text-success" />
                                                </div>
                                                <span className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link href="/book-demo">
                                        <Button
                                            className={`w-full h-12 text-base font-semibold transition-all duration-300 ${
                                                tier.popular
                                                    ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 hover:scale-105'
                                                    : 'hover:scale-105'
                                            }`}
                                            variant={tier.popular ? 'default' : 'outline'}
                                            data-testid={`button-get-started-${tier.name
                                                .toLowerCase()
                                                .replace(/\s+/g, '-')}`}
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center max-w-4xl mx-auto">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 text-success" />
                            <span>ISO 27001 Compliant</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border"></div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 text-success" />
                            <span>GDPR Certified</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border"></div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-success" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border"></div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-success" />
                            <span>No Setup Fees</span>
                        </div>
                    </div>

                    {displayFullPricing && (
                        <Link href="/pricing">
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-base px-8 py-6 h-auto hover:scale-105 transition-transform duration-300"
                                data-testid="button-view-full-pricing"
                            >
                                View Full Pricing & Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
