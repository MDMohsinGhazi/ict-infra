"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SERVICES_DATA = [
  {
    title: "Implementation",
    category: "On-Site Delivery",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    description:
      "Turnkey physical installation of low-voltage cabling, server enclosures, and ADMCC surveillance devices.",
  },
  {
    title: "System Maintenance",
    category: "Proactive SLA",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    description:
      "24/7 preventive maintenance, regular firmware hardening, and swift Severity-1 field response.",
  },
  {
    title: "System Integration",
    category: "Unified Ecosystem",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    description:
      "Bridging CCTV, access control, BMS, fire alarm, and central monitoring into single-pane dashboards.",
  },
  {
    title: "Software Engineering",
    category: "Custom Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    description:
      "Bespoke middleware, API bridges, mobile management apps, and engineering workflow tools.",
  },
  {
    title: "Data Science & AI",
    category: "Smart Analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description:
      "Automated license plate recognition (ANPR), behavioral analytics, crowd flow telemetry, and predictive heatmaps.",
  },
  {
    title: "Consultancy & Design",
    category: "Strategic Planning",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    description:
      "ELV blueprint preparation, authority approvals (ADMCC/SIRA), tender documentation, and cost optimization.",
  },
  {
    title: "Turnkey Project Management",
    category: "Governance",
    imageUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    description:
      "Dedicated PMP-certified project managers overseeing execution, QA/QC audits, testing, and commissioning.",
  },
];

export function ServicesSection() {
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
    <section className="w-full py-16 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col items-start">
            <h2 className="font-section-heading text-zinc-900 tracking-tight leading-none uppercase">
              Services
            </h2>
            <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-500 uppercase tracking-widest font-semibold">
              From Design to Delivery, We Handle It All
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Previous Services"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Next Services"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Cards (Transit style) */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SERVICES_DATA.map((service) => (
            <div
              key={service.title}
              className="w-[300px] sm:w-[340px] flex-shrink-0 snap-start bg-zinc-50 border border-zinc-200 group hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Photo */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-200">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="340px"
                />
              </div>

              {/* Card Text (Transit style bold condensed title) */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-card-heading text-zinc-900 group-hover:text-primary-container transition-colors tracking-wide leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body-sm text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-zinc-400 group-hover:text-black font-semibold transition-colors">
                  <span>{service.category}</span>
                  <span>Explore &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
