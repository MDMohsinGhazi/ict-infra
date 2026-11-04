"use client";

import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Code2,
  Compass,
  FolderKanban,
  Network,
  Shield,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/MotionWrappers";

const SERVICES_DATA = [
  {
    title: "Implementation",
    code: "SRV-01",
    category: "On-Site Delivery",
    spec: "Turnkey ELV & Physical Cabling",
    icon: Wrench,
    imageUrl: "/images/service-implementation.jpg",
    description:
      "Turnkey physical installation of low-voltage cabling, server enclosures, and ADMCC surveillance devices.",
  },
  {
    title: "System Maintenance",
    code: "SRV-02",
    category: "Proactive SLA",
    spec: "24/7 Severity-1 Response",
    icon: Shield,
    imageUrl: "/images/service-maintenance.jpg",
    description:
      "24/7 preventive maintenance, regular firmware hardening, and swift Severity-1 field response.",
  },
  {
    title: "System Integration",
    code: "SRV-03",
    category: "Unified Ecosystem",
    spec: "Single-Pane Command Dashboard",
    icon: Network,
    imageUrl: "/images/service-integration.jpg",
    description:
      "Bridging CCTV, access control, BMS, fire alarm, and central monitoring into single-pane dashboards.",
  },
  {
    title: "Software Engineering",
    code: "SRV-04",
    category: "Custom Systems",
    spec: "API Middleware & Field Apps",
    icon: Code2,
    imageUrl: "/images/service-software.jpg",
    description:
      "Bespoke middleware, API bridges, mobile management apps, and engineering workflow tools.",
  },
  {
    title: "Data Science & AI",
    code: "SRV-05",
    category: "Smart Analytics",
    spec: "ANPR & Behavioral Telemetry",
    icon: Brain,
    imageUrl: "/images/service-data-science.jpg",
    description:
      "Automated license plate recognition (ANPR), behavioral analytics, crowd flow telemetry, and predictive heatmaps.",
  },
  {
    title: "Consultancy & Design",
    code: "SRV-06",
    category: "Strategic Planning",
    spec: "ADMCC/SIRA Blueprints",
    icon: Compass,
    imageUrl: "/images/service-consultancy.jpg",
    description:
      "ELV blueprint preparation, authority approvals (ADMCC/SIRA), tender documentation, and cost optimization.",
  },
  {
    title: "Turnkey Project Management",
    code: "SRV-07",
    category: "Governance",
    spec: "PMP Certified PMO Governance",
    icon: FolderKanban,
    imageUrl: "/images/service-project-management.jpg",
    description:
      "Dedicated PMP-certified project managers overseeing execution, QA/QC audits, testing, and commissioning.",
  },
];

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const interactTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Initialize position to the middle of the 3 duplicated sets
    const singleSetWidth = (360 + 24) * SERVICES_DATA.length;
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
        scrollPosRef.current += 0.75;
        container.scrollLeft = scrollPosRef.current;

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

    const cardStep = 384;
    isInteractingRef.current = true;
    if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);

    container.scrollBy({ left: -cardStep, behavior: "smooth" });

    interactTimeoutRef.current = setTimeout(() => {
      if (container) {
        const singleSetWidth = cardStep * SERVICES_DATA.length;
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

    const cardStep = 384;
    isInteractingRef.current = true;
    if (interactTimeoutRef.current) clearTimeout(interactTimeoutRef.current);

    container.scrollBy({ left: cardStep, behavior: "smooth" });

    interactTimeoutRef.current = setTimeout(() => {
      if (container) {
        const singleSetWidth = cardStep * SERVICES_DATA.length;
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
      className="w-full py-20 lg:py-28 bg-[#f8f9fd] border-t border-zinc-200 overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 border border-zinc-300 text-zinc-700 font-mono text-xs uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>FULL LIFECYCLE CAPABILITIES</span>
              </div>
              <h2 className="font-section-heading text-zinc-900 tracking-tight leading-none uppercase">
                Services
              </h2>
              <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-500 uppercase tracking-widest font-semibold">
                From Design to Delivery, We Handle It All Across Abu Dhabi &amp;
                Dubai
              </p>
            </div>

            {/* Direct Prev / Next Navigation Controls (1 Click = 1 Card Shift) */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={handlePrev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-zinc-300 hover:border-black bg-white flex items-center justify-center text-zinc-700 hover:text-black transition-all cursor-pointer shadow-sm"
                title="Previous Service"
                aria-label="Previous Services"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                type="button"
                onClick={handleNext}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-black bg-zinc-900 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                title="Next Service"
                aria-label="Next Services"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Infinite Slow-Moving Loop Track with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#f8f9fd] via-[#f8f9fd]/80 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#f8f9fd] via-[#f8f9fd]/80 to-transparent pointer-events-none z-20" />

        {/* Scrollable Container with Continuous Auto-Scroll & 1-Card Click Support */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...SERVICES_DATA, ...SERVICES_DATA, ...SERVICES_DATA].map(
            (service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`${service.title}-${idx}`}
                  className="w-[320px] sm:w-[360px] flex-shrink-0 bg-white border border-zinc-200/90 rounded-xl group hover:shadow-2xl hover:border-zinc-900 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:-translate-y-2"
                >
                  {/* Card Photo with Code Pill & Spec */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Left: Code Badge */}
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-sky-400 tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Icon className="w-3.5 h-3.5 text-primary-container" />
                      <span>[{service.code}]</span>
                    </div>

                    {/* Top Right: Spec Tag */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-condensed uppercase tracking-wider text-zinc-300 font-semibold">
                      {service.spec}
                    </div>
                  </div>

                  {/* Card Text */}
                  <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <span className="font-condensed text-xs text-primary-container uppercase tracking-wider font-bold block mb-1.5">
                        {service.category}
                      </span>
                      <h3 className="font-card-heading text-lg sm:text-xl text-zinc-900 group-hover:text-primary-container transition-colors tracking-wide leading-tight line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 font-body-sm text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-zinc-500 group-hover:text-black font-semibold transition-colors">
                      <span>Service SLA</span>
                      <span className="group-hover:translate-x-1.5 transition-transform inline-block text-black font-bold">
                        Explore Capability &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
