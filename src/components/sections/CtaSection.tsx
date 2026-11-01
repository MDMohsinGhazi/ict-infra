import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Layers,
  MapPin,
  Phone,
  PhoneCall,
  Radio,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/data/company";

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    solution: "ADMCC CCTV Surveillance & Access Control",
    location: "Abu Dhabi (Mainland & Reem/Yas)",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      solution: "ADMCC CCTV Surveillance & Access Control",
      location: "Abu Dhabi (Mainland & Reem/Yas)",
      scope: "",
    });
    setSubmitted(false);
  };

  return (
    <>
      {/* MOBILE QUICK RFQ & SITE SURVEY FORM (< lg) */}
      <section
        className="lg:hidden w-full px-4 py-6 bg-surface-container-low flex flex-col gap-4"
        id="quick-rfq"
      >
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-primary">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-label-sm text-xs uppercase font-bold tracking-wider">
              Fast Turnaround
            </span>
          </div>
          <h2 className="font-headline-sm text-xl text-on-surface font-bold">
            Request Site Survey / RFQ
          </h2>
          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            Direct dispatch to certified field engineers. Average formal scope
            proposal turnaround: under 4 hours.
          </p>
        </div>

        {/* Mobile RFQ Card Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest rounded-xl p-4 shadow-xs flex flex-col gap-3 border border-border-hairline/60"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-xs text-on-surface font-medium"
              htmlFor="mob_contact_name"
            >
              Full Name &amp; Designation
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3 w-4 h-4 text-on-surface-variant pointer-events-none" />
              <input
                className="w-full h-11 pl-9 pr-3 rounded-lg bg-surface font-body-sm text-xs text-on-surface outline-none border border-border-hairline/60 focus:border-primary-container"
                id="mob_contact_name"
                placeholder="e.g. Eng. Tariq Al Nuaimi"
                required
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Company & Emirate */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-xs text-on-surface font-medium"
              htmlFor="mob_company_name"
            >
              Organization / Emirate
            </label>
            <div className="relative flex items-center">
              <Building2 className="absolute left-3 w-4 h-4 text-on-surface-variant pointer-events-none" />
              <input
                className="w-full h-11 pl-9 pr-3 rounded-lg bg-surface font-body-sm text-xs text-on-surface outline-none border border-border-hairline/60 focus:border-primary-container"
                id="mob_company_name"
                placeholder="e.g. Alsa Properties (Abu Dhabi)"
                required
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-xs text-on-surface font-medium"
              htmlFor="mob_contact_phone"
            >
              UAE Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone className="absolute left-3 w-4 h-4 text-on-surface-variant pointer-events-none" />
              <input
                className="w-full h-11 pl-9 pr-3 rounded-lg bg-surface font-body-sm text-xs text-on-surface outline-none border border-border-hairline/60 focus:border-primary-container"
                id="mob_contact_phone"
                placeholder="+971 5X XXX XXXX"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          {/* Required Solution Dropdown */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-xs text-on-surface font-medium"
              htmlFor="mob_solution_type"
            >
              Required Core Discipline
            </label>
            <div className="relative flex items-center">
              <Layers className="absolute left-3 w-4 h-4 text-on-surface-variant pointer-events-none" />
              <select
                className="w-full h-11 pl-9 pr-8 rounded-lg bg-surface font-body-sm text-xs text-on-surface outline-none border border-border-hairline/60 focus:border-primary-container appearance-none"
                id="mob_solution_type"
                value={formData.solution}
                onChange={(e) =>
                  setFormData({ ...formData, solution: e.target.value })
                }
              >
                <option value="ADMCC CCTV Surveillance & Access Control">
                  Visual Surveillance &amp; CCTV (ADMCC)
                </option>
                <option value="Enterprise Wi-Fi & WLAN Infrastructure">
                  Enterprise Wi-Fi &amp; WLAN Infrastructure
                </option>
                <option value="Fiber & Structured Cabling">
                  Fiber &amp; Structured Cabling (OTDR/OLTS)
                </option>
                <option value="Cloud Computing & Microsoft 365">
                  Microsoft 365 &amp; Azure Cloud Solutions
                </option>
                <option value="Smart Building Automation">
                  Smart Building / Office Automation
                </option>
                <option value="Annual Maintenance Contract (24/7 SLA)">
                  Annual Maintenance Contract (24/7 SLA)
                </option>
              </select>
            </div>
          </div>

          {/* Project Notes */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-xs text-on-surface font-medium"
              htmlFor="mob_scope_notes"
            >
              Project Scope &amp; Site Details
            </label>
            <textarea
              className="w-full p-3 rounded-lg bg-surface font-body-sm text-xs text-on-surface outline-none border border-border-hairline/60 focus:border-primary-container"
              id="mob_scope_notes"
              placeholder="Describe number of camera channels, building floor count, or required completion timeline..."
              rows={3}
              value={formData.scope}
              onChange={(e) =>
                setFormData({ ...formData, scope: e.target.value })
              }
            />
          </div>

          {/* Submission feedback element */}
          {submitted && (
            <div className="p-3 rounded-lg bg-surface-container text-on-surface font-body-sm text-xs flex items-center gap-2 border border-border-hairline">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>
                Survey dispatched. A senior project manager will phone you
                within 4 hours.
              </span>
            </div>
          )}

          {/* Action Button */}
          <button
            className="w-full h-11 rounded-lg bg-primary-container text-on-primary font-label-md text-sm font-semibold flex items-center justify-center gap-2 mt-1 shadow-xs active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <span>Transmitting Details...</span>
            ) : submitted ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Request Dispatched</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Request (Guaranteed Response)</span>
              </>
            )}
          </button>
          <p className="font-label-sm text-[11px] text-center text-on-surface-variant">
            Direct technical liaison: NDAs respected for critical infrastructure
            tenders.
          </p>
        </form>
      </section>

      {/* DIRECT CONTACT CHANNELS & EMERGENCY HOTLINES (< lg) */}
      <section className="lg:hidden w-full px-4 py-5 flex flex-col gap-3 bg-surface">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider">
            Immediate Engineering Help
          </span>
          <h3 className="font-headline-sm text-lg text-on-surface font-bold">
            Abu Dhabi Command Center
          </h3>
        </div>
        <div className="flex flex-col gap-2.5">
          {/* Phone Desk 1 */}
          <a
            className="p-3.5 bg-surface-container-lowest rounded-xl shadow-xs flex items-center justify-between active:bg-surface-container-high transition-colors border border-border-hairline/60"
            href={`tel:${COMPANY_INFO.phone}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-label-md text-sm font-bold text-on-surface block">
                  Central Desk (Abu Dhabi)
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {COMPANY_INFO.phone}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
          {/* Phone Desk 2 (24/7 Field Tech) */}
          <a
            className="p-3.5 bg-surface-container-lowest rounded-xl shadow-xs flex items-center justify-between active:bg-surface-container-high transition-colors border border-border-hairline/60"
            href={`tel:${COMPANY_INFO.mobiles[0]}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-label-md text-sm font-bold text-on-surface">
                    24/7 Field Engineering
                  </span>
                  <span className="font-label-sm text-[9px] bg-primary text-on-primary px-1.5 py-0.5 rounded font-bold">
                    HOTLINE
                  </span>
                </div>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {COMPANY_INFO.mobiles[0]}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
          {/* Physical Office Card */}
          <div className="p-3.5 bg-surface-container rounded-xl flex items-start gap-3 border border-border-hairline/60">
            <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-on-surface" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-sm font-bold text-on-surface">
                Regional Headquarters
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                {COMPANY_INFO.address}
              </p>
              <span className="font-label-sm text-xs text-primary font-medium mt-1">
                {COMPANY_INFO.email}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP INQUIRIES & RFP SECTION (lg+) */}
      <section
        className="hidden lg:block w-full py-20 bg-surface-container-low relative"
        id="consultation-inquiry"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-surface-container-lowest p-6 sm:p-8 lg:p-12 shadow-xl border border-border-hairline/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Callout & Direct Contacts (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-bold">
                  <span>GET AN ESTIMATE OR AUDIT</span>
                </div>

                <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
                  Initiate Your ICT Modernization Project
                </h2>

                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed [text-wrap:pretty]">
                  Our Abu Dhabi system architects will review your floor plans,
                  compliance specifications, and deliver an itemized technical
                  proposal within 24 hours.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-label-sm text-xs text-on-surface-variant uppercase font-semibold">
                        Abu Dhabi Central Desk
                      </div>
                      <a
                        className="font-headline-sm text-base sm:text-lg text-primary font-bold hover:underline"
                        href={`tel:${COMPANY_INFO.phone}`}
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container text-on-surface flex items-center justify-center shrink-0">
                      <Radio className="w-5 h-5 text-tertiary" />
                    </div>
                    <div>
                      <div className="font-label-sm text-xs text-on-surface-variant uppercase font-semibold">
                        Direct Engineering Mobile
                      </div>
                      <div className="font-body-md text-xs sm:text-sm text-on-surface font-semibold">
                        {COMPANY_INFO.mobiles.join(" • ")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-label-sm text-xs text-on-surface-variant uppercase font-semibold">
                        Headquarters
                      </div>
                      <div className="font-body-md text-xs sm:text-sm text-on-surface">
                        {COMPANY_INFO.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Fast RFP / Inquiry Widget (7 cols) */}
              <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-2xl shadow-inner border border-border-hairline/60">
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-headline-md text-2xl text-on-surface font-bold">
                      Inquiry Dispatched
                    </h3>
                    <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Royal Arabian Smart Technologies.
                      A designated technical solution engineer from our Abu
                      Dhabi office has received your request and will follow up
                      shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-sm font-semibold hover:bg-surface-container-highest transition-colors cursor-pointer"
                      >
                        Send Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="rfp-fullName"
                          className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="rfp-fullName"
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                          placeholder="Eng. Khalid Al Mansoori"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="rfp-company"
                          className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                        >
                          Company / Entity *
                        </label>
                        <input
                          id="rfp-company"
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                          placeholder="Emirates Development Corp"
                          required
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="rfp-email"
                          className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          id="rfp-email"
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                          placeholder="khalid@company.ae"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="rfp-phone"
                          className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                        >
                          UAE Mobile Number *
                        </label>
                        <input
                          id="rfp-phone"
                          className="w-full h-11 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                          placeholder="+971 50 123 4567"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="rfp-solution"
                          className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                        >
                          Required Solution *
                        </label>
                        <select
                          id="rfp-solution"
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                          value={formData.solution}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              solution: e.target.value,
                            })
                          }
                        >
                          <option>
                            ADMCC CCTV Surveillance &amp; Access Control
                          </option>
                          <option>
                            Enterprise Wi-Fi &amp; Switching Backbone
                          </option>
                          <option>
                            Fiber Optic &amp; Structured Cabling (OTDR-OLTS)
                          </option>
                          <option>
                            Microsoft 365 &amp; Azure Cloud Migration
                          </option>
                          <option>
                            Smart Office &amp; Building Automation
                          </option>
                          <option>Turnkey Data Center &amp; UPS Power</option>
                          <option>
                            Comprehensive Annual Maintenance (AMC)
                          </option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="rfp-location"
                          className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                        >
                          Project Location *
                        </label>
                        <select
                          id="rfp-location"
                          className="w-full h-11 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              location: e.target.value,
                            })
                          }
                        >
                          <option>Abu Dhabi (Mainland &amp; Reem/Yas)</option>
                          <option>Al Ain</option>
                          <option>
                            Al Dhafra / Western Region (Offshore/Onshore)
                          </option>
                          <option>Dubai &amp; Northern Emirates</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="rfp-scope"
                        className="block font-label-sm text-xs text-on-surface font-semibold mb-1.5"
                      >
                        Scope Brief / Project Details
                      </label>
                      <textarea
                        id="rfp-scope"
                        className="w-full p-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-sm shadow-xs border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary-container"
                        placeholder="Provide details regarding square footage, camera count, fiber distances, or target completion dates..."
                        rows={3}
                        value={formData.scope}
                        onChange={(e) =>
                          setFormData({ ...formData, scope: e.target.value })
                        }
                      />
                    </div>

                    <button
                      disabled={loading}
                      className="w-full h-12 rounded-lg bg-primary-container text-on-primary font-label-md text-sm font-bold shadow-sm hover:bg-primary transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      type="submit"
                    >
                      <span>
                        {loading
                          ? "Transmitting Scope..."
                          : "Submit Technical RFP & Request Site Survey"}
                      </span>
                      <Send className="w-4 h-4" />
                    </button>

                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[11px] pt-1">
                      <span>
                        NDAs respected on all government &amp; private scopes
                      </span>
                      <span>Response time: Under 4 business hours</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
