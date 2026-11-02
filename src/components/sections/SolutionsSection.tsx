"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import type { SolutionItem } from "@/types";

interface SolutionsSectionProps {
  onSelectSolution?: (solution: SolutionItem) => void;
}

const SOLUTIONS_DATA = [
  {
    id: "surveillance",
    title: "CCTV Video Surveillance & ADMCC Analytics",
    category: "Security & Compliance",
    imageUrl:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    description:
      "ADMCC & SIRA approved ultra-HD IP cameras, ANPR vehicle tracking, thermal perimeter fencing, and 180-day forensic video storage.",
  },
  {
    id: "access-control",
    title: "Access Control & Biometric Security",
    category: "Identity & Physical Access",
    imageUrl:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop",
    description:
      "Gallagher & HID multi-factor credentials, contactless biometric facial turnstiles, and automated vehicle barrier gates.",
  },
  {
    id: "public-address",
    title: "Public Address & Voice Alarm (PA/VA)",
    category: "Acoustics & Life Safety",
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    description:
      "EN 54 certified evacuation announcement matrices, background music (BGM) zoning, and emergency integration.",
  },
  {
    id: "industrial-sensors",
    title: "Industrial Sensors & Explosion Protection",
    category: "Critical Utilities & SCADA",
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    description:
      "ATEX and IECEx certified explosion-proof telemetry, industrial IoT sensors, gas leak detectors, and hazardous zone monitoring.",
  },
  {
    id: "ev-charging",
    title: "EV Charging Solutions in UAE",
    category: "Green Mobility",
    imageUrl:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
    description:
      "AC commercial destination chargers and ultra-fast DC charging stations with automated billing integration.",
  },
  {
    id: "power-systems",
    title: "UPS & Inverter Power Systems",
    category: "Mission-Critical Power",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    description:
      "Tier-3 modular uninterruptible power supplies (APC, Vertiv, Magnizon), lithium backup banks, and automatic transfer switches.",
  },
  {
    id: "master-clock",
    title: "Master Clock & Time Synchronization",
    category: "Precision Timing",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    description:
      "NTP/PTP GPS synchronized digital and analog clock networks for airports, healthcare wards, and railway transit systems.",
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling & Fiber Optics",
    category: "Backbone Networking",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    description:
      "Cat6A/Cat7 copper and single-mode/multimode fiber optic plant, fusion splicing, OTDR/OLTS certified test warranties.",
  },
  {
    id: "smart-automation",
    title: "Smart Building Management Systems (BMS)",
    category: "Intelligent Facilities",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    description:
      "Centralized HVAC automation, intelligent DALI lighting controls, energy meters, and comprehensive BACnet telemetry.",
  },
];

export function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full py-16 lg:py-24 bg-black text-white relative"
      id="solutions"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <h2 className="font-section-heading text-white tracking-tight leading-none uppercase">
              Solutions
            </h2>
            <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-400 uppercase tracking-widest font-semibold">
              Future-Ready Solutions for Complex Requirements
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Solutions"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Next Solutions"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider / Scrollable Grid */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SOLUTIONS_DATA.map((item) => (
            <button
              type="button"
              key={item.id}
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
              className="text-left w-[300px] sm:w-[340px] flex-shrink-0 snap-start bg-zinc-950 border border-white/10 group hover:border-white/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Text Content (Transit style bold white condensed title) */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-zinc-950 w-full">
                <div>
                  <span className="font-condensed text-[11px] text-primary-container uppercase tracking-wider font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-card-heading text-white group-hover:text-primary-container transition-colors tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 font-body-sm text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-zinc-400 group-hover:text-white font-semibold transition-colors">
                  <span>Architecture Specs</span>
                  <span>View &rarr;</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
