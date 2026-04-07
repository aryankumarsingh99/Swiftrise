"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    titleLeft: "Digital Engineering &",
    titleRight: "Product Development",
    description:
      "We design and develop high-performance, scalable applications tailored to your business needs. From concept to deployment, our solutions are built for reliability, flexibility, and long-term growth.",
  },
  {
    titleLeft: "Artificial Intelligence &",
    titleRight: "Machine Learning",
    description:
      "Leverage intelligent systems to automate processes, gain predictive insights, and enhance decision-making. We build AI-driven solutions that deliver real business value.",
  },
  {
    title: "Web Application Development",
    description:
      "Create fast, responsive, and secure web platforms with seamless user experiences and modern design standards.",
  },
  {
    title: "Mobile Application Development",
    description:
      "We build intuitive, high-performance mobile applications across platforms ensuring engagement, usability, and scalability.",
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Accelerate your digital transformation with scalable cloud infrastructure, CI/CD pipelines, and optimized deployment strategies.",
  },
  {
    title: "IoT & Smart Systems",
    description:
      "Develop connected ecosystems with real-time monitoring, automation, and intelligent data processing.",
  },
  {
     titleLeft: "Data Analytics & ",
    titleRight: " Business Intelligence ",
    description:
      "Transform data into actionable insights with advanced analytics, dashboards, and reporting systems.",
  },
  {
    titleLeft: "Security &",
    titleRight: "Performance Optimization",
    description:
      "Ensure your systems are secure, resilient, and optimized for peak performance with advanced security practices and monitoring.",
  },
];

const serviceApproach = [
  "Tailored Solutions for Every Business",
  "Scalable & Future-Ready Architecture",
  "Agile Development & Rapid Delivery",
  "Focus on Performance, Security & UX",
];

const closingStatement =
  "Our services are designed to not just meet your current needs but to future-proof your business with intelligent, scalable, and high-impact technology solutions.";

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
        <div className="mt-8 grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 lg:grid-cols-5 md:gap-8">
            {services.map((service, idx) => {
              return (
                <motion.div
                  key={service.title ?? `${service.titleLeft}-${service.titleRight}-${idx}`}
                  variants={cardMotion}
                  custom={idx}
                  className={
                    "relative mx-0 flex h-60 items-end overflow-hidden rounded-xl border border-[#e2e3e8] shadow-md transition-all duration-500 group md:h-85" +
                    (idx === services.length - 1 ? " bg-linear-to-t from-[#e2e3e8] to-transparent" : "")
                  }
                  style={{
                    backgroundImage: `url(${unsplashImages[idx % unsplashImages.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-[#232d4b]/90 to-transparent p-4 transition-transform duration-500 md:translate-y-full md:p-6 md:group-hover:translate-y-0">
                    {service.titleLeft && service.titleRight ? (
                      <div className="mb-1 flex flex-col gap-1">
                        <p className="text-lg font-bold text-white">{service.titleLeft}</p>
                        <p className="text-lg font-bold text-white">{service.titleRight}</p>
                      </div>
                    ) : (
                      <p className="mb-1 text-lg font-bold text-white">{service.title}</p>
                    )}
                    <p className="text-sm text-white">{service.description}</p>
                  </div>
                  {service.titleLeft && service.titleRight ? (
                    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-lg font-bold tracking-wide text-white transition-opacity duration-300 group-hover:opacity-0 md:flex flex-col gap-0 origin-center">
                      <span>{service.titleLeft}</span>
                      <span>{service.titleRight}</span>
                    </div>
                  ) : (
                    <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-lg font-bold tracking-wide text-white transition-opacity duration-300 group-hover:opacity-0 md:block">
                      {service.title}
                    </span>
                  )}
                </motion.div>
              );
            })}
        </div>

        <motion.div
          variants={introMotion}
          className="mt-12 overflow-hidden rounded-3xl border-3 border-[#113f67]  shadow-[0_18px_45px_-28px_rgba(38,86,165,0.55)]"
        >
          <div className="border-b border-[#dbe5f7] px-5 py-4 md:px-8 md:py-5">
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#49648f]">Service Blueprint</p>
            <h3 className="mt-1 text-xl font-(--font-playfair-display) text-[#11284d] md:text-3xl">Our Service Approach</h3>
          </div>

          <div className="grid gap-3 px-5 py-5 md:grid-cols-2 md:gap-4 md:px-8 md:py-7">
            {serviceApproach.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#d8e3f5] bg-white/80 px-4 py-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2563eb]" />
                <p className="text-sm font-medium leading-relaxed text-[#1d355e] md:text-base">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#dbe5f7] bg-[#113f67] px-5 py-5 md:px-8 md:py-6">
             <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#ffffff] md:text-base">{closingStatement}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
