"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const featuredItems = [
  {
    title: "Global Operations Expansion Across 6 New Markets",
    summary:
      "Our latest expansion strengthens delivery capabilities and enables faster client support in emerging regions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tag: "Company",
  },
  {
    title: "Sustainability Initiative Reduces Operational Waste By 31%",
    summary:
      "A cross-functional initiative has helped reduce waste and improve resource efficiency across our core facilities.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    tag: "Impact",
  },
];

export default function FeaturedNewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [64, -64]);
  const ribbonY = useTransform(scrollYProgress, [0, 1], [34, -30]);
  const ribbonOpacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.2, 0.5, 0.35, 0.15]);

  const headerMotion = {
    initial: { opacity: 0, y: 36, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.35 },
    transition: { duration: 0.65, ease: "easeOut" },
  };

  const cardMotion = (index: number) => ({
    initial: { opacity: 0, x: index === 0 ? -42 : 42, y: 30, rotate: index === 0 ? -1.2 : 1.2 },
    whileInView: { opacity: 1, x: 0, y: 0, rotate: 0 },
    viewport: { once: false, amount: 0.32 },
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: index * 0.08,
    },
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-b from-[#fefcf7] via-[#f5f8ff] to-[#edf3ff] px-0 py-14 sm:py-16 md:py-20"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
 
        <motion.svg
          viewBox="0 0 1200 220"
          aria-hidden="true"
          className="absolute -top-2 left-0 w-full opacity-45"
          preserveAspectRatio="none"
          style={{ y: ribbonY, opacity: ribbonOpacity }}
        >
          <path d="M0,130 C210,86 360,190 570,148 C780,106 980,96 1200,126" fill="none" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M0,172 C236,132 392,224 608,192 C824,160 1010,152 1200,168" fill="none" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 8" />
        </motion.svg>
      </motion.div>

      <div className="relative z-10 mx-auto w-[94vw] max-w-330">
        <motion.div
          className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
          initial={headerMotion.initial}
          whileInView={headerMotion.whileInView}
          viewport={headerMotion.viewport}
          transition={headerMotion.transition}
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4ed8]">Top Stories</p>
            <h2 className="text-3xl font-semibold text-[#172849] sm:text-4xl">Featured News</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5f7392] sm:text-base">
              Carefully selected updates with the highest strategic and operational relevance.
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#cad8f6] bg-white px-5 py-2.5 text-sm font-semibold text-[#1d4ed8] shadow-[0_8px_18px_rgba(23,40,73,0.1)] transition hover:-translate-y-0.5 hover:bg-[#eef3ff]"
              href="#latest-news"
            >
              View all updates <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {featuredItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={cardMotion(index).initial}
              whileInView={cardMotion(index).whileInView}
              viewport={cardMotion(index).viewport}
              transition={cardMotion(index).transition}
              className={`group relative overflow-hidden rounded-3xl border border-[#dbe5f8] bg-white shadow-[0_14px_34px_rgba(23,40,73,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(23,40,73,0.16)] ${
                index === 0 ? "" : "lg:self-start"
              }`}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 bg-linear-to-r from-[#1d4ed8]/0 via-[#1d4ed8]/55 to-[#1d4ed8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className={`relative overflow-hidden ${index === 0 ? "h-72 sm:h-80 lg:min-h-112" : "h-56 sm:h-64"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {index === 0 ? <div className="absolute inset-0 bg-linear-to-t from-[#0f1f44]/84 via-[#0f1f44]/30 to-transparent" /> : null}
              </div>

              {index === 0 ? (
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#b9d5ff]">{item.tag}</p>
                  <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d8e7ff] sm:text-base">{item.summary}</p>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#2b4fc7]">{item.tag}</p>
                  <h3 className="text-xl font-semibold leading-snug text-[#172849]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5d7191] sm:text-base">{item.summary}</p>
                  <a href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] transition group-hover:gap-3">
                    Explore story <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
