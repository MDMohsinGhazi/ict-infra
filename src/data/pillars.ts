import type { ValuePillarItem } from "@/types";

export const VALUE_PILLARS: ValuePillarItem[] = [
  {
    id: "sev-1",
    title: "24/7 Severity 1 Response",
    description:
      "Guaranteed emergency rapid response SLAs with hot-swappable spares stored in our Abu Dhabi staging facility to prevent downtime.",
    icon: "headphones",
    badgeText: "Rapid Dispatch Desk",
    colorClass: "text-primary bg-primary-fixed",
  },
  {
    id: "engineers",
    title: "Certified On-Site Engineers",
    description:
      "Permanent resident engineers in Abu Dhabi and Dubai with Cisco, Microsoft, BICSI, and ADMCC security clearances.",
    icon: "wrench",
    badgeText: "Full In-House Workforce",
    colorClass: "text-tertiary bg-tertiary-fixed",
  },
  {
    id: "turnkey-elv",
    title: "Turnkey ELV & Data Center",
    description:
      "End-to-end integration covering APC InfraStruxure power, precision cooling, fire suppression, and structured pathways.",
    icon: "server",
    badgeText: "Single-Source Delivery",
    colorClass: "text-secondary bg-secondary-fixed",
  },
  {
    id: "transparent-amc",
    title: "Transparent AMC Packages",
    description:
      "Predictable annual maintenance contracts with preventive audit logs, firmware governance, and transparent spares replacement.",
    icon: "shield-check",
    badgeText: "Predictable OPEX",
    colorClass: "text-on-surface bg-surface-container-highest",
  },
];
