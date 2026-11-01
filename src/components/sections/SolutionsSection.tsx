import {
  Building2,
  ChevronRight,
  Cloud,
  Network,
  Shield,
  Video,
  Wifi,
} from "lucide-react";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { SOLUTIONS_DATA } from "@/data/solutions";
import type { SolutionItem } from "@/types";

interface SolutionsSectionProps {
  onSelectSolution?: (solution: SolutionItem) => void;
}

const MOBILE_ICONS = {
  videocam: Video,
  wifi: Wifi,
  network: Network,
  cloud: Cloud,
  home: Building2,
  shield: Shield,
};

export function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  return (
    <section className="w-full py-6 lg:py-20 bg-surface" id="solutions">
      {/* MOBILE SOLUTIONS LIST (< lg) */}
      <div className="lg:hidden w-full px-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider">
              Turnkey Engineering
            </span>
            <h2 className="font-headline-sm text-lg text-on-surface font-bold">
              Core Infrastructure
            </h2>
          </div>
          <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full font-medium">
            6 Disciplines
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {SOLUTIONS_DATA.slice(0, 6).map((solution) => {
            const Icon =
              MOBILE_ICONS[solution.icon as keyof typeof MOBILE_ICONS] ||
              Network;
            return (
              <div
                key={solution.id}
                className="bg-surface-container-lowest rounded-xl p-4 shadow-xs flex flex-col gap-3 border border-border-hairline/50"
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-headline-sm text-base font-bold text-on-surface">
                        {solution.title}
                      </h3>
                      {solution.badge && (
                        <span className="font-label-sm text-[10px] bg-primary-fixed-dim text-on-primary-fixed px-1.5 py-0.5 rounded font-semibold">
                          {solution.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectSolution?.(solution)}
                  className="w-full flex items-center justify-between pt-2 border-t border-border-hairline/30 text-primary font-label-md text-xs font-semibold cursor-pointer"
                >
                  <span>{solution.actionText}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP SOLUTIONS GRID (lg+) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6">
        <div className="flex flex-row items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs font-semibold mb-2.5">
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <h2 className="font-headline-lg text-4xl text-on-surface font-bold tracking-tight">
              Integrated Turnkey Technologies
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-1.5 leading-relaxed [text-wrap:pretty]">
              From regulatory surveillance clearance to mission-critical
              multi-cloud data fabrics.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-label-md text-sm text-on-surface-variant">
              Tier-1 Equipment Compliance
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
          </div>
        </div>

        {/* Grid of 8 Core Solutions */}
        <div className="grid grid-cols-4 gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onSelect={onSelectSolution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
