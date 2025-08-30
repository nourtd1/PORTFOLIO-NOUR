"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Ce que disent mes clients
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full shadow-lg">
                    <CardContent className="p-6 relative">
                      <Quote className="absolute top-4 right-4 h-16 w-16 text-foreground/5" />
                      <blockquote className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic mb-6 z-10 relative">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarHint} />
                          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
