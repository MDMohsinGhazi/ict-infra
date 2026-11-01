import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Headphones,
  LayoutGrid,
  MessageSquare,
  Network,
  Server,
  Wifi,
} from "lucide-react";
import type { ComponentType } from "react";
import type { SolutionItem } from "@/types";

interface SolutionCardProps {
  solution: SolutionItem;
  onSelect?: (solution: SolutionItem) => void;
}

const SOLUTION_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  dns: Server,
  hub: Network,
  wifi: Wifi,
  forum: MessageSquare,
  memory: Cpu,
  grid_view: LayoutGrid,
  support_agent: Headphones,
};

export function SolutionCard({ solution, onSelect }: SolutionCardProps) {
  const {
    title,
    description,
    icon,
    code,
    href = "#contact",
    featured,
    badge,
    ctaText,
  } = solution;

  const IconComponent = SOLUTION_ICONS[icon] || Server;

  if (featured) {
    return (
      <div className="lg:col-span-3 bg-gradient-to-r from-primary-container to-primary text-on-primary rounded-xl p-6 sm:p-8 lg:p-10 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden border border-white/10">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none" />
        <div className="space-y-3 z-10 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            {code && (
              <span className="font-code-sm text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-tertiary-fixed font-semibold tracking-wide border border-white/10">
                {code}
              </span>
            )}
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-surface-container-highest/20 text-tertiary-fixed font-label-sm text-xs uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-status-success" />
                {badge}
              </div>
            )}
          </div>
          <h3 className="font-headline-sm text-xl sm:text-headline-sm text-on-primary font-bold">
            {title}
          </h3>
          <p className="font-body-md text-sm sm:text-body-md text-on-primary-container leading-relaxed">
            {description}
          </p>
        </div>
        <div className="z-10 shrink-0 w-full sm:w-auto">
          <a
            href={href}
            onClick={(e) => {
              if (onSelect) {
                e.preventDefault();
                onSelect(solution);
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary transition-all shadow-md active:scale-95 font-semibold gap-2"
          >
            <span>{ctaText || "Engage SLA Contracts"}</span>
            <CheckCircle2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <article className="p-5 sm:p-6 lg:p-8 rounded-xl bg-surface-canvas shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden border border-border-hairline hover:-translate-y-0.5">
      <div className="h-1 w-full bg-secondary-container absolute top-0 left-0 transition-transform duration-300 origin-left" />

      <div className="space-y-3 sm:space-y-4">
        {/* Top Icon & Code Pill Header */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shadow-xs group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          {code && (
            <span className="font-code-sm text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold tracking-wide border border-border-hairline">
              {code}
            </span>
          )}
        </div>

        <h3 className="font-title-md text-base sm:text-title-md text-primary-container font-bold group-hover:text-secondary transition-colors leading-snug">
          {title}
        </h3>
        <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed [text-wrap:pretty]">
          {description}
        </p>
      </div>

      <div className="pt-4 sm:pt-6">
        <a
          href={href}
          onClick={(e) => {
            if (onSelect) {
              e.preventDefault();
              onSelect(solution);
            }
          }}
          className="inline-flex items-center font-label-md text-label-md text-secondary group-hover:text-secondary-container transition-colors gap-1.5"
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}
