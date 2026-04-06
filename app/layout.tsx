import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToHomeButton from "@/components/ScrollToHomeButton";
 

import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://swiftrise.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Swiftrise Solution Pvt.Ltd | Technology & Digital Solutions",
    template: "%s | Swiftrise Solution Pvt.Ltd",
  },
  description:
    "Swiftrise Solution Pvt.Ltd delivers software engineering, cloud enablement, platform operations, and digital transformation services for modern businesses.",
  keywords: [
    "Swiftrise Solution Pvt.Ltd",
    "software development company",
    "digital transformation",
    "cloud solutions",
    "platform engineering",
    "technology consulting",
  ],
  applicationName: "Swiftrise Solution Pvt.Ltd",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Swiftrise Solution Pvt.Ltd | Technology & Digital Solutions",
    description:
      "Swiftrise Solution Pvt.Ltd delivers software engineering, cloud enablement, platform operations, and digital transformation services for modern businesses.",
    siteName: "Swiftrise Solution Pvt.Ltd",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Swiftrise Solution Pvt.Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiftrise Solution Pvt.Ltd | Technology & Digital Solutions",
    description:
      "Swiftrise Solution Pvt.Ltd delivers software engineering, cloud enablement, platform operations, and digital transformation services for modern businesses.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfairDisplay.variable} antialiased`}>
        <div className="min-h-screen">
          <div className="px-8 md:px-24 lg:px-40 xl:px-50">
            <Navbar />
          </div>
          <main>{children}</main>
          <Footer />
          <ScrollToHomeButton />
        </div>
      </body>
    </html>
  );
}
