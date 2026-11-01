import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  CloudCheck,
  FileText,
  Phone,
  ShieldCheck,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <>
      {/* REGULATORY TICKER STRIP */}
      <div className="w-full bg-surface-container-high px-4 py-2.5 flex items-center justify-between gap-2 border-b border-border-hairline/40">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <p className="font-label-sm text-xs text-on-surface truncate">
              ADMCC Approved{" "}
              <span className="text-on-surface-variant opacity-60">•</span> ISO
              9001:2015{" "}
              <span className="text-on-surface-variant opacity-60">•</span>{" "}
              ADNOC ICV Certified
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-surface-container-lowest px-2.5 py-0.5 rounded-full shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
            <span className="font-label-sm text-[10px] text-on-surface font-semibold">
              GOV ACCREDITED
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE HERO SECTION (< lg) */}
      <section className="lg:hidden w-full px-4 pt-5 pb-6 flex flex-col gap-5 bg-surface">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 self-start bg-secondary-container text-on-secondary-fixed px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="font-label-sm text-xs uppercase font-semibold">
              Tier-1 UAE Systems Integrator
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
            Next-Gen ICT Infrastructure &amp; Smart Technology Solutions
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed [text-wrap:pretty]">
            Delivering mission-critical fiber networking, ADMCC-compliant
            surveillance, and cloud ecosystems for enterprise entities across
            Abu Dhabi &amp; Dubai.
          </p>
        </div>

        {/* Live Telemetry Visual Card */}
        <div className="relative w-full rounded-xl overflow-hidden bg-inverse-surface shadow-md">
          <div className="relative h-52 w-full">
            <Image
              src={COMPANY_INFO.heroImageUrl}
              alt="Futuristic high-tech Abu Dhabi operations control room"
              fill
              className="object-cover opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent" />
            {/* Telemetry Live Badges Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-between items-center">
              <div className="flex items-center gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none">
                    UPTIME STATUS
                  </span>
                  <span className="font-label-md text-xs text-on-surface font-semibold leading-tight">
                    99.99% Guaranteed SLA
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                <Video className="w-4 h-4 text-tertiary shrink-0" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none">
                    MONITORING
                  </span>
                  <span className="font-label-md text-xs text-on-surface font-semibold leading-tight">
                    ADMCC Compliant Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Quick Actions */}
        <div className="flex flex-col gap-2.5 pt-1">
          <a
            href="#quick-rfq"
            className="w-full h-11 rounded-lg bg-primary-container text-on-primary font-label-md text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Request Survey / RFQ</span>
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full h-11 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-sm font-medium flex items-center justify-center gap-2 shadow-xs active:scale-[0.99] transition-all"
          >
            <Phone className="w-4 h-4 text-primary-fixed" />
            <span>Call Abu Dhabi HQ ({COMPANY_INFO.phone})</span>
          </a>
        </div>
      </section>

      {/* DESKTOP HERO SECTION (lg+) */}
      <section className="hidden lg:block relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface pb-16 pt-10">
        {/* Ambient micro-grid & subtle orange radial glow */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0b1c30 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="col-span-7 space-y-6">
              {/* Compliance Capsule Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span className="font-label-sm text-xs text-on-surface font-semibold tracking-wide">
                  ADMCC Approved • ISO 9001:2015 • UAE Integrator Since 2007
                </span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="font-display-hero text-4xl lg:text-5xl text-on-surface tracking-tight font-bold leading-[1.15]">
                Next-Generation{" "}
                <span className="text-primary-container">
                  ICT Infrastructure
                </span>{" "}
                &amp; Smart Technology Solutions
              </h1>

              {/* Value Proposition */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed [text-wrap:pretty]">
                Empowering government entities, enterprise complexes, and
                premier real estate across Abu Dhabi and the UAE with
                mission-critical surveillance, hyper-converged networking, cloud
                computing, and intelligent ELV automation.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2.5 h-12 px-6 rounded-lg bg-primary-container text-on-primary font-label-md text-sm font-semibold shadow-sm hover:bg-primary hover:shadow-md transition-all active:scale-[0.99]"
                >
                  <span>Explore Enterprise Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 h-12 px-5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-sm font-semibold hover:bg-surface-container hover:text-primary transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Schedule Site Survey</span>
                </button>
              </div>

              {/* Trust Badges Row */}
              <div className="pt-6 grid grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest shadow-2xs border border-border-hairline/60">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-label-sm text-xs text-on-surface font-bold">
                      ADNOC ICV Certified
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant">
                      Approved Oil &amp; Gas Supplier
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest shadow-2xs border border-border-hairline/60">
                  <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                    <CloudCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-label-sm text-xs text-on-surface font-bold">
                      Microsoft Partner
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant">
                      Azure &amp; M365 Certified
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-lowest shadow-2xs border border-border-hairline/60">
                  <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-label-sm text-xs text-on-surface font-bold">
                      8,040+ Delivered
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant">
                      UAE Government &amp; Private
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="col-span-5 relative">
              <div className="relative rounded-2xl bg-surface-container-lowest p-4 shadow-xl border border-border-hairline/80">
                <div className="relative overflow-hidden rounded-xl h-96 w-full">
                  <Image
                    src={COMPANY_INFO.heroImageUrl}
                    alt="Futuristic high-tech Abu Dhabi operations control room"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />

                  {/* Floating live status overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-between border border-border-hairline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-headline-sm text-base text-on-surface font-bold">
                          ADMCC Compliant
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          Continuous Video VMS Operations
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-secondary-container font-label-sm text-xs text-on-secondary-container font-semibold">
                      Active
                    </span>
                  </div>
                </div>

                {/* Accent metric chip floating top-right */}
                <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-xl bg-surface-container-lowest shadow-md flex items-center gap-2 border border-border-hairline">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-label-md text-sm text-on-surface font-bold">
                    99.99% Guaranteed SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
