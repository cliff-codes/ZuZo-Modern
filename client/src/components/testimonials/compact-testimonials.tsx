import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@/types/Testimonial";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CompactTestimonials({ limit = 2 }: { limit?: number }) {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-20 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const displayTestimonials = testimonials?.slice(0, limit) || [];

  if (displayTestimonials.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-semibold">Trusted by 500+ businesses</span>
      </div>

      {displayTestimonials.map((testimonial) => (
        <Card key={testimonial.id} className="border-muted">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Quote className="h-8 w-8 text-primary/20 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.imageUrl || undefined} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
