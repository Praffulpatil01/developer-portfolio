import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-xl flex items-center px-margin max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-xl items-center relative">
        <div className="hero-glow -left-1/4 top-0"></div>
        <div className="flex flex-col gap-lg z-10">
          <StaggerContainer delayOffset={0.15} className="space-y-sm">
            <StaggerItem>
              <span className="text-secondary font-code-label text-code-label uppercase tracking-widest bg-secondary/10 px-sm py-1 rounded-full">
                Full Stack Engineer & AI Specialist
              </span>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-none mt-4">
                Building <span className="text-primary">Scalable Software</span>, Intelligent AI Systems.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-on-surface-variant font-body-base text-body-base max-w-[36rem] mt-4">
                Specializing in .NET microservices, React ecosystems, and advanced RAG-based AI agents. I transform complex business requirements into elegant, high-performance digital products.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-md mt-6">
                <a className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] transition-all" href="#contact">
                  Hire Me
                </a>
                <a className="border border-white/10 bg-white/5 px-xl py-md rounded-lg font-bold hover:bg-white/10 transition-all" href="#work">
                  View Projects
                </a>
                <a className="border border-white/10 bg-white/5 px-xl py-md rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-xs" href="/resume.pdf" download>
                  <span className="material-symbols-outlined text-sm">download</span> Resume
                </a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex gap-xl pt-lg border-t border-white/5 mt-8">
                <div>
                  <div className="text-primary font-display-lg-mobile text-display-lg-mobile font-bold">2+</div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm">Years Exp.</div>
                </div>
                <div>
                  <div className="text-primary font-display-lg-mobile text-display-lg-mobile font-bold">15+</div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm">Projects Delivered</div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="hero-glow -right-1/4 bottom-0"></div>
          <div className="relative w-full max-w-[28rem] aspect-square">
            <div className="absolute inset-0 flex items-center justify-center orbit-container">
              <div className="absolute w-12 h-12 bg-surface-container rounded-full flex items-center justify-center border border-primary/30 orbit-icon" style={{ animationDelay: "-5s" }}>
                <img alt="dotNET" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJLyjwmnNdS5GdrDjna3S7JvRB6kCRm7Yj6cS_AMtGBl01ulBCn5ECbffRjvnK56amiyfEtFKeR08dyN_T5O4e8rzmHNLS3jI9OsDF23IeE8eKVAX5u1_I3m5xR7mvCkdWPJWWMrBItPet_mCxkOF5BAU1M5IU6wzYbQ7dy76-pMm6ze3qDIQjoDf93F37TfIBEEJzYLiWm1jpO6CQAVh6kMZhGoBQQJr62B_SQ7NtuxSeb4skQujffK2wKr1bRoZf6x_-RnlVgwyW" />
              </div>
              <div className="absolute w-12 h-12 bg-surface-container rounded-full flex items-center justify-center border border-primary/30 orbit-icon" style={{ animationDelay: "-10s" }}>
                <img alt="React" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWJ4ulg5oJAqldf1FGlccJDXmIPMAQl2FBUseatyRQEB0MpbxTEcuoCFWAuwIYlkJcpkeFGQd4hR0Y09Um2PMf4HDKcE3Gv1iggOUBmkPqzutDVI0nGNbZDWI-BTEV6S4aXLS_uAAEetCVF-GfeVw0geerzsgYNb_9AU2ku2avUagOrFItxSUNADBl86kdg_3t160eE_G6xrRwBroHneL9NK-bJho3Sw9FoOlmwma90sH2xFUzQswKlm-IiSzT8qMPKyPPFeuqmLzr" />
              </div>
              <div className="absolute w-12 h-12 bg-surface-container rounded-full flex items-center justify-center border border-primary/30 orbit-icon" style={{ animationDelay: "-15s" }}>
                <img alt="Python" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkARbuJMgTRFsEY_1-2kVbaXqM2kk8pnstil_jjuR2DORM__ebnkZlbaijuaXF8tEjXsxGGDzA3Ds29WOmHfDuPu1zkkeG0SCswJ4_tOWWSF0JJFarp-4HBgFLMqYXQDQLGKzxWPZ5zSDgfiOtO21YSAiLWL88NONNPcTFUz_dxpebOPunoAcgyUo6GFs_D-CQWHCOWIZtUi7K8lYe-r8T9j7v7VtojO47nlYepTixpo5wtEyE0WeAcwLQowlFLu_yk5UPEwVYA3Gd" />
              </div>
            </div>
            
            <FadeIn delay={0.4}>
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-[0_0_80px_rgba(192,193,255,0.15)] group">
                <img alt="Prafful Patil Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/profile.jpeg" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
