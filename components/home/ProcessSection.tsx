// import { processSteps } from "./data";

export default function ProcessSection() {
  return (
    <section className="animate-rise px-0 py-16 [animation-delay:200ms] md:py-20">
      <div className="mx-auto grid w-[92vw] max-w-7xl gap-5 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">How we work</p>
          <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
            A reliable process from first briefing to long-term impact.
          </h2>
        </div>
        <ol className="grid gap-4 pl-5 text-[--ink-soft]">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
