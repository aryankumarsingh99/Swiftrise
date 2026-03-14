import { stats } from "./data";

export default function StatsSection() {
  return (
    <section className="animate-rise pb-4 [animation-delay:80ms]" aria-label="Key company metrics">
      <div className="mx-auto grid w-[92vw] max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="rounded-[0.8rem] border border-[--line] bg-[--surface] px-3 py-4 text-center"
          >
            <p className="font-(--font-playfair-display) text-3xl">{item.value}</p>
            <p className="mt-1 text-sm text-[--ink-soft]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
