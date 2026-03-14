import { testimonials } from "./data";

export default function TestimonialsSection() {
  return (
    <section className="animate-rise px-0 py-16 [animation-delay:280ms] md:py-20">
      <div className="mx-auto w-[92vw] max-w-7xl">
        <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Client voices</p>
        <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
          Partnerships built on performance and trust.
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="m-0 rounded-[0.8rem] border border-[--line] bg-[--surface] p-5"
            >
              <p className="text-[--ink-soft]">{item.quote}</p>
              <footer className="mt-4 grid gap-0.5">
                <strong>{item.author}</strong>
                <span className="text-sm text-[--ink-soft]">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
