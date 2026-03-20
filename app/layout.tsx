import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
 
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

export const metadata: Metadata = {
  title: "SwiftRice  | Built on Trust, Designed for Tomorrow",
  description:
    "Aurevia Group is a strategic partner for architecture, engineering, operations, and digital transformation projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfairDisplay.variable} antialiased`}>
        <div className="min-h-screen">
          <div className="px-8 md:px-24 lg:px-40 xl:px-50">
            <Navbar />
          </div>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
