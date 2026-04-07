"use client";

import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brandIcons = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png"
   
];


export default function MarqueeSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && !document.getElementById('marquee-anim')) {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      style.id = 'marquee-anim';
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)] px-4 py-15 sm:px-6 lg:px-8 min-h-80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-indigo-300/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-15" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <path d="M0 140 L160 115 L320 145 L480 120 L640 155 L800 132 L960 165 L1120 142 L1200 150" stroke="currentColor" className="text-[#4f7ea8]" strokeWidth="1" fill="none" />
          <path d="M0 420 L180 398 L360 430 L540 402 L720 438 L900 410 L1080 445 L1200 425" stroke="currentColor" className="text-[#7ba5cf]" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-14 bg-[#113f67]/35" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#113f67]/70">Trusted Network</span>
            </div>
            <h2 className="text-4xl font-bold text-[#113f67]">Our Partners</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#365a7f]">
              We collaborate with reliable organizations and technology leaders to deliver secure,
              scalable, and high-impact solutions.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-[#bcd0e8] flex items-center justify-center text-xl text-[#6388ad] bg-white/90 shadow-sm hover:-translate-y-0.5 hover:bg-white transition">
              <FaChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full border border-[#bcd0e8] flex items-center justify-center text-xl text-[#6388ad] bg-white/90 shadow-sm hover:-translate-y-0.5 hover:bg-white transition">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border-2 border-[#113f67] bg-white/80 px-4 py-6 shadow-[0_18px_42px_rgba(17,63,103,0.12)] backdrop-blur-sm sm:px-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(248,251,255,0.95)_0%,rgba(248,251,255,0)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(248,251,255,0.95)_0%,rgba(248,251,255,0)_100%)]" />

          <div
            className="flex w-max gap-14 animate-marquee"
            style={{ animation: 'marquee 22s linear infinite' }}
          >
            {[...brandIcons, ...brandIcons].map((icon, idx) => (
              <span
                key={idx}
                style={{ minWidth: 160 }}
                className="flex h-52 w-52 items-center justify-center rounded-2xl border border-[#dce7f5] bg-white/95 shadow-[0_10px_26px_rgba(17,63,103,0.08)]"
              >
                {/* Replace <img> with next/image for optimization if possible */}
                <img
                  src={icon}
                  alt={`Brand ${idx % brandIcons.length + 1}`}
                  className={`h-40 w-40 object-contain transition-transform ${icon === "/logo4.png" ? "scale-300" : "scale-100"}`}
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
