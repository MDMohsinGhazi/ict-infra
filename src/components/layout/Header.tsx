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
          ? "bg-[#00040d]/90 backdrop-blur-2xl border-b border-white/[0.12] shadow-2xl shadow-black/80"
          : "bg-[#00040d]/60 backdrop-blur-xl border-b border-white/[0.08]"
      }`}
    >
      {/* Symmetrical Luxury Tech Header Container */}
      <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between gap-6">
        {/* Left: Native Transparent Brand Logo (No White Box, No Strips) */}
        <a
          href="/"
          aria-label="Royal Arabian Smart Technologies"
          className="flex items-center shrink-0 py-2 group cursor-pointer transition-transform duration-200 active:scale-95"
        >
          <Image
            src="/images/royal-arabian-logo-dark.png"
            alt={COMPANY_INFO.legalName}
            width={240}
            height={85}
            className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            priority
          />
        </a>

        {/* Center: Frosted Floating Navigation Capsule */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full font-condensed text-sm xl:text-base font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: High-Conversion Luminous Capsule Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            type="button"
            onClick={onOpenQuote}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-container via-orange-600 to-amber-500 text-white font-condensed text-sm lg:text-base uppercase font-bold tracking-wider shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all duration-300 border border-white/20 cursor-pointer"
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
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-gradient-to-r from-primary-container to-orange-600 text-white font-condensed text-xs uppercase font-bold tracking-wider flex items-center gap-1 shadow-md border border-white/15"
            >
              <span>Quote</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-white/[0.08] text-white flex items-center justify-center hover:bg-white/[0.15] transition-colors cursor-pointer border border-white/[0.1]"
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
      </div>

      {/* Mobile Drawer Menu with Fluid Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#030712]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden"
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
                  className="font-condensed text-lg uppercase tracking-wider font-bold text-zinc-200 hover:text-white py-2.5 border-b border-white/5 transition-colors flex items-center justify-between"
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
                  className="w-full py-3 rounded-full bg-gradient-to-r from-primary-container to-orange-600 text-white font-condensed text-base uppercase font-bold tracking-wider text-center hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg border border-white/20"
                >
                  <span>Get Instant Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full py-2.5 rounded-full border border-white/15 text-white font-condensed text-sm uppercase font-semibold tracking-wider text-center flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
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
