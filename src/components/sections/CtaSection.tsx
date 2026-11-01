"use client";

import {
  Building,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/company";

interface CtaSectionProps {
  onOpenConsultation?: () => void;
}

export function CtaSection({ onOpenConsultation }: CtaSectionProps) {
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState(false);
  const [quickSubmitted, setQuickSubmitted] = useState(false);
  const [quickCompany, setQuickCompany] = useState("");
  const [quickEmail, setQuickEmail] = useState("");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSubmitted(true);
  };

  return (
    <div id="contact" className="w-full">
      {/* Primary CTA Card */}
      <section className="px-4 sm:px-6 lg:px-12 py-6 lg:py-12 max-w-7xl mx-auto">
        <div className="rounded-xl lg:rounded-2xl bg-primary text-on-primary p-6 sm:p-8 lg:p-12 shadow-lg relative overflow-hidden flex flex-col gap-6 border border-white/10">
          {/* Gold Gradient Border Line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary-fixed via-secondary-container to-tertiary-fixed" />

          <div className="relative z-10 max-w-3xl space-y-2 lg:space-y-3">
            <h2 className="font-headline-sm lg:font-display-xl text-2xl lg:text-display-xl text-on-primary tracking-tight font-bold">
              Let&apos;s build your sovereign infrastructure.
            </h2>
            <p className="font-body-sm lg:font-body-lg text-sm lg:text-body-lg text-secondary-fixed max-w-[65ch] leading-relaxed [text-wrap:pretty]">
              Connect directly with our Abu Dhabi enterprise systems architects
              for an on-premise or sovereign cloud architecture audit.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm hover:bg-secondary-container transition-all active:scale-[0.99] font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                // On mobile toggle quick drawer, or trigger modal if wide
                if (window.innerWidth < 768) {
                  setIsQuickQuoteOpen(!isQuickQuoteOpen);
                } else if (onOpenConsultation) {
                  onOpenConsultation();
                }
              }}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-lg bg-on-primary/10 text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-on-primary/15 transition-all cursor-pointer border border-white/15 font-semibold"
            >
              <FileText className="w-4 h-4 text-tertiary-fixed" />
              <span>
                {isQuickQuoteOpen
                  ? "Hide Quick Form"
                  : "Request Architecture Consultation"}
              </span>
            </button>
          </div>

          {/* Interactive Mobile Micro-Form Drawer (Expandable) */}
          {isQuickQuoteOpen && (
            <div className="relative z-10 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <form
                onSubmit={handleQuickSubmit}
                className="p-4 rounded-xl bg-on-primary/5 border border-white/10 flex flex-col gap-3"
              >
                <div>
                  <label
                    htmlFor="quick-company"
                    className="block font-label-sm text-xs text-secondary-fixed mb-1"
                  >
                    Company / Entity *
                  </label>
                  <input
                    id="quick-company"
                    required
                    type="text"
                    value={quickCompany}
                    onChange={(e) => setQuickCompany(e.target.value)}
                    placeholder="e.g. ADNOC Logistics / AD Ports"
                    className="w-full h-11 px-3 rounded-lg bg-surface text-primary font-body-sm text-sm placeholder:text-outline focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quick-email"
                    className="block font-label-sm text-xs text-secondary-fixed mb-1"
                  >
                    Direct Work Email *
                  </label>
                  <input
                    id="quick-email"
                    required
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="chief.officer@domain.ae"
                    className="w-full h-11 px-3 rounded-lg bg-surface text-primary font-body-sm text-sm placeholder:text-outline focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={quickSubmitted}
                  className="mt-1 w-full h-11 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-sm font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-tertiary-fixed-dim transition-colors disabled:opacity-80"
                >
                  {quickSubmitted ? (
                    <>
                      <span>Consultation Requested</span>
                      <CheckCircle2 className="w-4 h-4 text-status-success" />
                    </>
                  ) : (
                    <>
                      <span>Submit Dispatch</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Head Office & Sovereign Footprint Panel */}
      <section className="px-4 sm:px-6 lg:px-12 pb-6 max-w-7xl mx-auto">
        <div className="rounded-xl p-4 sm:p-6 bg-surface-container flex flex-col gap-4 border border-border-hairline">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-secondary" />
            <span className="font-label-md text-sm sm:text-base text-primary font-bold">
              NexaCore ICT Head Office
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-body-sm text-xs sm:text-sm text-on-surface-variant">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-secondary font-semibold hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-secondary hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Regional Footprint Tag */}
          <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg p-3 bg-surface-canvas shadow-xs border border-border-hairline gap-2">
            <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
              Global Gateway
            </span>
            <span className="font-code-sm text-xs text-primary font-bold tracking-wider">
              {COMPANY_INFO.internationalPresence.join(" | ")}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
