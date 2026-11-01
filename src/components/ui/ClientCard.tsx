import { Building2, Hotel, Landmark, Plane, Zap } from "lucide-react";
import type { ComponentType } from "react";
import type { ClientItem } from "@/types";

interface ClientCardProps {
  client: ClientItem;
}

const CLIENT_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  hotel: Hotel,
  account_balance: Landmark,
  bolt: Zap,
  flight_takeoff: Plane,
};

export function ClientCard({ client }: ClientCardProps) {
  const { name, subtitle, icon, iconColorClass } = client;
  const IconComponent = CLIENT_ICONS[icon] || Building2;

  return (
    <div className="p-6 rounded-xl bg-surface-canvas shadow-sm flex flex-col items-center justify-center text-center space-y-2.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border-hairline/60 group">
      <div className="w-14 h-14 rounded-full bg-surface-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <IconComponent className={`w-8 h-8 ${iconColorClass}`} />
      </div>
      <span className="font-title-md text-title-md text-primary-container font-bold group-hover:text-secondary transition-colors">
        {name}
      </span>
      <span className="font-code-sm text-code-sm text-on-surface-variant">
        {subtitle}
      </span>
    </div>
  );
}
