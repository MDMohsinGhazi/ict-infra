"use client";

import { ArrowUpRight, ChevronRight, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { NAV_LINKS } from "@/data/navigation";

interface HeaderProps {
  onOpenQuote: () => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030303]/98 backdrop-blur-xl border-b border-white/15 shadow-2xl shadow-black/80"
          : "bg-[#050505]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
      }`}
    >
      {/* Unified GlobalWings-Style Clean Header Bar (No Phone/Email/Location Text) */}
      <div className="relative flex justify-between items-center w-full h-16 lg:h-20 pr-4 sm:pr-6 lg:pr-8">
        {/* Left: GlobalWings-Style Docked White Logo Box with Brand Color Accent Bars */}
        <div className="flex items-stretch h-full">
          <a
            href="/"
            aria-label="Royal Arabian Smart Technologies Home"
            className="relative bg-white px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-200 active:scale-95 group hover:bg-zinc-50"
          >
            <Image
              src="/images/royal-arabian-logo.jpg"
              alt={COMPANY_INFO.legalName}
              width={160}
              height={58}
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>
          {/* Vertical Brand Accent Strips (Royal Arabian Signature Orange + Sovereign Cyan) */}
          <div className="h-full w-2 sm:w-2.5 bg-primary-container" />
          <div className="h-full w-2 sm:w-2.5 bg-[#1b6afe]" />
        </div>

        {/* Center: Desktop Navigation Links (Absolute Centered like GlobalWings) */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 absolute left-1/2 -translate-x-1/2"
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

        {/* Right: Modern High-Conversion Action Button (Replacing 'Talk to expert') */}
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={onOpenQuote}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-container via-orange-600 to-primary-container bg-[length:200%_auto] hover:bg-right text-white font-condensed text-sm lg:text-base uppercase font-bold tracking-wider shadow-lg shadow-orange-950/40 hover:shadow-orange-500/30 transition-all duration-300 border border-white/20 cursor-pointer"
          >
            <span>Get Instant Quote</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.button>

          {/* Mobile Right Controls: Compact Quote Pill & Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenQuote}
              className="sm:hidden px-3 py-1.5 rounded-full bg-primary-container text-white font-condensed text-xs uppercase font-bold tracking-wider flex items-center gap-1 shadow-md"
            >
              <span>Quote</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-zinc-800/90 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors cursor-pointer border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Subtle Bottom Ambient Gradient Glow Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent pointer-events-none" />
      </div>

      {/* Mobile Drawer Menu with Fluid Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                <Image
                  src="/images/royal-arabian-logo-dark.png"
                  alt={COMPANY_INFO.legalName}
                  width={150}
                  height={53}
                  className="h-8 w-auto object-contain"
                />
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  EST. 2007 • UAE
                </span>
              </div>
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
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-primary-container to-orange-600 text-white font-condensed text-base uppercase font-bold tracking-wider text-center hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Get Instant Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full py-2.5 rounded-full border border-white/20 text-white font-condensed text-sm uppercase font-semibold tracking-wider text-center flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-container" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
