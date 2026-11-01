import { Award, Building2, History, Layers } from "lucide-react";
import { STATS_DATA } from "@/data/stats";

export function StatsStrip() {
  return (
    <>
      {/* MOBILE 2x2 BENTO GRID (< lg) */}
      <section className="lg:hidden w-full px-4 py-4 bg-surface-container-low border-y border-border-hairline/40">
        <div className="flex flex-col gap-1 mb-3">
          <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider">
            Enterprise Reliability
          </span>
          <h2 className="font-headline-sm text-lg text-on-surface font-bold">
            Proven GCC Track Record
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Stat 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col justify-between border border-border-hairline/40">
            <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center mb-2">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <span className="font-headline-md text-2xl font-bold text-on-surface tracking-tight">
                8,041+
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Clients across UAE
              </p>
            </div>
          </div>
          {/* Stat 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col justify-between border border-border-hairline/40">
            <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-2">
              <Layers className="w-4 h-4 text-tertiary" />
            </div>
            <div>
              <span className="font-headline-md text-2xl font-bold text-on-surface tracking-tight">
                100+
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Mega Projects Live
              </p>
            </div>
          </div>
          {/* Stat 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col justify-between border border-border-hairline/40">
            <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center mb-2">
              <History className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <span className="font-headline-md text-2xl font-bold text-on-surface tracking-tight">
                20+
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Years (Est. 2007)
              </p>
            </div>
          </div>
          {/* Stat 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-xs flex flex-col justify-between border border-border-hairline/40">
            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center mb-2">
              <Award className="w-4 h-4 text-tertiary" />
            </div>
            <div>
              <span className="font-headline-md text-2xl font-bold text-on-surface tracking-tight">
                10+
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP METRICS STRIP (lg+) */}
      <section className="hidden lg:block w-full bg-surface-container-lowest py-10 shadow-xs relative z-10 border-y border-border-hairline/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            {STATS_DATA.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-surface-container-low flex flex-col justify-center transition-transform hover:-translate-y-1 duration-200 border border-border-hairline/40"
              >
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-display-hero text-4xl lg:text-5xl font-bold tracking-tight ${
                      item.highlight ? "text-primary" : "text-on-surface"
                    }`}
                  >
                    {item.metric}
                  </span>
                  <span className="font-headline-md text-2xl text-primary-container font-bold">
                    +
                  </span>
                </div>
                <div className="font-label-md text-sm text-on-surface font-semibold mt-1.5">
                  {item.label}
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
