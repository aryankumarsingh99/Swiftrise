"use client";

import { motion, useScroll, useTransform, type Transition } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const featuredItems = [
  {
    title: "SwiftRise Launches AI Engineering Pods Across 6 Delivery Hubs",
    summary:
      "The new pods combine product engineers, cloud architects, and QA automation specialists to accelerate global software delivery.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tag: "Engineering",
  },
  {
    title: "Platform Modernization Program Cuts Cloud Waste By 31%",
    summary:
      "Our FinOps and DevOps teams optimized workloads, reduced idle resources, and improved release reliability across client environments.",
    image:
      "https://images.unsplash.com/photo-1762330464006-46181dfe3381?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Cloud",
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

  const headerTransition: Transition = { duration: 0.65, ease: "easeOut" };

  const headerMotion = {
    initial: { opacity: 0, y: 36, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.35 },
    transition: headerTransition,
  };

  const cardMotion = (index: number) => ({
    initial: { opacity: 0, x: index === 0 ? -42 : 42, y: 30, rotate: index === 0 ? -1.2 : 1.2 },
    whileInView: { opacity: 1, x: 0, y: 0, rotate: 0 },
    viewport: { once: false, amount: 0.32 },
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: index * 0.08,
    } satisfies Transition,
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden px-0 py-14 sm:py-16 md:py-20"
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
            <h2 className="text-3xl font-semibold text-[#172849] sm:text-4xl">Featured Technology News</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5f7392] sm:text-base">
              Key updates from our engineering teams on product releases, platform upgrades, and scalable delivery initiatives.
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#cad8f6] bg-white px-5 py-2.5 text-sm font-semibold text-[#1d4ed8] shadow-[0_8px_18px_rgba(23,40,73,0.1)] transition hover:-translate-y-0.5 hover:bg-[#eef3ff]"
              href="#latest-news"
            >
              View all technology updates <span aria-hidden="true">→</span>
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
              className={`group relative overflow-hidden rounded-3xl border border-[#0c2d6c] shadow-[0_14px_34px_rgba(23,40,73,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(23,40,73,0.16)] ${
                index === 0 ? "" : "lg:self-start"
              }`}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 bg-linear-to-r from-[#1d4ed8]/0 via-[#1d4ed8]/55 to-[#1d4ed8]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className={`relative overflow-hidden ${index === 0 ? "h-96 sm:h-[32rem] lg:h-[36rem]" : "h-56 sm:h-64"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {index === 0 ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f44]/90 via-[#0f1f44]/40 to-transparent" />
                ) : null}
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
                    Talk to our tech team <span aria-hidden="true">→</span>
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
