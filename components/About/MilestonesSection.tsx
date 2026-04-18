"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function MilestonesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    setScrollDirection(latest > previous ? "down" : "up");
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.06]);
  const ribbonY = useTransform(scrollYProgress, [0, 1], [50, -40]);

  const revealVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      y: direction === "down" ? 34 : -34,
    }),
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const milestones = [
    {
      year: "2026",
      title: "Foundation Year",
      description: "Aurevia Group launched with a clear focus on precision, reliability, and long-term client trust.",
    },
    {
      year: "2026",
      title: "50+ Projects Delivered",
      description: "Our portfolio expanded across multiple sectors with consistent delivery and measurable outcomes.",
    },
    {
      year: "2026",
      title: "Specialist Teams Built",
      description: "Dedicated expert teams were formed to provide tailored solutions for diverse operational needs.",
    },
    {
      year: "Today",
      title: "97% Client Retention",
      description: "Long-standing partnerships and repeat collaborations reflect sustained value creation.",
    },
  ];

  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "15", label: "Specialist Teams" },
    { value: "97%", label: "Client Retention" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="animate-rise relative overflow-hidden bg-white px-0 py-18 md:py-24"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        
        <motion.svg
          viewBox="0 0 1200 320"
          aria-hidden="true"
          className="absolute -top-4 left-0 w-full opacity-50"
          preserveAspectRatio="none"
          style={{ y: ribbonY }}
        >
          <path d="M0,180 C240,120 380,250 610,190 C840,130 1000,108 1200,146" fill="none" stroke="#6366f1" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M0,228 C220,170 410,300 635,240 C860,180 1030,168 1200,198" fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 9" />
        </motion.svg>

        <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute right-10 top-16 h-24 w-24 opacity-40">
          <rect x="42" y="42" width="116" height="116" rx="18" fill="none" stroke="#8b5cf6" strokeWidth="1.2" transform="rotate(8 100 100)" />
          <rect x="64" y="64" width="72" height="72" rx="10" fill="none" stroke="#3b82f6" strokeWidth="1" transform="rotate(-8 100 100)" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto w-[92vw] max-w-6xl">
        <motion.div
          className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
          custom={scrollDirection}
          variants={revealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="animate-fadeInUp">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#4f46e5]">Our Growth</p>
            <h2 className="text-4xl font-semibold leading-tight text-[#172849] sm:text-5xl md:text-6xl">A Chronicle Of Growth</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#5d7191] sm:text-base">
              Every phase of our journey marks a strategic leap in capability, scale, and long-term partnership value.
            </p>
          </div>
          <motion.div
            className="animate-fadeInUp rounded-2xl border-4 border-[#041643] bg-white p-4 shadow-[0_16px_36px_rgba(23,40,73,0.1)] backdrop-blur-sm sm:p-5"
            custom={scrollDirection}
            variants={revealVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">Legacy Track</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4f6384]">From foundation to high-retention partnerships, our milestones reflect sustained excellence in delivery.</p>
          </motion.div>
        </motion.div>

        <ol className="relative grid gap-6 sm:gap-6">
          <div className="pointer-events-none absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-[5px] -translate-x-1/2 bg-linear-to-b from-[#041643]/65 via-[#12418d] to-transparent lg:block" />
          {milestones.map((milestone, index) => (
            <motion.li
              key={milestone.year}
              custom={scrollDirection}
              variants={revealVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
              className={`group relative grid gap-4 rounded-2xl border-4 border-[#041643] bg-white p-5 shadow-[0_14px_34px_rgba(13,27,54,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(59,130,246,0.16)] sm:p-6 lg:w-[48%] ${
                index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
              }`}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-linear-to-r from-[#6366f1]/0 via-[#6366f1]/50 to-[#6366f1]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#eef2ff] px-2 text-[11px] font-bold tracking-[0.08em] text-[#4338ca]">
                  {index + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f46e5]">{milestone.year}</p>
              </div>

              <h3 className="text-lg font-semibold text-[#172849] sm:text-xl">{milestone.title}</h3>
              <p className="text-sm leading-relaxed text-[#566a89] sm:text-base">{milestone.description}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={scrollDirection}
              variants={revealVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.45 }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
              className="group rounded-xl border border-[#dbe6ff] bg-white/80 px-4 py-5 text-center shadow-[0_10px_24px_rgba(13,27,54,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b9cdfd] hover:shadow-[0_14px_34px_rgba(59,130,246,0.14)]"
            >
              <p className="text-2xl font-bold text-[#4338ca] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-[#5f7494] sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}