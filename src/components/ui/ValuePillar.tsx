import { CheckCircle2, Coins, Shield } from "lucide-react";
import type { ComponentType } from "react";
import type { ValuePillarItem } from "@/types";

interface ValuePillarProps {
  pillar: ValuePillarItem;
}

const PILLAR_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  task_alt: CheckCircle2,
  shield: Shield,
  price_change: Coins,
};

export function ValuePillar({ pillar }: ValuePillarProps) {
  const { title, description, icon } = pillar;
  const IconComponent = PILLAR_ICONS[icon] || CheckCircle2;

  return (
    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-subtle/70 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-secondary shadow-sm">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h3 className="font-title-md text-title-md text-primary-container font-bold">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
