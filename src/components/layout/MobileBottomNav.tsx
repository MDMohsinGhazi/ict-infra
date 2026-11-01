"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building,
  Building2,
  ClipboardList,
  Network,
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
    icon: Building,
    href: "#",
  },
  {
    id: "smart-infrastructure",
    label: "Systems",
    icon: Network,
    href: "#solutions",
  },
  {
    id: "rfq-services",
    label: "RFQ Hub",
    icon: ClipboardList,
    href: "#quick-rfq",
  },
  {
    id: "compliance-vault",
    label: "Audit",
    icon: ShieldCheck,
    href: "#certifications",
  },
  {
    id: "enterprise-profile",
    label: "Executive",
    icon: Building2,
    href: "#why-us",
  },
];

export function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const solutionsEl = document.getElementById("solutions");
      const rfqEl =
        document.getElementById("quick-rfq") ||
        document.getElementById("consultation-inquiry");
      const certificationsEl = document.getElementById("certifications");
      const whyUsEl = document.getElementById("why-us");

      const whyUsTop = whyUsEl ? whyUsEl.offsetTop - 200 : Infinity;
      const certTop = certificationsEl
        ? certificationsEl.offsetTop - 200
        : Infinity;
      const rfqTop = rfqEl ? rfqEl.offsetTop - 200 : Infinity;
      const solutionsTop = solutionsEl ? solutionsEl.offsetTop - 200 : Infinity;

      if (scrollY >= whyUsTop) {
        setActiveTab("enterprise-profile");
      } else if (scrollY >= rfqTop) {
        setActiveTab("rfq-services");
      } else if (scrollY >= certTop) {
        setActiveTab("compliance-vault");
      } else if (scrollY >= solutionsTop) {
        setActiveTab("smart-infrastructure");
      } else {
        setActiveTab("overview");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(11,28,48,0.05)] border-t border-border-hairline/60"
      aria-label="Mobile Navigation Tabs"
    >
      <div className="h-16 px-2 flex items-center justify-around">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-11 gap-0.5 transition-colors ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Icon className="w-[22px] h-[22px]" />
              <span className="font-label-sm text-[11px] leading-tight">
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
