import { Award, ShieldCheck } from "lucide-react";

const STATS = [
  { value: "120+", label: "EMPLOYEES" },
  { value: "8,041+", label: "PROJECTS" },
  { value: "1,147+", label: "HAPPY CLIENTS" },
  { value: "20+", label: "YEARS OF EXPERIENCE" },
  { value: "75+", label: "GLOBAL PARTNERS" },
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
      className="w-full py-16 lg:py-24 bg-black text-white relative overflow-hidden"
      id="certifications"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-radial from-zinc-900/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 5-Column Stats Row (Transit style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 text-center border-b border-white/10 pb-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-hero-condensed text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="font-condensed text-xs sm:text-sm text-zinc-400 font-semibold tracking-widest mt-2 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pursuit of Excellence Text */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="font-condensed text-sm sm:text-base lg:text-lg text-zinc-300 uppercase tracking-wider leading-relaxed">
            We take pride in our continuous pursuit of excellence. Our
            dedication to quality, safety, and sustainability is reflected in
            the globally recognized certifications we&apos;ve earned.
          </p>
        </div>

        {/* Accreditations Badges Grid / Row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-4 rounded-lg bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 flex flex-col items-center text-center justify-center transition-all hover:border-white/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2.5 border border-white/10 group-hover:scale-105 transition-transform">
                {cert.type === "gov" ? (
                  <ShieldCheck className="w-5 h-5 text-primary-container" />
                ) : (
                  <Award className="w-5 h-5 text-sky-400" />
                )}
              </div>
              <span className="font-condensed text-xs sm:text-sm text-white font-bold tracking-wider uppercase">
                {cert.title}
              </span>
              <span className="font-label-sm text-[10px] text-zinc-400 mt-1 leading-tight line-clamp-2">
                {cert.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
