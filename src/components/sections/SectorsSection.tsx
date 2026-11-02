"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const INDUSTRIES_DATA = [
  {
    title: "EDUCATION",
    subtitle: "Universities, K-12 Academies & Smart Campuses",
    imageUrl:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "HEALTHCARE",
    subtitle: "Hospitals, Medical Towers & Clean-Room Clinics",
    imageUrl:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "FINANCIAL INSTITUTIONS",
    subtitle: "Banking HQs, Data Vaults & Trading Floors",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "INDUSTRIAL & MANUFACTURING",
    subtitle: "Factories, Warehouses & Port Logistics",
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "OIL & GAS / OFFSHORE",
    subtitle: "ADNOC Fields, Refineries & Hazardous Zones",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "HOSPITALITY & RETAIL",
    subtitle: "5-Star Resorts, Shopping Malls & Mixed-Use Towers",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
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
    <section className="w-full py-16 lg:py-24 bg-white" id="sectors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <h2 className="font-section-heading text-zinc-900 tracking-tight leading-none uppercase">
              Industries We Serve
            </h2>
            <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-500 uppercase tracking-widest font-semibold">
              Engineered for Mission-Critical Environments Across the UAE
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Previous Industries"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Next Industries"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Industries Photo Cards with Centered Dark Box (Transit style) */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.title}
              className="w-[300px] sm:w-[340px] h-[340px] sm:h-[380px] flex-shrink-0 snap-start relative group overflow-hidden border border-zinc-200 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Background Photo */}
              <Image
                src={ind.imageUrl}
                alt={ind.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

              {/* Centered Translucent Black Box with Bold White Text (Exact transit-si match) */}
              <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
                <div className="bg-black/85 group-hover:bg-black px-6 py-4 rounded text-center backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:scale-105 shadow-xl max-w-[90%]">
                  <h3 className="font-card-heading text-white tracking-wider uppercase leading-snug">
                    {ind.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-condensed uppercase tracking-wider text-zinc-300 line-clamp-1">
                    {ind.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
