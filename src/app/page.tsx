"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { QuoteModal } from "@/components/ui/QuoteModal";
import type { SolutionItem } from "@/types";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectSolution = (solution: SolutionItem) => {
    handleOpenQuote(solution.title);
  };

  return (
    <>
      {/* Fixed Navigation Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="w-full pt-16 lg:pt-20 bg-background pb-10 lg:pb-0">
        <div className="flex flex-col w-full">
          {/* 1. Mobile-Optimized & Desktop Hero Section */}
          <HeroSection onOpenConsultation={() => handleOpenQuote()} />

          {/* 2. High-Contrast Stats Strip (2x2 on Mobile, 4-col on Desktop) */}
          <StatsStrip />

          {/* 3. Enterprise Solutions Bento Grid */}
          <SolutionsSection onSelectSolution={handleSelectSolution} />

          {/* 4. Why Us / NOC Live Telemetry Section */}
          <WhyUsSection />

          {/* 5. Enterprise Clients Showcase (2x2 Sectors on Mobile) */}
          <ClientsSection />

          {/* 6. High-Impact CTA Banner with Inline Mobile Form & Office Panel */}
          <CtaSection onOpenConsultation={() => handleOpenQuote()} />
        </div>
      </main>

      {/* Corporate Multi-Column Footer with Safe Padding */}
      <Footer
        onOpenBriefing={() =>
          handleOpenQuote("Executive Briefing & Architecture Audit")
        }
      />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav />

      {/* Interactive Consultation / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}
