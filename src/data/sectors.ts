import type { SectorItem } from "@/types";

export const SECTORS_DATA: SectorItem[] = [
  {
    id: "hospitality",
    title: "Hotels & Luxury Resorts",
    tag: "Hospitality",
    description:
      "Integrated room automation, guest-facing high-density Wi-Fi, background audio distribution, and ADMCC compliance.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0eLXWaLp9eFkmHAQ0IoXDCr_HoeTssnHojpGreKWVTQdtfeG_4gKZRHFyz1dhnQ7FAI7a6GEI4rbU9xmGHjmwXyzdFetxivpMCphf4tEq-4PEFEiu6ecJqy8e3MulGsWZkAIAqh8iVNCXVNRvG9TQd_d0BNRVkiaLGK3X73Q9txgioFeVHkq9t5TjVKqbZ2hbyBjpDCyq3UD-oFOzc5EbGwYp1Ot08LoRLyAOkQ",
    chips: ["IPTV", "High-Density Wi-Fi", "Keyless Access"],
  },
  {
    id: "oil-gas",
    title: "Oil & Gas / Offshore Fields",
    tag: "ADNOC ICV Certified",
    tagColorClass: "text-primary",
    description:
      "Explosion-proof cameras, harsh-environment optical fiber links, specialized engineering computing, and mission uptime.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTFeTVBhYvP6AV8VRsaf7g2uAGdkB9c3VDaWv6EAqlZYYa2xcfC6GicE0x1B2HcWhchO_nUhq1XQa1LWlxJrJROOe6Vi65c8uFHvYvv3JMNbtYtPvprQMaf68EoXwcM8h7xGrXwkdaN3BP5VBHfb7j0jEoHiC0eOb0XTGEddCE94oiwLcY6SFv59RDfg69pJ8BRgSgpskCdRQECEVb9obAhnkROVuNnd5kG2F4xg",
    chips: ["Explosion-Proof CCTV", "Armored Fiber", "ICV Approved"],
  },
  {
    id: "healthcare",
    title: "Hospitals & Medical Centers",
    tag: "Healthcare",
    description:
      "Smart Q-Management queue systems, clean-room certified structured cabling, real-time staff paging, and isolated patient data VLANs.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVlf9wLelM7pPKhwoqY2JYazFYok458Fh2HsNYyYLBoVgcx8Cfy25RfV_Gwl5-hBV8beMb4uKHTFBkyGIWuHkoSFGpmRPGi-Ymr_c-zZTsGFD-sfDB-27MQAMCaQcws6CvDE4vTVXH_KtNx9b8Fsd1-9o5Qa-zOxSMt7BdR70uueQMy2s30lwdNEaKdtdBUUEJysdSdQrFHubYCOFhhDaKjWQhv8sm_A0cCKzn_A",
    chips: ["Q-Management", "Nurse Call VoIP", "HIPAA Storage"],
  },
  {
    id: "education",
    title: "Universities & Schools",
    tag: "Education",
    description:
      "Smart lecture theaters, multi-thousand concurrent user Wi-Fi matrices, lab software provisioning, and campus boundary control.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBacVcC8vb9N-3suaJPwdVcD3MTboe5_4cUP-QTrAq0NKBUXwzK2ZCUbdalox2WcMxdVG20xf7CLP66g0qLUW9iouWt5339EK4zNZVudz4kadpbsZjpCIy7uwlF9KRmtXAyzRQNrYIUs7FMxGVCyNKs6NVbUoqUaV21WNbeIuoHdaQs6BDRKqH1B1NuVWAwaCDVbvWN5d9x0bVhJxPxMZJIw9iuq600MhB0sq3eCA",
    chips: ["Campus WLAN", "Lecture Theaters", "Perimeter Security"],
  },
  {
    id: "government",
    title: "Government & Commercial",
    tag: "Public Sector",
    tagColorClass: "text-tertiary",
    description:
      "Tier-3 turnkey server rooms, APC power infrastructure, sovereign cloud security policies, and executive video boardrooms.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA5Q-Kv8A-b0T82lxHnN_Inr7t1vJ-Em_4PUOBhNMgQivwt0KSkvV9zSMPyq5OgifTHzM1JBaQMiyI66kEWyiQsuCtthZ_r_3_J8jf0bQ7HCETgC8Th4L4-sZrerk9SSHDNmpNG89pHSqY5v9rObCg3ouBljVJnSio4vSZU5UND7psC4eGjjzTDnExEQgEeBLHE2LbbJPr67elf_1JWOnsQbN9x6ZmoJUqeg5CRg",
    chips: ["Turnkey Data Center", "APC InfraStruxure", "ADMCC VMS"],
  },
  {
    id: "transportation",
    title: "Airports & Transportation",
    tag: "Critical Infrastructure",
    description:
      "Biometric passenger transit scanners, redundant backbone fiber paths, 24/7 Severity-1 zero-downtime maintenance agreements.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACAuKBV3HCiGfGtQEip94BI_uoIZhM1K8aT9JJWJLFqgjv5wU5dxdyMs0o0Npn85YhhFmudMuLcEhOtTHdYV7W309IL9zWt3ftc4SW1syk0DDkWRcv0B4iphFMO__voh1pNxlURrHFQY0rvmq1W6vby9k20zNODNsiOeV5WNJz6LDZQlVwP42CAS-a8yrjLRRuC9NjpddmSdX-Ebge-7nsGtjpOBB8rdoeHoWKrw",
    chips: ["Mission Critical AMC", "Biometrics", "Redundant Backbone"],
  },
];
