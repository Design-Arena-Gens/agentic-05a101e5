import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";

const headingFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "AquaPulse Pro | Intelligent Water Pump Systems",
  description:
    "Discover AquaPulse Pro, the smart, efficient, and reliable water pump engineered for modern infrastructure and sustainable living."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
