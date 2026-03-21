// import { services } from "./data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="animate-rise border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_68%,white_32%)] px-0 py-16 [animation-delay:160ms] md:py-20"
    >
      <div className="mx-auto w-[92vw] max-w-7xl">
        <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Services</p>
        <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
          Capabilities for every phase of growth.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[0.8rem] border border-[--line] bg-[--surface] p-5">
              <h3 className="font-(--font-playfair-display) text-xl">{service.title}</h3>
              <p className="mt-2 text-[--ink-soft]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
