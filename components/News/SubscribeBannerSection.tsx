export default function SubscribeBannerSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#081735] via-[#0d2450] to-[#123067] px-0 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-[#7db2ff]/20 blur-3xl" />
        <div className="absolute -right-12 bottom-4 h-56 w-56 rounded-full bg-[#38bdf8]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(255,255,255,0.18)_0%,transparent_34%),radial-gradient(circle_at_84%_74%,rgba(56,189,248,0.22)_0%,transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[28px_28px] opacity-20" />

        <svg viewBox="0 0 1200 260" aria-hidden="true" className="absolute -top-2 left-0 w-full opacity-35" preserveAspectRatio="none">
          <path d="M0,168 C240,116 390,228 610,180 C830,132 990,116 1200,150" fill="none" stroke="#7db2ff" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M0,208 C250,156 420,270 646,222 C872,174 1038,162 1200,192" fill="none" stroke="#67e8f9" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 9" />
        </svg>
      </div>

      <div className="mx-auto w-[94vw] max-w-330">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 px-6 py-8 text-white shadow-[0_24px_54px_rgba(8,23,53,0.38)] backdrop-blur-md sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -left-6 bottom-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />

          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b8d6ff]">
                Newsletter
              </p>
              <h3 className="mt-4 max-w-[22ch] text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Get News Delivered To Your Inbox
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#dbe9ff] sm:text-base">
                Receive monthly updates on milestones, announcements, and thought leadership.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe9ff]">
                  Monthly Brief
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe9ff]">
                  Industry Insights
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dbe9ff]">
                  Product Updates
                </span>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-3 md:min-w-52">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5  hover:bg-white/20"
              >
                Stay Connected <span aria-hidden="true">↗</span>
              </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
