import { ArrowDown, Headset } from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-surface-canvas pt-8 pb-12 lg:pt-16 lg:pb-20 border-b border-border-hairline/40"
    >
      {/* Subtle Ambient Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg
          className="w-full h-full"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Circuit Grid Background Pattern</title>
          <defs>
            <pattern
              height="48"
              id="infra-grid"
              patternUnits="userSpaceOnUse"
              width="48"
            >
              <circle cx="2" cy="2" fill="#0b1f3a" fillOpacity="0.08" r="1.5" />
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#0b1f3a"
                strokeOpacity="0.04"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect fill="url(#infra-grid)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Gentle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] lg:w-[640px] h-[320px] bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left: Clean, Focused Typography & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Single Refined Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-border-hairline shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-status-success" />
              <span className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">
                Abu Dhabi Sovereign Operations • Tier-III SLA
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-headline-lg-mobile sm:font-display-lg lg:font-display-xl text-3xl sm:text-4xl lg:text-5xl text-primary-container tracking-tight leading-[1.15] font-extrabold">
              Total IT Solutions.
            </h1>

            {/* Single Concise Value Proposition */}
            <p className="font-body-md lg:font-body-lg text-body-md lg:text-body-lg text-on-surface-variant max-w-[54ch] leading-relaxed [text-wrap:pretty]">
              Mission-critical infrastructure and managed ICT services
              engineered for high-availability enterprise continuity across Abu
              Dhabi, the UAE, and global markets.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#solutions"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:bg-secondary-container transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Explore Solutions</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer border border-border-hairline"
              >
                <Headset className="w-4 h-4 text-secondary" />
                <span>Talk to an Expert</span>
              </button>
            </div>
          </div>

          {/* Hero Right: Clean, Uncluttered Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-md bg-surface-canvas border border-border-hairline group">
              <div className="relative h-60 sm:h-72 lg:aspect-[4/3] lg:h-auto w-full">
                <Image
                  src={COMPANY_INFO.heroImageUrl}
                  alt="NexaCore Cloud and Data Center Architecture"
                  fill
                  className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
              </div>

              {/* Single Calm Status Pill on Image */}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-primary/85 backdrop-blur-md text-white text-xs font-mono flex items-center gap-2 border border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-status-success" />
                <span className="tracking-wide">AUH-DC1 • Tier-III Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
