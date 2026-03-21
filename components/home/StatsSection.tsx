"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, label: "Years of Experience", suffix: "+" },
  { value: 180, label: "Projects Delivered", suffix: "+" },
  { value: 11, label: "Specialist Teams", suffix: "" },
  { value: 97, label: "Client Retention Rate", suffix: "%" },
];

type UseCountUpOptions = {
  target: number;
  duration?: number;
  start: boolean;
};

function useCountUp({ target, duration = 2500, start }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (!start) return;
    const startVal = 0;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * (target - startVal) + startVal));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      }
    }
    ref.current = requestAnimationFrame(animate);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, duration, start]);
  return count;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || shouldStart) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldStart]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#ffffff] border-[#dbe6f7] overflow-hidden">
      {/* Decorative blurred gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-linear-to-br from-[#5a83ff]/40 to-[#232d4b]/10 blur-3xl opacity-60 z-0" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-linear-to-tr from-[#232d4b]/20 to-[#5a83ff]/30 blur-2xl opacity-50 z-0" />
      <div className="relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold font-serif text-transparent bg-clip-text bg-linear-to-r from-[#232d4b] via-[#5a83ff] to-[#232d4b] mb-3 tracking-tight drop-shadow-lg">Our Impact in Numbers</h2>
          <p className="text-[#3a4a6b] text-xl font-light italic max-w-xl mx-auto">We deliver measurable results and long-term value for every client, year after year. Our legacy is built on trust, discipline, and innovation.</p>
        </div>
        <div className="mx-auto grid w-[92vw] max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, idx) => {
            const count = useCountUp({ target: item.value, start: shouldStart, duration: 8000 });
            return (
              <article
                key={item.label}
                className="relative rounded-3xl border border-[#5a83ff]/30 bg-white/60 backdrop-blur-xl px-8 py-12 text-center shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center group overflow-hidden"
                style={{ boxShadow: "0 8px 32px 0 rgba(90,131,255,0.12)" }}
              >
                {/* Animated blue accent bar */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-linear-to-r from-[#5a83ff] via-[#232d4b] to-[#5a83ff] rounded-b-xl opacity-80 animate-pulse" />
                <p className="font-serif text-6xl md:text-7xl font-extrabold text-[#232d4b] mb-2 group-hover:text-[#5a83ff] transition-colors duration-300 drop-shadow-lg">
                  {count}
                  <span className="text-4xl align-top ml-1">{item.suffix}</span>
                </p>
                <p className="mt-2 text-lg text-[#3a4a6b] font-semibold tracking-wide uppercase letter-spacing-[0.08em] drop-shadow-sm">{item.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
