import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import type { CaseStudy } from '@/types/CaseStudy';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function CaseStudiesPage() {
    const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
        queryKey: ['/api/case-studies'],
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                                Client Success Stories
                            </h1>
                            <p className="text-lg lg:text-xl text-muted-foreground">
                                Discover how businesses across industries achieve 60%+ cost savings
                                and operational excellence with ZuZo
                            </p>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="py-16 lg:py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        {isLoading ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {[1, 2, 3, 4].map((i) => (
                                    <Card key={i} className="overflow-hidden">
                                        <Skeleton className="h-64 w-full" />
                                        <CardHeader className="gap-4">
                                            <Skeleton className="h-6 w-32" />
                                            <Skeleton className="h-8 w-full" />
                                            <Skeleton className="h-20 w-full" />
                                            <div className="grid grid-cols-3 gap-4">
                                                <Skeleton className="h-16 w-full" />
                                                <Skeleton className="h-16 w-full" />
                                                <Skeleton className="h-16 w-full" />
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        ) : caseStudies && caseStudies.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {caseStudies.map((caseStudy) => (
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
                                                            data-testid={`case-study-industry-${caseStudy.slug}`}
                                                        >
                                                            {caseStudy.industry}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <h3
                                                    className="font-heading font-semibold text-2xl"
                                                    data-testid={`case-study-title-${caseStudy.slug}`}
                                                >
                                                    {caseStudy.title}
                                                </h3>
                                                <p className="text-muted-foreground line-clamp-2">
                                                    {caseStudy.challenge}
                                                </p>

                                                {/* Key Metrics */}
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
                                    No case studies available yet. Check back soon!
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
