"use client";

import {
  BatteryCharging,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Fingerprint,
  Network,
  Sliders,
  Volume2,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/MotionWrappers";
import type { SolutionItem } from "@/types";

interface SolutionsSectionProps {
  onSelectSolution?: (solution: SolutionItem) => void;
}

const SOLUTIONS_DATA = [
  {
    id: "surveillance",
    code: "ADMCC-01",
    spec: "ADMCC & SIRA Certified",
    icon: Camera,
    title: "CCTV Video Surveillance & ADMCC Analytics",
    category: "Security & Compliance",
    imageUrl: "/images/solution-surveillance.jpg",
    description:
      "ADMCC & SIRA approved ultra-HD IP cameras, ANPR vehicle tracking, thermal perimeter fencing, and 180-day forensic video storage.",
  },
  {
    id: "access-control",
    code: "BIO-02",
    spec: "Multi-Factor & Face ID",
    icon: Fingerprint,
    title: "Access Control & Biometric Security",
    category: "Identity & Physical Access",
    imageUrl: "/images/solution-access-control.jpg",
    description:
      "Gallagher & HID multi-factor credentials, contactless biometric facial turnstiles, and automated vehicle barrier gates.",
  },
  {
    id: "public-address",
    code: "PA-03",
    spec: "EN 54 Evacuation Standard",
    icon: Volume2,
    title: "Public Address & Voice Alarm (PA/VA)",
    category: "Acoustics & Life Safety",
    imageUrl: "/images/solution-public-address.jpg",
    description:
      "EN 54 certified evacuation announcement matrices, background music (BGM) zoning, and emergency integration.",
  },
  {
    id: "industrial-sensors",
    code: "ATX-04",
    spec: "IECEx / ATEX Zone 1/2",
    icon: Cpu,
    title: "Industrial Sensors & Explosion Protection",
    category: "Critical Utilities & SCADA",
    imageUrl: "/images/solution-industrial-sensors.jpg",
    description:
      "ATEX and IECEx certified explosion-proof telemetry, industrial IoT sensors, gas leak detectors, and hazardous zone monitoring.",
  },
  {
    id: "ev-charging",
    code: "EV-05",
    spec: "AC/DC Fast Charging",
    icon: Zap,
    title: "EV Charging Solutions in UAE",
    category: "Green Mobility",
    imageUrl: "/images/solution-ev-charging.jpg",
    description:
      "AC commercial destination chargers and ultra-fast DC charging stations with automated billing integration.",
  },
  {
    id: "power-systems",
    code: "PWR-06",
    spec: "Tier-III Modular Redundancy",
    icon: BatteryCharging,
    title: "UPS & Inverter Power Systems",
    category: "Mission-Critical Power",
    imageUrl: "/images/solution-power-systems.jpg",
    description:
      "Tier-3 modular uninterruptible power supplies (APC, Vertiv, Magnizon), lithium backup banks, and automatic transfer switches.",
  },
  {
    id: "master-clock",
    code: "CLK-07",
    spec: "NTP/PTP GPS Sync",
    icon: Clock,
    title: "Master Clock & Time Synchronization",
    category: "Precision Timing",
    imageUrl: "/images/solution-master-clock.jpg",
    description:
      "NTP/PTP GPS synchronized digital and analog clock networks for airports, healthcare wards, and railway transit systems.",
  },
  {
    id: "structured-cabling",
    code: "FBR-08",
    spec: "Cat6A / Single-Mode Fiber",
    icon: Network,
    title: "Structured Cabling & Fiber Optics",
    category: "Backbone Networking",
    imageUrl: "/images/solution-structured-cabling.jpg",
    description:
      "Cat6A/Cat7 copper and single-mode/multimode fiber optic plant, fusion splicing, OTDR/OLTS certified test warranties.",
  },
  {
    id: "smart-automation",
    code: "BMS-09",
    spec: "BACnet & DALI Intelligent",
    icon: Sliders,
    title: "Smart Building Management Systems (BMS)",
    category: "Intelligent Facilities",
    imageUrl: "/images/solution-smart-automation.jpg",
    description:
      "Centralized HVAC automation, intelligent DALI lighting controls, energy meters, and comprehensive BACnet telemetry.",
  },
];

export function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const interactTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Initialize position to the middle of the 3 duplicated sets
    const singleSetWidth = (360 + 24) * SOLUTIONS_DATA.length;
    container.scrollLeft = singleSetWidth;
    scrollPosRef.current = singleSetWidth;

    if (prefersReducedMotion) return;

    let animId: number;

    const onMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const onMouseLeave = () => {
      isHoveredRef.current = false;
      if (container) {
        scrollPosRef.current = container.scrollLeft;
      }
    };
    const onTouchStart = () => {
      isHoveredRef.current = true;
    };
    const onTouchEnd = () => {
      isHoveredRef.current = false;
      if (container) {
        scrollPosRef.current = container.scrollLeft;
      }
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    const step = () => {
      if (container && !isHoveredRef.current && !isInteractingRef.current) {
        // Slow continuous movement (~45px per second)
        scrollPosRef.current += 0.75;
        container.scrollLeft = scrollPosRef.current;

        // Seamless wrap-around for infinite loop
        if (container.scrollLeft >= singleSetWidth * 2) {
          scrollPosRef.current -= singleSetWidth;
          container.scrollLeft = scrollPosRef.current;
        } else if (container.scrollLeft <= 10) {
          scrollPosRef.current += singleSetWidth;
          container.scrollLeft = scrollPosRef.current;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const handlePrev = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Exactly 1 card width (360px + 24px gap)
    const cardStep = 384;
    isInteractingRef.current = true;
    if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);

    container.scrollBy({ left: -cardStep, behavior: "smooth" });

    interactTimeoutRef.current = setTimeout(() => {
      if (container) {
        const singleSetWidth = cardStep * SOLUTIONS_DATA.length;
        if (container.scrollLeft <= cardStep) {
          container.scrollLeft += singleSetWidth;
        }
        scrollPosRef.current = container.scrollLeft;
      }
      isInteractingRef.current = false;
    }, 600);
  };

  const handleNext = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Exactly 1 card width (360px + 24px gap)
    const cardStep = 384;
    isInteractingRef.current = true;
    if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);

    container.scrollBy({ left: cardStep, behavior: "smooth" });

    interactTimeoutRef.current = setTimeout(() => {
      if (container) {
        const singleSetWidth = cardStep * SOLUTIONS_DATA.length;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
        scrollPosRef.current = container.scrollLeft;
      }
      isInteractingRef.current = false;
    }, 600);
  };

  return (
    <section
      className="w-full py-20 lg:py-28 bg-[#02050c] text-white relative overflow-hidden"
      id="solutions"
    >
      {/* High-Tech Sovereign Ambient Gradient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(11,31,58,0.7),rgba(2,5,12,0.95))] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Sovereign Technical Kicker & Motion Control */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-400 font-mono text-xs uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>MISSION-CRITICAL ARCHITECTURE</span>
              </div>
              <h2 className="font-section-heading text-white tracking-tight leading-none uppercase">
                Solutions
              </h2>
              <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-400 uppercase tracking-widest font-semibold">
                Future-Ready Solutions for Complex Requirements
              </p>
            </div>

            {/* Direct Prev / Next Navigation Controls (1 Click = 1 Card Shift) */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-sky-400 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-md"
                title="Previous Solution"
                aria-label="Previous Solutions"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-sky-400/80 hover:border-sky-400 bg-sky-950/40 hover:bg-sky-900/60 text-sky-300 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-lg shadow-sky-950/50"
                title="Next Solution"
                aria-label="Next Solutions"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Infinite Slow-Moving Loop Track with Edge Horizon Fade Masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Edge Gradient Horizon Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#02050c] via-[#02050c]/80 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#02050c] via-[#02050c]/80 to-transparent pointer-events-none z-20" />

        {/* Scrollable Container with Continuous Auto-Scroll & 1-Card Click Support */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...SOLUTIONS_DATA, ...SOLUTIONS_DATA, ...SOLUTIONS_DATA].map(
            (item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  type="button"
                  key={`${item.id}-${idx}`}
                  onClick={() =>
                    onSelectSolution?.({
                      id: item.id,
                      title: item.title,
                      badge: item.category,
                      description: item.description,
                      icon: "shield",
                      actionText: "Inquire Solution",
                      href: "#contact",
                    })
                  }
                  className="text-left w-[320px] sm:w-[360px] flex-shrink-0 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/10 group hover:border-sky-400/50 hover:shadow-[0_10px_35px_-5px_rgba(27,106,254,0.25)] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer rounded-xl backdrop-blur-md hover:-translate-y-2"
                >
                  {/* Card Image with Code Badge Overlay */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                    {/* Top Left: Sovereign Technical Code Badge */}
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-sky-400 tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Icon className="w-3.5 h-3.5 text-primary-container" />
                      <span>[{item.code}]</span>
                    </div>

                    {/* Top Right: Technical Spec Pill */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-condensed uppercase tracking-wider text-zinc-300 font-semibold">
                      {item.spec}
                    </div>
                  </div>

                  {/* Card Content with Refined Spacing & Typography */}
                  <div className="p-6 flex flex-col flex-1 justify-between w-full">
                    <div>
                      <span className="font-condensed text-xs text-primary-container uppercase tracking-wider font-bold block mb-1.5">
                        {item.category}
                      </span>
                      <h3 className="font-card-heading text-lg sm:text-xl text-white group-hover:text-sky-300 transition-colors tracking-wide leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-body-sm text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer with Interactive Action Arrow */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-zinc-400 group-hover:text-white font-semibold transition-colors">
                      <span className="text-zinc-500 group-hover:text-sky-400 transition-colors">
                        Enterprise Specs
                      </span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform text-white">
                        <span>Deploy Solution</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </button>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
