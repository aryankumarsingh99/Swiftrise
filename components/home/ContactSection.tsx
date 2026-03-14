export default function ContactSection() {
  return (
    <section
      id="contact"
      className="animate-rise bg-[linear-gradient(155deg,#fbf7ef_0%,#e8f3f2_45%,#f2ebde_100%)] px-0 py-16 [animation-delay:320ms] md:py-20"
    >
      <div className="mx-auto grid w-[92vw] max-w-7xl items-start gap-5 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Contact</p>
          <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
            Let us shape your next chapter.
          </h2>
          <p className="mt-3 max-w-2xl text-[--ink-soft]">
            Tell us where you are now and where you want to go. We will propose a focused roadmap with clear business
            value.
          </p>
        </div>
        <form className="grid gap-3 rounded-[1.2rem] border border-[--line] bg-[--surface] p-5 shadow-[0_18px_36px_rgba(31,42,45,0.08)]">
          <label className="grid gap-1.5 text-sm text-[--ink-soft]">
            Name
            <input
              className="rounded-xl border border-[--line] bg-white px-3 py-2.5 text-[--ink] outline-2 outline-transparent transition focus:outline-[color-mix(in_srgb,var(--accent)_35%,transparent_65%)]"
              type="text"
              name="name"
              placeholder="Your full name"
            />
          </label>
          <label className="grid gap-1.5 text-sm text-[--ink-soft]">
            Email
            <input
              className="rounded-xl border border-[--line] bg-white px-3 py-2.5 text-[--ink] outline-2 outline-transparent transition focus:outline-[color-mix(in_srgb,var(--accent)_35%,transparent_65%)]"
              type="email"
              name="email"
              placeholder="you@company.com"
            />
          </label>
          <label className="grid gap-1.5 text-sm text-[--ink-soft]">
            Project brief
            <textarea
              className="rounded-xl border border-[--line] bg-white px-3 py-2.5 text-[--ink] outline-2 outline-transparent transition focus:outline-[color-mix(in_srgb,var(--accent)_35%,transparent_65%)]"
              name="message"
              rows={4}
              placeholder="Share your goals, timeline, and priorities."
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[--accent] px-5 py-3 text-[0.95rem] font-semibold text-[#f3fffd] transition hover:-translate-y-px hover:bg-[--accent-strong]"
          >
            Request Proposal
          </button>
        </form>
      </div>
    </section>
  );
}
