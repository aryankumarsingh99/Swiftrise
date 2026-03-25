"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
   "https://images.unsplash.com/photo-1645824687625-aaf58242f58f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1638787377553-0547687f3a87?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628427634386-7a6e2d1f55ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
// Change this to switch animation style: 'fade', 'blur', 'parallax', 'kenburns', 'flip'
const animationType = 'flip';

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
    <section className="relative isolate min-h-[100vh] flex items-center justify-center overflow-hidden text-white pt-20 md:pt-0">
      <div className="absolute inset-0 w-full h-full perspective-[1200px]">
        {heroImages.map((img, idx) => {
          // Improved 3D rotation (flip) effect
          let isActive = idx === imgIdx;
          let isPrev = idx === (imgIdx === 0 ? heroImages.length - 1 : imgIdx - 1);
          return (
            <Image
              key={img}
              src={img}
              alt="Hero background"
              fill
              priority={isActive}
              className={`object-cover absolute inset-0 transition-all duration-[5000ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                isActive
                  ? 'opacity-100 rotate-y-0 z-10'
                  : isPrev
                    ? 'opacity-0 -rotate-y-90 z-0'
                    : 'opacity-0 rotate-y-90 z-0'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
                backfaceVisibility: 'hidden',
              }}
            />
          );
        })}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_0.65px,transparent_0.65px)] bg-size-[18px_18px] opacity-30" />
      <div className="relative mx-auto flex min-h-[92vh] w-[94vw] max-w-330 flex-col px-2 pb-10 pt-6 sm:px-4 md:pb-14 md:pt-8">
        <div className="mt-auto">
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
