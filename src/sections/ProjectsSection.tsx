import { SlideUp } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function ProjectsSection() {
  return (
    <section className="py-xl px-margin max-w-7xl mx-auto" id="work">
      <SlideUp className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-display-lg-mobile text-display-lg-mobile">Featured Projects</h2>
          <p className="text-on-surface-variant">A collection of select work from the past year.</p>
        </div>
        <a className="text-primary hover:underline font-body-sm flex items-center gap-xs" href="https://github.com/Praffulpatil01" target="_blank" rel="noopener noreferrer">
          View all on GitHub <span className="material-symbols-outlined">arrow_outward</span>
        </a>
      </SlideUp>

      <StaggerContainer className="grid md:grid-cols-2 gap-lg">
        {/* Project 1 */}
        <StaggerItem>
          <div className="glass-card rounded-3xl overflow-hidden group h-full">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6IxeJi5AFhE-y_p1hZphfGFgfmx8YWKSnS9XOruih-x9BtihsQBNQGuwhQACuPXTOE3ZWPyMyUBBdUDLrUEv_njx543NipSKUIqo7fDraoNZaj22XiNEaea-l1VqrRsfcDlZPNd8xIcwWQhyvlCma5zKILL7aQEpMXi7Zd2BQEkv3ko9LvpcaBNXuLNNI9V4z0PEIlMHfnT7ZMuTeZNt5g685uAi6yH9lOhFCYNV7Sw1h7ZHl1CeDc_g98vNuk7ZhwtRDYFb5Jlli" alt="Project 1" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <div className="p-lg space-y-md">
              <div className="flex gap-xs">
                <span className="px-xs py-unit bg-primary/10 text-primary text-[10px] uppercase font-bold rounded">.NET Core</span>
                <span className="px-xs py-unit bg-primary/10 text-primary text-[10px] uppercase font-bold rounded">Next.js</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Farm.io - Precision Agriculture</h3>
              <p className="text-on-surface-variant text-body-base">An IoT-integrated platform for monitoring soil health and crop growth using real-time sensor data and predictive analytics.</p>
              <div className="flex gap-md pt-xs">
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">link</span> Live Demo</a>
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">code</span> Repository</a>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Project 2 */}
        <StaggerItem>
          <div className="glass-card rounded-3xl overflow-hidden group h-full">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK3Sp_Fngat3kI5kZ2iMUkrD2VhuGsl_4Dt510Z8i_TZlbaO1eibOo0ds7mHDKPbNtdkaNEqhuJ_nvYbniQ6oTBB-YOFk0DxXuFkS6L36dK6w_n5rawcMXgPt45TWz7IwydbdzfiJ0KwsBCiDy3KYRPGmlBwaGF120_LtqW4L6CJqH3hwP5CHtKdieQV75ZcEUR1ls-e-Kbs_bXsURF4JyO-trG0y3MLEpZsILZku0ixXAh-Sny104yK_P2Qi7W9KRmuNrEUy99nPh" alt="Project 2" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <div className="p-lg space-y-md">
              <div className="flex gap-xs">
                <span className="px-xs py-unit bg-secondary/10 text-secondary text-[10px] uppercase font-bold rounded">OpenAI API</span>
                <span className="px-xs py-unit bg-secondary/10 text-secondary text-[10px] uppercase font-bold rounded">LangChain</span>
              </div>
              <h3 className="font-headline-md text-headline-md">AI Business Assistant</h3>
              <p className="text-on-surface-variant text-body-base">Context-aware AI agent that integrates with company Slack and Jira to automate meeting summaries and task creation.</p>
              <div className="flex gap-md pt-xs">
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">link</span> Live Demo</a>
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">code</span> Repository</a>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Project 3 */}
        <StaggerItem>
          <div className="glass-card rounded-3xl overflow-hidden group h-full">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdpe9GcTcAU-YUXcdzPbHUeSTE-PKBDsgwzLbjBr3OvA-MHYw-cKFmyJq2nLUBbswOv9raKRfsrN3DbvoJuPBzjJVopQ8D3h7WEeOdRJs5Bd85tebP_-QMnYieITm_f7vP7f2dj-RDVg7bdcX7NKeZLEuVN8Jk_kKtd3aWJyJ89FOLP4bra6IAoY4ekuS3-kOSgxzymllTav5nK71fLPWPNO_nQt4q1WcFr0E8NazywHrGTK8pRtzpZQUx5Qxiz6nk-lT7xBr7XIS" alt="Project 3" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <div className="p-lg space-y-md">
              <div className="flex gap-xs">
                <span className="px-xs py-unit bg-tertiary/10 text-tertiary text-[10px] uppercase font-bold rounded">Python</span>
                <span className="px-xs py-unit bg-tertiary/10 text-tertiary text-[10px] uppercase font-bold rounded">Pinecone</span>
              </div>
              <h3 className="font-headline-md text-headline-md">RAG Knowledge Platform</h3>
              <p className="text-on-surface-variant text-body-base">Enterprise search platform that uses vector embeddings to provide instant answers from millions of internal documents.</p>
              <div className="flex gap-md pt-xs">
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">link</span> Live Demo</a>
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">code</span> Repository</a>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Project 4 */}
        <StaggerItem>
          <div className="glass-card rounded-3xl overflow-hidden group h-full">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU0YrO4W9wufKm-UXWLJiddbRtnFDkeOpc6RlVX6KP6HP2B_tPLX3EwBT3bck1wu5NKyLa_7rXZQ5eHVVLnkuxdTmMRMAEeG_8pbaoBJIHMgNFI3USdegaZkk2or377ufTvZrDixHi4v7eWv5EVCpSbSw3-oZVGNYLP3muG6Uv7Kkgs4YGMzQPzNMxCLDWRqF1Oov0JXQe5K9qQE-BxmNBnCyZonPtyOA81eAj0Z2j07jLXzUYBEje0o-HwbHVhPiXYy6NUjRGE5hs" alt="Project 4" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <div className="p-lg space-y-md">
              <div className="flex gap-xs">
                <span className="px-xs py-unit bg-on-surface-variant/10 text-on-surface-variant text-[10px] uppercase font-bold rounded">React Admin</span>
                <span className="px-xs py-unit bg-on-surface-variant/10 text-on-surface-variant text-[10px] uppercase font-bold rounded">PostgreSQL</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Management Dashboard</h3>
              <p className="text-on-surface-variant text-body-base">A custom ERP solution for SMEs featuring inventory tracking, automated billing, and real-time sales reporting.</p>
              <div className="flex gap-md pt-xs">
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">link</span> Live Demo</a>
                <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs text-body-sm" href="#"><span className="material-symbols-outlined text-sm">code</span> Repository</a>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
