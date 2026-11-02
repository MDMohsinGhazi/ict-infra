"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ClientsMarqueeSection } from "@/components/sections/ClientsMarqueeSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
      {/* Fixed Navigation Header with Sleek Dark Bar */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content (Transit-si Alternating Light / Dark Flow) */}
      <main className="w-full pt-16 lg:pt-[116px] bg-black min-h-screen">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section (Pitch Black / Datacenter background with bold condensed typography) */}
          <HeroSection onOpenConsultation={() => handleOpenQuote()} />

          {/* 2. "We Are Royal Arabian" (Light Section) */}
          <AboutUsSection onLearnMore={() => handleOpenQuote()} />

          {/* 3. Dark Stats & Accreditations Strip (Pitch Black Section: 5 Stats & Certifications) */}
          <StatsStrip />

          {/* 4. Services Section (Light Section: "From Design to Delivery, We Handle It All") */}
          <ServicesSection />

          {/* 5. Solutions Section (Pitch Black Section: "Future-Ready Solutions for Complex Requirements") */}
          <SolutionsSection onSelectSolution={handleSelectSolution} />

          {/* 6. Industries We Serve (Light Section: Centered Dark Overlay Cards) */}
          <SectorsSection />

          {/* 7. Why Royal Arabian (Operational Rigor & Core Value Pillars) */}
          <WhyUsSection />

          {/* 8. Flagship Projects (Pitch Black Section: "From Concept to Completion, Delivered Right") */}
          <ProjectsSection />

          {/* 9. Clients Logo Marquee (Light Section: Multi-row Infinite Marquee) */}
          <ClientsMarqueeSection />

          {/* 10. Contact Section ("Drop a Message to Our Team") */}
          <CtaSection />
        </div>
      </main>

      {/* Dark Corporate Multi-Column Footer */}
      <Footer />

      {/* Interactive Consultation / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}
