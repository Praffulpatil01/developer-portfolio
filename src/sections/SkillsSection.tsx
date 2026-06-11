import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function SkillsSection() {
  return (
    <section className="py-xl bg-surface-container-lowest/50" id="expertise">
      <div className="max-w-7xl mx-auto px-margin">
        <SlideUp className="text-center mb-xl space-y-xs">
          <h2 className="font-display-lg-mobile text-display-lg-mobile">Core Expertise</h2>
          <p className="text-on-surface-variant">Specialized skills developed over 2+ years of professional development.</p>
        </SlideUp>

        <StaggerContainer className="grid md:grid-cols-4 gap-gutter">
          <StaggerItem>
            <div className="glass-card p-lg rounded-2xl group hover:-translate-y-2 h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary">terminal</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">Backend</h3>
              <p className="text-on-surface-variant text-body-sm mb-md">Architecture of complex .NET Core, Python, and Node.js microservices.</p>
              <ul className="text-code-label space-y-xs text-primary/70">
                <li>• C# & .NET 8</li>
                <li>• Python & Node.js</li>
                <li>• SQL & Redis</li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-lg rounded-2xl group hover:-translate-y-2 h-full">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-md group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-secondary">layers</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">Frontend</h3>
              <p className="text-on-surface-variant text-body-sm mb-md">Modern web interfaces with React, Next.js and high-end UX.</p>
              <ul className="text-code-label space-y-xs text-secondary/70">
                <li>• TypeScript</li>
                <li>• Framer Motion</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-lg rounded-2xl group hover:-translate-y-2 h-full">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-md group-hover:bg-tertiary/20 transition-colors">
                <span className="material-symbols-outlined text-tertiary">smart_toy</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">AI & ML</h3>
              <p className="text-on-surface-variant text-body-sm mb-md">Integrating advanced LLMs and Agents into production apps.</p>
              <ul className="text-code-label space-y-xs text-tertiary/70">
                <li>• RAG Systems</li>
                <li>• MCP Integrations</li>
                <li>• AI Agents</li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-lg rounded-2xl group hover:-translate-y-2 h-full">
              <div className="w-12 h-12 rounded-lg bg-on-background/5 flex items-center justify-center mb-md group-hover:bg-on-background/10 transition-colors">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">Cloud</h3>
              <p className="text-on-surface-variant text-body-sm mb-md">Efficient deployment and management on modern infrastructure.</p>
              <ul className="text-code-label space-y-xs text-on-surface-variant/70">
                <li>• Azure / AWS</li>
                <li>• Docker</li>
                <li>• CI/CD Pipelines</li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
