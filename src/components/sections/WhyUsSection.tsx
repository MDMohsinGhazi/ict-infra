import { Headphones, Layers, ShieldCheck, Wrench } from "lucide-react";

const VALUE_PILLARS = [
  {
    icon: ShieldCheck,
    title: "ADMCC & Regulatory Mastery",
    description:
      "Fully approved by Abu Dhabi Monitoring & Control Centre (ADMCC) and Dubai SIRA. Zero-compliance-risk turnkey commissioning.",
    badge: "Government Certified",
  },
  {
    icon: Layers,
    title: "Turnkey ELV & ICT Integration",
    description:
      "From optical backbone cabling and CCTV video matrices to smart building BMS automation, we deliver unified single-contract execution.",
    badge: "End-to-End Delivery",
  },
  {
    icon: Headphones,
    title: "24/7 Severity-1 SLA Response",
    description:
      "Direct dispatch to dedicated Abu Dhabi field engineers with guaranteed sub-4-hour emergency on-site resolution.",
    badge: "Mission-Critical Support",
  },
  {
    icon: Wrench,
    title: "Tier-1 Global Alliances",
    description:
      "Direct authorized integration partnerships with leading manufacturers including Cisco, Schneider, Hikvision, Gallagher, and Microsoft.",
    badge: "Certified OEM Partners",
  },
];

export function WhyUsSection() {
  return (
    <section
      className="w-full py-16 lg:py-24 bg-zinc-50 border-y border-zinc-200"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-condensed text-sm tracking-widest text-zinc-500 uppercase font-semibold">
            Operational Rigor
          </span>
          <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-none uppercase mt-2">
            Why Royal Arabian
          </h2>
          <p className="mt-4 font-body-md text-sm sm:text-base text-zinc-600 leading-relaxed">
            Over two decades of proven engineering leadership across the UAE,
            delivering complex low-voltage, telecom, and security projects on
            time and within budget.
          </p>
        </div>

        {/* 4 Value Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 bg-white border border-zinc-200 hover:border-black transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-zinc-100 group-hover:bg-black group-hover:text-white text-zinc-900 flex items-center justify-center transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading-condensed text-xl sm:text-2xl text-zinc-900 tracking-wide uppercase leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-body-sm text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-primary-container font-bold">
                  <span>{pillar.badge}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
