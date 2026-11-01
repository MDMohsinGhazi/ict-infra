import { Gauge } from "lucide-react";
import { STATS_DATA } from "@/data/stats";

export function StatsStrip() {
  return (
    <section className="w-full bg-primary-container text-on-primary shadow-xl relative z-20 py-4 lg:py-0">
      {/* Desktop Gold Accent Borders */}
      <div className="hidden lg:block h-[2px] w-full bg-tertiary-fixed-dim/80" />

      {/* Mobile Card Layout (Visible < md) */}
      <div className="md:hidden px-4">
        <div className="relative rounded-xl p-4 sm:p-5 bg-primary-container text-on-primary shadow-md overflow-hidden border border-white/10">
          {/* Decorative Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary-fixed via-secondary-container to-tertiary-fixed" />
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-tertiary-fixed" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                Sovereign Performance
              </span>
            </div>
            <span className="font-code-sm text-[11px] text-tertiary-fixed font-semibold tracking-wide px-2 py-0.5 rounded bg-white/5 border border-white/10">
              REAL-TIME
            </span>
          </div>

          {/* 2x2 Grid of Key Stats */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-lg bg-primary/40 flex flex-col gap-0.5 border border-white/5">
              <span className="font-headline-md text-2xl text-on-primary tracking-tight font-bold">
                99.999%
              </span>
              <span className="font-body-sm text-xs text-secondary-fixed font-medium">
                Uptime SLA
              </span>
              <span className="font-code-sm text-[10px] text-on-primary-container">
                Dual redundant grid
              </span>
            </div>

            <div className="p-3 rounded-lg bg-primary/40 flex flex-col gap-0.5 border border-white/5">
              <div className="flex items-baseline gap-1">
                <span className="font-headline-md text-2xl text-tertiary-fixed tracking-tight font-bold">
                  15
                </span>
                <span className="font-label-md text-xs text-tertiary-fixed font-semibold">
                  ms
                </span>
              </div>
              <span className="font-body-sm text-xs text-secondary-fixed font-medium">
                Failover Response
              </span>
              <span className="font-code-sm text-[10px] text-on-primary-container">
                Sub-second link sync
              </span>
            </div>

            <div className="p-3 rounded-lg bg-primary/40 flex flex-col gap-0.5 border border-white/5">
              <span className="font-headline-md text-2xl text-on-primary tracking-tight font-bold">
                4,500+
              </span>
              <span className="font-body-sm text-xs text-secondary-fixed font-medium">
                Facilities Deployed
              </span>
              <span className="font-code-sm text-[10px] text-on-primary-container">
                GCC &amp; international
              </span>
            </div>

            <div className="p-3 rounded-lg bg-primary/40 flex flex-col gap-0.5 border border-white/5">
              <span className="font-headline-md text-2xl text-status-success tracking-tight font-bold">
                24/7
              </span>
              <span className="font-body-sm text-xs text-secondary-fixed font-medium">
                Abu Dhabi NOC
              </span>
              <span className="font-code-sm text-[10px] text-on-primary-container">
                Tier-III sovereign desk
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / Tablet Grid (Visible md+) */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-on-primary-container/20">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center md:items-start pt-4 md:pt-0 ${
                index === 0 ? "md:pr-4" : "md:px-4"
              }`}
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed mb-1 font-bold">
                {item.label}
              </span>
              <span
                className={`font-display-xl text-display-xl tracking-tight ${
                  item.highlight ? "text-secondary-fixed" : "text-on-primary"
                }`}
              >
                {item.metric}
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container mt-1">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block h-[2px] w-full bg-tertiary-fixed-dim/80" />
    </section>
  );
}
