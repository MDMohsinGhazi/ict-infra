"use client";

import { ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrappers";

const CLIENTS_ROW_1 = [
  { name: "Mubadala", category: "Sovereign Investment" },
  { name: "Port of Fujairah", category: "Maritime Infrastructure" },
  { name: "Line Investments & Property", category: "Commercial Malls" },
  { name: "LuLu Group International", category: "Retail Hypermarkets" },
  { name: "Zayed University", category: "Higher Education" },
  { name: "GEMS Education", category: "Global Academies" },
  { name: "Bright Riders School", category: "K-12 Education" },
  { name: "ADNOC Group", category: "Energy & Petrochemicals" },
];

const CLIENTS_ROW_2 = [
  { name: "NPCC", category: "National Petroleum" },
  { name: "Forsan Central Mall", category: "Retail Complex" },
  { name: "Khalidiyah Mall", category: "Abu Dhabi Retail" },
  { name: "Madinat Zayed Shopping Centre", category: "Gold & Retail Center" },
  { name: "Mafraq Centre", category: "Commercial Hub" },
  { name: "Salma Rehabilitation Hospital", category: "Specialized Healthcare" },
  { name: "Yas Healthcare", category: "Clinical Diagnostics" },
  { name: "Western Hotel", category: "Hospitality & Leisure" },
  { name: "Cristal Hotel Abu Dhabi", category: "Luxury Hospitality" },
];

export function ClientsMarqueeSection() {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-white overflow-hidden border-t border-zinc-200 relative"
      id="clients"
    >
      <FadeIn direction="up">
        <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-container" />
            <span>INSTITUTIONAL TRUST ACROSS UAE</span>
          </div>
          <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-none uppercase">
            Clients &amp; Strategic Partners
          </h2>
          <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-500 uppercase tracking-widest font-semibold">
            Proudly Serving Government, Energy, Healthcare &amp; Commercial
            Enterprises
          </p>
        </div>
      </FadeIn>

      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

      {/* Row 1 Marquee (Infinite scroll left with pause on hover) */}
      <div className="relative w-full flex overflow-x-hidden mb-6 group/marquee">
        <div className="flex gap-5 sm:gap-6 animate-[marquee_36s_linear_infinite] group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
          {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map(
            (client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="w-[280px] sm:w-[320px] h-[112px] sm:h-[120px] rounded-xl bg-gradient-to-b from-white to-zinc-50/70 border border-zinc-200/90 shadow-sm hover:shadow-xl flex flex-col items-center justify-center px-6 py-4 transition-all duration-300 flex-shrink-0 group hover:border-black hover:-translate-y-1.5 whitespace-normal text-center overflow-hidden"
              >
                <h3 className="font-heading-condensed text-base sm:text-lg text-zinc-800 group-hover:text-black font-bold tracking-wide uppercase leading-tight line-clamp-2 max-w-full transition-colors">
                  {client.name}
                </h3>
                <span className="font-mono text-[10px] text-zinc-400 group-hover:text-primary-container uppercase tracking-wider mt-2 font-semibold block truncate max-w-full transition-colors">
                  {client.category}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Row 2 Marquee (Infinite scroll right / reverse with pause on hover) */}
      <div className="relative w-full flex overflow-x-hidden group/marquee">
        <div className="flex gap-5 sm:gap-6 animate-[marquee-reverse_38s_linear_infinite] group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
          {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map(
            (client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="w-[280px] sm:w-[320px] h-[112px] sm:h-[120px] rounded-xl bg-gradient-to-b from-white to-zinc-50/70 border border-zinc-200/90 shadow-sm hover:shadow-xl flex flex-col items-center justify-center px-6 py-4 transition-all duration-300 flex-shrink-0 group hover:border-black hover:-translate-y-1.5 whitespace-normal text-center overflow-hidden"
              >
                <h3 className="font-heading-condensed text-base sm:text-lg text-zinc-800 group-hover:text-black font-bold tracking-wide uppercase leading-tight line-clamp-2 max-w-full transition-colors">
                  {client.name}
                </h3>
                <span className="font-mono text-[10px] text-zinc-400 group-hover:text-primary-container uppercase tracking-wider mt-2 font-semibold block truncate max-w-full transition-colors">
                  {client.category}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
