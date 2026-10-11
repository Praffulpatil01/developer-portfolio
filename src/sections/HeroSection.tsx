import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { portfolioData } from "@/data/portfolioData";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="min-h-screen pt-xl flex items-center px-margin max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-xl items-center relative">
        <div className="hero-glow -left-1/4 top-0"></div>
        <div className="flex flex-col gap-lg z-10">
          <StaggerContainer delayOffset={0.15} className="space-y-sm">
            <StaggerItem>
              <span className="text-secondary font-code-label text-code-label uppercase tracking-widest bg-secondary/10 px-sm py-1 rounded-full">
                {hero.badge}
              </span>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-none mt-4">
                {hero.headingLine1} <span className="text-primary">{hero.headingHighlight}</span>{hero.headingLine2}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-on-surface-variant font-body-base text-body-base max-w-[36rem] mt-4">
                {hero.description}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-md mt-6">
                <a className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] transition-all" href={hero.buttons.primary.href}>
                  {hero.buttons.primary.label}
                </a>
                <a className="border border-white/10 bg-white/5 px-xl py-md rounded-lg font-bold hover:bg-white/10 transition-all" href={hero.buttons.secondary.href}>
                  {hero.buttons.secondary.label}
                </a>
                <a className="border border-white/10 bg-white/5 px-xl py-md rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-xs" href={hero.buttons.resume.href} download>
                  <span className="material-symbols-outlined text-sm">download</span> {hero.buttons.resume.label}
                </a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex gap-xl pt-lg border-t border-white/5 mt-8">
                {hero.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-primary font-display-lg-mobile text-display-lg-mobile font-bold">{stat.value}</div>
                    <div className="text-on-surface-variant font-body-sm text-body-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="hero-glow -right-1/4 bottom-0"></div>
          <div className="relative w-full max-w-[28rem] aspect-square">
            <FadeIn delay={0.4}>
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-[0_0_80px_rgba(192,193,255,0.15)] group">
                <img alt="Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={hero.profileImage} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
