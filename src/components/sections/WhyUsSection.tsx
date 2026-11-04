"use client";

import { Headphones, Layers, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "motion/react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionWrappers";

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    code: "PIL-01",
    title: "ADMCC & Regulatory Mastery",
    description:
      "Fully approved by Abu Dhabi Monitoring & Control Centre (ADMCC) and Dubai SIRA. Zero-compliance-risk turnkey commissioning.",
    badge: "Government Certified",
    metric: "100% Audit Compliance",
  },
  {
    icon: Layers,
    code: "PIL-02",
    title: "Turnkey ELV & ICT Integration",
    description:
      "From optical backbone cabling and CCTV video matrices to smart building BMS automation, we deliver unified single-contract execution.",
    badge: "End-to-End Delivery",
    metric: "Single-Vendor Accountability",
  },
  {
    icon: Headphones,
    code: "PIL-03",
    title: "24/7 Severity-1 SLA Response",
    description:
      "Direct dispatch to dedicated Abu Dhabi field engineers with guaranteed sub-4-hour emergency on-site resolution.",
    badge: "Mission-Critical Support",
    metric: "< 4hr Emergency Arrival",
  },
  {
    icon: Wrench,
    code: "PIL-04",
    title: "Tier-1 Global Alliances",
    description:
      "Direct authorized integration partnerships with leading manufacturers including Cisco, Schneider, Hikvision, Gallagher, and Microsoft.",
    badge: "Certified OEM Partners",
    metric: "Direct Factory Warranties",
  },
];

export function WhyUsSection() {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-[#f5f7fb] border-y border-zinc-200 overflow-hidden"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 border border-zinc-300 text-zinc-700 font-mono text-xs uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-none uppercase mt-2">
              Why Royal Arabian
            </h2>
            <p className="mt-4 font-body-md text-sm sm:text-base text-zinc-600 leading-relaxed">
              Over two decades of proven engineering leadership across the UAE,
              delivering complex low-voltage, telecom, and security projects on
              time and within budget.
            </p>
          </div>
        </FadeIn>

        {/* 4 Value Pillar Cards with Staggered Entrance and Micro-interactions */}
        <StaggerContainer
          delayChildren={0.1}
          staggerChildren={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 30px -5px rgba(0, 0, 0, 0.12), 0 8px 12px -6px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full p-8 bg-white border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between group cursor-default rounded-xl relative overflow-hidden shadow-sm"
                >
                  {/* Top Subtle Brand Highlight Bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-zinc-200 group-hover:bg-primary-container transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-lg bg-zinc-100 group-hover:bg-black group-hover:text-white text-zinc-900 flex items-center justify-center transition-all group-hover:scale-108 duration-300 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-zinc-400 group-hover:text-primary-container font-bold transition-colors">
                        [{pillar.code}]
                      </span>
                    </div>

                    <h3 className="font-heading-condensed text-xl sm:text-2xl text-zinc-900 tracking-wide uppercase leading-tight group-hover:text-primary-container transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 font-body-sm text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-100 flex flex-col gap-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                      {pillar.metric}
                    </span>
                    <div className="flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-primary-container font-bold">
                      <span>{pillar.badge}</span>
                      <span className="group-hover:translate-x-1.5 transition-transform inline-block">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
