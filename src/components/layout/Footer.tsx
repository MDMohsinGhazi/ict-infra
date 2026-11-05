import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      {/* Upper Navigation & Corporate Details */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-block py-1">
              <Image
                src="/images/royal-arabian-logo-dark.png"
                alt={COMPANY_INFO.legalName}
                width={260}
                height={92}
                className="h-12 w-auto object-contain hover:brightness-110 transition-all"
              />
            </a>

            <p className="font-body-sm text-sm text-zinc-400 max-w-sm leading-relaxed">
              Premier UAE system integrator established in Abu Dhabi in 2007. We
              design, deploy, and maintain low-voltage (ELV),
              telecommunications, ADMCC compliant surveillance, and smart
              building automation across government, commercial, and critical
              infrastructure sectors.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-primary-container shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Phone className="w-4 h-4 text-primary-container shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Mail className="w-4 h-4 text-primary-container shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading-condensed text-lg text-white font-bold tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-condensed text-sm uppercase tracking-wider text-zinc-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="hover:text-white transition-colors"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Core Solutions */}
          <div>
            <h4 className="font-heading-condensed text-lg text-white font-bold tracking-wider uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 font-condensed text-sm uppercase tracking-wider text-zinc-400">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  CCTV Surveillance (ADMCC)
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Access Control &amp; Biometrics
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Public Address (PA/VA)
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Industrial Explosion Protection
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  EV Charging Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Data Center UPS Systems
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-white transition-colors"
                >
                  Master Clock Synchronization
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Reach & Accreditations */}
          <div>
            <h4 className="font-heading-condensed text-lg text-white font-bold tracking-wider uppercase mb-4">
              Regulatory Approval
            </h4>
            <div className="space-y-3 font-condensed text-xs uppercase tracking-wider text-zinc-400">
              <div className="p-2.5 bg-zinc-900 border border-white/10 rounded">
                <span className="text-white font-bold block">
                  ADMCC Approved
                </span>
                <span className="text-[11px] text-zinc-500">
                  Abu Dhabi Monitoring &amp; Control Centre
                </span>
              </div>
              <div className="p-2.5 bg-zinc-900 border border-white/10 rounded">
                <span className="text-white font-bold block">
                  SIRA Compliant
                </span>
                <span className="text-[11px] text-zinc-500">
                  Security Industry Regulatory Agency
                </span>
              </div>
              <div className="p-2.5 bg-zinc-900 border border-white/10 rounded">
                <span className="text-white font-bold block">
                  ADNOC ICV Certified
                </span>
                <span className="text-[11px] text-zinc-500">
                  In-Country Value Certified Supplier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-white/10 py-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-condensed uppercase tracking-wider text-zinc-500">
          <p>© 2026 {COMPANY_INFO.legalName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015</span>
            <span>•</span>
            <span>ISO 14001:2015</span>
            <span>•</span>
            <span>ISO 45001:2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
