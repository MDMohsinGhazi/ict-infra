"use client";

import { Award, Calendar, CheckCircle2, Shield } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/MotionWrappers";
import { COMPANY_INFO } from "@/data/company";

interface AboutUsSectionProps {
  onLearnMore?: () => void;
}

const HIGHLIGHTS = [
  { icon: Calendar, text: "Operating Since 2007 in Abu Dhabi" },
  { icon: Shield, text: "ADMCC & SIRA Regulatory Approval" },
  { icon: Award, text: "ISO 9001, 14001, 45001 & ICV Certified" },
  { icon: CheckCircle2, text: "8,000+ Enterprise Deployments in UAE" },
];

export function AboutUsSection({ onLearnMore }: AboutUsSectionProps) {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-white overflow-hidden"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono text-xs uppercase tracking-wider mb-3">
                <Image
                  src="/images/royal-arabian-emblem.png"
                  alt="Royal Arabian"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain rounded-xs"
                />
                <span>SOVEREIGN OPERATIONAL RIGOR • EST. 2007</span>
              </div>

              <h2 className="font-section-heading text-zinc-900 tracking-tight leading-tight mb-6">
                Future-Ready System Integrators in Abu Dhabi and Across the UAE
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="space-y-4 text-zinc-600 font-body-md text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 2007 in Abu Dhabi, {COMPANY_INFO.legalName} has
                  grown into one of the leading system integrators in the UAE,
                  with an active footprint across Abu Dhabi, Dubai, and regional
                  megaprojects. Recognized among the top low-voltage (ELV) and
                  ICT integrators, we specialize in high-reliability
                  telecommunications, visual surveillance, intelligent data
                  centers, and smart building automation.
                </p>
                <p>
                  As trusted partners to government departments, oil &amp; gas
                  facilities, and enterprise headquarters, our reputation is
                  grounded in uncompromising regulatory compliance (ADMCC, SIRA,
                  ADNOC ICV, and ISO certifications) and client-first execution.
                </p>
              </div>

              {/* 4 Feature Badges Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="p-3 rounded-lg bg-zinc-50 border border-zinc-200/80 flex items-center gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-md bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-primary-container shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-condensed text-xs uppercase tracking-wider text-zinc-800 font-bold leading-snug">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <motion.button
                  type="button"
                  onClick={onLearnMore}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 25px -4px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-condensed text-base font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-md"
                >
                  <span>Learn More About Us</span>
                  <span>&rarr;</span>
                </motion.button>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 group">
                <Image
                  src="/images/about-team.jpg"
                  alt="Royal Arabian Smart Technologies Engineering Operations Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Overlaid Sovereign Trust Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-black/85 backdrop-blur-md text-white text-xs font-condensed uppercase tracking-wider rounded-xl border border-white/15 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/royal-arabian-emblem.png"
                      alt="Royal Arabian"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain rounded-xs"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-bold text-white text-xs">
                          Certified PMO &amp; Field Engineering
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono tracking-widest normal-case block">
                        Abu Dhabi &amp; Dubai Enterprise Deployments
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-container font-mono font-bold shrink-0">
                    EST. 2007
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
