"use client";

import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  Network,
  Phone,
  Server,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroNetwork } from "@/components/ui/HeroNetwork";
import { COMPANY_INFO } from "@/data/company";

interface HeroSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

const CINEMATIC_SYSTEMS = [
  {
    id: "surveillance",
    code: "01",
    tag: "SURVEILLANCE & AI ANALYTICS",
    category: "ADMCC & SIRA COMPLIANCE",
    headlineLine1: "ENGINEERING SOVEREIGN",
    headlineHighlight: "SURVEILLANCE ARCHITECTURE.",
    subtitle:
      "ADMCC & SIRA approved ultra-HD visual security networks, thermal perimeter fencing, and deep-learning video analytics safeguarding government facilities across Abu Dhabi & Dubai.",
    imageUrl: "/images/hero-cinematic-2.jpg",
    metricValue: "180 DAYS",
    metricLabel: "Forensic Retention",
    spec: "ADMCC / SIRA Certified",
    shortTitle: "CCTV & ADMCC",
    icon: Camera,
  },
  {
    id: "datacenter",
    code: "02",
    tag: "QUANTUM INFRASTRUCTURE",
    category: "TIER-III DATA CENTERS",
    headlineLine1: "MISSION-CRITICAL",
    headlineHighlight: "DATA CORE & OPTICAL FIBER.",
    subtitle:
      "Turnkey data center deployment, low-latency optical backbones, and intelligent power redundancy engineered for zero-downtime operational sovereignty.",
    imageUrl: "/images/hero-cinematic-1.jpg",
    metricValue: "99.98% SLA",
    metricLabel: "Uptime Guarantee",
    spec: "Tier-III Redundancy",
    shortTitle: "Data Centers",
    icon: Server,
  },
  {
    id: "biometrics",
    code: "03",
    tag: "PHYSICAL ACCESS & IDENTITY",
    category: "ENTERPRISE ACCESS CONTROL",
    headlineLine1: "ZERO-TRUST BIOMETRIC &",
    headlineHighlight: "SECURITY GATEWAYS.",
    subtitle:
      "Gallagher & HID multi-factor access protocols, contactless facial recognition turnstiles, and automated vehicle barriers for high-security commercial towers and energy installations.",
    imageUrl: "/images/hero-cinematic-6.jpg",
    metricValue: "< 0.3 SEC",
    metricLabel: "Authentication",
    spec: "Multi-Factor & Anti-Tailgating",
    shortTitle: "Access & Bio",
    icon: Fingerprint,
  },
  {
    id: "connectivity",
    code: "04",
    tag: "GCC OPERATIONAL RIGOR",
    category: "SMART NATION CONNECTIVITY",
    headlineLine1: "ARCHITECTING NEXT-GEN",
    headlineHighlight: "INTELLIGENT METROPOLIS.",
    subtitle:
      "Over 20 years of trusted system integration in the UAE. Empowering energy fields, healthcare towers, airports, and universities with resilient ELV automation.",
    imageUrl: "/images/hero-cinematic-3.jpg",
    metricValue: "8,000+",
    metricLabel: "Enterprise Deployments",
    spec: "Est. Abu Dhabi 2007",
    shortTitle: "Smart City ELV",
    icon: Network,
  },
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Auto-advance slides every 8.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CINEMATIC_SYSTEMS.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % CINEMATIC_SYSTEMS.length);
  };

  const prevSlide = () => {
    setCurrentIdx(
      (prev) =>
        (prev - 1 + CINEMATIC_SYSTEMS.length) % CINEMATIC_SYSTEMS.length,
    );
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = touchStartX - e.changedTouches[0].clientX;
    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const activeSystem = CINEMATIC_SYSTEMS[currentIdx];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[100svh] sm:min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#00040d] overflow-hidden select-none"
    >
      {/* 1. Cinematic 3D Camera Drift & Continuous Ken Burns Zoom Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`cinematic-${activeSystem.id}`}
          initial={{ opacity: 0, scale: 1, x: 0 }}
          animate={{
            opacity: 1,
            scale: 1.15,
            x: "-1.5%",
          }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            scale: { duration: 10, ease: "linear" },
            x: { duration: 10, ease: "linear" },
            opacity: { duration: 1.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu will-change-transform"
        >
          <Image
            src={activeSystem.imageUrl}
            alt={`${activeSystem.headlineLine1} ${activeSystem.headlineHighlight}`}
            fill
            className="object-cover object-center filter brightness-[0.7] contrast-120"
            priority={currentIdx === 0}
            sizes="100vw"
          />

          {/* Deep Cinematic Atmosphere Overlays */}
          {/* Radial Navy/Sapphire Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_50%_25%,rgba(11,31,58,0.72),rgba(0,4,13,0.95))]" />

          {/* Directional Horizontal Shadow: Darker at bottom and left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00040d] via-transparent to-black/75" />

          {/* Fine High-Tech Horizon Scanning Line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Cyber Mesh Network Interactive Canvas Layer */}
      <HeroNetwork />

      {/* Desktop Navigation Arrow Left (Floating Pill) */}
      <motion.button
        type="button"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous Cinematic System"
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 text-white border border-white/20 items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-2xl hover:border-primary-container group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Desktop Navigation Arrow Right (Floating Pill) */}
      <motion.button
        type="button"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next Cinematic System"
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 text-white border border-white/20 items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-2xl hover:border-primary-container group"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* 2. Hero Center Content: Mobile-First Responsive Typography & Action Core */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-36 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${activeSystem.id}`}
            className="flex flex-col items-center max-w-5xl w-full"
          >
            {/* System Protocol Capsule */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-zinc-900/80 border border-white/20 text-white font-mono text-[11px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-6 backdrop-blur-xl shadow-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shrink-0" />
              <span className="text-primary-container font-bold">
                [SYSTEM {activeSystem.code}]
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-none">
                {activeSystem.tag}
              </span>
            </motion.div>

            {/* Kinetic Typography: Scaled with extreme mobile balance & Liquid Gold-Amber Glow */}
            <motion.h1
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
              transition={{
                duration: 0.75,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-hero-condensed text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.03] mb-4 sm:mb-6 uppercase text-shadow-lg text-balance"
            >
              {activeSystem.headlineLine1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 drop-shadow-[0_0_35px_rgba(249,115,22,0.6)] block sm:inline">
                {activeSystem.headlineHighlight}
              </span>
            </motion.h1>

            {/* Subtitle with High-Legibility Contrast */}
            <motion.p
              initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-zinc-300 max-w-3xl text-xs sm:text-base lg:text-lg font-normal leading-relaxed mb-6 sm:mb-10 text-balance uppercase tracking-wider line-clamp-3 sm:line-clamp-none px-2 sm:px-0"
            >
              {activeSystem.subtitle}
            </motion.p>

            {/* Action Buttons: Responsive Flow on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-12"
            >
              <motion.button
                type="button"
                onClick={() => onOpenConsultation?.(activeSystem.category)}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow: "0 20px 40px -10px rgba(249,115,22,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-primary-container via-orange-600 to-primary-container bg-[length:200%_auto] hover:bg-right text-white font-condensed text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-2xl flex items-center justify-center gap-2 border border-white/20 group"
              >
                <span>Initialize Technical Proposal</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.a
                href="#solutions"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  backgroundColor: "rgba(255,255,255,0.18)",
                  boxShadow: "0 16px 32px -8px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/10 text-white border border-white/20 font-condensed text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-xl backdrop-blur-md flex items-center justify-center gap-2 hover:border-white"
              >
                <span>Explore Solutions</span>
                <span className="text-zinc-400">&rarr;</span>
              </motion.a>
            </motion.div>

            {/* Live Telemetry Metric Floating Badge: Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="inline-flex items-center gap-2.5 sm:gap-4 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full sm:rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  {activeSystem.metricValue}
                </span>
              </div>
              <div className="h-3 w-[1px] bg-white/20" />
              <span className="font-condensed text-[11px] sm:text-xs text-zinc-300 uppercase tracking-wider font-semibold truncate">
                {activeSystem.metricLabel}
              </span>
              <div className="h-3 w-[1px] bg-white/20 hidden md:block" />
              <span className="font-mono text-[11px] text-sky-400 hidden md:inline uppercase">
                {activeSystem.spec}
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* 3. The Interactive Sovereign Mission Console Dock (Mobile Swipeable Glass Track) */}
        <div className="mt-8 sm:mt-12 lg:mt-14 w-full max-w-4xl">
          <div className="flex md:grid md:grid-cols-4 gap-2 sm:gap-3 bg-zinc-950/70 p-1.5 sm:p-2 rounded-2xl border border-white/15 backdrop-blur-2xl shadow-2xl overflow-x-auto scrollbar-none">
            {CINEMATIC_SYSTEMS.map((system, idx) => {
              const Icon = system.icon;
              const isActive = idx === currentIdx;
              return (
                <button
                  type="button"
                  key={system.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`min-w-[135px] md:min-w-0 flex-1 relative p-2.5 sm:p-4 rounded-xl text-left transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col justify-between shrink-0 ${
                    isActive
                      ? "bg-white/10 border border-white/25 shadow-lg"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {/* Top Bar: Code & Icon */}
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span
                      className={`font-mono text-[10px] sm:text-[11px] font-bold ${
                        isActive ? "text-primary-container" : "text-zinc-500"
                      }`}
                    >
                      [{system.code}]
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isActive
                          ? "text-primary-container"
                          : "text-zinc-400 group-hover:text-white"
                      } transition-colors`}
                    />
                  </div>

                  {/* Title */}
                  <span
                    className={`font-condensed text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight block truncate md:whitespace-normal ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-zinc-200"
                    } transition-colors`}
                  >
                    {system.shortTitle}
                  </span>

                  {/* Animated Progress Fill Bar on Active Slide */}
                  <div className="mt-2 sm:mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    {isActive ? (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 8.5, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-primary-container to-amber-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                      />
                    ) : (
                      <div className="h-full w-0 group-hover:w-full transition-all duration-300 bg-white/20" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Swipe Hint Pill */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>&larr; Swipe to Explore Systems &rarr;</span>
          </div>
        </div>
      </div>

      {/* Floating Quick Action Call Button */}
      <motion.a
        href={`tel:${COMPANY_INFO.phone}`}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-zinc-900/90 hover:bg-black text-white border border-white/20 shadow-2xl flex items-center justify-center transition-colors group backdrop-blur-md"
        title="Direct Line to Engineer"
        aria-label="Call Royal Arabian"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-container group-hover:rotate-12 transition-transform" />
      </motion.a>
    </section>
  );
}
