import type { LucideIcon } from "lucide-react";
import { ShieldCheck } from "lucide-react";

interface TelemetryBadgeProps {
  label?: string;
  sublabel?: string;
  className?: string;
  icon?: LucideIcon;
}

export function TelemetryBadge({
  label = "Active Topology Load",
  sublabel = "Tier-III Synchronized • 99.999% SLA",
  className = "",
  icon: Icon = ShieldCheck,
}: TelemetryBadgeProps) {
  return (
    <div
      className={`bg-primary-container/90 backdrop-blur-md p-3.5 rounded-xl text-on-primary shadow-lg flex items-center justify-between border border-white/10 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-status-success shrink-0" />
        <div>
          <div className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed">
            {label}
          </div>
          <div className="font-code-sm text-code-sm font-semibold">
            {sublabel}
          </div>
        </div>
      </div>
      <Icon className="w-6 h-6 text-secondary-fixed shrink-0" />
    </div>
  );
}
