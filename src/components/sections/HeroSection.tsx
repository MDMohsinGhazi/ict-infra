"use client";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroNetwork } from "@/components/ui/HeroNetwork";
import { COMPANY_INFO } from "@/data/company";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

const HERO_SLIDES = [
  {
    title: "SECURE, SIMPLIFY, SCALE WITHOUT COMPLEXITY",
    subtitle:
      "WE DESIGN AND INTEGRATE NEXT-GEN SECURITY AND ELV SOLUTIONS THAT KEEP YOUR OPERATIONS PROTECTED, CONNECTED, AND FUTURE-READY ACROSS ABU DHABI & THE UAE.",
    imageUrl: "/images/hero-cinematic-1.jpg",
    highlight: "ADMCC & SIRA CERTIFIED INTEGRATOR",
    telemetry: "SLA GUARANTEE: 99.98% • ABU DHABI NOC 24/7",
    tagline: "NEXT-GEN ELV & ICT SYSTEMS",
  },
  {
    title: "MISSION-CRITICAL ARCHITECTURE FOR SOVEREIGN ENTERPRISES",
    subtitle:
      "AI-POWERED SURVEILLANCE ECOSYSTEMS, BIOMETRIC ACCESS CONTROL, AND TURNKEY COMMAND CENTRES DELIVERED WITH UNCOMPROMISING PRECISION.",
    imageUrl: "/images/hero-cinematic-2.jpg",
    highlight: "COMMAND & CONTROL SPECIALISTS",
    telemetry: "SUB-4HR ON-SITE SEVERITY-1 EMERGENCY SLA",
    tagline: "SURVEILLANCE & AI ANALYTICS",
  },
  {
    title: "SEAMLESS CONNECTIVITY ACROSS THE UAE METROPOLIS",
    subtitle:
      "PROTECTING GOVERNMENT FACILITIES, FINANCIAL HUBS, AND CRITICAL INFRASTRUCTURE WITH 20+ YEARS OF OPERATIONAL RIGOR.",
    imageUrl: "/images/hero-cinematic-3.jpg",
    highlight: "20+ YEARS GCC OPERATIONAL RIGOR",
    telemetry: "8,000+ COMPLETED ENTERPRISE DEPLOYMENTS",
    tagline: "SOVEREIGN OPERATIONAL RIGOR",
  },
  {
    title: "FUTURE-PROOF OPTICAL FIBER & HIGH-DENSITY WI-FI",
    subtitle:
      "TURNKEY DATA CENTER INFRASTRUCTURE, BACKBONE CABLING, AND SMART AUTOMATION TAILORED FOR COMPLEX COMMERCIAL HUBS.",
    imageUrl: "/images/hero-cinematic-4.jpg",
    highlight: "TIER-III COMPLIANT INFRASTRUCTURE",
    telemetry: "ADMCC • SIRA • ADNOC ICV • ISO 9001 CERTIFIED",
    tagline: "TURNKEY DATA CENTER & NETWORKING",
  },
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[88vh] lg:min-h-[94vh] flex items-center justify-center bg-[#00040d] overflow-hidden select-none">
      {/* High-Resolution Cinematic Background with Majestic Ken Burns Zoom Effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`cinematic-bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.14 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{
            scale: { duration: 9.5, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 1.2, ease: "easeInOut" },
          }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover object-center filter brightness-[0.4] contrast-125"
            priority={currentSlide === 0}
            sizes="100vw"
          />

          {/* Sovereign Navy Ambient Vignette Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_15%,rgba(11,31,58,0.72),rgba(0,4,13,0.96))]" />

          {/* Cinematic Top and Bottom Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00040d] via-transparent to-black/70 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Interactive Tech/Cyber Mesh Network Canvas Layer */}
      <HeroNetwork />

      {/* Navigation Arrow Left */}
      <motion.button
        type="button"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous Slide"
        className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-2xl hover:border-primary-container"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </motion.button>

      {/* Navigation Arrow Right */}
      <motion.button
        type="button"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next Slide"
        className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-2xl hover:border-primary-container"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </motion.button>

      {/* Hero Content Container with High-Impact Text Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-content-${currentSlide}`}
            className="flex flex-col items-center"
          >
            {/* 1. Tagline & Live Sovereign Telemetry Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/75 border border-blue-400/30 text-white font-mono text-xs uppercase tracking-wider mb-6 backdrop-blur-md shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-zinc-200 font-semibold tracking-wide">
                {slide.highlight}
              </span>
              <span className="hidden sm:inline text-zinc-500">•</span>
              <span className="hidden sm:inline text-sky-400 font-mono">
                {slide.telemetry}
              </span>
            </motion.div>

            {/* 2. Bold Condensed Main Headline (Blur-to-Clear Majestic Entrance) */}
            <motion.h1
              initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-hero-condensed text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-[1.08] max-w-4xl text-shadow-lg"
            >
              {slide.title}
            </motion.h1>

            {/* 3. Centered Uppercase Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
              transition={{
                duration: 0.7,
                delay: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 font-body-md text-xs sm:text-sm lg:text-base text-zinc-300 font-medium tracking-wider max-w-3xl uppercase leading-relaxed text-balance"
            >
              {slide.subtitle}
            </motion.p>

            {/* 4. Action Buttons (Replacing 'Talk to expert' with 'Get Instant Quote') */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <motion.button
                type="button"
                onClick={onOpenConsultation}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow: "0 16px 36px -6px rgba(249,115,22,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-w-[230px] px-8 py-4 rounded-full bg-gradient-to-r from-primary-container via-orange-600 to-primary-container bg-[length:200%_auto] hover:bg-right text-white font-condensed text-base lg:text-lg font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-2xl flex items-center justify-center gap-2 border border-white/20"
              >
                <span>Get Instant Quote</span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <ArrowUpRight className="w-5 h-5 text-white" />
              </motion.button>

              <motion.a
                href="#solutions"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow: "0 12px 28px -5px rgba(255,255,255,0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-w-[210px] px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 hover:border-white font-condensed text-base lg:text-lg font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-lg backdrop-blur-md"
              >
                Explore Solutions
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators with Dynamic Progress Fill */}
        <div className="mt-14 flex items-center gap-3">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className="relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: idx === currentSlide ? "52px" : "14px" }}
              aria-label={`Go to slide ${idx + 1}: ${item.tagline}`}
            >
              <div
                className={`w-full h-full transition-colors duration-300 ${
                  idx === currentSlide
                    ? "bg-primary-container shadow-[0_0_12px_rgba(249,115,22,0.9)]"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Floating Quick Action Call Button with Subtle Float Animation */}
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
