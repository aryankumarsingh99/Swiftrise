export default function ProcessSection() {
  const processSteps = [
    {
      id: "01",
      title: "Discover",
      description: "Discover priorities and constraints with leadership teams.",
      extra:
        "We run stakeholder interviews, define success metrics, and map operational realities before proposing any change.",
    },
    {
      id: "02",
      title: "Design",
      description: "Design a phased blueprint with budget and risk clarity.",
      extra:
        "The roadmap includes delivery milestones, ownership models, and decision checkpoints to keep execution predictable.",
    },
    {
      id: "03",
      title: "Execute",
      description: "Execute with specialist teams and transparent reporting.",
      extra:
        "Cross-functional experts deliver in sprints, with weekly visibility on progress, dependencies, and risk controls.",
    },
    {
      id: "04",
      title: "Optimize",
      description: "Optimize after launch with measurable improvement cycles.",
      extra:
        "Post-launch reviews convert performance data into iterative refinements that improve ROI and long-term resilience.",
    },
  ];

  return (
    <section className="animate-rise relative overflow-hidden bg-white px-0 py-18 [animation-delay:200ms] sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
  
        <svg
          viewBox="0 0 1200 320"
          aria-hidden="true"
          className="absolute -top-9 left-0 w-full opacity-70"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C220,80 360,220 560,170 C760,120 920,70 1200,130"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M0,210 C200,130 390,260 610,200 C830,140 960,110 1200,170"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="5 10"
          />
        </svg>

        <svg
          viewBox="0 0 220 220"
          aria-hidden="true"
          className="absolute left-6 top-14 h-40 w-40 opacity-35"
        >
          <circle cx="110" cy="110" r="82" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
          <circle cx="110" cy="110" r="58" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6 7" />
          <circle cx="110" cy="110" r="5" fill="#1d4ed8" />
        </svg>

        <svg
          viewBox="0 0 260 200"
          aria-hidden="true"
          className="absolute bottom-10 right-8 h-86 w-52 opacity-35"
        >
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
            <h2 className="max-w-[16ch] font-(--font-playfair-display) text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              Process Architecture Built For Modern Delivery
            </h2>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-[#d6e3ff] sm:text-base">
              We structure execution into focused phases that keep teams aligned, reduce delivery risk, and turn
              strategy into measurable impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe8ff]">
                Strategic
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe8ff]">
                Adaptive
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe8ff]">
                Outcome-led
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-white/20 text-xs font-bold tracking-[0.08em] text-white">
                4X
              </span>
              <p className="text-sm font-medium text-[#dbe8ff]">Execution framework aligned from discovery to optimization</p>
            </div>
          </div>

          <ol className="relative grid gap-4 rounded-3xl border border-[#dbe4fb] bg-linear-to-b from-white/95 to-[#f7faff] p-4 shadow-[0_24px_56px_rgba(13,27,54,0.11)] sm:gap-5 sm:p-5">
            <div className="pointer-events-none absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-linear-to-b from-[#2d63ff]/45 via-[#2d63ff]/20 to-transparent sm:block" />
            {processSteps.map((step, index) => (
              <li
                key={step.id}
                className="group relative rounded-2xl border border-[#e4e9f7] bg-[#fbfdff] p-5 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.012] hover:border-[#bad0ff] hover:shadow-[0_20px_42px_rgba(30,78,177,0.16)] sm:pl-16"
              >
                <span
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl ${
                    index % 2 === 0
                      ? "bg-linear-to-r from-[#2d63ff]/0 via-[#2d63ff]/45 to-[#2d63ff]/0"
                      : "bg-linear-to-r from-[#0ea5e9]/0 via-[#0ea5e9]/45 to-[#0ea5e9]/0"
                  } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <span className="absolute left-5 top-5 hidden h-8 min-w-8 items-center justify-center rounded-full bg-[#e9f0ff] px-2 text-[11px] font-bold tracking-[0.08em] text-[#1d4ed8] sm:inline-flex">
                  {step.id}
                </span>

                <div className="pointer-events-none absolute right-4 top-3 text-5xl font-semibold leading-none text-[#d8e4ff]/65 transition-all duration-300 group-hover:scale-105 group-hover:text-[#bfd2ff]">
                  {step.id}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7f8faa] sm:hidden">
                      Step {step.id}
                    </p>
                    <h3 className="text-lg font-semibold text-[#172849] sm:text-xl">{step.title}</h3>
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
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}