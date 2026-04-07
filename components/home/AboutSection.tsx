"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const inView = useInView(sectionRef, { amount: 0.2, once: false });
  const aboutParagraphs = [
    "At Swiftrise Solution Pvt. Ltd., we are more than a technology provider. We are your strategic partner in navigating the digital future. We specialize in engineering intelligent, scalable, and high-performance solutions that empower businesses to innovate, adapt, and lead in a rapidly evolving landscape.",
    "Our expertise lies at the intersection of advanced digital engineering, artificial intelligence, and cloud-native technologies. We design systems that are not only efficient and secure, but also adaptive and future-ready.",
    "With a strong focus on precision, performance, and user experience, we help organizations transform ideas into impactful digital ecosystems that drive growth and long-term success."
  ];

  useEffect(() => {
    if (inView) {
      textControls.start({
        opacity: 1,
        x: 0,
        scale: 1.08,
        transition: {
          type: "spring",
          duration: 1.1,
          bounce: 0.45,
          delay: 0.05
        }
      });
      imageControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.32,
          delay: 0.18
        }
      });
    } else {
      textControls.start({ opacity: 0, x: -80, scale: 0.92, transition: { duration: 0.5 } });
      imageControls.start({ opacity: 0, y: 80, scale: 0.92, transition: { duration: 0.5 } });
    }
  }, [inView, textControls, imageControls]);

  return (
    <section ref={sectionRef} className="animate-rise relative bg-[#113f67] overflow-hidden px-0 pb-12 pt-8 text-[#ffffff] [animation-delay:76ms] md:pb-14 md:pt-10">
      <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 bg-[radial-gradient(rgba(23,34,56,0.10)_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-35" />
      <div className="pointer-events-none absolute right-0 top-0 h-42 w-58 bg-[radial-gradient(rgba(23,34,56,0.10)_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-35" />
      <svg
        className="pointer-events-none absolute -right-22 top-4 h-100 w-100 opacity-35"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M18 42H140L222 124V242" stroke="#dfe9ff" strokeOpacity="0.42" strokeWidth="3" />
        <path d="M18 86H116L174 144V242" stroke="#9cb9e6" strokeOpacity="0.48" strokeWidth="3" />
        <path d="M42 18V136L126 220H242" stroke="#dfe9ff" strokeOpacity="0.34" strokeWidth="2.5" strokeDasharray="6 7" />
        <circle cx="140" cy="42" r="7" fill="#dfe9ff" fillOpacity="0.45" />
        <circle cx="174" cy="144" r="6" fill="#9cb9e6" fillOpacity="0.48" />
        <circle cx="126" cy="220" r="6" fill="#dfe9ff" fillOpacity="0.38" />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 bottom-0 h-40 w-80 opacity-55"
        viewBox="0 0 420 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 158L76 82L146 118L216 48L286 92L360 24L420 68" stroke="#dfe9ff" strokeOpacity="0.44" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 166L92 114L166 146L236 84L312 128L388 76" stroke="#9cb9e6" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />
        <path d="M336 18L420 68" stroke="#dfe9ff" strokeOpacity="0.34" strokeWidth="2.5" />
        <path d="M286 92L360 24" stroke="#dfe9ff" strokeOpacity="0.34" strokeWidth="2.5" />
      </svg>
      <div className="mx-auto w-[95vw] max-w-330">
        <div className="grid gap-8 md:grid-cols-[1fr_1.25fr] md:gap-14">
          <motion.div
            className="order-2 flex justify-center md:order-1 md:justify-start"
            initial={{ opacity: 0, x: -80, scale: 0.92 }}
            animate={textControls}
            whileHover={{ scale: 1.12, rotate: -1 }}
          >
            <h2 className="max-w-full text-center text-4xl font-medium leading-[1.08] sm:max-w-[13ch] sm:text-5xl md:text-left md:text-[4.25rem]">
              Who We Are as Your Digital Innovation Partner
            </h2>
          </motion.div>
        </div>
        <motion.div
          className="relative mt-8 overflow-hidden border-6 border-[#d1d5de] bg-[#d9dee9] md:mt-10"
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={imageControls}
          whileHover={{ scale: 1.04 }}
        >
          <Image
            src={"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="Partners celebrating a successful strategic decision"
            width={1800}
            height={980}
            className="h-[62vw] max-h-155 min-h-70 w-full object-cover sm:h-[58vw] md:h-[52vw] md:min-h-75"
          />
          <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)] md:block" />
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)] md:block" />
           <div className="absolute inset-0 hidden items-center justify-end p-8 pointer-events-none md:flex">
            <div className="max-w-[44ch]">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={paragraph.slice(0, 24)} className={`text-[1.08rem] leading-relaxed text-[#ffffff]${index === 0 ? "" : " mt-4"}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="md:hidden border-t border-[#d1d5de]/35 bg-[#08264c] px-5 py-6">
            <div className="mx-auto max-w-[68ch]">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`} className={`text-[0.98rem] leading-7 tracking-[0.01em] text-[#f7fbff]${index === 0 ? "" : " mt-4"}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


