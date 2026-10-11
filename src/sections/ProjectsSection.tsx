import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { portfolioData } from "@/data/portfolioData";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section className="py-xl px-margin max-w-7xl mx-auto" id="work">
      <SlideUp className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-md">
        <div>
          <div className="inline-flex items-center gap-xs px-sm py-unit rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-sm">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>BACKEND SYSTEMS & ARCHITECTURE</span>
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg">
            {projects.title}
          </h2>
          <p className="text-on-surface-variant max-w-2xl text-body-base mt-xs">
            {projects.subtitle}
          </p>
        </div>
        <a
          className="text-primary hover:text-primary/80 font-body-sm flex items-center gap-xs self-start md:self-auto transition-colors"
          href={projects.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile <span className="material-symbols-outlined text-sm">arrow_outward</span>
        </a>
      </SlideUp>

      <StaggerContainer className="grid md:grid-cols-2 gap-lg">
        {projects.list.map((project, index) => {
          const isDefault = project.tagColor === "on-surface-variant";
          const bgClass = isDefault ? "bg-on-surface-variant/10" : `bg-${project.tagColor}/10`;
          const textClass = isDefault ? "text-on-surface-variant" : `text-${project.tagColor}`;
          const borderClass = isDefault ? "border-on-surface-variant/20" : `border-${project.tagColor}/20`;

          return (
            <StaggerItem key={index}>
              <div className="glass-card rounded-3xl p-lg md:p-xl flex flex-col justify-between h-full border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden group">
                {/* Ambient glow accent */}
                <div
                  className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity ${bgClass}`}
                />

                <div>
                  {/* Top Header: Icon + Category + Status */}
                  <div className="flex items-center justify-between mb-lg">
                    <div className="flex items-center gap-md">
                      <div
                        className={`w-12 h-12 rounded-2xl ${bgClass} ${borderClass} border flex items-center justify-center ${textClass} shadow-inner transition-transform group-hover:scale-105 duration-300`}
                      >
                        <span className="material-symbols-outlined text-2xl">
                          {project.icon || "dns"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono tracking-wider uppercase text-on-surface-variant block">
                          {project.category || "Backend APIs"}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-on-surface font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          {project.badge || "Production APIs"}
                        </span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-white/5 text-on-surface-variant/60 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">api</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline-md text-headline-md mb-xs font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* High-level Description */}
                  <p className="text-on-surface-variant text-body-base mb-md leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights / Responsibilities */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-lg p-md rounded-2xl bg-surface-container/40 border border-white/5">
                      <div className="text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs text-primary">terminal</span>
                        Key API Responsibilities:
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-body-sm text-on-surface/90 flex items-start gap-2 leading-snug"
                          >
                            <span className="text-primary text-xs mt-0.5">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-xs mb-lg">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 ${bgClass} ${textClass} text-[11px] font-mono font-medium rounded-lg border ${borderClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Info */}
                <div className="pt-md border-t border-white/5 flex items-center justify-between text-on-surface-variant text-body-sm">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-on-surface-variant/80">
                    <span className="material-symbols-outlined text-sm text-primary">hub</span>
                    <span>REST APIs • Microservices</span>
                  </div>

                  <div className="flex items-center gap-md">
                    {project.demoLink && project.demoLink !== "#" ? (
                      <a
                        className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm"
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-sm">link</span> Live Demo
                      </a>
                    ) : null}
                    {project.repoLink && project.repoLink !== "#" ? (
                      <a
                        className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm"
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-sm">code</span> Repository
                      </a>
                    ) : (
                      <span className="text-[11px] text-on-surface-variant/60 flex items-center gap-1 font-mono">
                        <span className="material-symbols-outlined text-xs">verified</span> Production Service
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
