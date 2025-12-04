import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import type { Testimonial } from '@/types/Testimonial';

function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

export function TestimonialsSection() {
    const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
        queryKey: ['/api/testimonials'],
    });
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 px-2">
                        Trusted by Leading Businesses Worldwide
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground px-4">
                        See why 500+ companies choose ZuZo for their BPO and virtual assistant
                        needs.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-5xl mx-auto">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {[1, 2].map((i) => (
                                <Card key={i} className="h-full">
                                    <CardContent className="p-5 sm:p-6 md:p-8">
                                        <Skeleton className="h-8 w-8 sm:h-10 sm:w-10 mb-4 sm:mb-6" />
                                        <Skeleton className="h-16 sm:h-20 w-full mb-4 sm:mb-6" />
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <Skeleton className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
                                            <div className="flex-1">
                                                <Skeleton className="h-4 w-24 sm:w-32 mb-2" />
                                                <Skeleton className="h-3 w-36 sm:w-48" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : testimonials && testimonials.length > 0 ? (
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
                                {testimonials.map((testimonial) => (
                                    <CarouselItem
                                        key={testimonial.id}
                                        className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-full md:basis-1/2"
                                    >
                                        <Card
                                            className="h-full border-2 hover:border-primary/20 transition-colors duration-300"
                                            data-testid={`testimonial-${testimonial.id}`}
                                        >
                                            <CardContent className="p-5 sm:p-6 md:p-8">
                                                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                                                    <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/20 flex-shrink-0" />
                                                    <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                                                        {Array.from({
                                                            length: testimonial.rating,
                                                        }).map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-warning text-warning"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 text-muted-foreground line-clamp-4 sm:line-clamp-none">
                                                    "{testimonial.content}"
                                                </p>

                                                <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-border/50">
                                                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                                                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm sm:text-base">
                                                            {getInitials(testimonial.name)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="font-heading font-semibold text-sm sm:text-base truncate">
                                                            {testimonial.name}
                                                        </div>
                                                        <div className="text-xs sm:text-sm text-muted-foreground truncate">
                                                            {testimonial.title},{' '}
                                                            {testimonial.company}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* Mobile-friendly navigation */}
                            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8 md:hidden">
                                <CarouselPrevious className="relative left-0 right-0 top-0 translate-y-0" />
                                <CarouselNext className="relative left-0 right-0 top-0 translate-y-0" />
                            </div>
                            {/* Desktop navigation */}
                            <CarouselPrevious className="-left-8 lg:-left-12 hidden md:flex" />
                            <CarouselNext className="-right-8 lg:-right-12 hidden md:flex" />
                        </Carousel>
                    ) : (
                        <div className="text-center py-12 sm:py-16">
                            <p className="text-muted-foreground text-sm sm:text-base">
                                No testimonials available yet.
                            </p>
                        </div>
                    )}
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-1.5 sm:mb-2">
                                4.7/5
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">
                                Customer Satisfaction
                            </div>
                        </div>
                        <div className="hidden sm:block w-px h-8 md:h-12 bg-border/50"></div>
                        <div className="block sm:hidden w-full max-w-[100px] h-px bg-border/50"></div>
                        <div className="text-center">
                            <div className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-1.5 sm:mb-2">
                                +70
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">
                                Net Promoter Score
                            </div>
                        </div>
                        <div className="hidden sm:block w-px h-8 md:h-12 bg-border/50"></div>
                        <div className="block sm:hidden w-full max-w-[100px] h-px bg-border/50"></div>
                        <div className="text-center">
                            <div className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-1.5 sm:mb-2">
                                &lt;24hrs
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">
                                Query Resolution
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
