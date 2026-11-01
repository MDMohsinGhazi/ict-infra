import type { StatItem } from "@/types";

export const STATS_DATA: StatItem[] = [
  {
    id: "sla",
    label: "Contractual Reliability",
    metric: "99.999%",
    subtext: "Uptime SLA Guaranteed",
  },
  {
    id: "failover",
    label: "Redundancy Switchover",
    metric: "15 ms",
    subtext: "Failover Response Telemetry",
  },
  {
    id: "endpoints",
    label: "Managed Endpoints",
    metric: "4,500+",
    subtext: "Facilities & Enterprise Nodes",
  },
  {
    id: "monitoring",
    label: "Continuous Monitoring",
    metric: "24/7/365",
    subtext: "Dedicated UAE Network NOC",
    highlight: true,
  },
];
