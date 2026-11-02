import type { AccreditationItem, PartnerItem } from "@/types";

export const ACCREDITATIONS_DATA: AccreditationItem[] = [
  {
    id: "admcc",
    title: "ADMCC Approved CCTV Integrator",
    description:
      "Pre-qualified by Abu Dhabi Monitoring and Control Centre for security surveillance systems, storage duration conformity, and control room handover.",
    icon: "shield",
    colorClass: "text-primary",
  },
  {
    id: "adnoc-icv",
    title: "ADNOC In-Country Value (ICV) Certified",
    description:
      "Authorized supplier status across ADNOC group firms, ensuring pre-qualification readiness for offshore and onshore energy infrastructure bids.",
    icon: "flame",
    colorClass: "text-tertiary",
  },
  {
    id: "iso-ohsas",
    title: "ISO 9001:2015 & OHSAS 18001",
    description:
      "Internationally accredited quality management and occupational health procedures for zero-hazard site implementations.",
    icon: "award",
    colorClass: "text-secondary",
  },
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "microsoft",
    name: "Microsoft",
    partnerType: "Certified Cloud Partner",
    description: "Azure Cloud, M365 Security & Hybrid Data",
    icon: "terminal",
    colorClass: "text-tertiary",
  },
  {
    id: "magnizon",
    name: "Magnizon Green",
    partnerType: "Authorized Energy Partner",
    description: "UPS power, renewable backup for hospitals & utilities",
    icon: "sun",
    colorClass: "text-primary",
  },
  {
    id: "milesight",
    name: "Milesight",
    partnerType: "Surveillance Solutions",
    description: "AI-powered analytics network cameras & NVRs",
    icon: "camera",
    colorClass: "text-on-surface",
  },
  {
    id: "draytek",
    name: "DrayTek",
    partnerType: "Enterprise Networking",
    description: "Secure VPN concentrators, routing, & content filtering",
    icon: "router",
    colorClass: "text-secondary",
  },
];
