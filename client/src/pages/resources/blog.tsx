import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { format } from "date-fns";

export default function BlogPage() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
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
                BPO Insights & Resources
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Expert insights on business process outsourcing, virtual assistants, AI automation, and workforce optimization
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <CardHeader className="gap-4">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-20 w-full" />
                      <div className="flex gap-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.id} href={`/resources/blog/${post.slug}`}>
                    <Card className="h-full hover-elevate active-elevate-2 cursor-pointer overflow-hidden" data-testid={`blog-card-${post.slug}`}>
                      {post.featuredImage && (
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader className="gap-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          {post.category && (
                            <Badge variant="secondary" data-testid={`blog-category-${post.slug}`}>
                              {post.category}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-heading font-semibold text-xl line-clamp-2" data-testid={`blog-title-${post.slug}`}>
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.publishedAt && format(new Date(post.publishedAt), "MMM d, yyyy")}
                          </div>
                          {post.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime} min read
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          Read More <ChevronRight className="h-4 w-4" />
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No blog posts available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
