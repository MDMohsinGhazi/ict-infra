import { SolutionCard } from "@/components/ui/SolutionCard";
import { SOLUTIONS_DATA } from "@/data/solutions";
import type { SolutionItem } from "@/types";

interface SolutionsSectionProps {
  onSelectSolution?: (solution: SolutionItem) => void;
}

export function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  return (
    <section
      className="w-full bg-surface-subtle py-12 lg:py-24 relative"
      id="solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 lg:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 lg:space-y-3">
          <h2 className="font-headline-sm lg:font-headline-lg text-2xl lg:text-headline-lg text-primary-container tracking-tight font-bold">
            Engineered ICT Architecture &amp; Solutions
          </h2>
          <p className="font-body-sm lg:font-body-lg text-sm lg:text-body-lg text-on-surface-variant max-w-[68ch] leading-relaxed [text-wrap:pretty]">
            Turnkey enterprise infrastructure engineered for mission-critical
            reliability, government compliance, and uninterrupted business
            scale.
          </p>
        </div>

        {/* Solutions Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onSelect={onSelectSolution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
