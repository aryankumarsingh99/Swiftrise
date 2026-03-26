"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const inView = useInView(sectionRef, { amount: 0.2, once: false });

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
      <div className="mx-auto w-[95vw] max-w-330">
        <div className="grid gap-8 md:grid-cols-[1fr_1.25fr] md:gap-14">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -80, scale: 0.92 }}
            animate={textControls}
            whileHover={{ scale: 1.12, rotate: -1 }}
          >
            <h2 className="max-w-[13ch] text-4xl font-medium leading-[1.08] sm:text-5xl md:text-[4.25rem]">
              Who We Are As Your Risk &amp; Finance Partner
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
            src={"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="Partners celebrating a successful strategic decision"
            width={1800}
            height={980}
            className="h-[52vw] max-h-155  min-h-75 w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_0.65px,transparent_0.65px)] bg-size-[18px_18px] opacity-30" />
          <div className="absolute inset-0 flex items-center justify-end p-8 pointer-events-none">
            <div className="max-w-[44ch]  ">
              <p className="text-[1.08rem] leading-relaxed text-[#ffffff]/95">
                Our role is more than providing policies or products. We work alongside you as an advisor, translating
                complex risks into clear choices and designing protection and investment strategies aligned with your goals,
                governance, and responsibilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


