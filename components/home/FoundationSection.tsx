

'use client';
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect } from "react";

// Animation variants for more complex, layered effects
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92, rotate: -6 },
  show: { opacity: 1, y: 0, scale: 1.04, rotate: 0, transition: { type: "spring", duration: 1.1, bounce: 0.5 } },
};

const paraVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 1, bounce: 0.35 } },
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -80, scale: 0.92, rotate: -8 },
  show: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { type: "spring", duration: 1.1, bounce: 0.45 } },
  hover: { scale: 1.07, rotate: -3, boxShadow: "0 8px 32px 0 rgba(17,63,103,0.18)" },
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 80, scale: 0.92, rotate: 8 },
  show: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { type: "spring", duration: 1.1, bounce: 0.45 } },
  hover: { scale: 1.07, rotate: 3, boxShadow: "0 8px 32px 0 rgba(17,63,103,0.18)" },
};

const impactVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.92, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", duration: 1.2, bounce: 0.38 } },
};

export default function FoundationSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: false });
  return (
    <section ref={sectionRef} className="w-full min-h-[90vh]  bg-white py-20 md:py-32 relative overflow-hidden">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.p
          className="text-sm sm:text-base tracking-widest text-white mb-3"
          variants={headingVariants}
        >OUR FOUNDATION</motion.p>
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-10 leading-tight"
          variants={headingVariants}
        >
          Precision-Driven Solutions<br />For A Secure Tomorrow
        </motion.h2>
        <motion.div
          className="grid gap-10 md:grid-cols-3 mb-12"
          variants={paraVariants}
        >
          <motion.p className="text-white text-base md:col-span-1" variants={paraVariants}>
            We create integrated protection solutions that enhance stability, reduce uncertainty, and support long-term confidence for individuals, families, and modern businesses.
          </motion.p>
          <motion.p className="text-white text-base md:col-span-1" variants={paraVariants}>
            Our approach delivers clarity and measurable value by simplifying complexity, strengthening resilience, and providing future-ready strategies that empower clients’ progress.
          </motion.p>
        </motion.div>

        <div className="grid gap-8  md:grid-cols-2 mb-14">
          <motion.div
            className="relative rounded-2xl p-8 flex flex-col gap-3 bg-[#113f67] shadow-md animated-border"
            variants={cardLeftVariants}
            whileHover="hover"
          >
            <span className="text-3xl mb-2">✔️</span>
            <h3 className="font-semibold text-white text-lg sm:text-2xl mb-2">VISION</h3>
            <p className="text-white text-base">We aim to build a future where individuals and businesses operate with complete assurance, supported by dependable, adaptable protection systems designed to strengthen stability, reduce vulnerabilities, and deliver long-term security in every condition.</p>
          </motion.div>

          {/* Animated border styles */}
          <style jsx>{`
            .animated-border {
              border: 4px solid transparent;
            }
            .animated-border::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 1rem;
              padding: 0.25rem;
              background: linear-gradient(270deg, #ffffff, #113f67, #ffffff, #113f67);
              background-size: 400% 400%;
              z-index: 1;
              animation: borderMove 2s linear infinite;
              -webkit-mask:
                linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
            }
            @keyframes borderMove {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
          `}</style>

          <motion.div
            className="border-4 border-[#113f67] rounded-2xl p-8 flex flex-col gap-3 bg-white shadow-md"
            variants={cardRightVariants}
            whileHover="hover"
          >
            <span className="text-3xl mb-2">⚙️</span>
            <h3 className="font-semibold text-[#113f67] text-lg sm:text-2xl mb-2">MISSION</h3>
            <p className="text-black text-base">Our mission is to deliver integrated insurance and financial solutions that simplify complexity, minimize risk, and empower clients with clarity, transparency, and measurable value through consistently reliable service and forward-focused strategic guidance.</p>
          </motion.div>
        </div>
        <motion.div
          className="mb-3 text-sm sm:text-base tracking-widest text-white"
          variants={headingVariants}
        >OUR IMPACT</motion.div>
        <motion.div
          className="rounded-2xl overflow-hidden bg-gray-100"
          variants={impactVariants}
        >
          <div className="relative w-full border-6 border-r-4 border-[#ffffff] h-80 xs:h-96 sm:h-[32rem] md:h-[38rem]">
            <Image
              src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team impact"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-5 py-6 sm:px-10 sm:py-10 flex flex-col gap-3 sm:flex-row sm:gap-10 text-white text-base sm:text-lg">
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
      {/* Modern decorated background: bold diagonal split, blurred accent, and dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Bold diagonal split */}
        <svg width="100%" height="100%" className="absolute left-0 top-0" style={{zIndex: 0}}>
          <defs>
            <linearGradient id="diagSplit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#113f67" />
              <stop offset="55%" stopColor="#113f67" />
              <stop offset="55%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagSplit)" />
        </svg>
        {/* Large blurred accent circle */}
        <div style={{
          position: 'absolute',
          left: '-120px',
          top: '30%',
          width: '420px',
          height: '420px',
          background: '#113f67',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.18,
          zIndex: 1,
        }} />
        {/* Subtle dot grid overlay */}
        <svg width="100%" height="100%" className="absolute left-0 top-0" style={{opacity: 0.2, zIndex: 2}}>
          <defs>
            <pattern id="dotGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="2.8" fill="#113f67" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>
    </section>
  );
}
