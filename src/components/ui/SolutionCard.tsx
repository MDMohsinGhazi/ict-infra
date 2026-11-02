import {
  ArrowRight,
  Building2,
  Cloud,
  Code,
  Network,
  Shield,
  Users,
  Video,
  Wifi,
} from "lucide-react";
import type { ComponentType } from "react";
import type { SolutionItem } from "@/types";

interface SolutionCardProps {
  solution: SolutionItem;
  onSelect?: (solution: SolutionItem) => void;
}

const SOLUTION_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  videocam: Video,
  wifi: Wifi,
  network: Network,
  cloud: Cloud,
  home: Building2,
  shield: Shield,
  users: Users,
  code: Code,
};

const ICON_BG_CLASSES: Record<string, string> = {
  videocam: "bg-primary-fixed text-primary",
  wifi: "bg-surface-container-highest text-on-surface",
  network: "bg-tertiary-fixed text-tertiary",
  cloud: "bg-secondary-fixed text-secondary",
  home: "bg-primary-fixed-dim text-on-primary-fixed",
  shield: "bg-surface-container-highest text-on-surface",
  users: "bg-tertiary-fixed-dim text-tertiary",
  code: "bg-primary-fixed text-primary",
};

export function SolutionCard({ solution, onSelect }: SolutionCardProps) {
  const {
    title,
    description,
    icon,
    badge,
    actionText = "Learn Architecture",
    href = "#consultation-inquiry",
    tagColorClass = "bg-surface-container text-primary",
  } = solution;

  const IconComponent = SOLUTION_ICONS[icon] || Network;
  const iconBg = ICON_BG_CLASSES[icon] || "bg-primary-fixed text-primary";

  return (
    <div className="rounded-xl bg-surface-container-lowest p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-border-hairline/60 hover:-translate-y-1">
      <div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform ${iconBg}`}
        >
          <IconComponent className="w-6 h-6" />
        </div>
        {badge && (
          <div
            className={`inline-block px-2.5 py-0.5 rounded font-label-sm text-xs font-bold mb-2.5 ${tagColorClass}`}
          >
            {badge}
          </div>
        )}
        <h3 className="font-headline-sm text-lg text-on-surface font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed [text-wrap:pretty]">
          {description}
        </p>
      </div>

      <div className="pt-6">
        <a
          href={href}
          onClick={(e) => {
            if (onSelect) {
              e.preventDefault();
              onSelect(solution);
            }
          }}
          className="inline-flex items-center text-primary font-label-md text-sm font-semibold hover:text-primary-container transition-colors group/link"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
