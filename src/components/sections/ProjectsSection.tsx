import Image from "next/image";

const PROJECTS_DATA = [
  {
    title:
      "Supply and Installation of Gate Barrier System - Jebel Ali Depot, UAE",
    category: "Parking & Barrier Automation",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Gallagher Access Control System at Commercial Towers, Dubai",
    category: "Enterprise Access Control",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    title:
      "Security & ADMCC Video Surveillance at Waitrose Supermarket, Abu Dhabi",
    category: "Retail Visual Surveillance",
    imageUrl:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop",
  },
  {
    title:
      "CCTV Upgradation & High-Definition Storage - Al Maryah Tower, Abu Dhabi",
    category: "Government & Banking Facility",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    title:
      "Campus-Wide High-Speed Networking - IIT Delhi & Zayed University, UAE",
    category: "Higher Education ICT",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AV, SOC & Turnkey ELV Infrastructure - Mubadala Tower, Abu Dhabi",
    category: "Command Control & Executive AV",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
];

export function ProjectsSection() {
  return (
    <section
      className="w-full py-16 lg:py-24 bg-black text-white relative"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header (Transit style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-condensed text-sm sm:text-base text-zinc-400 uppercase tracking-widest font-semibold">
            From Concept to Completion, Delivered Right
          </p>
          <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none uppercase mt-2">
            Flagship Projects
          </h2>
        </div>

        {/* 6-Card Grid (Transit style: Photo top, crisp white text box bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-950 border border-white/10 overflow-hidden flex flex-col group hover:border-white/40 transition-all duration-300 shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Bottom White Label Box (Exact transit-si match) */}
              <div className="p-6 bg-white text-zinc-900 flex flex-col justify-between flex-1">
                <h3 className="font-heading-condensed text-lg sm:text-xl font-bold tracking-wide uppercase text-zinc-900 leading-snug">
                  {project.title}
                </h3>
                <span className="font-condensed text-xs text-primary-container font-semibold uppercase tracking-wider mt-3">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="#consultation-inquiry"
            className="inline-block px-10 py-3.5 bg-white hover:bg-zinc-100 text-black font-condensed text-base font-bold tracking-wider uppercase transition-colors shadow-lg active:scale-98"
          >
            Explore All
          </a>
        </div>
      </div>
    </section>
  );
}
