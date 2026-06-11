"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { useForm, ValidationError } from '@formspree/react';

export function ContactSection() {
  const [state, handleSubmit] = useForm('mkoaqnok');

  return (
    <section className="py-xl px-margin max-w-7xl mx-auto" id="contact">
      <div className="grid md:grid-cols-2 gap-xl">
        <SlideUp className="space-y-lg">
          <h2 className="font-display-lg-mobile text-display-lg-mobile leading-tight">
            Ready to build something <span className="text-primary">extraordinary</span>?
          </h2>
          <p className="text-on-surface-variant font-body-base">
            I'm currently available for freelance projects and high-impact engineering roles. Let's discuss how we can bring your vision to life.
          </p>
          <div className="space-y-md">
            <a href="mailto:prafulpatil.dev@gmail.com" className="flex items-center gap-md group cursor-pointer hover:opacity-80 transition-all">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">Email</p>
                <p className="font-bold">prafulpatil.dev@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/919527819970" target="_blank" rel="noopener noreferrer" className="flex items-center gap-md group cursor-pointer hover:opacity-80 transition-all">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">WhatsApp</p>
                <p className="font-bold">+91 95278 19970</p>
              </div>
            </a>
          </div>
        </SlideUp>

        <FadeIn delay={0.2} className="glass-card p-lg rounded-3xl h-full flex flex-col justify-center">
          {state.succeeded ? (
            <div className="text-center space-y-md py-xl">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-bold">Message Sent!</h3>
              <p className="text-on-surface-variant">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="space-y-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="text-body-sm text-on-surface-variant ml-1">Name</label>
                  <input name="name" className="w-full bg-black border border-white/10 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="John Doe" type="text" required />
                  <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-400 text-xs ml-1" />
                </div>
                <div className="space-y-xs">
                  <label className="text-body-sm text-on-surface-variant ml-1">Email</label>
                  <input name="email" className="w-full bg-black border border-white/10 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="john@example.com" type="email" required />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs ml-1" />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="text-body-sm text-on-surface-variant ml-1">Company</label>
                <input name="company" className="w-full bg-black border border-white/10 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="Acme Inc." type="text" />
                <ValidationError field="company" prefix="Company" errors={state.errors} className="text-red-400 text-xs ml-1" />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="text-body-sm text-on-surface-variant ml-1">Project Type</label>
                  <select name="project_type" className="w-full bg-black border border-white/10 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface-variant">
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                  <ValidationError field="project_type" prefix="Project Type" errors={state.errors} className="text-red-400 text-xs ml-1" />
                </div>
                <div className="space-y-xs">
                  <label className="text-body-sm text-on-surface-variant ml-1">Budget</label>
                  <select name="budget" className="w-full bg-black border border-white/10 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface-variant">
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k+">$25k+</option>
                  </select>
                  <ValidationError field="budget" prefix="Budget" errors={state.errors} className="text-red-400 text-xs ml-1" />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="text-body-sm text-on-surface-variant ml-1">Message</label>
                <textarea name="message" className="w-full bg-black border border-white/10 rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface" placeholder="Tell me about your project..." rows={4} required></textarea>
                <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-xs ml-1" />
              </div>
              <button disabled={state.submitting} className="w-full bg-primary text-on-primary font-bold py-md rounded-lg hover:shadow-[0_0_30px_rgba(192,193,255,0.3)] transition-all flex items-center justify-center gap-sm disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
                {state.submitting ? "Sending..." : "Send Message"} <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
