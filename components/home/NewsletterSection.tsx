import NewsletterForm from "../NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="animate-rise relative overflow-hidden px-0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 " />
      <div className="pointer-events-none absolute -left-32 top-14 h-80 w-80 rounded-full bg-[#e4e9f8]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#dce8ff]/70 blur-3xl" />
      <div className="relative z-10 mx-auto w-[92vw] max-w-7xl">
        <div className="grid overflow-hidden rounded-4xl border border-[#d5dff2] bg-[#fdfdff]/95 shadow-[0_20px_65px_-35px_rgba(13,27,54,0.55)] md:grid-cols-[1.2fr_0.95fr]">
          <div className="relative px-7 py-10 sm:px-10 md:px-12 md:py-14 lg:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(120deg,transparent_0%,transparent_44%,rgba(29,78,216,0.08)_44.3%,rgba(29,78,216,0.08)_45.5%,transparent_45.8%,transparent_100%)]" />
            <p className="relative mb-4 inline-flex items-center rounded-full border border-[#c8d6f3] bg-white px-4 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#1d4ed8]">Tech Briefing</p>
            <h2 className="relative max-w-xl font-[--font-playfair-display] text-3xl font-bold leading-tight text-[#172546] sm:text-[2.2rem] md:text-[2.55rem]">Deep Tech Intelligence with a Practical Engineering Perspective</h2>
            <p className="relative mt-5 max-w-xl text-base leading-relaxed text-[#3f4d68] sm:text-lg">Our Tech Briefing delivers curated insights into emerging technologies, industry trends, and practical engineering applications. We bridge the gap between theoretical innovation and real-world deployment, ensuring that every insight is actionable, relevant, and aligned with business outcomes.</p>
             
            <figure className="relative mt-8 rounded-2xl border border-[#d4dced] bg-[#f8faff] px-5 py-5 text-[#33466a] sm:px-6">
              <blockquote className="text-[0.98rem] italic leading-relaxed sm:text-base">&ldquo;Our offerings are designed not just to solve problems—but to create intelligent, scalable ecosystems that drive long-term business success.&rdquo;</blockquote>
              <figcaption className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#5f7195]">Strategic technology insight</figcaption>
            </figure>
          </div>
          <div className="relative border-t border-[#d5dff2] bg-[linear-gradient(160deg,#172546_0%,#1f3a70_58%,#244a8f_100%)] px-7 py-10 text-white sm:px-10 md:border-l md:border-t-0 md:px-10 md:py-14 lg:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.32),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(255,255,255,0.2),transparent_40%)]" />
            <div className="relative">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#c9dbff]">Join The Tech List</p>
              <h3 className="mt-2 font-[--font-playfair-display] text-2xl font-bold leading-tight sm:text-[1.9rem]">Your monthly technology edge</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#e2ebff] sm:text-base">Share your email to receive focused technical analysis, architecture playbooks, and practical delivery patterns.</p>
              <div className="mt-7 rounded-2xl border border-white/20 bg-white/95 p-5 text-[#1a2c51] shadow-[0_14px_35px_-26px_rgba(0,0,0,0.85)] sm:p-6">
                <NewsletterForm />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#c8daff]">Privacy first. One-click unsubscribe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}