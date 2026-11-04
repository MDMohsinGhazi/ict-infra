"use client";

import { ChevronLeft, ChevronRight, Phone, ShieldCheck } from "lucide-react";
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
      "WE DESIGN AND INTEGRATE NEXT-GEN SECURITY AND ELV SOLUTIONS THAT KEEP YOUR OPERATIONS PROTECTED, CONNECTED, AND READY FOR TOMORROW - DELIVERING EFFICIENCY, SCALABILITY, AND PEACE OF MIND.",
    imageUrl: "/images/hero-slide-1.jpg",
    highlight: "ADMCC & SIRA CERTIFIED INTEGRATOR",
    telemetry: "SLA GUARANTEE: 99.98% • ABU DHABI NOC 24/7",
  },
  {
    title: "FUTURE-READY INFRASTRUCTURE FOR COMPLEX ENTERPRISES",
    subtitle:
      "MISSION-CRITICAL FIBER CABLING, HIGH-DENSITY WI-FI, AND AI-POWERED SURVEILLANCE ECOSYSTEMS ACROSS ABU DHABI AND DUBAI.",
    imageUrl: "/images/hero-slide-2.jpg",
    highlight: "TURNKEY ICT & BUILDING AUTOMATION",
    telemetry: "TIER-III COMPLIANT • ZERO DOWNTIME REDUNDANCY",
  },
  {
    title: "SEAMLESS CONNECTIVITY, ZERO COMPROMISE",
    subtitle:
      "PROTECTING GOVERNMENT FACILITIES, FINANCIAL HUBS, AND CRITICAL HEALTHCARE INFRASTRUCTURE WITH 24/7 PROACTIVE SLA EXCELLENCE.",
    imageUrl: "/images/hero-slide-3.jpg",
    highlight: "20+ YEARS OF GCC OPERATIONAL RIGOR",
    telemetry: "SUB-4HR ON-SITE SEVERITY-1 EMERGENCY SLA",
  },
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
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
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#00040d] overflow-hidden select-none">
      {/* Background Image Carousel with Atmospheric Transitions */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover object-center filter brightness-[0.35] contrast-125"
            priority={idx === 0}
          />
          {/* Sovereign Navy Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_10%,rgba(11,31,58,0.7),rgba(0,4,13,0.92))]" />
        </div>
      ))}

      {/* Interactive Tech/Cyber Mesh Network Canvas */}
      <HeroNetwork />

      {/* Navigation Arrow Left */}
      <motion.button
        type="button"
        onClick={prevSlide}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous Slide"
        className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-xl"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </motion.button>

      {/* Navigation Arrow Right */}
      <motion.button
        type="button"
        onClick={nextSlide}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next Slide"
        className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-xl"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </motion.button>

      {/* Hero Content Container with Authored Animated Transitions */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Live Sovereign Telemetry & Certification Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/30 text-white font-mono text-xs uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-zinc-200 font-semibold">
                {slide.highlight}
              </span>
              <span className="hidden sm:inline text-zinc-500">•</span>
              <span className="hidden sm:inline text-sky-400">
                {slide.telemetry}
              </span>
            </div>

            {/* Transit-style Massive Bold Condensed Heading */}
            <h1 className="font-hero-condensed text-white tracking-wide leading-tight max-w-4xl text-shadow-lg">
              {slide.title}
            </h1>

            {/* Transit-style Centered Uppercase Subtitle */}
            <p className="mt-6 font-body-md text-xs sm:text-sm lg:text-base text-zinc-300 font-medium tracking-wider max-w-3xl uppercase leading-relaxed text-balance">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dual Rectangular CTA Buttons with High-Tech Micro-Interactions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.button
            type="button"
            onClick={onOpenConsultation}
            whileHover={{
              y: -2,
              boxShadow: "0 12px 30px -5px rgba(249,115,22,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="w-full sm:w-auto min-w-[210px] px-8 py-3.5 bg-primary-container hover:bg-primary text-white border border-primary-container font-condensed text-base lg:text-lg font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xl flex items-center justify-center gap-2"
          >
            <span>Talk to an Expert</span>
            <span className="text-white/80">&rarr;</span>
          </motion.button>
          <motion.a
            href="#solutions"
            whileHover={{
              y: -2,
              boxShadow: "0 12px 30px -5px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="w-full sm:w-auto min-w-[210px] px-8 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 hover:border-white font-condensed text-base lg:text-lg font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-lg backdrop-blur-sm"
          >
            Our Solutions
          </motion.a>
        </div>

        {/* Slide Indicators with Animated Fill */}
        <div className="mt-12 flex items-center gap-2.5">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: idx === currentSlide ? "40px" : "12px" }}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`w-full h-full transition-colors duration-300 ${
                  idx === currentSlide
                    ? "bg-primary-container shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                    : "bg-white/30 hover:bg-white/50"
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
