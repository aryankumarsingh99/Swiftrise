"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop",
];

export default function HeroSection() {
  const [imgIdx, setImgIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIdx((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 400); // fade out duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden text-white pt-20 md:pt-0">
      <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
        <Image
          src={heroImages[imgIdx]}
          alt="Leadership team in strategic meeting"
          fill
          priority
          className="object-cover transition-all duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_0.65px,transparent_0.65px)] bg-size-[18px_18px] opacity-30" />
      <div className="relative mx-auto flex min-h-[92vh] w-[94vw] max-w-330 flex-col px-2 pb-10 pt-6 sm:px-4 md:pb-14 md:pt-8">
        <div className="mt-auto">
          <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">ABOUT SWIFTRISE</p>
          <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
            Building the Future with Code, AI, &amp; and Innovation
          </h1>
          <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
            <div className="grid gap-5 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
              <p className="max-w-[34ch]">
                SwiftWrise helps businesses and families protect what matters most through disciplined risk management,
                insurance, and investment solutions.
              </p>
              <p className="max-w-[36ch]">
                We bring together disciplined risk management, tailored protection, and long-term investment thinking
                under one integrated approach.
              </p>
              <Link
                className="inline-flex items-center gap-2 self-end whitespace-nowrap border-b border-white/65 pb-1 text-[1.85rem] font-medium text-white transition hover:border-white"
                href="/services"
              >
                Explore Our Services <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
