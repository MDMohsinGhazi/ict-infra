"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroNetwork } from "@/components/ui/HeroNetwork";
import { COMPANY_INFO } from "@/data/company";

interface HeroSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

const HERO_SLIDES = [
  {
    category: "MISSION-CRITICAL ELV & ICT",
    headlinePrefix: "Secure, Simplify, Scale",
    headlineHighlight: "Without Complexity.",
    subtitle:
      "We design, deploy, and maintain turnkey ELV, ADMCC compliant visual surveillance, and high-speed data center infrastructure across Abu Dhabi & Dubai.",
    imageUrl: "/images/hero-cinematic-1.jpg",
    highlight: "ADMCC & SIRA CERTIFIED INTEGRATOR",
    telemetry: "SLA GUARANTEE: 99.98% • ABU DHABI NOC 24/7",
  },
  {
    category: "SURVEILLANCE & AI ANALYTICS",
    headlinePrefix: "Mission-Critical Architecture for",
    headlineHighlight: "Sovereign Enterprises.",
    subtitle:
      "AI-powered surveillance ecosystems, Gallagher biometric access control, and turnkey SOC command centres delivered with uncompromising regulatory precision.",
    imageUrl: "/images/hero-cinematic-2.jpg",
    highlight: "COMMAND & CONTROL SPECIALISTS",
    telemetry: "SUB-4HR ON-SITE SEVERITY-1 EMERGENCY SLA",
  },
  {
    category: "SOVEREIGN OPERATIONAL RIGOR",
    headlinePrefix: "Seamless Connectivity Across the",
    headlineHighlight: "UAE Metropolis.",
    subtitle:
      "Protecting government facilities, oil & gas complexes, financial hubs, and premier commercial towers with 20+ years of operational rigor.",
    imageUrl: "/images/hero-cinematic-3.jpg",
    highlight: "20+ YEARS GCC OPERATIONAL RIGOR",
    telemetry: "8,000+ COMPLETED ENTERPRISE DEPLOYMENTS",
  },
  {
    category: "HIGH-SPEED OPTICAL NETWORKING",
    headlinePrefix: "Future-Ready Fiber &",
    headlineHighlight: "High-Density Wi-Fi.",
    subtitle:
      "Turnkey data center infrastructure, optical backbones, structured cabling, and smart automation tailored for complex commercial complexes.",
    imageUrl: "/images/hero-cinematic-4.jpg",
    highlight: "TIER-III COMPLIANT INFRASTRUCTURE",
    telemetry: "ADMCC • SIRA • ADNOC ICV • ISO 9001 CERTIFIED",
  },
  {
    category: "SMART CITY AUTOMATION",
    headlinePrefix: "Architecting Next-Gen",
    headlineHighlight: "Intelligent Buildings.",
    subtitle:
      "Integrated BMS automation, IoT sensor matrices, and energy-efficient lighting controls optimizing major UAE landmarks and corporate complexes.",
    imageUrl: "/images/hero-cinematic-5.jpg",
    highlight: "ESTABLISHED ABU DHABI 2007",
    telemetry: "ISO 9001, 14001 & 45001 CERTIFIED",
  },
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Quick RFQ Form state right on the hero card
  const [rfqSolution, setRfqSolution] = useState(
    "CCTV Video Surveillance & ADMCC",
  );
  const [rfqOrganization, setRfqOrganization] = useState("");
  const [rfqPhone, setRfqPhone] = useState("");
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8500);
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

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => {
      onOpenConsultation?.(rfqSolution);
    }, 700);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center bg-[#00040d] overflow-hidden select-none">
      {/* High-Resolution Cinematic Background Carousel with Continuous Ken Burns Zoom */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`cinematic-bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.16 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            scale: { duration: 9.5, ease: "linear" },
            opacity: { duration: 1.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu will-change-transform"
        >
          <Image
            src={slide.imageUrl}
            alt={`${slide.headlinePrefix} ${slide.headlineHighlight}`}
            fill
            className="object-cover object-center filter brightness-[0.72] contrast-115"
            priority={currentSlide === 0}
            sizes="100vw"
          />

          {/* Cinematic Directional Vignette Gradient: Darker on left behind text, vibrant on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />

          {/* Top and Bottom Atmosphere Fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00040d] via-transparent to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Cyber Mesh Network Interactive Canvas Layer */}
      <HeroNetwork />

      {/* Slide Navigation Arrow Left */}
      <motion.button
        type="button"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous Cinematic Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/60 text-white border border-white/20 items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-2xl hover:border-primary-container"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Slide Navigation Arrow Right */}
      <motion.button
        type="button"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next Cinematic Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black/60 text-white border border-white/20 items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-2xl hover:border-primary-container"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Main Hero Container: 2-Column Split Layout Similar to GlobalWings */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authoritative Text Presentation with Attractive Animations */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-text-${currentSlide}`}
                className="flex flex-col items-start"
              >
                {/* 1. GlobalWings-Style Eyebrow Pill with Live Pulse Beacon */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container/30 border border-white/20 text-white font-mono text-xs uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container" />
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-primary-container" />
                  <span className="text-zinc-200 font-semibold tracking-wide">
                    SOVEREIGN ICT CONCIERGE • ABU DHABI
                  </span>
                </motion.div>

                {/* 2. Bold Two-Tone Typography with Word Animations */}
                <motion.h1
                  initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-hero-condensed text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] mb-6 uppercase"
                >
                  {slide.headlinePrefix}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 drop-shadow-[0_0_35px_rgba(249,115,22,0.5)] block sm:inline">
                    {slide.headlineHighlight}
                  </span>
                </motion.h1>

                {/* 3. Subtitle with Fluid Entrance */}
                <motion.p
                  initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-zinc-200 max-w-xl text-base sm:text-lg font-normal leading-relaxed mb-8"
                >
                  {slide.subtitle}
                </motion.p>

                {/* 4. Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
                >
                  <motion.button
                    type="button"
                    onClick={() => onOpenConsultation?.()}
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                      boxShadow: "0 16px 36px -6px rgba(249,115,22,0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-container via-orange-600 to-primary-container bg-[length:200%_auto] hover:bg-right text-white font-condensed text-base lg:text-lg font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-2xl flex items-center justify-center gap-2 border border-white/20"
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
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/30 hover:border-white font-condensed text-base lg:text-lg font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-lg backdrop-blur-md"
                  >
                    Explore Solutions
                  </motion.a>
                </motion.div>

                {/* 5. Trust Row (GlobalWings Style) */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.65, delay: 0.55 }}
                  className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-zinc-300 font-medium border-t border-white/15 pt-6 max-w-xl font-condensed uppercase tracking-wider"
                >
                  <span className="flex items-center gap-1.5 text-white font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>ADMCC &amp; SIRA Certified</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span>Sub-4hr Emergency SLA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span>20+ Years in UAE</span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: GlobalWings-Style Glassmorphism Fast RFQ Card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="w-full rounded-2xl bg-zinc-950/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/80 relative overflow-hidden"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/30 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block font-bold">
                    FAST PROJECT ESTIMATION
                  </span>
                  <h3 className="font-hero-condensed text-xl text-white font-bold uppercase tracking-wide">
                    Request Fast RFQ
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>NOC Online</span>
                </div>
              </div>

              {rfqSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-hero-condensed text-xl text-white font-bold">
                    RFQ Received
                  </h4>
                  <p className="text-zinc-300 text-xs">
                    Our Abu Dhabi engineering desk is preparing your proposal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="hero-rfq-solution"
                      className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5"
                    >
                      Select Required Solution
                    </label>
                    <select
                      id="hero-rfq-solution"
                      value={rfqSolution}
                      onChange={(e) => setRfqSolution(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-primary-container focus:outline-none transition-colors"
                    >
                      <option
                        value="CCTV Video Surveillance & ADMCC"
                        className="bg-zinc-900 text-white"
                      >
                        CCTV Video Surveillance &amp; ADMCC
                      </option>
                      <option
                        value="Access Control & Biometric Security"
                        className="bg-zinc-900 text-white"
                      >
                        Access Control &amp; Biometric Security
                      </option>
                      <option
                        value="Data Center Cabling & Fiber Optics"
                        className="bg-zinc-900 text-white"
                      >
                        Data Center Cabling &amp; Fiber Optics
                      </option>
                      <option
                        value="Public Address & Voice Alarm (PA/VA)"
                        className="bg-zinc-900 text-white"
                      >
                        Public Address &amp; Voice Alarm (PA/VA)
                      </option>
                      <option
                        value="Smart Building Automation & BMS"
                        className="bg-zinc-900 text-white"
                      >
                        Smart Building Automation &amp; BMS
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="hero-rfq-org"
                      className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5"
                    >
                      Organization / Company
                    </label>
                    <input
                      id="hero-rfq-org"
                      type="text"
                      required
                      placeholder="e.g. ADNOC, Mubadala, Commercial Tower"
                      value={rfqOrganization}
                      onChange={(e) => setRfqOrganization(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-zinc-500 focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hero-rfq-phone"
                      className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5"
                    >
                      Direct Phone / WhatsApp
                    </label>
                    <input
                      id="hero-rfq-phone"
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={rfqPhone}
                      onChange={(e) => setRfqPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-zinc-500 focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-primary-container to-orange-600 text-white font-condensed text-base font-bold uppercase tracking-wider shadow-lg shadow-orange-950/40 hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                  >
                    <span>Request Instant Proposal</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>

                  <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1 font-mono">
                    <span>⚡ Guaranteed response &lt; 2 hrs</span>
                    <span>100% Confidential</span>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators with Progress Fill (Bottom Left) */}
        <div className="mt-12 flex items-center gap-3">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.category}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className="relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: idx === currentSlide ? "52px" : "14px" }}
              aria-label={`Go to slide ${idx + 1}: ${item.category}`}
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

      {/* GlobalWings-Style "Scroll To Discover" Indicator at Center Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({
              top: window.innerHeight * 0.9,
              behavior: "smooth",
            });
          }
        }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 group-hover:text-primary-container transition-colors font-mono font-semibold">
          Scroll To Discover
        </span>
        <ChevronDown className="w-4 h-4 text-primary-container animate-bounce" />
      </motion.div>

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
