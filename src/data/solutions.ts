import type { SolutionItem } from "@/types";

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "data-center",
    code: "01 / TIER-III",
    title: "Data Center & Cloud Infrastructure",
    description:
      "High-density server architecture, private & hybrid cloud migration, sovereign on-prem hosting, and automated disaster recovery failover.",
    icon: "dns",
    href: "#contact",
  },
  {
    id: "networking",
    code: "02 / CORE-NET",
    title: "Enterprise Networking",
    description:
      "SD-WAN implementation, next-gen core switching, ultra-low latency border routing, and certified structured dark-fiber cabling.",
    icon: "hub",
    href: "#contact",
  },
  {
    id: "wifi-mobility",
    code: "03 / WI-FI 7",
    title: "Wi-Fi & Mobility Solutions",
    description:
      "High-density campus wireless, AI-driven RF spectrum optimization, captive portals, and secure BYOD policy management.",
    icon: "wifi",
    href: "#contact",
  },
  {
    id: "collaboration",
    code: "04 / UCaaS",
    title: "Collaboration & Communication",
    description:
      "Unified communications, certified Microsoft Teams & Zoom Room integrations, acoustic digital DSP, and enterprise IP telephony.",
    icon: "forum",
    href: "#contact",
  },
  {
    id: "hardware-software",
    code: "05 / HARDWARE",
    title: "IT Hardware & Software Solutions",
    description:
      "Enterprise volume procurement, tier-1 OEM hardware provisioning, server virtualization licensing, and lifecycle obsolescence management.",
    icon: "memory",
    href: "#contact",
  },
  {
    id: "m365",
    code: "06 / M365 CSP",
    title: "Microsoft 365 Solutions",
    description:
      "Tenant architecture optimization, zero-trust Entra ID security protocols, Microsoft Copilot enterprise readiness, and zero-downtime Exchange migration.",
    icon: "grid_view",
    href: "#contact",
  },
  {
    id: "managed-services",
    code: "07 / MSP 24/7",
    title: "Managed IT Services & 24/7 Abu Dhabi Support",
    description:
      "Proactive remote telemetry monitoring, automated security patch remediation, and rapid-dispatch local field engineers stationed across Abu Dhabi and Dubai.",
    icon: "support_agent",
    featured: true,
    badge: "Strategic SLA Engagement",
    ctaText: "Engage SLA Contracts",
    href: "#contact",
  },
];
