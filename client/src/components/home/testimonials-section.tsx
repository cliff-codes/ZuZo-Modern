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

const testimonials = [
  {
    name: "Elymas Dekonor",
    title: "Global Senior Manager",
    company: "Eyewear Nonprofit",
    rating: 5,
    content: "They work beyond the defined scope and give thoughtful attention to related needs. They are very responsive and adaptable to the project.",
    initials: "ED",
  },
  {
    name: "Sarah Mitchell",
    title: "CEO",
    company: "TechFlow Solutions",
    rating: 5,
    content: "ZuZo transformed our customer support operations. The 60% cost reduction was impressive, but the quality improvement exceeded all expectations.",
    initials: "SM",
  },
  {
    name: "David Chen",
    title: "Operations Director",
    company: "Global Retail Corp",
    rating: 5,
    content: "The 48-hour deployment was incredible. Our virtual assistant team was operational before we even finished onboarding internally.",
    initials: "DC",
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Customer Success",
    company: "FinTech Innovations",
    rating: 5,
    content: "Outstanding omnichannel support. Our customer satisfaction scores increased by 35% within the first quarter of partnership.",
    initials: "MR",
  },
];

export function TestimonialsSection() {
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full" data-testid={`testimonial-${index}`}>
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
                            {testimonial.initials}
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
