import { SlideUp } from "@/components/animations/SlideUp";

export function AboutSection() {
  return (
    <section className="py-xl px-margin max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-xl items-center">
        <SlideUp className="space-y-md">
          <h2 className="font-display-lg-mobile text-display-lg-mobile">
            Product-First <br/><span className="text-primary">Engineering Philosophy</span>
          </h2>
          <p className="text-on-surface-variant font-body-base text-body-base">
            I don't just write code; I build solutions that drive business value. My approach combines rigorous software engineering principles with deep product thinking. Whether it's architecting a high-throughput .NET backend or designing an intuitive AI-driven interface, my focus is always on performance, scalability, and user delight.
          </p>
          <div className="grid grid-cols-2 gap-md">
            <div className="p-md bg-surface-container rounded-xl border border-white/5">
              <span className="material-symbols-outlined text-secondary mb-xs">architecture</span>
              <h4 className="font-bold">System Design</h4>
              <p className="text-body-sm text-on-surface-variant">Scalable microservices and cloud-native architecture.</p>
            </div>
            <div className="p-md bg-surface-container rounded-xl border border-white/5">
              <span className="material-symbols-outlined text-tertiary mb-xs">psychology_alt</span>
              <h4 className="font-bold">AI Engineering</h4>
              <p className="text-body-sm text-on-surface-variant">Context-aware agents and RAG implementations.</p>
            </div>
          </div>
        </SlideUp>

        <SlideUp delay={0.2} className="glass-card p-lg rounded-3xl space-y-md">
          <div className="flex items-center gap-sm">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-code-label text-on-surface-variant ml-auto">prafful-patil.config</span>
          </div>
          <div className="font-code-label text-body-sm text-on-surface-variant overflow-x-auto">
            <pre><code>{`{
  "focus": "Full-Stack + AI",
  "philosophy": "Precision. Performance. Purpose.",
  "location": "Global / Remote",
  "stack": {
    "backend": [".NET Core", "Python", "Node.js"],
    "frontend": ["React", "Next.js", "Tailwind"],
    "ai": ["RAG", "MCP", "AI Agents"]
  }
}`}</code></pre>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
