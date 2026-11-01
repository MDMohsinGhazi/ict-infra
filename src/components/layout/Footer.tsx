import { Phone } from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      {/* Mobile Footer (< lg) */}
      <div className="lg:hidden w-full px-4 py-8 bg-surface-container-high flex flex-col items-center text-center gap-3 border-t border-border-hairline/60">
        <div className="flex items-center gap-2">
          <Image
            src={COMPANY_INFO.logoUrl}
            alt={COMPANY_INFO.name}
            width={32}
            height={24}
            className="h-6 w-auto object-contain"
          />
          <span className="font-headline-sm text-base font-bold text-on-surface">
            {COMPANY_INFO.name}
          </span>
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant max-w-xs leading-relaxed">
          Pioneering certified ICT cabling, smart ELV systems, cloud
          modernization, and ADMCC surveillance systems across the UAE since
          2007.
        </p>
        <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-xs pt-1">
          <span>ISO 9001:2015</span>
          <span>•</span>
          <span>ADMCC Approved</span>
          <span>•</span>
          <span>ADNOC ICV</span>
        </div>
        <p className="font-label-sm text-[11px] text-on-surface-variant opacity-75 pt-1">
          © 2024 {COMPANY_INFO.name} ({COMPANY_INFO.shortName}). All Rights
          Reserved.
        </p>
      </div>

      {/* Desktop Footer Accreditations Ribbon (lg+) */}
      <div className="hidden lg:block bg-surface-container py-4 border-b border-border-hairline/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 font-label-sm text-xs text-on-surface-variant">
          <span className="font-label-md text-sm text-on-surface font-semibold">
            Accreditations &amp; Government Compliance:
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            {COMPANY_INFO.accreditations.map((acc) => (
              <span
                key={acc}
                className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface shadow-2xs border border-border-hairline/50 text-[11px] font-medium"
              >
                {acc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main 5-Column Grid (lg+) */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 py-16 grid-cols-5 gap-10">
        {/* Col 1 & 2: Brand Information */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={COMPANY_INFO.logoUrl}
              alt={`${COMPANY_INFO.name} Logo`}
              width={48}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="font-headline-sm text-xl text-on-surface font-bold tracking-tight">
              {COMPANY_INFO.name}
            </span>
          </div>

          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed [text-wrap:pretty]">
            Premier UAE ICT infrastructure and smart building systems integrator
            established in Abu Dhabi in 2007. Delivering mission-critical
            government infrastructure, enterprise networking, and
            intelligence-driven building management.
          </p>

          <div className="pt-2">
            <div className="flex flex-col">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase font-medium">
                24/7 Operations Desk
              </span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-headline-sm text-base sm:text-lg text-primary font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Col 3: Solutions */}
        <div className="space-y-3">
          <h3 className="font-label-md text-sm text-on-surface font-bold uppercase tracking-wider">
            Solutions
          </h3>
          <ul className="space-y-2.5 font-body-sm text-xs sm:text-sm text-on-surface-variant">
            {COMPANY_INFO.solutionsList.map((sol) => (
              <li key={sol.label}>
                <a
                  href={sol.href}
                  className="hover:text-primary transition-colors block"
                >
                  {sol.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Company */}
        <div className="space-y-3">
          <h3 className="font-label-md text-sm text-on-surface font-bold uppercase tracking-wider">
            Company
          </h3>
          <ul className="space-y-2.5 font-body-sm text-xs sm:text-sm text-on-surface-variant">
            {COMPANY_INFO.companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Regional HQ */}
        <div className="space-y-3">
          <h3 className="font-label-md text-sm text-on-surface font-bold uppercase tracking-wider">
            Regional HQ
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Hamdan Street, Prestige Tower
            <br />
            P.O. Box 48211
            <br />
            Abu Dhabi, United Arab Emirates
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-xs text-on-surface font-semibold border border-border-hairline/60">
              Govt Lic: {COMPANY_INFO.govtLicense}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Copyright Row (lg+) */}
      <div className="hidden lg:block bg-surface-container-lowest py-5 border-t border-border-hairline/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-label-sm text-xs text-on-surface-variant">
          <div>
            © 2024 {COMPANY_INFO.legalName} ({COMPANY_INFO.shortName}). All
            rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-on-surface transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-on-surface transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#compliance"
              className="hover:text-on-surface transition-colors"
            >
              Regulatory Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
