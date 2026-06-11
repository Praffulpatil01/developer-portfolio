import { portfolioData } from "@/data/portfolioData";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6">
        <SlideUp>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              What people I've worked with have to say.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border relative pt-10">
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote size={40} />
                </div>
                <CardContent className="pt-6 relative z-10">
                  <p className="text-lg text-foreground italic mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl text-primary">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
