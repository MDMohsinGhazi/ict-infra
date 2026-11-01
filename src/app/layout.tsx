import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "NexaCore ICT | Sovereign IT Infrastructure & Enterprise Solutions - Abu Dhabi",
  description:
    "End-to-end ICT infrastructure, sovereign cloud, and 24/7 network management solutions engineered for enterprise continuity across Abu Dhabi and global markets.",
  keywords: [
    "ICT Solutions Abu Dhabi",
    "Sovereign IT Infrastructure",
    "Enterprise Networking UAE",
    "Data Center Solutions",
    "Managed IT Services UAE",
    "Tier-III SLA",
    "ISO 27001",
    "Arabian Computers",
  ],
  authors: [{ name: "NexaCore ICT / Arabian Computers LLC" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NexaCore ICT | Sovereign IT Infrastructure - Abu Dhabi",
    description:
      "Mission-critical ICT infrastructure engineered for sovereign enterprise continuity in the UAE and worldwide.",
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
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        {children}
      </body>
    </html>
  );
}
