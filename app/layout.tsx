import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import PageBackground from "@/components/layout/PageBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Agricom Assurance AgriTech Insurance for a Resilient Harvest",
    template: "%s Agricom Assurance",
  },
  description:
    "Agricom Assurance protects farmers, agribusinesses and rural communities with transparent, technology-driven cover from seed to harvest and beyond.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        <PageBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
