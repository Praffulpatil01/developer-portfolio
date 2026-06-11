import { portfolioData } from "@/data/portfolioData";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, LayoutTemplate, Sparkles, Database, Layers } from "lucide-react";

const getIcon = (index: number) => {
  const icons = [LayoutTemplate, Database, Code, Sparkles, Layers];
  const Icon = icons[index % icons.length];
  return <Icon className="w-8 h-8 text-primary" />;
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30 relative" id="services">
      <div className="container mx-auto px-6">
        <SlideUp>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technical solutions tailored to your business needs.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.services.map((service, i) => (
            <StaggerItem key={i}>
              <Card className="h-full bg-card hover:bg-muted/50 transition-colors border-border">
                <CardHeader>
                  <div className="p-3 bg-primary/10 w-fit rounded-xl mb-4">
                    {getIcon(i)}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
