"use client";

import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Factory,
  Flame,
  GraduationCap,
  HeartPulse,
  Landmark,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/MotionWrappers";

const INDUSTRIES_DATA = [
  {
    title: "EDUCATION",
    code: "SEC-EDU",
    subtitle: "Universities, K-12 Academies & Smart Campuses",
    compliance: "High-Density Wi-Fi & Campus CCTV",
    icon: GraduationCap,
    imageUrl: "/images/sector-education.jpg",
  },
  {
    title: "HEALTHCARE",
    code: "SEC-MED",
    subtitle: "Hospitals, Medical Towers & Clean-Room Clinics",
    compliance: "Nurse Call & Life-Safety PA/VA",
    icon: HeartPulse,
    imageUrl: "/images/sector-healthcare.jpg",
  },
  {
    title: "FINANCIAL INSTITUTIONS",
    code: "SEC-FIN",
    subtitle: "Banking HQs, Data Vaults & Trading Floors",
    compliance: "Biometric Access & High-Sec Vaults",
    icon: Landmark,
    imageUrl: "/images/sector-financial.jpg",
  },
  {
    title: "INDUSTRIAL & MANUFACTURING",
    code: "SEC-IND",
    subtitle: "Factories, Warehouses & Port Logistics",
    compliance: "Gate Barriers & Perimeter Analytics",
    icon: Factory,
    imageUrl: "/images/sector-industrial.jpg",
  },
  {
    title: "OIL & GAS / OFFSHORE",
    code: "SEC-PET",
    subtitle: "ADNOC Fields, Refineries & Hazardous Zones",
    compliance: "IECEx / ATEX Explosion-Proof Telemetry",
    icon: Flame,
    imageUrl: "/images/sector-oil-gas.jpg",
  },
  {
    title: "HOSPITALITY & RETAIL",
    code: "SEC-HSP",
    subtitle: "5-Star Resorts, Shopping Malls & Mixed-Use Towers",
    compliance: "DALI Smart Lighting & BMS Automation",
    icon: Building2,
    imageUrl: "/images/sector-hospitality.jpg",
  },
];

export function SectorsSection() {
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
      className="w-full py-20 lg:py-28 bg-[#fafbfe] border-y border-zinc-200 overflow-hidden relative"
      id="sectors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 font-mono text-xs uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>CROSS-INDUSTRY DEPLOYMENTS</span>
              </div>
              <h2 className="font-section-heading text-zinc-900 tracking-tight leading-none uppercase">
                Industries We Serve
              </h2>
              <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-500 uppercase tracking-widest font-semibold">
                Engineered for Mission-Critical Environments Across the UAE
              </p>
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={scrollLeft}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black bg-white flex items-center justify-center text-zinc-700 hover:text-black transition-all cursor-pointer shadow-sm hover:shadow"
                aria-label="Previous Industries"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={scrollRight}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black bg-white flex items-center justify-center text-zinc-700 hover:text-black transition-all cursor-pointer shadow-sm hover:shadow"
                aria-label="Next Industries"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </FadeIn>

        {/* Industries Cards with Technical Badges & Sector Icons */}
        <FadeIn direction="up" delay={0.15}>
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[300px] sm:w-[350px] h-[380px] sm:h-[420px] flex-shrink-0 snap-start relative group overflow-hidden rounded-xl border border-zinc-200/90 hover:border-black transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer bg-zinc-950"
                >
                  {/* Background Photo */}
                  <Image
                    src={ind.imageUrl}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.6]"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

                  {/* Top Header: Technical Code Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-sky-400 tracking-wider">
                      [{ind.code}]
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-primary-container transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Content Container */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
                    <div className="w-12 h-1 rounded-full bg-primary-container mb-3 group-hover:w-16 transition-all duration-300" />
                    <h3 className="font-heading-condensed text-2xl text-white tracking-wide uppercase leading-tight group-hover:text-sky-300 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-xs font-condensed uppercase tracking-wider text-zinc-300 leading-relaxed">
                      {ind.subtitle}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                      <span>{ind.compliance}</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
