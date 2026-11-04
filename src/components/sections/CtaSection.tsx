"use client";

import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/MotionWrappers";
import { COMPANY_INFO } from "@/data/company";

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "CCTV Video Surveillance & ADMCC Analytics",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      className="w-full py-16 lg:py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <FadeIn direction="right">
              <span className="font-condensed text-sm tracking-widest text-zinc-500 uppercase font-semibold mb-2 block">
                Contact With Us
              </span>
              <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-none uppercase mb-6">
                Drop a Message to Our Team
              </h2>
              <p className="font-body-md text-sm sm:text-base text-zinc-600 leading-relaxed mb-8">
                Whether you need an ADMCC compliant CCTV design, data center
                structured cabling, or annual maintenance for your enterprise
                facility, our Abu Dhabi engineering team is ready to assist.
              </p>

              <div className="space-y-6 w-full">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-container" />
                  </div>
                  <div>
                    <span className="font-condensed text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                      Direct Phone Line
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="font-heading-condensed text-xl text-zinc-900 hover:text-primary-container font-bold tracking-wide transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      Mobiles: {COMPANY_INFO.mobiles.join(" • ")}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-container" />
                  </div>
                  <div>
                    <span className="font-condensed text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                      Official Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-heading-condensed text-xl text-zinc-900 hover:text-primary-container font-bold tracking-wide transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-container" />
                  </div>
                  <div>
                    <span className="font-condensed text-xs uppercase tracking-wider text-zinc-400 font-bold block">
                      Headquarters
                    </span>
                    <p className="font-body-sm text-sm text-zinc-800 font-medium">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Turnaround Guarantee */}
                <div className="p-4 bg-white border border-zinc-200 flex items-center gap-3 shadow-xs">
                  <Clock className="w-5 h-5 text-primary-container shrink-0" />
                  <span className="font-condensed text-xs uppercase tracking-wider text-zinc-700 font-semibold">
                    Guaranteed response time: Under 4 business hours
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.15}>
              <div className="bg-white p-8 sm:p-10 border border-zinc-200 shadow-xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading-condensed text-3xl text-zinc-900 font-bold uppercase">
                      Message Dispatched
                    </h3>
                    <p className="font-body-md text-sm sm:text-base text-zinc-600 max-w-md mx-auto">
                      Thank you for reaching out. A senior technical engineer
                      from our Abu Dhabi headquarters will review your
                      requirements and phone you shortly.
                    </p>
                    <div className="pt-4">
                      <motion.button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-black text-white font-condensed text-base font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          className="block font-condensed text-xs uppercase tracking-wider text-zinc-700 font-bold mb-1.5"
                          htmlFor="contact-name"
                        >
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          required
                          type="text"
                          placeholder="e.g. Tariq Al Nuaimi"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full h-12 px-4 bg-zinc-50 border border-zinc-300 text-zinc-900 font-body-sm text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block font-condensed text-xs uppercase tracking-wider text-zinc-700 font-bold mb-1.5"
                          htmlFor="contact-email"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          required
                          type="email"
                          placeholder="e.g. tariq@company.ae"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full h-12 px-4 bg-zinc-50 border border-zinc-300 text-zinc-900 font-body-sm text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label
                          className="block font-condensed text-xs uppercase tracking-wider text-zinc-700 font-bold mb-1.5"
                          htmlFor="contact-phone"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          required
                          type="tel"
                          placeholder="+971 50 XXX XXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full h-12 px-4 bg-zinc-50 border border-zinc-300 text-zinc-900 font-body-sm text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      {/* Solution Dropdown */}
                      <div>
                        <label
                          className="block font-condensed text-xs uppercase tracking-wider text-zinc-700 font-bold mb-1.5"
                          htmlFor="contact-solution"
                        >
                          Select Solution You Are Looking For *
                        </label>
                        <select
                          id="contact-solution"
                          value={formData.solution}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              solution: e.target.value,
                            })
                          }
                          className="w-full h-12 px-4 bg-zinc-50 border border-zinc-300 text-zinc-900 font-body-sm text-sm focus:outline-none focus:border-black transition-colors"
                        >
                          <option>
                            CCTV Video Surveillance &amp; ADMCC Analytics
                          </option>
                          <option>Access Control &amp; Biometrics</option>
                          <option>
                            Public Address &amp; Voice Alarm (PA/VA)
                          </option>
                          <option>
                            Industrial Sensors &amp; Explosion Protection
                          </option>
                          <option>EV Charging Solutions</option>
                          <option>UPS &amp; Inverter Power Systems</option>
                          <option>Master Clock System Solutions</option>
                          <option>Structured Cabling &amp; Fiber Optics</option>
                          <option>Smart Building Automation &amp; BMS</option>
                          <option>
                            Annual Maintenance Contract (AMC 24/7)
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block font-condensed text-xs uppercase tracking-wider text-zinc-700 font-bold mb-1.5"
                        htmlFor="contact-message"
                      >
                        Message / Project Details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Tell us about your facility size, number of endpoints, or required completion dates..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full p-4 bg-zinc-50 border border-zinc-300 text-zinc-900 font-body-sm text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-condensed text-lg uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Drop Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="font-condensed text-[11px] text-center text-zinc-500 uppercase tracking-wider">
                      NDAs respected for all critical infrastructure and
                      government tenders.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
