"use client";

import React, { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brandIcons = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png"
   
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
    <section className="relative z-10 bg-white px-4 py-15 sm:px-6 lg:px-8 min-h-80">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-[#113f67]">Our Partners</h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-xl text-[#bbb] bg-white hover:bg-[#f5f5f5] transition">
              <FaChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-xl text-[#bbb] bg-white hover:bg-[#f5f5f5] transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden w-full">
          <div
            className="flex w-max gap-16 animate-marquee"
            style={{ animation: 'marquee 22s linear infinite' }}
          >
            {[...brandIcons, ...brandIcons].map((icon, idx) => (
              <span key={idx} style={{ minWidth: 142 }}>
                {/* Replace <img> with next/image for optimization if possible */}
                <img
                  src={icon}
                  alt={`Brand ${idx % brandIcons.length + 1}`}
                  className="h-48 w-48 object-contain"
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
