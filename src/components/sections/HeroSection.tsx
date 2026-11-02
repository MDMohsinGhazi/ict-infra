"use client";

import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { COMPANY_INFO } from "@/data/company";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

const HERO_SLIDES = [
  {
    title: "SECURE, SIMPLIFY, SCALE WITHOUT COMPLEXITY",
    subtitle:
      "WE DESIGN AND INTEGRATE NEXT-GEN SECURITY AND ELV SOLUTIONS THAT KEEP YOUR OPERATIONS PROTECTED, CONNECTED, AND READY FOR TOMORROW - DELIVERING EFFICIENCY, SCALABILITY, AND PEACE OF MIND.",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    highlight: "ADMCC & SIRA CERTIFIED INTEGRATOR",
  },
  {
    title: "FUTURE-READY INFRASTRUCTURE FOR COMPLEX ENTERPRISES",
    subtitle:
      "MISSION-CRITICAL FIBER CABLING, HIGH-DENSITY WI-FI, AND AI-POWERED SURVEILLANCE ECOSYSTEMS ACROSS ABU DHABI AND DUBAI.",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
    highlight: "TURNKEY ICT & BUILDING AUTOMATION",
  },
  {
    title: "SEAMLESS CONNECTIVITY, ZERO COMPROMISE",
    subtitle:
      "PROTECTING GOVERNMENT FACILITIES, FINANCIAL HUBS, AND CRITICAL HEALTHCARE INFRASTRUCTURE WITH 24/7 PROACTIVE SLA EXCELLENCE.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    highlight: "20+ YEARS OF GCC OPERATIONAL RIGOR",
  },
];

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-black overflow-hidden select-none">
      {/* Background Image Carousel with Smooth Transitions */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover object-center filter brightness-[0.4] contrast-125"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>
      ))}

      {/* Navigation Arrow Left */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Navigation Arrow Right */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Hero Content Container (Transit style centered uppercase) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Subtle Government / Certification Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white font-label-sm text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span>{slide.highlight}</span>
        </div>

        {/* Transit-style Massive Bold Condensed Heading */}
        <h1 className="font-hero-condensed text-white tracking-wide leading-tight max-w-4xl text-shadow-lg animate-in fade-in duration-500">
          {slide.title}
        </h1>

        {/* Transit-style Centered Uppercase Subtitle */}
        <p className="mt-6 font-body-md text-xs sm:text-sm lg:text-base text-zinc-300 font-medium tracking-wider max-w-3xl uppercase leading-relaxed text-balance">
          {slide.subtitle}
        </p>

        {/* Dual Rectangular CTA Buttons (Transit-style sharp buttons) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-black hover:bg-zinc-900 text-white border border-white/40 font-condensed text-base lg:text-lg font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:border-white active:scale-98"
          >
            Talk to an Expert
          </button>
          <a
            href="#solutions"
            className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-white hover:bg-zinc-100 text-black font-condensed text-base lg:text-lg font-bold uppercase tracking-wider text-center transition-all duration-200 cursor-pointer shadow-lg active:scale-98"
          >
            Our Solutions
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="mt-12 flex items-center gap-2.5">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Quick Action Call Button (like transit-si.com bottom right) */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-zinc-900/90 hover:bg-black text-white border border-white/20 shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group backdrop-blur-md"
        title="Direct Line to Engineer"
        aria-label="Call Royal Arabian"
      >
        <Phone className="w-6 h-6 text-primary-container group-hover:rotate-12 transition-transform" />
      </a>
    </section>
  );
}
