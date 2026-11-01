import { Fuel, Hotel, Landmark, Plane } from "lucide-react";
import { ClientCard } from "@/components/ui/ClientCard";
import { CLIENTS_DATA } from "@/data/clients";

export function ClientsSection() {
  return (
    <section className="w-full bg-surface-subtle py-10 lg:py-24" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-6 lg:space-y-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="font-headline-sm lg:font-headline-md text-xl lg:text-headline-md text-primary-container font-bold">
            Trusted Across Critical Sovereign Sectors
          </h2>
          <span className="font-code-sm text-xs text-secondary font-semibold px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 border border-secondary/20">
            TIER-1 CLIENTELE
          </span>
        </div>

        {/* Mobile 2x2 Sector Cards (Visible < md) */}
        <div className="grid grid-cols-2 gap-2.5 md:hidden">
          <div className="p-3 rounded-lg bg-surface-container flex items-center gap-2.5 border border-border-hairline/60">
            <Hotel className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="font-label-md text-xs text-primary font-bold leading-tight">
                Hospitality
              </span>
              <span className="font-code-sm text-[10px] text-on-surface-variant">
                5-Star Resorts
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-surface-container flex items-center gap-2.5 border border-border-hairline/60">
            <Landmark className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="font-label-md text-xs text-primary font-bold leading-tight">
                Government
              </span>
              <span className="font-code-sm text-[10px] text-on-surface-variant">
                Ministries
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-surface-container flex items-center gap-2.5 border border-border-hairline/60">
            <Fuel className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="font-label-md text-xs text-primary font-bold leading-tight">
                Oil &amp; Gas
              </span>
              <span className="font-code-sm text-[10px] text-on-surface-variant">
                Offshore Rigs
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-surface-container flex items-center gap-2.5 border border-border-hairline/60">
            <Plane className="w-5 h-5 text-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="font-label-md text-xs text-primary font-bold leading-tight">
                Aviation
              </span>
              <span className="font-code-sm text-[10px] text-on-surface-variant">
                Control Hubs
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Institutional Logos Matrix (Visible md+) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6">
          {CLIENTS_DATA.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
