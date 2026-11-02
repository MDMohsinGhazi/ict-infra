"use client";

import { ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { NAV_LINKS } from "@/data/navigation";

interface HeaderProps {
  onOpenQuote: () => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      {/* Mobile Bar (< lg) */}
      <div className="lg:hidden h-16 px-4 flex items-center justify-between gap-2">
        <a href="/" className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-white font-bold font-condensed text-lg">
            RA
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-condensed text-base text-white tracking-wider font-bold truncate">
              {COMPANY_INFO.name}
            </span>
            <span className="font-label-sm text-[10px] text-zinc-400 uppercase tracking-widest leading-none truncate">
              Smart Technologies LLC
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 shrink-0">
          <a
            aria-label="Direct Phone Line"
            className="w-9 h-9 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors"
            href={`tel:${COMPANY_INFO.phone}`}
            title="Call Us"
          >
            <Phone className="w-4 h-4 text-primary-container" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-lg bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Top Utility Bar (lg+) */}
      <div className="hidden lg:block bg-[#000000] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between font-label-sm text-xs text-zinc-400">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary-container" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary-container" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Abu Dhabi &amp; Dubai, UAE</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-white/5 font-label-sm text-[11px] text-zinc-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              ADMCC Certified • SIRA Compliant • ISO 9001:2015
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Main App Bar (lg+) */}
      <div className="hidden lg:flex h-20 max-w-7xl mx-auto px-6 items-center justify-between gap-6">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-white font-bold font-condensed text-xl shadow-md group-hover:scale-105 transition-transform">
            RA
          </div>
          <div className="flex flex-col">
            <span className="font-condensed text-2xl text-white tracking-wider font-bold leading-tight group-hover:text-primary-container transition-colors">
              {COMPANY_INFO.name}
            </span>
            <span className="font-label-sm text-[10px] text-zinc-400 tracking-widest uppercase font-semibold leading-none">
              Smart Technologies LLC • UAE
            </span>
          </div>
        </a>

        {/* Desktop Navigation (Transit style condensed uppercase) */}
        <nav
          className="flex items-center gap-6 xl:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-condensed text-base font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-container hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Direct Phone Line"
          >
            <Phone className="w-4 h-4 text-primary-container" />
          </a>
          <button
            type="button"
            onClick={onOpenQuote}
            className="h-10 px-6 rounded-none bg-primary-container hover:bg-primary text-white font-condensed text-base font-bold tracking-wider uppercase transition-all active:scale-[0.98] cursor-pointer shadow-md"
          >
            Talk to an Expert
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-condensed text-lg uppercase tracking-wider font-bold text-zinc-200 hover:text-white py-2.5 border-b border-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-primary-container" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-none bg-primary-container text-white font-condensed text-base uppercase font-bold tracking-wider text-center hover:bg-primary transition-all cursor-pointer"
              >
                Talk to an Expert
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 rounded-none border border-white/20 text-white font-condensed text-sm uppercase font-semibold tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary-container" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
