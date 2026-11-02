import type { Metadata, Viewport } from "next";
import {
  Inter,
  JetBrains_Mono,
  Oswald,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "ROYAL ARABIAN Smart Technologies LLC | Next-Gen ICT Infrastructure & Solutions - Abu Dhabi",
  description:
    "Empowering government entities, enterprise complexes, and premier real estate across Abu Dhabi and the UAE with mission-critical surveillance, networking, cloud computing, and intelligent ELV automation.",
  keywords: [
    "Royal Arabian Smart Technologies",
    "RACT Abu Dhabi",
    "ADMCC Approved CCTV",
    "ADNOC ICV Certified",
    "ICT Solutions Abu Dhabi",
    "ELV Automation UAE",
    "Enterprise Wi-Fi UAE",
    "Turnkey Data Center",
    "Fiber Optic Cabling",
  ],
  authors: [{ name: "Royal Arabian Smart Technologies LLC" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "ROYAL ARABIAN Smart Technologies LLC | Next-Gen ICT Solutions Abu Dhabi",
    description:
      "Mission-critical ICT infrastructure, ADMCC approved CCTV surveillance, and enterprise ELV automation across the United Arab Emirates.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${oswald.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
