"use client";

import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { NAV_LINKS } from "@/data/navigation";

interface HeaderProps {
  onOpenQuote: () => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Mobile Bar (< lg) */}
      <div className="lg:hidden h-16 px-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* <Image
            src={COMPANY_INFO.logoUrl}
            alt={`${COMPANY_INFO.name} Logo`}
            width={40}
            height={32}
            className="h-8 w-auto object-contain shrink-0"
            priority
          /> */}
          <div className="flex flex-col min-w-0 pl-1">
            <span className="font-label-sm text-[11px] text-on-surface-variant truncate uppercase tracking-wider font-semibold">
              Royal Arabian
            </span>
            <span className="font-headline-sm text-base text-on-surface truncate leading-tight font-bold">
              Overview
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            aria-label="Emergency Field Hotline"
            className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center hover:bg-error hover:text-on-error transition-all shadow-[0_1px_4px_rgba(186,26,26,0.12)]"
            href={`tel:${COMPANY_INFO.mobiles[0] || COMPANY_INFO.phone}`}
            title="Emergency Support"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop Top Utility Bar (lg+) */}
      <div className="hidden lg:block bg-surface-container-low border-b border-border-hairline/40">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-tertiary" />
              <span>Abu Dhabi, UAE</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full bg-surface-container font-label-sm text-xs text-on-surface">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              ADMCC Certified &amp; ISO 9001:2015 Accredited
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Main App Bar (lg+) */}
      <div className="hidden lg:flex h-20 max-w-7xl mx-auto px-6 items-center justify-between gap-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          {/* <Image
            src={COMPANY_INFO.logoUrl}
            alt={`${COMPANY_INFO.name} Logo`}
            width={48}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          /> */}
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors font-bold">
              {COMPANY_INFO.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase leading-tight font-medium">
              {COMPANY_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="flex items-center gap-4 xl:gap-6 font-label-md text-label-md"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isHome = link.label === "Home";
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 ${
                  isHome
                    ? "bg-primary-container text-on-primary font-bold rounded-lg px-3 py-1.5 shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-primary-container text-on-primary font-label-md text-sm font-semibold shadow-xs hover:bg-primary transition-all active:scale-[0.99] cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Request Consultation</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-md border-b border-border-hairline px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface hover:text-primary font-title-md py-2 border-b border-border-hairline/40 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-primary" />
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full min-h-[44px] py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-center hover:bg-primary transition-all font-semibold"
              >
                Request Architecture Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
