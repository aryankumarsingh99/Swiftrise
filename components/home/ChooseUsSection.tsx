export default function ChooseUsSection({ choosePoints, IconBadge }: { choosePoints: any[]; IconBadge: any }) {
  return (
    <section className="animate-rise border-y border-[--line] bg-[--surface] px-0 py-16 [animation-delay:180ms] md:py-20">
      <div className="mx-auto w-[92vw] max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div>
            <p className="mb-2 text-[0.85rem] uppercase tracking-[0.14em] text-[--accent] font-bold">Why Choose Us</p>
            <h2 className="max-w-[20ch] font-(--font-playfair-display) text-4xl md:text-5xl font-extrabold text-[#232d4b] drop-shadow-sm">Certainty in Complex Environments</h2>
            <p className="mt-4 text-lg text-[--ink-soft] max-w-[38ch]">We combine classic accountability with modern delivery tools, ensuring your protection and growth are always in focus.</p>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80" alt="Why Choose Us" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {choosePoints.map((point: any) => (
            <article key={point.title} className="rounded-2xl border border-[--line] bg-white px-6 py-6 text-[--ink-soft] shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="mb-3 inline-flex size-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,white_88%)] text-[--accent] text-2xl shadow">
                <IconBadge kind={point.icon} />
              </div>
              <h3 className="font-(--font-playfair-display) text-lg text-[--ink] font-bold mb-1">{point.title}</h3>
              <p className="mt-1 text-sm text-center">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
