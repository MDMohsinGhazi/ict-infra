import {
  Award,
  Camera,
  CheckCircle2,
  Flame,
  Router,
  Shield,
  Sun,
  Terminal,
} from "lucide-react";
import { ACCREDITATIONS_DATA, PARTNERS_DATA } from "@/data/partners";

const PARTNER_ICONS = {
  terminal: Terminal,
  sun: Sun,
  camera: Camera,
  router: Router,
};

const ACCREDITATION_ICONS = {
  shield: Shield,
  flame: Flame,
  award: Award,
};

export function AccreditationsSection() {
  return (
    <section
      className="w-full py-6 lg:py-20 bg-surface-container-lowest border-y border-border-hairline/60"
      id="certifications"
    >
      {/* MOBILE ALLIANCES & ACCREDITATIONS (< lg) */}
      <div className="lg:hidden w-full px-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider">
            Alliances
          </span>
          <h2 className="font-headline-sm text-lg text-on-surface font-bold">
            Accreditations &amp; Global Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-surface-container-lowest p-3 rounded-lg shadow-xs flex items-center gap-2.5 border border-border-hairline/50">
            <div className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-label-md text-xs font-bold text-on-surface truncate">
                ADMCC Abu Dhabi
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                Approved Integrator
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-3 rounded-lg shadow-xs flex items-center gap-2.5 border border-border-hairline/50">
            <div className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-label-md text-xs font-bold text-on-surface truncate">
                ADNOC ICV
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                Certified Supplier
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-3 rounded-lg shadow-xs flex items-center gap-2.5 border border-border-hairline/50">
            <div className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center shrink-0">
              <Terminal className="w-4 h-4 text-tertiary" />
            </div>
            <div className="min-w-0">
              <div className="font-label-md text-xs font-bold text-on-surface truncate">
                Microsoft
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                Certified Partner
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-3 rounded-lg shadow-xs flex items-center gap-2.5 border border-border-hairline/50">
            <div className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center shrink-0">
              <Sun className="w-4 h-4 text-secondary" />
            </div>
            <div className="min-w-0">
              <div className="font-label-md text-xs font-bold text-on-surface truncate">
                Magnizon Green
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                Solar &amp; Power
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-3 rounded-lg shadow-xs flex items-center gap-2.5 border border-border-hairline/50">
            <div className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4 text-on-surface" />
            </div>
            <div className="min-w-0">
              <div className="font-label-md text-xs font-bold text-on-surface truncate">
                Milesight
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                Enterprise CCTV
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-3 rounded-lg shadow-xs flex items-center gap-2.5 border border-border-hairline/50">
            <div className="w-9 h-9 rounded-md bg-surface-container flex items-center justify-center shrink-0">
              <Router className="w-4 h-4 text-tertiary" />
            </div>
            <div className="min-w-0">
              <div className="font-label-md text-xs font-bold text-on-surface truncate">
                DrayTek
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant">
                Security Routing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP ACCREDITATIONS & ALLIANCES (lg+) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-14 items-center">
          {/* Text Left Column */}
          <div className="col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>GOVERNMENT COMPLIANT INTEGRATOR</span>
            </div>

            <h2 className="font-headline-lg text-4xl text-on-surface font-bold tracking-tight">
              Fully Certified for Federal &amp; Municipal Specifications
            </h2>

            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed [text-wrap:pretty]">
              Royal Arabian Smart Technologies maintains rigorous regulatory
              qualifications required by Abu Dhabi security departments and UAE
              national resource corporations. We eliminate compliance friction
              from planning to final inspection.
            </p>

            <div className="space-y-3 pt-2">
              {ACCREDITATIONS_DATA.map((item) => {
                const Icon =
                  ACCREDITATION_ICONS[
                    item.icon as keyof typeof ACCREDITATION_ICONS
                  ] || Shield;
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-low border border-border-hairline/50"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-xs ${item.colorClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-base text-on-surface font-bold">
                        {item.title}
                      </h3>
                      <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed [text-wrap:pretty]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Partner Badges & Tech Ecosystem */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-surface-container p-6 sm:p-8 shadow-xs border border-border-hairline">
              <h3 className="font-headline-sm text-xl text-on-surface font-bold mb-2">
                Global Technology Alliance
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed [text-wrap:pretty]">
                Authorized direct distributor and certified deployment partner
                for premier hardware and cloud software manufacturers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PARTNERS_DATA.map((partner) => {
                  const Icon =
                    PARTNER_ICONS[partner.icon as keyof typeof PARTNER_ICONS] ||
                    Terminal;
                  return (
                    <div
                      key={partner.id}
                      className="p-5 rounded-xl bg-surface-container-lowest shadow-xs flex flex-col justify-between border border-border-hairline/60 hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-3">
                          <Icon className={`w-5 h-5 ${partner.colorClass}`} />
                        </div>
                        <h4 className="font-headline-sm text-base text-on-surface font-bold">
                          {partner.name}
                        </h4>
                        <div
                          className={`font-label-sm text-xs font-semibold mt-0.5 ${partner.colorClass}`}
                        >
                          {partner.partnerType}
                        </div>
                        <p className="font-body-sm text-xs text-on-surface-variant mt-2 leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
