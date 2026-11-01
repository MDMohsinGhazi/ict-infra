import {
  ArrowRight,
  Globe,
  Mail,
  MapPin,
  Network,
  Phone,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

interface FooterProps {
  onOpenBriefing?: () => void;
}

export function Footer({ onOpenBriefing }: FooterProps) {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container pt-12 lg:pt-16 pb-28 lg:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Mobile Header Row (Visible < md) */}
        <div className="md:hidden flex items-center justify-between pb-6 border-b border-white/10 gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Network className="w-6 h-6 text-secondary-fixed" />
            <span className="font-title-md text-base text-on-primary font-bold">
              {COMPANY_INFO.name}
            </span>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="min-h-[44px] px-4 inline-flex items-center gap-2 rounded-lg bg-secondary text-on-secondary font-label-md text-xs font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-6 lg:pb-12">
          {/* Brand & International Column */}
          <div className="space-y-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="relative h-7 w-10">
                <Image
                  src={COMPANY_INFO.logoUrl}
                  alt={`${COMPANY_INFO.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-title-md text-title-md text-on-primary font-bold">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="font-body-sm text-xs sm:text-body-sm text-on-primary-container/80 leading-relaxed">
              Pioneering sovereign enterprise infrastructure, high-assurance
              connectivity, and mission-critical cloud governance across the
              Gulf region and international commercial hubs.
            </p>
            <div className="pt-1">
              <span className="font-label-sm text-xs uppercase tracking-wider text-tertiary-fixed block mb-1.5 font-bold">
                International Presence
              </span>
              <span className="font-code-sm text-xs text-on-primary tracking-wide">
                {COMPANY_INFO.internationalPresence.join(" • ")}
              </span>
            </div>
          </div>

          {/* Headquarters Column */}
          <div className="space-y-3">
            <span className="font-label-md text-xs sm:text-label-md text-on-primary uppercase tracking-wider block font-bold">
              Corporate Headquarters
            </span>
            <div className="space-y-2.5 font-body-sm text-xs sm:text-body-sm text-on-primary-container/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                <span>
                  Al Salam St, Salam HQ Building,
                  <br />
                  Abu Dhabi, United Arab Emirates
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-on-primary transition-colors"
                >
                  Tel: {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-on-primary transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Core Capabilities Column */}
          <div className="space-y-3">
            <span className="font-label-md text-xs sm:text-label-md text-on-primary uppercase tracking-wider block font-bold">
              Core Capabilities
            </span>
            <ul className="space-y-2 font-body-sm text-xs sm:text-body-sm text-on-primary-container/80">
              {COMPANY_INFO.coreCapabilities.map((capability) => (
                <li key={capability.label}>
                  <a
                    href={capability.href}
                    className="hover:text-on-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-tertiary-fixed text-[10px]">▸</span>
                    <span>{capability.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connectivity Column */}
          <div className="space-y-4">
            <span className="font-label-md text-xs sm:text-label-md text-on-primary uppercase tracking-wider block font-bold">
              Direct Connectivity
            </span>
            <p className="font-body-sm text-xs sm:text-body-sm text-on-primary-container/80 leading-relaxed">
              Connect with our specialized network operations center for
              real-time telemetry and project inquiries.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Corporate Network Channel"
                className="w-9 h-9 rounded-lg bg-surface-container-highest/10 hover:bg-surface-container-highest/25 flex items-center justify-center transition-colors text-on-primary"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Regional Operations Feed"
                className="w-9 h-9 rounded-lg bg-surface-container-highest/10 hover:bg-surface-container-highest/25 flex items-center justify-center transition-colors text-on-primary"
              >
                <Network className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Official Portal"
                className="w-9 h-9 rounded-lg bg-surface-container-highest/10 hover:bg-surface-container-highest/25 flex items-center justify-center transition-colors text-on-primary"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenBriefing}
                className="inline-flex items-center gap-1 font-label-sm text-xs text-tertiary-fixed underline tracking-wide uppercase hover:text-tertiary-fixed-dim transition-colors cursor-pointer text-left"
              >
                <span>Request Executive Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-on-primary-container/20" />

        {/* Legal & Regulatory Compliance */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-body-sm text-xs sm:text-body-sm text-on-primary-container">
          <div className="space-y-1">
            <p>
              © 2025 {COMPANY_INFO.name} • {COMPANY_INFO.legalName}. All rights
              reserved. Sovereign Infrastructure Grade.
            </p>
            <p className="text-[11px] text-on-primary-container/90">
              Licensed by Abu Dhabi Global Market (ADGM) &amp; TDRA sovereign
              enterprise frameworks.
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-label-sm text-xs">
            <a
              href="#privacy"
              className="hover:text-on-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-on-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#compliance"
              className="hover:text-on-primary transition-colors"
            >
              UAE Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
