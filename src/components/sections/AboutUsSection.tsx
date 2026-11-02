import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

interface AboutUsSectionProps {
  onLearnMore?: () => void;
}

export function AboutUsSection({ onLearnMore }: AboutUsSectionProps) {
  return (
    <section className="w-full py-16 lg:py-24 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-condensed text-sm tracking-widest text-zinc-500 uppercase font-semibold mb-3">
              We Are Royal Arabian
            </span>

            <h2 className="font-section-heading text-zinc-900 tracking-tight leading-tight mb-6">
              Future-Ready System Integrators in Abu Dhabi and Across the UAE
            </h2>

            <div className="space-y-4 text-zinc-600 font-body-md text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2007 in Abu Dhabi, {COMPANY_INFO.legalName} has grown
                into one of the leading system integrators in the UAE, with an
                active footprint across Abu Dhabi, Dubai, and regional
                megaprojects. Recognized among the top low-voltage (ELV) and ICT
                integrators, we specialize in high-reliability
                telecommunications, visual surveillance, intelligent data
                centers, and smart building automation.
              </p>
              <p>
                As trusted partners to government departments, oil &amp; gas
                facilities, and enterprise headquarters, our reputation is
                grounded in uncompromising regulatory compliance (ADMCC, SIRA,
                ADNOC ICV, and ISO certifications) and client-first execution.
                By continuously investing in certified engineers and global
                alliances, ROYAL ARABIAN delivers resilient, scalable
                integration solutions built for tomorrow.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onLearnMore}
                className="inline-block px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-condensed text-base font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-md"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-xl overflow-hidden shadow-xl border border-zinc-200">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Royal Arabian Smart Technologies Engineering Operations Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/70 backdrop-blur-md text-white text-xs font-condensed uppercase tracking-wider rounded border border-white/10 flex items-center justify-between">
                <span>Certified Engineering Team &amp; Technical PMO</span>
                <span className="text-primary-container font-bold">
                  EST. 2007 • ABU DHABI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
