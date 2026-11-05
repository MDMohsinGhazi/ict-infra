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
    metricLabel: "Forensic Video Storage",
    spec: "ADMCC / SIRA Certified Ultra-HD",
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
    metricLabel: "Guaranteed Uptime",
    spec: "Tier-III Modular Redundancy",
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
    metricLabel: "Biometric Authentication",
    spec: "Multi-Factor & Anti-Tailgating",
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
    spec: "Established in Abu Dhabi 2007",
    icon: Network,
  },
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Slide timer (8.5 seconds per slide)
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

  const activeSystem = CINEMATIC_SYSTEMS[currentIdx];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#00040d] overflow-hidden select-none">
      {/* 1. Cinematic 3D Camera Drift & Ken Burns Smooth Zoom Background */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00040d] via-transparent to-black/70" />

          {/* Fine High-Tech Horizon Scanning Line */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Cyber Mesh Network Interactive Canvas Layer */}
      <HeroNetwork />

      {/* Navigation Arrow Left (Floating Pill) */}
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

      {/* Navigation Arrow Right (Floating Pill) */}
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

      {/* 3. Hero Center Content: Majestic Kinetic Typography & Action Core */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 lg:py-36 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${activeSystem.id}`}
            className="flex flex-col items-center max-w-5xl"
          >
            {/* Kinetic Typography: Word Stagger with Liquid Gold-Amber Glow */}
            <motion.h1
              initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-hero-condensed text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02] mb-6 uppercase text-shadow-lg"
            >
              {activeSystem.headlineLine1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 drop-shadow-[0_0_40px_rgba(249,115,22,0.6)] block sm:inline">
                {activeSystem.headlineHighlight}
              </span>
            </motion.h1>

            {/* Subtitle with High-Legibility Glass Contrast */}
            <motion.p
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-zinc-300 max-w-3xl text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-10 text-balance uppercase tracking-wider"
            >
              {activeSystem.subtitle}
            </motion.p>

            {/* Action Buttons: Magnetic Glowing Capsule + Translucent Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
            >
              <motion.button
                type="button"
                onClick={() => onOpenConsultation?.(activeSystem.category)}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px -10px rgba(249,115,22,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-primary-container via-orange-600 to-primary-container bg-[length:200%_auto] hover:bg-right text-white font-condensed text-base lg:text-lg font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-2xl flex items-center justify-center gap-2.5 border border-white/20 group"
              >
                <span>Initialize Technical Proposal</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#solutions"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "rgba(255,255,255,0.18)",
                  boxShadow: "0 16px 32px -8px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white border border-white/25 font-condensed text-base lg:text-lg font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-xl backdrop-blur-md flex items-center justify-center gap-2 hover:border-white"
              >
                <span>Explore Enterprise Solutions</span>
                <span className="text-zinc-400">&rarr;</span>
              </motion.a>
            </motion.div>

            {/* Live Telemetry Metric Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  {activeSystem.metricValue}
                </span>
              </div>
              <div className="h-3 w-[1px] bg-white/20" />
              <span className="font-condensed text-xs text-zinc-300 uppercase tracking-wider font-semibold">
                {activeSystem.metricLabel}
              </span>
              <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
              <span className="font-mono text-[11px] text-sky-400 hidden sm:inline uppercase">
                {activeSystem.spec}
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* 4. The Interactive Sovereign Mission Console Dock (Brand-New Innovation) */}
        <div className="mt-14 w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-950/70 p-2 rounded-2xl border border-white/15 backdrop-blur-2xl shadow-2xl">
            {CINEMATIC_SYSTEMS.map((system, idx) => {
              const Icon = system.icon;
              const isActive = idx === currentIdx;
              return (
                <button
                  type="button"
                  key={system.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`relative p-3 sm:p-4 rounded-xl text-left transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col justify-between ${
                    isActive
                      ? "bg-white/10 border border-white/25 shadow-lg"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {/* Top Bar: Code & Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[11px] font-bold ${
                        isActive ? "text-primary-container" : "text-zinc-500"
                      }`}
                    >
                      [{system.code}]
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isActive
                          ? "text-primary-container"
                          : "text-zinc-400 group-hover:text-white"
                      } transition-colors`}
                    />
                  </div>

                  {/* Title */}
                  <span
                    className={`font-condensed text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight block ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-zinc-200"
                    } transition-colors`}
                  >
                    {system.id === "surveillance" && "CCTV & ADMCC"}
                    {system.id === "datacenter" && "Data Centers"}
                    {system.id === "biometrics" && "Access & Bio"}
                    {system.id === "connectivity" && "Smart City ELV"}
                  </span>

                  {/* Animated Progress Fill Bar on Active Slide */}
                  <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
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
        </div>
      </div>

      {/* Floating Quick Action Call Button */}
      <motion.a
        href={`tel:${COMPANY_INFO.phone}`}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-zinc-900/90 hover:bg-black text-white border border-white/20 shadow-2xl flex items-center justify-center transition-colors group backdrop-blur-md"
        title="Direct Line to Engineer"
        aria-label="Call Royal Arabian"
      >
        <Phone className="w-6 h-6 text-primary-container group-hover:rotate-12 transition-transform" />
      </motion.a>
    </section>
  );
}
