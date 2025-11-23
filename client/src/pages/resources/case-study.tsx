import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import type { CaseStudy } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, ArrowLeft, Target, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function CaseStudyPage() {
  const [match, params] = useRoute("/resources/case-studies/:slug");
  const slug = params?.slug;

  const { data: caseStudy, isLoading } = useQuery<CaseStudy>({
    queryKey: ["/api/case-studies", slug],
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            {/* Back Button */}
            <Link href="/resources/case-studies">
              <Button variant="ghost" className="mb-8" data-testid="button-back-to-case-studies">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>

            {isLoading ? (
              <div className="space-y-8">
                <Skeleton className="h-12 w-3/4" />
                <div className="flex gap-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-64 w-full" />
              </div>
            ) : caseStudy ? (
              <div className="space-y-12">
                {/* Header */}
                <header className="space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    {caseStudy.industry && (
                      <Badge variant="secondary" className="text-sm" data-testid="case-study-industry">
                        {caseStudy.industry}
                      </Badge>
                    )}
                  </div>
                  
                  <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="case-study-title">
                    {caseStudy.title}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground" data-testid="case-study-client">
                    Client: <strong>{caseStudy.client}</strong>
                  </p>
                </header>

                {/* Featured Image */}
                {caseStudy.imageUrl && (
                  <div className="aspect-[21/9] rounded-lg overflow-hidden">
                    <img
                      src={caseStudy.imageUrl}
                      alt={caseStudy.client}
                      className="w-full h-full object-cover"
                      data-testid="case-study-featured-image"
                    />
                  </div>
                )}

                {/* Key Metrics */}
                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudy.metrics.map((metric, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-6 text-center">
                          <div className="font-heading font-bold text-2xl text-primary mb-2">
                            {metric.split(' ')[0]}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.split(' ').slice(1).join(' ')}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  {caseStudy.challenge && (
                    <Card>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 rounded-lg bg-destructive/10">
                            <Target className="h-6 w-6 text-destructive" />
                          </div>
                          <h2 className="font-heading font-bold text-2xl">The Challenge</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {caseStudy.solution && (
                    <Card>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          </div>
                          <h2 className="font-heading font-bold text-2xl">Our Solution</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Full Content */}
                <Card>
                  <CardContent className="p-8 lg:p-12">
                    <div 
                      className="prose prose-lg max-w-none
                        prose-headings:font-heading prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-foreground
                        prose-ul:my-6 prose-li:my-2"
                      dangerouslySetInnerHTML={{ __html: caseStudy.results }}
                      data-testid="case-study-content"
                    />
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-8 lg:p-12 text-center">
                    <h2 className="font-heading font-bold text-3xl mb-4">
                      Ready to Achieve Similar Results?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Discover how ZuZo can help your business reduce costs, improve efficiency, and scale operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/book-demo">
                        <Button size="lg" data-testid="button-book-demo">
                          Book Free Consultation
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" size="lg" data-testid="button-contact">
                          Contact Sales
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="font-heading font-bold text-2xl mb-4">Case Study Not Found</h2>
                <p className="text-muted-foreground mb-8">
                  The case study you're looking for doesn't exist or has been removed.
                </p>
                <Link href="/resources/case-studies">
                  <Button>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Case Studies
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
