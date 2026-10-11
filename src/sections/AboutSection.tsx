import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TypingTerminal } from "@/components/animations/TypingTerminal";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="py-xl px-margin max-w-7xl mx-auto relative" id="about">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid: Terminal LEFT + Header & Description RIGHT */}
      <div className="grid lg:grid-cols-2 gap-xl items-center mb-xl md:mb-[80px] relative z-10">
        {/* LEFT: Premium Typing Terminal Card */}
        <SlideUp delay={0.1} className="order-2 lg:order-1">
          <TypingTerminal terminal={about.terminal} />
        </SlideUp>

        {/* RIGHT: Badge, Heading, Description & CTA */}
        <SlideUp delay={0.2} className="flex flex-col justify-center order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-xs px-sm py-unit rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-md w-fit">
            <span className="material-symbols-outlined text-sm">person</span>
            <span>{about.badge}</span>
          </div>

          {/* Heading moved to the right column above description */}
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-tight mb-md">
            {about.headingLine1} <br />
            <span className="text-primary">{about.headingLine2}</span>
          </h2>

          {/* Description */}
          <p className="text-on-surface-variant font-body-base text-body-base leading-relaxed mb-lg">
            {about.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-md">
            <a
              href="#contact"
              className="bg-primary text-on-primary px-lg py-sm rounded-lg font-bold text-body-sm hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] transition-all"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#work"
              className="border border-white/10 bg-white/5 px-lg py-sm rounded-lg font-bold text-body-sm hover:bg-white/10 transition-all"
            >
              View Work
            </a>
          </div>
        </SlideUp>
      </div>

      {/* Engineering Pillars Row */}
      <StaggerContainer className="grid sm:grid-cols-3 gap-gutter mb-xl relative z-10">
        {about.pillars.map((pillar, index) => {
          const isDefault = pillar.colorTheme === "on-surface-variant";
          const bgClass = isDefault ? "bg-on-background/5" : `bg-${pillar.colorTheme}/10`;
          const hoverBgClass = isDefault ? "group-hover:bg-on-background/10" : `group-hover:bg-${pillar.colorTheme}/20`;
          const textClass = isDefault ? "text-on-surface-variant" : `text-${pillar.colorTheme}`;
          const borderHover = isDefault ? "hover:border-on-surface-variant/30" : `hover:border-${pillar.colorTheme}/30`;

          return (
            <StaggerItem key={index}>
              <div className={`glass-card p-lg rounded-2xl group hover:-translate-y-1 transition-all duration-300 h-full border border-white/5 ${borderHover}`}>
                <div className={`w-12 h-12 rounded-xl ${bgClass} ${hoverBgClass} flex items-center justify-center mb-md transition-colors`}>
                  <span className={`material-symbols-outlined ${textClass}`}>{pillar.icon}</span>
                </div>
                <h3 className="font-headline-md text-[18px] font-semibold mb-xs leading-tight">{pillar.title}</h3>
                <p className="text-on-surface-variant text-body-sm leading-relaxed">{pillar.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Impact Metrics Row */}
      <SlideUp delay={0.1} className="relative z-10">
        <div className="glass-card rounded-2xl p-sm border border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5">
            {about.metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-md px-sm text-center group">
                <span className="material-symbols-outlined text-primary/60 text-xl mb-2 group-hover:text-primary transition-colors">
                  {metric.icon}
                </span>
                <span className="text-primary font-display-lg-mobile text-[28px] font-bold leading-none mb-1">
                  {metric.value}
                </span>
                <span className="text-on-surface-variant text-[12px] font-mono tracking-wide uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SlideUp>
    </section>
  );
}
