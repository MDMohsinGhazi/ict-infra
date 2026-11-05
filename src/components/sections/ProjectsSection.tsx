"use client";

import { CheckCircle, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionWrappers";

const PROJECTS_DATA = [
  {
    title:
      "Supply and Installation of Gate Barrier System - Jebel Ali Depot, UAE",
    category: "Parking & Barrier Automation",
    location: "Jebel Ali, Dubai",
    code: "PRJ-01",
    imageUrl: "/images/project-gate-barrier.jpg",
  },
  {
    title: "Gallagher Access Control System at Commercial Towers, Dubai",
    category: "Enterprise Access Control",
    location: "Business Bay, Dubai",
    code: "PRJ-02",
    imageUrl: "/images/project-access-control.jpg",
  },
  {
    title:
      "Security & ADMCC Video Surveillance at Waitrose Supermarket, Abu Dhabi",
    category: "Retail Visual Surveillance",
    location: "Abu Dhabi",
    code: "PRJ-03",
    imageUrl: "/images/project-waitrose.jpg",
  },
  {
    title:
      "CCTV Upgradation & High-Definition Storage - Al Maryah Tower, Abu Dhabi",
    category: "Government & Banking Facility",
    location: "Al Maryah Island, Abu Dhabi",
    code: "PRJ-04",
    imageUrl: "/images/project-al-maryah.jpg",
  },
  {
    title:
      "Campus-Wide High-Speed Networking - IIT Delhi & Zayed University, UAE",
    category: "Higher Education ICT",
    location: "Abu Dhabi & Dubai Campuses",
    code: "PRJ-05",
    imageUrl: "/images/project-campus-networking.jpg",
  },
  {
    title: "AV, SOC & Turnkey ELV Infrastructure - Mubadala Tower, Abu Dhabi",
    category: "Command Control & Executive AV",
    location: "Abu Dhabi Global Market",
    code: "PRJ-06",
    imageUrl: "/images/project-mubadala-tower.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-[#01040a] text-white relative overflow-hidden"
      id="projects"
    >
      {/* High-Tech Sovereign Ambient Gradient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(11,31,58,0.7),rgba(1,4,10,0.98))] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-400/30 text-sky-400 font-mono text-xs uppercase tracking-wider mb-3 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>PROVEN TRACK RECORD • ZERO-DEFECT COMMISSIONING</span>
            </div>
            <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none uppercase mt-2">
              Flagship Projects
            </h2>
            <p className="font-condensed text-sm sm:text-base text-zinc-400 uppercase tracking-widest font-semibold mt-3">
              From Concept to Completion, Delivered Right Across the UAE
            </p>
          </div>
        </FadeIn>

        {/* 6-Card Grid with Staggered Entrance and Micro-interactions */}
        <StaggerContainer
          delayChildren={0.1}
          staggerChildren={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {PROJECTS_DATA.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-white/10 overflow-hidden flex flex-col group hover:border-sky-400/50 hover:shadow-[0_10px_35px_-5px_rgba(27,106,254,0.25)] transition-all duration-300 shadow-xl h-full cursor-pointer rounded-xl backdrop-blur-md"
              >
                {/* Photo with Location & Code Pills */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                  {/* Top Left: Code Badge */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-sky-400 tracking-wider shadow-lg">
                    [{project.code}]
                  </div>

                  {/* Top Right: Location Tag */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-condensed text-zinc-300 flex items-center gap-1.5 shadow-lg">
                    <MapPin className="w-3 h-3 text-primary-container" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Bottom Content Box */}
                <div className="p-6 bg-white text-zinc-900 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-condensed text-xs text-primary-container font-bold uppercase tracking-wider block mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-heading-condensed text-lg sm:text-xl font-bold tracking-wide uppercase text-zinc-900 leading-snug group-hover:text-primary-container transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>COMPLETED & CERTIFIED</span>
                    </span>
                    <span className="text-zinc-700 group-hover:translate-x-1 transition-transform inline-block font-bold">
                      Case Study &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Explore All CTA Button with Tap Physics */}
        <FadeIn delay={0.25} className="mt-14 text-center">
          <motion.a
            href="#consultation-inquiry"
            whileHover={{
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(255,255,255,0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-3.5 bg-white hover:bg-zinc-100 text-black font-condensed text-base font-bold tracking-wider uppercase transition-colors shadow-lg"
          >
            Explore All Flagship Projects
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
