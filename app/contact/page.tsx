import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function ContactPage() {
    const imageSet = {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    };
  return (
    <>
      <section className="animate-rise relative isolate min-h-[100vh] overflow-hidden text-white">
        <Image
          src={imageSet.hero}
          alt="Leadership team in strategic meeting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_0.65px,transparent_0.65px)] bg-size-[18px_18px] opacity-30" />

         

        <div className="relative mx-auto flex min-h-[92vh] w-[94vw] max-w-330 flex-col px-2 pb-10 pt-6 sm:px-4 md:pb-14 md:pt-8">
          <div className="mt-auto">
            <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">CONTACT</p>
            <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
              Let us shape your next chapter.
            </h1>

            <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
              <div className="grid gap-5 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
                <p className="max-w-[34ch]">
                  Tell us where you are now and where you want to go. We will propose a focused roadmap with clear business value.
                </p>
                <p className="max-w-[36ch]">
                  Our team will respond with practical steps and tailored solutions for your needs.
                </p>
                <a
                  className="inline-flex items-center gap-2 self-end whitespace-nowrap border-b border-white/65 pb-1 text-[1.85rem] font-medium text-white transition hover:border-white"
                  href="mailto:hello@aurevia.com"
                >
                  Email Us <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="animate-rise bg-[linear-gradient(155deg,#fbf7ef_0%,#e8f3f2_45%,#f2ebde_100%)] px-0 py-16 md:py-20"
      >
        <div className="mx-auto grid w-[92vw] max-w-7xl items-start gap-5 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Contact</p>
            <h1 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
              Let us shape your next chapter.
            </h1>
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
                className="inline-flex items-center justify-center rounded-full bg-[--accent] px-5 py-3 text-[0.95rem] font-semibold text-white transition hover:-translate-y-px hover:bg-[--accent-strong]"
              >
                Request Proposal
              </button>
            </form>
          </div>
      </section>
    </>
  );
}
