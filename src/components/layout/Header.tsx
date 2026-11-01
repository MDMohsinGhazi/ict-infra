"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { NAV_LINKS } from "@/data/navigation";

interface HeaderProps {
  onOpenQuote: () => void;
  activePath?: string;
}

export function Header({ onOpenQuote, activePath = "home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-safe bg-primary-container/95 lg:bg-primary-container backdrop-blur-xl shadow-[0_4px_20px_rgba(11,31,58,0.15)]">
      <div className="h-16 lg:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
        {/* Brand & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="/" className="flex items-center gap-2.5 sm:gap-4 group">
            <div className="relative h-7 w-9 sm:h-8 sm:w-12">
              <Image
                src={COMPANY_INFO.logoUrl}
                alt={`${COMPANY_INFO.name} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-base sm:text-title-md text-on-primary tracking-tight font-bold group-hover:text-tertiary-fixed transition-colors">
                {COMPANY_INFO.name}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              (link.href === "/" && activePath === "home") ||
              link.href.replace("#", "") === activePath;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors text-label-md font-label-md ${
                  isActive
                    ? "text-on-primary font-bold border-b-2 border-tertiary-fixed pb-0.5"
                    : "text-on-primary-container hover:text-on-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open Menu"
          className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-on-primary hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Gold Accent Strip */}
      <div className="h-[2px] w-full bg-gradient-to-r from-tertiary-fixed-dim via-[#C8A24A] to-tertiary-fixed-dim" />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary-container/98 backdrop-blur-md border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-primary hover:text-tertiary-fixed font-title-md py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-tertiary-fixed" />
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full min-h-[44px] py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-center hover:bg-secondary transition-all font-semibold"
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
