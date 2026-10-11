import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { portfolioData } from "@/data/portfolioData";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section className="py-xl bg-surface-container-low" id="experience">
      <div className="max-w-[56rem] mx-auto px-margin">
        <SlideUp>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-center mb-xl">{experience.title}</h2>
        </SlideUp>
        
        <StaggerContainer className="space-y-lg relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          {experience.list.map((exp, index) => {
            const isEven = index % 2 === 0;
            const textClass = exp.colorTheme === "primary" ? "text-primary" : exp.colorTheme === "secondary" ? "text-secondary" : "text-tertiary";
            const bgClass = exp.colorTheme === "primary" ? "bg-primary" : exp.colorTheme === "secondary" ? "bg-secondary" : "bg-tertiary";

            return (
              <StaggerItem key={index}>
                <div className="relative md:flex md:justify-between items-start group">
                  <div className={`md:w-[45%] mb-sm md:mb-0 ${isEven ? 'md:text-right' : 'order-2'}`}>
                    <h4 className={`${textClass} font-bold text-headline-md`}>{exp.role}</h4>
                    <p className="text-on-surface font-body-base">{exp.company}</p>
                    <p className="text-on-surface-variant text-body-sm italic">{exp.duration}</p>
                  </div>
                  <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${bgClass} border-4 border-background -translate-x-1/2 z-10 hidden md:block mt-1.5`}></div>
                  <div className={`md:w-[45%] glass-card p-md rounded-xl ${!isEven ? 'order-1' : ''}`}>
                    <div className="text-on-surface-variant text-body-sm whitespace-pre-wrap">{exp.description}</div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
