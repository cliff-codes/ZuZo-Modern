import { useQuery } from "@tanstack/react-query";
import type { CaseStudy } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export function FeaturedCaseStudy() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  if (isLoading) {
    return (
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-6xl mx-auto animate-pulse">
            <CardContent className="p-12">
              <div className="h-64 bg-muted rounded"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const featuredCaseStudy = caseStudies?.[0];

  if (!featuredCaseStudy) {
    return null;
  }

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="h-4 w-4" />
            Success Story
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we helped {featuredCaseStudy.client} transform their operations
          </p>
        </div>

        {/* Featured Case Study Card */}
        <Card className="max-w-6xl mx-auto overflow-hidden border-2 hover-elevate transition-all duration-300" data-testid="card-featured-case-study">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image/Visual */}
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {featuredCaseStudy.industry}
                </div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                  {featuredCaseStudy.client}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredCaseStudy.challenge}
                </p>
              </div>

              {/* Key Metrics */}
              {featuredCaseStudy.metrics && featuredCaseStudy.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {featuredCaseStudy.metrics.slice(0, 4).map((metric, index) => (
                    <div key={index} className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <div className="text-sm font-semibold">{metric}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-semibold text-xl mb-4 text-primary">
                  The Solution
                </h4>
                <div 
                  className="text-muted-foreground mb-6 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: featuredCaseStudy.solution }}
                />

                <h4 className="font-heading font-semibold text-xl mb-4 text-success">
                  The Results
                </h4>
                <div 
                  className="text-muted-foreground mb-6 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: featuredCaseStudy.results }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/resources/case-studies/${featuredCaseStudy.slug}`}>
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-read-full-story">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resources/case-studies">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-view-all-cases">
                    View All Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
