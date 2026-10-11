import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-xl px-margin">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="flex flex-col gap-xs items-center md:items-start">
          <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">{footer.name}</div>
          <p className="text-on-surface-variant font-body-sm text-body-sm opacity-80">{footer.copyright}</p>
        </div>
        <div className="flex gap-lg">
          {footer.socials.map((social, index) => (
            <a 
              key={index}
              className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 font-body-sm text-body-sm" 
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
