"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SlideUp } from "@/components/animations/SlideUp";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { contact } = portfolioData;
  const [state, handleSubmit] = useForm(contact.formspreeId);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-xl px-margin max-w-7xl mx-auto relative" id="contact">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <SlideUp className="text-center mb-xl relative z-10">
        <div className="inline-flex items-center gap-xs px-sm py-unit rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-md">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span>{contact.badge}</span>
        </div>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-sm">
          Ready to Build{" "}
          <span className="text-primary">Something Extraordinary?</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-body-base leading-relaxed">
          {contact.subtitle}
        </p>
      </SlideUp>

      <div className="grid lg:grid-cols-12 gap-xl max-w-6xl mx-auto relative z-10 items-start">
        {/* LEFT COLUMN: Contact Cards & Availability */}
        <SlideUp delay={0.1} className="lg:col-span-5 space-y-md">
          {/* Email Card */}
          <div className="glass-card p-lg rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1"
                title="Copy email to clipboard"
              >
                <span className="material-symbols-outlined text-xs">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <div className="text-on-surface-variant text-body-sm font-mono uppercase tracking-wider mb-1">
              Direct Email
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-[17px] font-semibold text-on-surface hover:text-primary transition-colors block break-all"
            >
              {contact.email}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="glass-card p-lg rounded-2xl border border-white/5 hover:border-[#25D366]/30 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-sm">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#25D366]/10 text-[#25D366] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Quick Reply
              </span>
            </div>
            <div className="text-on-surface-variant text-body-sm font-mono uppercase tracking-wider mb-1">
              WhatsApp & Phone
            </div>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-semibold text-on-surface hover:text-[#25D366] transition-colors block"
            >
              {contact.whatsapp}
            </a>
          </div>

          {/* Location & Status Card */}
          <div className="glass-card p-lg rounded-2xl border border-white/5 space-y-md">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </div>
              <div>
                <div className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                  Location
                </div>
                <div className="font-semibold text-on-surface text-body-sm">
                  {contact.location}
                </div>
              </div>
            </div>

            <div className="pt-sm border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                Availability
              </span>
              <span className="inline-flex items-center gap-1.5 px-sm py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {contact.availability}
              </span>
            </div>
          </div>
        </SlideUp>

        {/* RIGHT COLUMN: Modern Glassmorphic Contact Form */}
        <SlideUp delay={0.2} className="lg:col-span-7">
          <div className="glass-card p-lg md:p-xl rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {state.succeeded ? (
              <div className="py-xl px-md flex flex-col items-center justify-center text-center space-y-md">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-xs">
                  <span className="material-symbols-outlined text-3xl">done_all</span>
                </div>
                <h3 className="font-display-lg-mobile text-2xl font-bold text-on-surface">
                  Message Sent Successfully!
                </h3>
                <p className="text-on-surface-variant max-w-[460px] text-body-base leading-relaxed mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-md px-md py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-primary hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">restart_alt</span>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-md" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-md">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-on-surface-variant uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-lg">
                        person
                      </span>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-surface-container/60 hover:bg-surface-container/80 focus:bg-surface-container border border-white/10 focus:border-primary/60 rounded-xl pl-10 pr-md py-sm focus:outline-none transition-all duration-200 text-on-surface text-body-sm placeholder:text-on-surface-variant/30"
                        required
                      />
                    </div>
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-on-surface-variant uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-lg">
                        mail
                      </span>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full bg-surface-container/60 hover:bg-surface-container/80 focus:bg-surface-container border border-white/10 focus:border-primary/60 rounded-xl pl-10 pr-md py-sm focus:outline-none transition-all duration-200 text-on-surface text-body-sm placeholder:text-on-surface-variant/30"
                        required
                      />
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-inquiry"
                    className="block text-xs font-mono text-on-surface-variant uppercase tracking-wider"
                  >
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-lg">
                      category
                    </span>
                    <select
                      id="contact-inquiry"
                      name="inquiry_type"
                      defaultValue="fulltime"
                      className="w-full bg-surface-container/60 hover:bg-surface-container/80 focus:bg-surface-container border border-white/10 focus:border-primary/60 rounded-xl pl-10 pr-10 py-sm focus:outline-none transition-all duration-200 text-on-surface text-body-sm appearance-none cursor-pointer"
                      required
                    >
                      {contact.inquiryOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="bg-surface-container text-on-surface py-2"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/50 pointer-events-none text-lg">
                      expand_more
                    </span>
                  </div>
                  <ValidationError
                    prefix="Inquiry"
                    field="inquiry_type"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1"
                  />
                </div>

                {/* Message Details */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-on-surface-variant uppercase tracking-wider"
                  >
                    Project or Role Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project scope, engineering requirements, or role details..."
                    rows={4}
                    className="w-full bg-surface-container/60 hover:bg-surface-container/80 focus:bg-surface-container border border-white/10 focus:border-primary/60 rounded-xl p-md focus:outline-none transition-all duration-200 text-on-surface text-body-sm resize-none placeholder:text-on-surface-variant/30 leading-relaxed"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary text-on-primary font-bold py-md px-lg rounded-xl hover:shadow-[0_0_25px_rgba(192,193,255,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {state.submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        send
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
