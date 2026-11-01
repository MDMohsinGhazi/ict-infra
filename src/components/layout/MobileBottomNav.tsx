"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Cpu,
  LayoutDashboard,
  Server,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

const TABS: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutDashboard,
    href: "#overview",
  },
  { id: "infrastructure", label: "Infra", icon: Server, href: "#solutions" },
  { id: "services", label: "Services", icon: Cpu, href: "#solutions" },
  {
    id: "network-telemetry",
    label: "Telemetry",
    icon: Activity,
    href: "#about",
  },
  { id: "portal", label: "Portal", icon: ShieldCheck, href: "#contact" },
];

export function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const solutionsEl = document.getElementById("solutions");
      const aboutEl = document.getElementById("about");
      const contactEl = document.getElementById("contact");

      const contactTop = contactEl ? contactEl.offsetTop - 200 : Infinity;
      const aboutTop = aboutEl ? aboutEl.offsetTop - 200 : Infinity;
      const solutionsTop = solutionsEl ? solutionsEl.offsetTop - 200 : Infinity;

      if (scrollY >= contactTop) {
        setActiveTab("portal");
      } else if (scrollY >= aboutTop) {
        setActiveTab("network-telemetry");
      } else if (scrollY >= solutionsTop) {
        setActiveTab("infrastructure");
      } else {
        setActiveTab("overview");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl border-t border-border-hairline shadow-[0_-2px_12px_rgba(0,0,0,0.06)]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex justify-around items-center h-16 sm:h-20 px-space-xs">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-2 transition-all ${
                isActive
                  ? "text-secondary font-semibold scale-105"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-label-sm text-[11px] leading-tight mt-1">
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
