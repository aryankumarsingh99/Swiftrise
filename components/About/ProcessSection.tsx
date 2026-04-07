"use client";

import { useState } from "react";

export default function ProcessSection() {
  const processSteps = [
    {
      id: "01",
      title: "Discover",
      description: "Analyze requirements, define scope, and align on objectives.",
      extra:
        "We begin by understanding your business objectives, challenges, and vision, laying a strong strategic base for solution design.",
    },
    {
      id: "02",
      title: "Design",
      description: "Architect scalable solutions with intuitive user experiences.",
      extra:
        "Our approach is structured, agile, and outcome-driven so ideas become high-performance digital solutions with reduced risk and measurable impact.",
    },
    {
      id: "03",
      title: "Develop",
      description: "Build robust, secure, and high-performance systems.",
      extra:
        "We work with continuous iteration and flexible delivery, enabling rapid responsiveness to evolving requirements.",
    },
    {
      id: "04",
      title: "Deploy",
      description: "Seamlessly integrate and launch across environments.",
      extra:
        "Optimized workflows and modern engineering practices enable faster deployment without compromising quality or security.",
    },
    {
      id: "05",
      title: "Optimize",
      description: "Continuously monitor, refine, and scale for maximum efficiency.",
      extra:
        "From strategy to execution, our process is engineered to deliver intelligent solutions that scale with your business.",
    },
  ];

  const corePrinciples = [
    "Innovation-Led Thinking",
    "Agile & Scalable Architecture",
    "User-Centric Design",
    "Performance & Security First",
    "Continuous Improvement",
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processSteps[activeStepIndex];

  return (
    <section className="animate-rise relative overflow-hidden bg-white px-0 py-18 [animation-delay:200ms] sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 320"
          aria-hidden="true"
          className="absolute -top-9 left-0 w-full opacity-70"
          preserveAspectRatio="none"
        >
          <path d="M0,160 C220,80 360,220 560,170 C760,120 920,70 1200,130" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M0,210 C200,130 390,260 610,200 C830,140 960,110 1200,170" fill="none" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 10" />
        </svg>

        <svg viewBox="0 0 220 220" aria-hidden="true" className="absolute right-6 top-14 h-40 w-40 opacity-35">
          <circle cx="110" cy="110" r="82" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
          <circle cx="110" cy="110" r="58" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6 7" />
          <circle cx="110" cy="110" r="5" fill="#1d4ed8" />
        </svg>

        <svg viewBox="0 0 260 200" aria-hidden="true" className="absolute bottom-10 left-8 h-86 w-52 opacity-35">
          <polygon points="30,100 80,35 160,45 220,105 178,162 88,170" fill="none" stroke="#2563eb" strokeWidth="1.1" />
          <polygon points="58,103 95,62 150,70 185,108 157,143 98,147" fill="none" stroke="#06b6d4" strokeWidth="1" />
          <line x1="80" y1="35" x2="95" y2="62" stroke="#60a5fa" strokeWidth="1" />
          <line x1="160" y1="45" x2="150" y2="70" stroke="#60a5fa" strokeWidth="1" />
          <line x1="178" y1="162" x2="157" y2="143" stroke="#60a5fa" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-[92vw] max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.4fr] lg:gap-12">
          <div className="animate-fadeInUp relative overflow-hidden rounded-3xl border border-[#d9e3ff] bg-linear-to-br from-[#0f1f44] via-[#152c5f] to-[#1b3d81] p-6 text-white shadow-[0_30px_70px_rgba(15,31,68,0.34)] sm:p-8">
            <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/20" />
            <div className="pointer-events-none absolute -left-8 bottom-10 h-24 w-24 rounded-full bg-white/10 blur-xl" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9fc2ff]">How we work</p>
            <h2 className="max-w-[16ch] font-[--font-playfair-display] text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              Intelligent Execution Framework for Scalable Delivery
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-[#d6e3ff] sm:text-base">
              We follow a structured, agile, and outcome-driven approach that transforms ideas into high-performance digital solutions. Our process ensures seamless collaboration, reduced risk, and measurable business impact at every stage.
            </p>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#cfe0ff]">Our approach</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{activeStep.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#dce8ff]">{activeStep.extra}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {corePrinciples.map((principle) => (
                <span key={principle} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe8ff]">
                  {principle}
                </span>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-[#dbe4fb] bg-linear-to-b from-white/95 to-[#f7faff] p-4 shadow-[0_24px_56px_rgba(13,27,54,0.11)] sm:p-5">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f8faa]">Our execution lifecycle</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#172849]">{activeStep.id}. {activeStep.title}</h3>
              </div>
              <p className="text-sm font-semibold text-[#4f6287]">{String(activeStepIndex + 1).padStart(2, "0")} / 05</p>
            </div>

            <div className="relative grid gap-4 rounded-2xl border border-[#e4e9f7] bg-[#fbfdff] p-5 sm:pl-16">
              <div className="pointer-events-none absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-linear-to-b from-[#2d63ff]/45 via-[#2d63ff]/20 to-transparent sm:block" />

              {processSteps.map((step, index) => {
                const isActive = index === activeStepIndex;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStepIndex(index)}
                    className="group relative rounded-2xl border border-[#e4e9f7] bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:scale-[1.012] hover:border-[#bad0ff] hover:shadow-[0_20px_42px_rgba(30,78,177,0.16)]"
                  >
                    <span
                      className={`pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl ${
                        index % 2 === 0
                          ? "bg-linear-to-r from-[#2d63ff]/0 via-[#2d63ff]/45 to-[#2d63ff]/0"
                          : "bg-linear-to-r from-[#0ea5e9]/0 via-[#0ea5e9]/45 to-[#0ea5e9]/0"
                      } opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isActive ? "opacity-100" : ""}`}
                    />
                    <div className="pointer-events-none absolute right-4 top-3 text-5xl font-semibold leading-none text-[#d8e4ff]/65 transition-all duration-300 group-hover:scale-105 group-hover:text-[#bfd2ff]">
                      {step.id}
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7f8faa] sm:hidden">
                          Step {step.id}
                        </p>
                        <h4 className="text-lg font-semibold text-[#172849] sm:text-xl">{step.title}</h4>
                        <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-[#546580] sm:text-base">{step.description}</p>

                        <div className="mt-3 grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                          <div className="overflow-hidden">
                            <p className="border-t border-[#dee7fa] pt-3 text-sm leading-relaxed text-[#445a7d] opacity-0 transition-all duration-500 group-hover:opacity-100 sm:text-[15px]">
                              {step.extra}
                            </p>
                          </div>
                        </div>
                      </div>

                      <span
                        className="mt-1 inline-flex size-2 shrink-0 rounded-full bg-[#2d63ff]/65 opacity-75 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-[#dce5f8] bg-[#f8fbff] px-5 py-4 text-sm leading-relaxed text-[#445a7d]">
              <strong className="text-[#172849]">Core principles:</strong> Innovation-Led Thinking, Agile &amp; Scalable Architecture, User-Centric Design, Performance &amp; Security First, Continuous Improvement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}