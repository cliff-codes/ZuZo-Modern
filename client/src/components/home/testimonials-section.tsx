import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Testimonial } from "@shared/schema";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Trusted by Leading Businesses Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See why 500+ companies choose ZuZo for their BPO and virtual assistant needs.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="h-full">
                  <CardContent className="p-8">
                    <Skeleton className="h-10 w-10 mb-6" />
                    <Skeleton className="h-20 w-full mb-6" />
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-2" />
                        <Skeleton className="h-3 w-48" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full" data-testid={`testimonial-${testimonial.id}`}>
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <Quote className="h-10 w-10 text-primary/20 flex-shrink-0" />
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                            ))}
                          </div>
                        </div>

                        <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                          "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {getInitials(testimonial.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-heading font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.title}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 hidden lg:flex" />
              <CarouselNext className="-right-12 hidden lg:flex" />
            </Carousel>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No testimonials available yet.</p>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div>
              <div className="font-heading font-bold text-3xl text-primary mb-1">4.7/5</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="font-heading font-bold text-3xl text-primary mb-1">+70</div>
              <div className="text-sm text-muted-foreground">Net Promoter Score</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="font-heading font-bold text-3xl text-primary mb-1">&lt;24hrs</div>
              <div className="text-sm text-muted-foreground">Query Resolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
