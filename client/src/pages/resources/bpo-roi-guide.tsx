import { useState } from 'react';
import { useLocation } from 'wouter';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
    Download,
    CheckCircle,
    FileText,
    Calculator,
    ClipboardList,
    TrendingUp,
    Star,
    Quote,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MiniTrustBar } from '@/components/trust/mini-trust-bar';
import { SEOHead } from '@/components/seo/seo-head';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { InsertLead } from '@/types/contact';

const guideFeatures = [
    {
        title: 'ROI Calculation Framework',
        description:
            'Step-by-step methodology to calculate the true cost of in-house vs. outsourced operations',
        icon: Calculator,
    },
    {
        title: 'Cost Comparison Worksheet',
        description:
            "Ready-to-use Excel template to compare your current costs with ZuZo's BPO pricing",
        icon: FileText,
    },
    {
        title: 'Implementation Checklist',
        description:
            'Complete 30-day roadmap for successful BPO implementation and team onboarding',
        icon: ClipboardList,
    },
];

export default function BPOROIGuidePage() {
    const [, navigate] = useLocation();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
    });

    const createLeadMutation = useMutation({
        mutationFn: async (data: InsertLead) => {
            return await apiRequest('POST', '/api/leads', { ...data, source: 'roi_guide' });
        },
        onSuccess: () => {
            toast({
                title: 'Success!',
                description: 'Your ROI guide download has started. Redirecting to calculator...',
            });

            setTimeout(() => {
                navigate('/roi-calculator?guide=downloaded');
            }, 1500);
        },
        onError: (error: any) => {
            toast({
                title: 'Error',
                description: error.message || 'Failed to process your request. Please try again.',
                variant: 'destructive',
            });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.company) {
            toast({
                title: 'Missing Information',
                description: 'Please fill in all required fields.',
                variant: 'destructive',
            });
            return;
        }

        createLeadMutation.mutate({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            source: 'roi_guide',
            message: 'Downloaded BPO ROI Calculator Guide',
        });
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title="Free BPO ROI Calculator Guide"
                description="Download our comprehensive BPO ROI Calculator Guide. Includes calculation framework, cost comparison worksheet, and implementation checklist. Calculate your potential savings with ZuZo."
                canonical="/resources/bpo-roi-guide"
                keywords="BPO ROI calculator, outsourcing ROI, cost savings calculator, BPO implementation guide, business case template"
            />
            <Header />

            <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
                {/* Hero Section */}
                <section className="mb-16 lg:mb-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge className="mb-6">Free Resource</Badge>
                            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                                Free Download: The Complete BPO ROI Calculator Guide
                            </h1>
                            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                                Build a compelling business case for BPO with our comprehensive ROI
                                calculator and implementation guide. Used by 500+ businesses to
                                justify their outsourcing investments.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-success" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-success" />
                                    <span>Instant download</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-success" />
                                    <span>Excel templates included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <MiniTrustBar />

                {/* Main Content Grid */}
                <section className="py-16 lg:py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                            {/* Left: What's Included */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="font-heading font-bold text-3xl mb-6">
                                        What's Included
                                    </h2>
                                    <p className="text-muted-foreground mb-8">
                                        Everything you need to calculate, justify, and present your
                                        BPO ROI to stakeholders
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {guideFeatures.map((feature, index) => {
                                        const Icon = feature.icon;
                                        return (
                                            <Card
                                                key={index}
                                                className="hover-elevate"
                                                data-testid={`feature-card-${index}`}
                                            >
                                                <CardContent className="p-6">
                                                    <div className="flex gap-4">
                                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                            <Icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-heading font-semibold text-lg mb-2">
                                                                {feature.title}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>

                                {/* Benefits */}
                                <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                                    <CardContent className="p-6">
                                        <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                                            <TrendingUp className="h-5 w-5 text-success" />
                                            Average Results
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                                                <span className="text-sm">
                                                    <strong>60% cost reduction</strong> vs. in-house
                                                    teams
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                                                <span className="text-sm">
                                                    <strong>48-hour</strong> implementation timeline
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                                                <span className="text-sm">
                                                    <strong>4.5/5 CSAT</strong> average customer
                                                    satisfaction
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Testimonial */}
                                <Card className="border-primary/20">
                                    <CardContent className="p-6">
                                        <div className="flex gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <Quote className="h-8 w-8 text-primary/20 mb-3" />
                                        <p className="text-sm text-muted-foreground italic mb-4">
                                            "This guide helped us build a bulletproof business case
                                            for BPO. The ROI calculator made it easy to show our CFO
                                            the exact savings we'd achieve. We implemented ZuZo and
                                            exceeded our projections."
                                        </p>
                                        <div className="text-sm">
                                            <div className="font-semibold">Sarah Mitchell</div>
                                            <div className="text-muted-foreground">
                                                COO, TechScale Solutions
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right: Lead Capture Form */}
                            <div className="lg:sticky lg:top-32">
                                <Card className="border-2 border-primary/20 shadow-lg">
                                    <CardHeader className="text-center pb-6">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <Download className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-heading text-2xl">
                                            Download Your Free Guide
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground pt-2">
                                            Get instant access to the complete BPO ROI Calculator
                                            Guide
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="John Smith"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            name: e.target.value,
                                                        })
                                                    }
                                                    required
                                                    data-testid="input-name"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Work Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target.value,
                                                        })
                                                    }
                                                    required
                                                    data-testid="input-email"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company Name *</Label>
                                                <Input
                                                    id="company"
                                                    type="text"
                                                    placeholder="Acme Corporation"
                                                    value={formData.company}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            company: e.target.value,
                                                        })
                                                    }
                                                    required
                                                    data-testid="input-company"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full"
                                                size="lg"
                                                disabled={createLeadMutation.isPending}
                                                data-testid="button-download-guide"
                                            >
                                                {createLeadMutation.isPending ? (
                                                    'Processing...'
                                                ) : (
                                                    <>
                                                        <Download className="mr-2 h-5 w-5" />
                                                        Download Free Guide
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-xs text-muted-foreground text-center">
                                                By downloading, you agree to receive communications
                                                from ZuZo. We respect your privacy and you can
                                                unsubscribe anytime.
                                            </p>
                                        </form>
                                    </CardContent>
                                </Card>

                                {/* Additional CTA */}
                                <Card className="mt-6">
                                    <CardContent className="p-6 text-center">
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Want to skip the guide and calculate your ROI right now?
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => navigate('/roi-calculator')}
                                            data-testid="button-go-to-calculator"
                                        >
                                            <Calculator className="mr-2 h-4 w-4" />
                                            Go to ROI Calculator
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Stats */}
                <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="font-heading font-bold text-2xl mb-8">
                                Join 500+ Businesses Who've Calculated Their BPO ROI
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        60%
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Average Cost Savings
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        48hrs
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Launch Timeline
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        4.5/5
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Client Satisfaction
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        24/7
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Support Coverage
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
