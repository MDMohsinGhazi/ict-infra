import { Headphones, Server, ShieldCheck, Wrench } from "lucide-react";
import { VALUE_PILLARS } from "@/data/pillars";

const PILLAR_ICONS = {
  headphones: Headphones,
  wrench: Wrench,
  server: Server,
  "shield-check": ShieldCheck,
};

export function WhyUsSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-surface" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-wider">
            Operational Rigor
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight mt-1.5">
            Why UAE Enterprises Rely on RACT
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed [text-wrap:pretty]">
            Rather than matching standards, we establish benchmarks through
            responsive local field teams and proactive lifetime maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar) => {
            const Icon =
              PILLAR_ICONS[pillar.icon as keyof typeof PILLAR_ICONS] ||
              Headphones;
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-surface-container-lowest shadow-xs flex flex-col justify-between border border-border-hairline/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.colorClass}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed [text-wrap:pretty]">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant/80 border-t border-border-hairline/40 mt-4">
                  {pillar.badgeText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
