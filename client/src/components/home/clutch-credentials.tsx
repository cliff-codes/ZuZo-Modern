import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function ClutchCredentials() {
    const [imageError, setImageError] = useState(false);
    const clutchStats = [
        { label: 'Overall Rating', value: '4.5/5', icon: Star },
        { label: 'Cost Rating', value: '5.0/5', icon: Star },
        { label: 'Verified Reviews', value: '100%', icon: Award },
    ];

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Award className="h-4 w-4" />
                            Featured on Clutch.co
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                            Verified by Industry Experts
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Clutch.co independently verifies our client reviews and recognizes
                            top-performing B2B service providers
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Stats and Awards */}
                        <div className="space-y-6">
                            {/* Rating Stats */}
                            <Card className="border-2 border-primary/20">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md relative overflow-hidden">
                                            {!imageError ? (
                                                <img
                                                    src="https://clutch.co/sites/all/themes/clutch/img/clutch-logo-white.svg"
                                                    alt="Clutch.co"
                                                    className="h-6 w-6 object-contain"
                                                    crossOrigin="anonymous"
                                                    onError={() => setImageError(true)}
                                                />
                                            ) : (
                                                <div className="text-white font-bold text-sm">
                                                    C
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-heading font-bold text-xl">
                                                Clutch.co Verified
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Independent B2B Reviews
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        {clutchStats.map((stat, index) => {
                                            const Icon = stat.icon;
                                            return (
                                                <div key={index} className="text-center">
                                                    <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                                                    <div className="font-heading font-bold text-2xl text-primary mb-1">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 2025 Awards Badges */}
                            <div className="space-y-3">
                                <h3 className="font-heading font-semibold text-lg mb-3">
                                    2025 Clutch Awards
                                </h3>
                                <div className="grid gap-3">
                                    <Card
                                        className="hover-elevate transition-all"
                                        data-testid="award-card-1"
                                    >
                                        <CardContent className="p-4 flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">
                                                    Top Inbound Call Center - Ghana 2025
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card
                                        className="hover-elevate transition-all"
                                        data-testid="award-card-2"
                                    >
                                        <CardContent className="p-4 flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">
                                                    Top Call Centers - Ghana 2025
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card
                                        className="hover-elevate transition-all"
                                        data-testid="award-card-3"
                                    >
                                        <CardContent className="p-4 flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">
                                                    Top HR Staffing Company - Non-profit 2025
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Right: Featured Review Highlight */}
                        <Card className="border-2 border-success/20 bg-gradient-to-br from-success/5 to-transparent">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold">5.0/5</span>
                                </div>

                                <h3 className="font-heading font-bold text-xl mb-4">
                                    Recent Client Success
                                </h3>

                                <div className="space-y-4 mb-6">
                                    <div
                                        className="flex items-start gap-3"
                                        data-testid="metric-csat"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 font-bold text-success">
                                            4.7
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">
                                                4.7/5 CSAT Score
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Post-implementation
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start gap-3"
                                        data-testid="metric-nps"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 font-bold text-success">
                                            +70
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">
                                                +70 Net Promoter Score
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Strong referral likelihood
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start gap-3"
                                        data-testid="metric-reduction"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 font-bold text-success text-xs">
                                            60%
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">
                                                60% Reduction in missed appointments
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Improved follow-up
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground mb-6">
                                    "They are very responsive and adaptable to the project. They
                                    work beyond the defined scope and give thoughtful attention to
                                    related needs."
                                </blockquote>

                                <div className="text-xs text-muted-foreground mb-4">
                                    <strong>Elymas Dekonor</strong>
                                    <br />
                                    Global Senior Manager, Eyewear Nonprofit
                                </div>

                                <a
                                    href="https://clutch.co/profile/zuzo-company#reviews"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        data-testid="button-read-clutch-reviews"
                                    >
                                        Read All Clutch Reviews
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
