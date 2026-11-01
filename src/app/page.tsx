"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { AccreditationsSection } from "@/components/sections/AccreditationsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
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
      {/* Fixed Navigation Header with Top Utility Bar */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="w-full pt-16 lg:pt-[116px] bg-surface min-h-screen pb-20 lg:pb-0">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section */}
          <HeroSection onOpenConsultation={() => handleOpenQuote()} />

          {/* 2. Performance Impact Metrics Bar */}
          <StatsStrip />

          {/* 3. Core Solutions & Integrated Services Bento Grid */}
          <SolutionsSection onSelectSolution={handleSelectSolution} />

          {/* 4. Sectors Served with Architectural Showcase */}
          <SectorsSection />

          {/* 5. Accreditations & Regulatory Showcase + Tech Alliance */}
          <AccreditationsSection />

          {/* 6. Why Choose Royal Arabian (Operational Rigor) */}
          <WhyUsSection />

          {/* 7. Direct Inquiries & RFP Consultation Form */}
          <CtaSection />
        </div>
      </main>

      {/* Multi-Column Footer with Accreditations Marquee */}
      <Footer />

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
