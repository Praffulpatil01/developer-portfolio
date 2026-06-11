"use client";

import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_50px_rgba(192,193,255,0.1)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-margin py-xs">
        <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">
          Prafful Patil
        </div>
        <div className="hidden md:flex gap-lg items-center">
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" href="#work">Work</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" href="#expertise">Expertise</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" href="#about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" href="#contact">Contact</a>
        </div>
        <button 
          onClick={() => window.location.href = "#contact"}
          className="bg-primary text-on-primary px-lg py-xs rounded-full font-body-sm text-body-sm font-bold scale-95 active:scale-90 transition-transform hover:bg-white/5 hover:text-primary border border-transparent hover:border-primary"
        >
          Hire Me
        </button>
      </nav>
    </header>
  );
}
