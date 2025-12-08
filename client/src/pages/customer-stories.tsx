import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import type { Testimonial } from '@/types/Testimonial';
import type { CaseStudy } from '@/types/CaseStudy';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ClutchCredentials } from '@/components/home/clutch-credentials';
import { InlineBookingCTA } from '@/components/cta/inline-booking-cta';
import { SEOHead } from '@/components/seo/seo-head';

export default function CustomerStoriesPage() {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

    const { data: caseStudies, isLoading: casesLoading } = useQuery<CaseStudy[]>({
        queryKey: ['/api/case-studies'],
    });

    const { data: testimonials, isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
        queryKey: ['/api/testimonials'],
    });

    const industries = ['all', ...Array.from(new Set(caseStudies?.map((cs) => cs.industry) || []))];

    const filteredCaseStudies =
        caseStudies?.filter(
            (cs) => selectedIndustry === 'all' || cs.industry === selectedIndustry,
        ) || [];

    return (
        <div className="min-h-screen">
            <SEOHead
                title="Customer Success Stories"
                description="See how leading businesses achieve 60%+ cost savings and operational excellence with ZuZo's BPO solutions. Real results from e-commerce, healthcare, finance, and technology companies."
                canonical="/customer-stories"
                keywords="BPO success stories, customer testimonials, case studies, client results, business transformation"
            />
            <Header />

            <main className="pt-32 pb-20 lg:pt-40 lg:pb-24">
                {/* Hero Section */}
                <section className="mb-16 lg:mb-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                                See How Leading Businesses Transform with ZuZo
                            </h1>
                            <p className="text-lg lg:text-xl text-muted-foreground">
                                Discover real results from companies that have partnered with ZuZo
                                to reduce costs, scale operations, and deliver exceptional customer
                                experiences.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Industry Filter */}
                <section className="mb-12">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {industries.map((industry) => (
                                <Button
                                    key={industry}
                                    variant={selectedIndustry === industry ? 'default' : 'outline'}
                                    onClick={() => setSelectedIndustry(industry)}
                                    data-testid={`filter-industry-${industry}`}
                                >
                                    {industry === 'all' ? 'All Industries' : industry}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="mb-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        {casesLoading ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {[1, 2, 3, 4].map((i) => (
                                    <Card key={i} className="overflow-hidden">
                                        <Skeleton className="h-64 w-full" />
                                        <CardHeader className="gap-4">
                                            <Skeleton className="h-6 w-32" />
                                            <Skeleton className="h-8 w-full" />
                                            <Skeleton className="h-20 w-full" />
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        ) : filteredCaseStudies.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {filteredCaseStudies.map((caseStudy) => (
                                    <Link
                                        key={caseStudy.id}
                                        href={`/resources/case-studies/${caseStudy.slug}`}
                                    >
                                        <Card
                                            className="h-full hover-elevate active-elevate-2 cursor-pointer overflow-hidden"
                                            data-testid={`case-study-card-${caseStudy.slug}`}
                                        >
                                            {caseStudy.imageUrl && (
                                                <div className="aspect-[16/9] overflow-hidden">
                                                    <img
                                                        src={caseStudy.imageUrl}
                                                        alt={caseStudy.client}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <CardHeader className="gap-4">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {caseStudy.industry && (
                                                        <Badge
                                                            variant="secondary"
                                                            data-testid={`badge-industry-${caseStudy.slug}`}
                                                        >
                                                            {caseStudy.industry}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <h3
                                                    className="font-heading font-semibold text-2xl"
                                                    data-testid={`title-${caseStudy.slug}`}
                                                >
                                                    {caseStudy.title}
                                                </h3>
                                                <p className="text-muted-foreground line-clamp-2">
                                                    {caseStudy.challenge}
                                                </p>

                                                {caseStudy.metrics &&
                                                    caseStudy.metrics.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 pt-4 border-t">
                                                            {caseStudy.metrics
                                                                .slice(0, 3)
                                                                .map((metric, idx) => (
                                                                    <Badge
                                                                        key={idx}
                                                                        variant="outline"
                                                                        className="text-xs"
                                                                    >
                                                                        {metric}
                                                                    </Badge>
                                                                ))}
                                                        </div>
                                                    )}

                                                <div className="flex items-center gap-2 text-primary font-medium pt-2">
                                                    Read Case Study{' '}
                                                    <ChevronRight className="h-4 w-4" />
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-lg text-muted-foreground">
                                    No case studies found for this industry. Try selecting a
                                    different filter.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Clutch Credentials */}
                <ClutchCredentials />

                {/* Testimonials Section */}
                <section className="py-16 lg:py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                                What Our Clients Say
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Hear directly from businesses that have transformed their operations
                                with ZuZo
                            </p>
                        </div>

                        {testimonialsLoading ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <Skeleton className="h-32 w-full" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : testimonials && testimonials.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {testimonials.map((testimonial) => (
                                    <Card
                                        key={testimonial.id}
                                        className="hover-elevate"
                                        data-testid={`testimonial-card-${testimonial.id}`}
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex gap-1 mb-4">
                                                {Array.from({ length: testimonial.rating }).map(
                                                    (_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                        />
                                                    ),
                                                )}
                                            </div>

                                            <Quote className="h-8 w-8 text-primary/20 mb-3" />

                                            <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                                                "{testimonial.content}"
                                            </p>

                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-12 w-12">
                                                    <AvatarImage
                                                        src={testimonial.imageUrl || undefined}
                                                        alt={testimonial.name}
                                                    />
                                                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                                                        {testimonial.name
                                                            .split(' ')
                                                            .map((n) => n[0])
                                                            .join('')
                                                            .slice(0, 2)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-semibold text-sm">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {testimonial.title}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {testimonial.company}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">
                                    No testimonials available yet.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8">
                        <InlineBookingCTA
                            title="Ready to Write Your Success Story?"
                            description="Join 500+ businesses that have transformed their operations with ZuZo. Book a free strategy session to discover how we can help you achieve similar results."
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
