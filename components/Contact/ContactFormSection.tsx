export default function ContactFormSection() {
  return (
    <section className="animate-rise relative overflow-hidden bg-white px-0 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#163b60]/9 blur-[105px]" />
        <div className="absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-[#e2c99d]/24 blur-[115px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#163b60]/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-[92vw] max-w-7xl rounded-[1.8rem] p-4  backdrop-blur-sm sm:p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[0.88fr_1.12fr]">
          <aside className="rounded-[1.35rem] border-4 border-[#113f67] p-6 md:p-7">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#4a637d]">Advisory</p>
            <h2 className="max-w-[16ch] font-(--font-playfair-display) text-3xl leading-tight text-[#132c46] md:text-[2.65rem]">
              A Contact Experience Built For Decision Makers
            </h2>
            <p className="mt-4 leading-7 text-[#4d657d]">
              This conversation is where strategic clarity begins. Share your priorities and we will return a tailored plan with milestones, ownership, and expected outcomes.
            </p>

            <div className="mt-7 grid gap-3">
              <div className="rounded-xl border border-[#163b60]/13 bg-white/65 px-4 py-3 text-sm text-[#2b4862]">
                Discovery call and scope definition
              </div>
              <div className="rounded-xl border border-[#163b60]/13 bg-white/65 px-4 py-3 text-sm text-[#2b4862]">
                Architecture of execution roadmap
              </div>
              <div className="rounded-xl border border-[#163b60]/13 bg-white/65 px-4 py-3 text-sm text-[#2b4862]">
                Delivery governance and reporting cadence
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border border-[#163b60]/13 bg-white/70 px-2 py-3">
                <p className="text-[10px] tracking-[0.14em] text-[#4f6780]">INITIAL</p>
                <p className="mt-1 text-sm font-semibold text-[#1a3652]">24h</p>
              </div>
              <div className="rounded-lg border border-[#163b60]/13 bg-white/70 px-2 py-3">
                <p className="text-[10px] tracking-[0.14em] text-[#4f6780]">PROPOSAL</p>
                <p className="mt-1 text-sm font-semibold text-[#1a3652]">72h</p>
              </div>
              <div className="rounded-lg border border-[#163b60]/13 bg-white/70 px-2 py-3">
                <p className="text-[10px] tracking-[0.14em] text-[#4f6780]">START</p>
                <p className="mt-1 text-sm font-semibold text-[#1a3652]">1 Week</p>
              </div>
            </div>
          </aside>

          <form className="grid gap-4 rounded-[1.35rem] border-4 border-[#163b60] p-6 shadow-[0_20px_42px_rgba(22,43,62,0.12)] md:p-7">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-3 border-b border-[#163b60]/10 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4b657d]">Project Inquiry</p>
              <span className="rounded-full border border-[#163b60]/18 bg-[#113f67] px-3 py-1 text-[11px] font-medium text-[#ffffff]">
                Priority response in 24 hours
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[#496179]">
                Full Name
                <input
                  className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#496179]">
                Email
                <input
                  className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-[#496179]">
              Company
              <input
                className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                type="text"
                name="company"
                placeholder="Your company or organization"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#496179]">
              Project brief
              <textarea
                className="rounded-xl border border-[#163b60]/15 bg-white px-3 py-3 text-[#183652] outline-2 outline-transparent transition placeholder:text-[#8ca0b3] focus:border-[#163b60]/34 focus:outline-[#163b60]/20"
                name="message"
                rows={6}
                placeholder="Share your goals, expected timeline, available resources, and the challenges you want to solve."
              />
            </label>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs tracking-[0.12em] text-[#5e778e]">By submitting this form, you agree to be contacted by our advisory team.</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#163b60] to-[#12395c] px-6 py-3 text-[0.95rem] font-semibold tracking-[0.12em] text-[#f8ecd6] transition hover:-translate-y-px hover:from-[#1b4f7a] hover:to-[#15466f]"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
