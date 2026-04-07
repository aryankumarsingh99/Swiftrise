"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const updates = [
  {
    date: "Apr 02, 2026",
    category: "Engineering",
    title: "Q2 Engineering Report Published",
    excerpt: "Our platform team shared key improvements in deployment speed, observability, and release quality.",
    image:
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    date: "Mar 24, 2026",
    category: "Partnership",
    title: "Cloud Alliance Expands Delivery Capability",
    excerpt: "A new technology partnership strengthens our cloud migration and managed infrastructure services.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Mar 10, 2026",
    category: "Product",
    title: "Product Delivery Forum Highlights",
    excerpt: "Product leads and architects shared proven frameworks for scaling SaaS platforms with confidence.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Mar 05, 2026",
    category: "Technology",
    title: "AI Analytics Platform Released",
    excerpt: "Our new analytics suite delivers real-time dashboards, predictive insights, and automated anomaly detection.",
    image:
      "https://images.unsplash.com/photo-1555949519-2d0b1a30c49d?auto=format&fit=crop&w=1200&q=80",
  }  
];

export default function LatestNewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);

  const [featured, ...feed] = updates;

  return (
    <section
      ref={sectionRef}
      id="latest-news"
      className="relative overflow-hidden bg-linear-to-b from-[#06122b] via-[#0b1c42] to-[#132d63] px-0 py-14 text-white sm:py-16 md:py-20"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#5f99ff]/25 blur-3xl"
        style={{ y: orbY, rotate: orbRotate }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#85b8ff]/15 blur-3xl"
        style={{ y: useTransform(orbY, (v) => -v * 0.6), rotate: useTransform(orbRotate, (v) => -v) }}
      />

      <div className="relative z-10 mx-auto w-[94vw] max-w-330">
        <motion.div
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9fc2ff]">Newsroom</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Latest Updates</h2>
          </div>
          
        </motion.div>

        <div className="mb-8">
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d4e4ff] sm:text-base">
            Track the latest releases, engineering practices, and technology announcements from SwiftRise.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, x: -36, rotate: -2, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_24px_56px_rgba(5,16,38,0.42)] backdrop-blur-md"
          >
            <div className="relative h-72 sm:h-80 md:h-96">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#071836]/92 via-[#092658]/42 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
            </div>

            <div className="relative p-6 sm:p-7">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a8c9ff]">{featured.date}</p>
                <span className="rounded-full border border-white/30 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d5e7ff]">
                  {featured.category}
                </span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d6e5ff] sm:text-base">{featured.excerpt}</p>
              
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="relative rounded-3xl border border-white/18 bg-white/8 p-4 shadow-[0_20px_46px_rgba(5,16,38,0.34)] backdrop-blur-sm sm:p-5"
          >
            <div className="pointer-events-none absolute left-7 top-16 hidden h-[calc(100%-5rem)] w-px bg-linear-to-b from-[#7db2ff]/55 via-[#7db2ff]/25 to-transparent sm:block" />
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b6d4ff]">More Tech Headlines</p>
            </div>

            <div className="grid gap-4">
              {feed.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 26, rotate: 1.2, scale: 0.97 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 * index }}
                  className="group relative rounded-2xl border border-white/20 bg-[#0f2b5b]/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9fc2ff]/45 hover:bg-[#113468]/65"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a8c9ff]">{item.date}</p>
                    <span className="rounded-full border border-[#9fc2ff]/35 bg-[#9fc2ff]/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d9e9ff]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#cfe1ff]">{item.excerpt}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
