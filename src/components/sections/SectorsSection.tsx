import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { SECTORS_DATA } from "@/data/sectors";

export function SectorsSection() {
  return (
    <section
      className="w-full py-6 lg:py-20 bg-surface-container-low"
      id="projects"
    >
      {/* MOBILE HORIZONTAL SCROLL TRACK (< lg) */}
      <div className="lg:hidden w-full px-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider">
            Sector Specialization
          </span>
          <h2 className="font-headline-sm text-lg text-on-surface font-bold">
            UAE Vertical Deployments
          </h2>
          <p className="font-body-sm text-xs text-on-surface-variant">
            Tailored systems aligned with local regulatory requirements.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-3.5 pb-2 -mx-4 px-4 scroll-smooth no-scrollbar">
          {SECTORS_DATA.map((sector) => (
            <div
              key={sector.id}
              className="shrink-0 w-72 bg-surface-container-lowest rounded-xl overflow-hidden shadow-xs flex flex-col border border-border-hairline/50"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={sector.imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-on-surface/80 backdrop-blur-sm text-on-primary font-label-sm text-[10px] px-2 py-0.5 rounded font-semibold">
                  {sector.tag}
                </span>
              </div>
              <div className="p-3.5 flex flex-col gap-1.5 flex-1 justify-between">
                <div>
                  <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                    {sector.title}
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant line-clamp-3 mt-1 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-primary font-label-sm text-xs font-semibold pt-2 border-t border-border-hairline/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">
                    {sector.chips[0] || "Fully Certified"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP GRID (lg+) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-widest">
            Industry Expertise
          </span>
          <h2 className="font-headline-lg text-4xl text-on-surface font-bold tracking-tight mt-2">
            Tailored for High-Stakes UAE Sectors
          </h2>
          <p className="font-body-md text-base text-on-surface-variant mt-2 leading-relaxed [text-wrap:pretty]">
            From ADNOC-compliant offshore operations to Five-Star hospitality
            destinations.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {SECTORS_DATA.map((sector) => (
            <div
              key={sector.id}
              className="rounded-2xl bg-surface-container-lowest overflow-hidden shadow-xs hover:shadow-lg transition-all group border border-border-hairline/60 flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <Image
                    src={sector.imageUrl}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-xs font-semibold shadow-2xs ${
                      sector.tagColorClass || "text-on-surface"
                    }`}
                  >
                    {sector.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold mb-2 group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant mb-4 leading-relaxed [text-wrap:pretty]">
                    {sector.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {sector.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-[11px] font-medium"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
