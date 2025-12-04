import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { BlogPost } from '@/types/BlogPost';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { format } from 'date-fns';
import { Link } from 'wouter';

export default function BlogPostPage() {
    const [_match, params] = useRoute('/resources/blog/:slug');
    const slug = params?.slug;

    const { data: post, isLoading } = useQuery<BlogPost>({
        queryKey: ['/api/blog-posts', slug],
        enabled: !!slug,
    });

    const handleShare = () => {
        if (navigator.share && post) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <article className="py-12 lg:py-16">
                    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                        {/* Back Button */}
                        <Link href="/resources/blog">
                            <Button
                                variant="ghost"
                                className="mb-8"
                                data-testid="button-back-to-blog"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Blog
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
                        ) : post ? (
                            <div className="space-y-8">
                                {/* Post Header */}
                                <header className="space-y-6">
                                    {post.category && (
                                        <Badge
                                            variant="secondary"
                                            className="text-sm"
                                            data-testid="post-category"
                                        >
                                            {post.category}
                                        </Badge>
                                    )}

                                    <h1
                                        className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl"
                                        data-testid="post-title"
                                    >
                                        {post.title}
                                    </h1>

                                    {post.excerpt && (
                                        <p
                                            className="text-xl text-muted-foreground"
                                            data-testid="post-excerpt"
                                        >
                                            {post.excerpt}
                                        </p>
                                    )}

                                    <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t">
                                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                {post.publishedAt &&
                                                    format(
                                                        new Date(post.publishedAt),
                                                        'MMMM d, yyyy',
                                                    )}
                                            </div>
                                            {post.readTime && (
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    {post.readTime} min read
                                                </div>
                                            )}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleShare}
                                            data-testid="button-share"
                                        >
                                            <Share2 className="h-4 w-4 mr-2" />
                                            Share
                                        </Button>
                                    </div>
                                </header>

                                {/* Featured Image */}
                                {post.featuredImage && (
                                    <div className="aspect-[21/9] rounded-lg overflow-hidden">
                                        <img
                                            src={post.featuredImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                            data-testid="post-featured-image"
                                        />
                                    </div>
                                )}

                                {/* Post Content */}
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
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                            data-testid="post-content"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h2 className="font-heading font-bold text-2xl mb-4">
                                    Blog Post Not Found
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    The blog post you're looking for doesn't exist or has been
                                    removed.
                                </p>
                                <Link href="/resources/blog">
                                    <Button>
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Back to Blog
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
