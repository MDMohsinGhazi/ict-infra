import { CheckCircle2, Shield, TrendingDown } from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

export function WhyUsSection() {
  return (
    <section
      className="w-full bg-surface-canvas py-12 lg:py-24 relative"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* NOC Image Left Column */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-border-hairline group">
              <div className="relative h-48 sm:h-64 lg:aspect-[16/10] lg:h-auto w-full">
                <Image
                  src={COMPANY_INFO.nocImageUrl}
                  alt="NexaCore Operations Center in Abu Dhabi overlooking skyline"
                  fill
                  className="object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              </div>

              {/* Inset Top Badge */}
              <div className="absolute top-3 left-3 bg-primary-container/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-on-primary flex items-center gap-2 shadow-sm border border-white/10">
                <Shield className="w-4 h-4 text-tertiary-fixed" />
                <span className="font-code-sm text-xs font-semibold">
                  Abu Dhabi Operations NOC • Live Telemetry
                </span>
              </div>

              {/* Inset Bottom Live Shift Telemetry */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-on-primary text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-status-success" />
                  <span className="font-code-sm text-[11px] font-semibold">
                    AD-NOC ACTIVE · SHIFT A
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary-fixed">
                  Salam HQ Desk
                </span>
              </div>
            </div>

            {/* Bottom Metric Ribbon */}
            <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-surface-subtle flex items-center justify-around shadow-xs border border-border-hairline/60">
              <div className="text-center">
                <span className="font-headline-sm text-lg sm:text-headline-sm text-primary-container font-bold">
                  100%
                </span>
                <span className="block font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase">
                  Local Data Residency
                </span>
              </div>
              <div className="h-7 w-px bg-surface-container-highest" />
              <div className="text-center">
                <span className="font-headline-sm text-lg sm:text-headline-sm text-primary-container font-bold">
                  &lt; 30 min
                </span>
                <span className="block font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase">
                  Field Dispatch
                </span>
              </div>
              <div className="h-7 w-px bg-surface-container-highest" />
              <div className="text-center">
                <span className="font-headline-sm text-lg sm:text-headline-sm text-secondary font-bold">
                  Tier-1
                </span>
                <span className="block font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase">
                  Carrier Pipes
                </span>
              </div>
            </div>
          </div>

          {/* Content Right Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <h2 className="font-headline-sm lg:font-headline-lg text-2xl lg:text-headline-lg text-primary-container tracking-tight font-bold">
                Eliminate Vendor Fragmentation
              </h2>
              <p className="font-body-sm lg:font-body-lg text-sm lg:text-body-lg text-on-surface-variant max-w-[65ch] leading-relaxed [text-wrap:pretty]">
                Consolidate your entire technology stack under a single
                accountable Abu Dhabi ICT partner. One contract, one sovereign
                NOC, and zero cross-vendor finger-pointing.
              </p>
            </div>

            {/* 3 Key Points */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-subtle sm:bg-transparent hover:bg-surface-subtle transition-colors border border-border-hairline/60 sm:border-0">
                <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-label-md text-sm text-primary font-bold">
                    Single-Point Accountability
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed [text-wrap:pretty]">
                    Consolidated SLA covering cloud, hardware, ISP pipes, and
                    cyber defenses with guaranteed resolution times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-subtle sm:bg-transparent hover:bg-surface-subtle transition-colors border border-border-hairline/60 sm:border-0">
                <div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-label-md text-sm text-primary font-bold">
                    UAE Sovereign Compliance
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed [text-wrap:pretty]">
                    Certified under TDRA and ADGM data storage regulations with
                    in-country data residency guaranteed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-subtle sm:bg-transparent hover:bg-surface-subtle transition-colors border border-border-hairline/60 sm:border-0">
                <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary shadow-xs">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-label-md text-sm text-primary font-bold">
                    Predictable OPEX Model
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed [text-wrap:pretty]">
                    Shift massive capital expenditures into stable, transparent
                    monthly operating expenses with zero hidden surcharges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
