export default function AboutSection() {
  return (
    <section id="about" className="animate-rise px-0 py-16 [animation-delay:120ms] md:py-20">
      <div className="mx-auto grid w-[92vw] max-w-7xl gap-4 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">About us</p>
          <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
            Rooted in craftsmanship, driven by measurable progress.
          </h2>
        </div>
        <p className="text-[1.02rem] text-[--ink-soft]">
          Since 2002, Aurevia Group has advised and delivered projects that demand both precision and perspective. Our
          approach blends rigorous planning standards with adaptive methods, helping clients move from strategy to
          execution with confidence.
        </p>
      </div>
    </section>
  );
}
