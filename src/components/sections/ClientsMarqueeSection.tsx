const CLIENTS_ROW_1 = [
  { name: "Mubadala", category: "Sovereign Investment" },
  { name: "Port of Fujairah", category: "Maritime Infrastructure" },
  { name: "Line Investments & Property", category: "Commercial Malls" },
  { name: "LuLu Group International", category: "Retail Hypermarkets" },
  { name: "Zayed University", category: "Higher Education" },
  { name: "GEMS Education", category: "Global Academies" },
  { name: "Bright Riders School", category: "K-12 Education" },
  { name: "ADNOC Group", category: "Energy & Petrochemicals" },
];

const CLIENTS_ROW_2 = [
  { name: "NPCC", category: "National Petroleum" },
  { name: "Forsan Central Mall", category: "Retail Complex" },
  { name: "Khalidiyah Mall", category: "Abu Dhabi Retail" },
  { name: "Madinat Zayed Shopping Centre", category: "Gold & Retail Center" },
  { name: "Mafraq Centre", category: "Commercial Hub" },
  { name: "Salma Rehabilitation Hospital", category: "Specialized Healthcare" },
  { name: "Yas Healthcare", category: "Clinical Diagnostics" },
  { name: "Western Hotel", category: "Hospitality & Leisure" },
  { name: "Cristal Hotel Abu Dhabi", category: "Luxury Hospitality" },
];

export function ClientsMarqueeSection() {
  return (
    <section
      className="w-full py-16 lg:py-24 bg-white overflow-hidden border-t border-zinc-200"
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-heading-condensed text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-none uppercase">
          Clients
        </h2>
        <p className="mt-2 font-condensed text-sm sm:text-base text-zinc-500 uppercase tracking-widest font-semibold">
          Proudly Serving a Diverse Client Base Across the UAE
        </p>
      </div>

      {/* Row 1 Marquee (Infinite scroll left) */}
      <div className="relative w-full flex overflow-x-hidden mb-5">
        <div className="flex gap-4 sm:gap-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map(
            (client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="w-56 sm:w-64 h-24 sm:h-28 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-md flex flex-col items-center justify-center p-4 transition-all flex-shrink-0 group hover:border-black"
              >
                <span className="font-heading-condensed text-lg sm:text-xl text-zinc-800 group-hover:text-black font-bold tracking-wide uppercase text-center line-clamp-1">
                  {client.name}
                </span>
                <span className="font-condensed text-[11px] text-zinc-400 group-hover:text-primary-container uppercase tracking-wider mt-1 font-semibold">
                  {client.category}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Row 2 Marquee (Infinite scroll right / reverse) */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex gap-4 sm:gap-6 animate-[marquee-reverse_32s_linear_infinite] whitespace-nowrap">
          {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map(
            (client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="w-56 sm:w-64 h-24 sm:h-28 rounded-xl bg-white border border-zinc-200 shadow-sm hover:shadow-md flex flex-col items-center justify-center p-4 transition-all flex-shrink-0 group hover:border-black"
              >
                <span className="font-heading-condensed text-lg sm:text-xl text-zinc-800 group-hover:text-black font-bold tracking-wide uppercase text-center line-clamp-1">
                  {client.name}
                </span>
                <span className="font-condensed text-[11px] text-zinc-400 group-hover:text-primary-container uppercase tracking-wider mt-1 font-semibold">
                  {client.category}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
