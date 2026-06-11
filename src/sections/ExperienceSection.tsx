import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function ExperienceSection() {
  return (
    <section className="py-xl bg-surface-container-low">
      <div className="max-w-[56rem] mx-auto px-margin">
        <SlideUp>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-center mb-xl">Professional Journey</h2>
        </SlideUp>
        
        <StaggerContainer className="space-y-lg relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          {/* Exp Item 1 */}
          <StaggerItem>
            <div className="relative md:flex md:justify-between items-center group">
              <div className="md:w-[45%] mb-sm md:mb-0 md:text-right">
                <h4 className="text-primary font-bold text-headline-md">Senior Full-Stack Developer</h4>
                <p className="text-on-surface font-body-base">TechNova Solutions</p>
                <p className="text-on-surface-variant text-body-sm italic">2023 - Present</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block"></div>
              <div className="md:w-[45%] glass-card p-md rounded-xl">
                <p className="text-on-surface-variant text-body-sm">Leading the migration of legacy monolith to .NET microservices. Implementing AI-driven feature sets for data prediction.</p>
              </div>
            </div>
          </StaggerItem>

          {/* Exp Item 2 */}
          <StaggerItem>
            <div className="relative md:flex md:justify-between items-center group">
              <div className="md:w-[45%] order-2 mb-sm md:mb-0">
                <h4 className="text-secondary font-bold text-headline-md">Software Engineer</h4>
                <p className="text-on-surface font-body-base">InnovateX Labs</p>
                <p className="text-on-surface-variant text-body-sm italic">2022 - 2023</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background -translate-x-1/2 z-10 hidden md:block"></div>
              <div className="md:w-[45%] glass-card p-md rounded-xl order-1">
                <p className="text-on-surface-variant text-body-sm">Developed responsive React frontends and integrated third-party APIs. Reduced page load times by 40% via code splitting.</p>
              </div>
            </div>
          </StaggerItem>

          {/* Exp Item 3 */}
          <StaggerItem>
            <div className="relative md:flex md:justify-between items-center group">
              <div className="md:w-[45%] mb-sm md:mb-0 md:text-right">
                <h4 className="text-tertiary font-bold text-headline-md">AI/ML Developer Intern</h4>
                <p className="text-on-surface font-body-base">Quantum AI</p>
                <p className="text-on-surface-variant text-body-sm italic">2021 - 2022</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-tertiary border-4 border-background -translate-x-1/2 z-10 hidden md:block"></div>
              <div className="md:w-[45%] glass-card p-md rounded-xl">
                <p className="text-on-surface-variant text-body-sm">Built proof-of-concept RAG systems using LangChain and Python for legal document analysis.</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
