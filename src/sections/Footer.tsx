export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-xl px-margin">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="flex flex-col gap-xs items-center md:items-start">
          <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">Prafful Patil</div>
          <p className="text-on-surface-variant font-body-sm text-body-sm opacity-80">© 2024 Prafful Patil. Engineered with Precision.</p>
        </div>
        <div className="flex gap-lg">
          <a className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="https://github.com/Praffulpatil01" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="https://www.linkedin.com/in/prafful-patil-5519572a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="https://wa.me/919527819970" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="mailto:prafulpatil.dev@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
