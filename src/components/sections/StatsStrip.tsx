"use client";

import { Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionWrappers";

const STATS = [
  { value: "120+", label: "ENGINEERS & EMPLOYEES" },
  { value: "8,041+", label: "PROJECTS DELIVERED" },
  { value: "1,147+", label: "ENTERPRISE CLIENTS" },
  { value: "20+", label: "YEARS IN UAE" },
  { value: "75+", label: "GLOBAL OEM PARTNERS" },
];

const CERTIFICATIONS = [
  {
    title: "ADMCC Abu Dhabi",
    subtext: "Approved Surveillance Integrator",
    badge: "ADMCC",
    type: "gov",
  },
  {
    title: "Hemaya System",
    subtext: "Security Service Approval",
    badge: "HEMAYA",
    type: "gov",
  },
  {
    title: "SIRA Certified",
    subtext: "Security Industry Regulatory Agency",
    badge: "SIRA",
    type: "gov",
  },
  {
    title: "ISO 45001:2018",
    subtext: "Health & Safety Management",
    badge: "ISO 45001",
    type: "iso",
  },
  {
    title: "ISO 14001:2015",
    subtext: "Environmental Management",
    badge: "ISO 14001",
    type: "iso",
  },
  {
    title: "ISO 9001:2015",
    subtext: "Quality Management System (QMS)",
    badge: "ISO 9001",
    type: "iso",
  },
  {
    title: "ADNOC ICV Certified",
    subtext: "In-Country Value Approved",
    badge: "ADNOC ICV",
    type: "gov",
  },
];

export function StatsStrip() {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-[#00040d] text-white relative overflow-hidden"
      id="certifications"
    >
      {/* High-Tech Sovereign Ambient Gradient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(11,31,58,0.7),rgba(0,4,13,0.98))] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 5-Column Stats Row with Animated Number Counters */}
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 text-center border-b border-white/10 pb-16"
        >
          {STATS.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="flex flex-col items-center"
            >
              <span className="font-hero-condensed text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight text-shadow">
                <AnimatedCounter value={stat.value} duration={1.8} />
              </span>
              <span className="font-condensed text-xs sm:text-sm text-sky-400 font-semibold tracking-widest mt-2 uppercase">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pursuit of Excellence Text */}
        <FadeIn delay={0.2} className="mt-14 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>100% AUDITED GCC COMPLIANCE</span>
          </div>
          <p className="font-condensed text-sm sm:text-base lg:text-lg text-zinc-300 uppercase tracking-wider leading-relaxed">
            We take pride in our continuous pursuit of excellence. Our
            dedication to quality, safety, and sustainability is reflected in
            the globally recognized certifications we&apos;ve earned.
          </p>
        </FadeIn>

        {/* Accreditations Badges Grid with Staggered Entrance and Micro-interactions */}
        <StaggerContainer
          delayChildren={0.2}
          staggerChildren={0.06}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch"
        >
          {CERTIFICATIONS.map((cert) => (
            <StaggerItem key={cert.title}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "rgba(56, 189, 248, 0.4)",
                  boxShadow: "0 8px 25px -5px rgba(27,106,254,0.2)",
                }}
                transition={{ duration: 0.2 }}
                className="h-full p-4 rounded-xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/10 flex flex-col items-center text-center justify-between transition-colors group cursor-default backdrop-blur-md"
              >
                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center mb-3 border border-white/10 group-hover:scale-110 group-hover:border-sky-400/40 group-hover:bg-sky-950/40 transition-all duration-300">
                  {cert.type === "gov" ? (
                    <ShieldCheck className="w-5 h-5 text-primary-container" />
                  ) : (
                    <Award className="w-5 h-5 text-sky-400" />
                  )}
                </div>
                <div>
                  <span className="font-condensed text-xs sm:text-sm text-white font-bold tracking-wider uppercase group-hover:text-sky-300 transition-colors block">
                    {cert.title}
                  </span>
                  <span className="font-label-sm text-[10px] text-zinc-400 mt-1.5 leading-tight line-clamp-2 block">
                    {cert.subtext}
                  </span>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 w-full text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  VERIFIED
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
