

'use client';
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const paraVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(10, 28, 50, 0.16)",
    transition: { duration: 0.24, ease: "easeOut" },
  },
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(10, 28, 50, 0.14)",
    transition: { duration: 0.24, ease: "easeOut" },
  },
};

const impactVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FoundationSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.22, once: true });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f4f1ea] py-20 md:py-28"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.p
          className="mb-4 text-xs font-semibold tracking-[0.34em] text-[#4a6078] sm:text-sm"
          variants={headingVariants}
        >
          OUR FOUNDATION
        </motion.p>
        <motion.h2
          className="mb-9 max-w-4xl font-serif text-3xl leading-tight text-[#0f243d] sm:text-5xl md:text-6xl"
          variants={headingVariants}
        >
          Precision-Driven Solutions<br />For A Secure Tomorrow
        </motion.h2>

        <motion.div
          variants={paraVariants}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#1b3f62]/20 bg-[#fffdf8]/80 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-[#3f5874] backdrop-blur-sm sm:text-xs"
        >
          <span className="h-2 w-2 rounded-full bg-[#c9a66b]" />
          ENGINEERED FOR STABILITY
        </motion.div>

        <motion.div
          className="mb-12 grid gap-8 md:grid-cols-2"
          variants={paraVariants}
        >
          <motion.p className="text-[15px] leading-8 text-[#283a52] md:text-base" variants={paraVariants}>
            We create integrated protection solutions that enhance stability, reduce uncertainty, and support long-term confidence for individuals, families, and modern businesses.
          </motion.p>
          <motion.p className="text-[15px] leading-8 text-[#283a52] md:text-base" variants={paraVariants}>
            Our approach delivers clarity and measurable value by simplifying complexity, strengthening resilience, and providing future-ready strategies that empower clients’ progress.
          </motion.p>
        </motion.div>

        <div className="relative mb-14 grid gap-7 md:grid-cols-2 md:gap-8">
           <motion.div
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1d3f63]/20 bg-[#12395c] p-8 text-[#f6f3ee] shadow-[0_16px_40px_rgba(10,28,50,0.2)]"
            variants={cardLeftVariants}
            whileHover="hover"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-4xl bg-[#0a2742]/45" />
            <div className="absolute inset-x-8 top-0 h-0.75 bg-linear-to-r from-[#e7d7b3]/20 via-[#e7d7b3] to-[#e7d7b3]/20" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c7a2]/70 bg-[#0d2f4d] text-sm font-semibold tracking-[0.24em] text-[#e7d7b3]">
              V
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold tracking-wide text-[#f9f7f3] sm:text-2xl">
              Vision
            </h3>
            <p className="text-sm leading-7 text-[#e7ecf3] sm:text-base">
              We aim to build a future where individuals and businesses operate with complete assurance, supported by dependable, adaptable protection systems designed to strengthen stability, reduce vulnerabilities, and deliver long-term security in every condition.
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-[#dbe4f1]/20 pt-5 text-[11px] tracking-[0.16em] text-[#d9e3ef] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e7d7b3]" />
              TRUSTED LONG-TERM FRAMEWORK
            </div>
          </motion.div>

          <motion.div
            className="group relative flex h-full flex-col rounded-2xl border border-[#1d3f63]/20 bg-[#fffdf8] p-8 shadow-[0_16px_36px_rgba(13,35,59,0.1)]"
            variants={cardRightVariants}
            whileHover="hover"
          >
            <div className="absolute inset-x-8 top-0 h-0.75 bg-linear-to-r from-[#12395c]/10 via-[#12395c]/45 to-[#12395c]/10" />
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a5a]/30 bg-[#f3ede2] text-sm font-semibold tracking-[0.24em] text-[#12395c]">
              M
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold tracking-wide text-[#0f243d] sm:text-2xl">
              Mission
            </h3>
            <p className="text-sm leading-7 text-[#2b3d54] sm:text-base">
              Our mission is to deliver integrated insurance and financial solutions that simplify complexity, minimize risk, and empower clients with clarity, transparency, and measurable value through consistently reliable service and forward-focused strategic guidance.
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-[#1d3f63]/15 pt-5 text-[11px] tracking-[0.16em] text-[#45617e] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12395c]" />
              CONSISTENT CLIENT-CENTRIC DELIVERY
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-3 text-xs font-semibold tracking-[0.34em] text-[#4a6078] sm:text-sm"
          variants={headingVariants}
        >
          OUR IMPACT
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-2xl border border-[#1d3f63]/15 bg-[#e9ecef] shadow-[0_20px_48px_rgba(10,28,50,0.16)]"
          variants={impactVariants}
        >
          <div className="relative h-80 w-full sm:h-120 md:h-144">
            <Image
              src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team impact"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#091a2d]/85 via-[#091a2d]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 px-5 py-6 text-[#f2eee6] sm:flex-row sm:gap-10 sm:px-10 sm:py-9">
              <div className="sm:w-1/2 mb-2 sm:mb-0">
                We deliver consistent project outcomes through structured processes and attentive oversight, ensuring developments progress smoothly and meet every expectation with reliable, measurable results.
              </div>
              <div className="sm:w-1/2">
                Our approach reduces risk, improves efficiency, and strengthens client confidence, creating long-term value across every stage of the built environment lifecycle.
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none">
          
        <div
          style={{
            position: "absolute",
            right: "-140px",
            top: "8%",
            width: "420px",
            height: "420px",
            background: "#12395c",
            borderRadius: "50%",
            filter: "blur(110px)",
            opacity: 0.16,
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "-180px",
            bottom: "2%",
            width: "420px",
            height: "420px",
            background: "#c8a670",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: 0.12,
            zIndex: 1,
          }}
        />

        <svg width="100%" height="100%" className="absolute left-0 top-0" style={{ opacity: 0.19, zIndex: 2 }}>
          <defs>
            <pattern id="foundationGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.6" fill="#12395c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundationGrid)" />
        </svg>

        <svg width="100%" height="100%" className="absolute left-0 top-0" style={{ opacity: 0.24, zIndex: 2 }}>
          <defs>
            <pattern id="foundationLines" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 110 L110 0" stroke="#12395c" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundationLines)" />
        </svg>
      </div>
    </section>
  );
}
