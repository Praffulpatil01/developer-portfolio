import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { portfolioData } from "@/data/portfolioData";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className="py-xl bg-surface-container-lowest/50" id="expertise">
      <div className="max-w-7xl mx-auto px-margin">
        <SlideUp className="text-center mb-xl space-y-xs">
          <h2 className="font-display-lg-mobile text-display-lg-mobile">{skills.title}</h2>
          <p className="text-on-surface-variant">{skills.subtitle}</p>
        </SlideUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {skills.categories.map((category, index) => {
            const isDefault = category.colorTheme === "on-surface-variant";
            const bgClass = isDefault ? "bg-on-background/5" : `bg-${category.colorTheme}/10`;
            const hoverBgClass = isDefault ? "group-hover:bg-on-background/10" : `group-hover:bg-${category.colorTheme}/20`;
            const textClass = isDefault ? "text-on-surface-variant" : `text-${category.colorTheme}`;
            const listClass = isDefault ? "text-on-surface-variant/70" : `text-${category.colorTheme}/70`;

            return (
              <StaggerItem key={index}>
                <div className="glass-card p-lg rounded-2xl group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-lg ${bgClass} flex items-center justify-center mb-md ${hoverBgClass} transition-colors`}>
                      <span className={`material-symbols-outlined ${textClass}`}>{category.icon}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-xs">{category.title}</h3>
                    <p className="text-on-surface-variant text-body-sm mb-md">{category.description}</p>
                  </div>
                  <ul className={`text-code-label space-y-xs ${listClass}`}>
                    {category.skills.map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
