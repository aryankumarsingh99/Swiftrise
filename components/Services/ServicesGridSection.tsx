"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    title: "Mobile Engineering",
    description:
      "Master planning, heritage-sensitive architecture, and future-ready spaces that balance character with performance.",
  },
  {
    title: "AI / ML Integration",
    description:
      "Civil, mechanical, and electrical execution managed through disciplined timelines, clear documentation, and quality controls.",
  },
  {
    title: "IOT & Digital Innovation",
    description:
      "Production process improvements, automation readiness, and retrofits that increase output without disrupting continuity.",
  },
  {
    title: "Cyber Security",
    description:
      "Data-enabled operations, management dashboards, and practical AI integrations built around measurable business outcomes.",
  },
  {
    title: "Data Analytics & Big Data",
    description:
      "Comprehensive maintenance, safety protocols, and operational support for seamless facility performance.",
  },
  {
    title: "Blockchain & Web3 Solutions",
    description:
      "Comprehensive maintenance, safety protocols, and operational support for seamless facility performance.",
  },
];

const unsplashImages = [
  "https://images.unsplash.com/photo-1647964185852-cdc3069aa0ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const introMotion: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const cardMotion: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: index * 0.08,
    },
  }),
};

export default function ServicesGridSection() {
  return (
    <motion.section
      className="animate-rise relative isolate overflow-hidden border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_68%,white_32%)] px-0 py-16 md:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg viewBox="0 0 1200 420" aria-hidden="true" className="absolute left-0 top-0 h-full w-full opacity-45" preserveAspectRatio="none">
          <defs>
            <linearGradient id="services-flow-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7cb5ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#4d8cff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#4fd7ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="services-flow-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
              <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,134 C206,74 368,210 574,152 C780,94 1006,106 1200,146" fill="none" stroke="url(#services-flow-1)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0,198 C214,140 400,264 616,214 C832,164 1028,176 1200,220" fill="none" stroke="url(#services-flow-2)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 10" />
          <path d="M0,262 C180,232 382,340 612,294 C842,248 1038,268 1200,302" fill="none" stroke="url(#services-flow-1)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 12" />

          <g opacity="0.5">
            <circle cx="190" cy="102" r="6" fill="none" stroke="#4d8cff" strokeWidth="1.2" />
            <circle cx="520" cy="250" r="8" fill="none" stroke="#3b82f6" strokeWidth="1.2" />
            <circle cx="880" cy="126" r="7" fill="none" stroke="#22d3ee" strokeWidth="1.2" />
            <circle cx="1060" cy="284" r="5" fill="none" stroke="#67e8f9" strokeWidth="1.2" />
          </g>

          <g opacity="0.35" stroke="#5b7fb1" strokeWidth="1">
            <path d="M190 102L520 250" fill="none" />
            <path d="M520 250L880 126" fill="none" />
            <path d="M880 126L1060 284" fill="none" />
          </g>
        </svg>

         
      </div>

      <div className="relative z-10 mx-auto w-[92vw] max-w-7xl">
        <motion.p variants={introMotion} className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">
          Technology Services
        </motion.p>
        <motion.h2 variants={introMotion} className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
          Technology capabilities for every stage of digital growth.
        </motion.h2>
        <motion.p variants={introMotion} className="mt-4 max-w-3xl text-sm leading-relaxed text-[--ink-soft] md:text-base">
          We partner with startups and enterprises to design, build, and scale reliable digital products across mobile,
          AI, cloud, cybersecurity, data, and Web3 ecosystems.
        </motion.p>
        <div className="overflow-x-auto py-2 md:overflow-x-visible">
          <div className="flex w-max flex-row gap-4 md:w-full md:flex-row md:gap-8">
            {services.map((service, idx) => {
              return (
                <motion.div
                  key={service.title}
                  variants={cardMotion}
                  custom={idx}
                  className={
                    "relative mx-0 flex h-60 min-w-[260px] max-w-[260px] items-end overflow-hidden rounded-xl border border-[#e2e3e8] shadow-md transition-all duration-500 group md:mx-2 md:h-85 md:w-full md:min-w-45 md:max-w-45 hover:md:min-w-85 hover:md:max-w-85" +
                    (idx === services.length - 1 ? " bg-linear-to-t from-[#e2e3e8] to-transparent" : "")
                  }
                  style={{
                    backgroundImage: `url(${unsplashImages[idx % unsplashImages.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#232d4b]/90 to-transparent p-4 transition-transform duration-500 md:translate-y-full md:p-6 md:group-hover:translate-y-0">
                    <p className="mb-1 text-lg font-bold text-white">{service.title}</p>
                    <p className="text-sm text-white">{service.description}</p>
                  </div>
                  <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-lg font-bold tracking-wide text-white transition-opacity duration-300 group-hover:opacity-0 md:block">
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
