"use client";

import { CheckCircle2, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { SOLUTIONS_DATA } from "@/data/solutions";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuoteModal({
  isOpen,
  onClose,
  defaultService,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    serviceCategory: defaultService || SOLUTIONS_DATA[0].title,
    projectScope: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-surface-canvas rounded-2xl shadow-2xl border border-border-hairline overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary-container text-on-primary px-6 py-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-black/20 p-1 flex items-center justify-center border border-white/20 shrink-0">
                  <Image
                    src="/images/royal-arabian-emblem.png"
                    alt="Royal Arabian"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase tracking-wider block">
                    Abu Dhabi Enterprise Advisory
                  </span>
                  <h3
                    id="modal-title"
                    className="font-title-md text-title-md font-bold text-on-primary"
                  >
                    Request Sovereign Architecture Quote
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-on-primary flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-status-success/15 text-status-success mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                    Inquiry Received
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our Abu
                    Dhabi Solutions Engineering desk will contact you within 2
                    business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="quote-fullName"
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="quote-fullName"
                      required
                      type="text"
                      placeholder="e.g. Tariq Al Mansoori"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border-hairline bg-surface-subtle focus:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-secondary-container text-on-surface font-body-md"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-organization"
                        className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1"
                      >
                        Organization / Entity *
                      </label>
                      <input
                        id="quote-organization"
                        required
                        type="text"
                        placeholder="e.g. AD Enterprise"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border-hairline bg-surface-subtle focus:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-secondary-container text-on-surface font-body-md"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1"
                      >
                        Direct Phone *
                      </label>
                      <input
                        id="quote-phone"
                        required
                        type="tel"
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border-hairline bg-surface-subtle focus:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-secondary-container text-on-surface font-body-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Corporate Email *
                    </label>
                    <input
                      id="quote-email"
                      required
                      type="email"
                      placeholder="tariq@organization.ae"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border-hairline bg-surface-subtle focus:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-secondary-container text-on-surface font-body-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Primary Solution Needed
                    </label>
                    <select
                      id="quote-service"
                      value={formData.serviceCategory}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceCategory: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border-hairline bg-surface-subtle focus:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-secondary-container text-on-surface font-body-md"
                    >
                      {SOLUTIONS_DATA.map((sol) => (
                        <option key={sol.id} value={sol.title}>
                          {sol.title}
                        </option>
                      ))}
                      <option value="Complete Infrastructure Overhaul">
                        Complete Sovereign Infrastructure Overhaul
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-scope"
                      className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Project Scope / SLA Requirements
                    </label>
                    <textarea
                      id="quote-scope"
                      rows={3}
                      placeholder="Outline endpoint count, location, target timeline, or compliance needs..."
                      value={formData.projectScope}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectScope: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border-hairline bg-surface-subtle focus:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-secondary-container text-on-surface font-body-md"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-lg border border-border-hairline text-on-surface-variant font-label-md text-label-md hover:bg-surface-subtle transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary transition-all shadow-md disabled:opacity-50 gap-2"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Architecture Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
