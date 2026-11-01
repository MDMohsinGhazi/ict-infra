import type { ClientItem } from "@/types";

export const CLIENTS_DATA: ClientItem[] = [
  {
    id: "hospitality",
    name: "Emirates Palace Kempinski",
    subtitle: "Luxury Hospitality • Abu Dhabi",
    icon: "hotel",
    iconColorClass: "text-tertiary-fixed-dim",
  },
  {
    id: "government",
    name: "Abu Dhabi Digital Entities",
    subtitle: "Government Infrastructure",
    icon: "account_balance",
    iconColorClass: "text-secondary",
  },
  {
    id: "energy",
    name: "Clean Energy & Utilities",
    subtitle: "Energy Infrastructure • Masdar",
    icon: "bolt",
    iconColorClass: "text-status-success",
  },
  {
    id: "logistics",
    name: "Commercial Logistics & Ports",
    subtitle: "Air & Maritime Global Hubs",
    icon: "flight_takeoff",
    iconColorClass: "text-secondary-container",
  },
];
