import Image from "next/image";

const updates = [
  {
    date: "Apr 02, 2026",
    category: "Research",
    title: "Quarterly Industry Brief Released",
    excerpt: "Our research team published insights on operational resilience trends for 2026.",
    image:
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    date: "Mar 24, 2026",
    category: "Partnership",
    title: "New Partnership Announced",
    excerpt: "A strategic collaboration expands our service footprint and delivery speed.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Mar 10, 2026",
    category: "Leadership",
    title: "Leadership Forum Highlights",
    excerpt: "Executives shared practical frameworks for sustainable and scalable growth.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function LatestNewsSection() {
  const [featured, ...feed] = updates;

  return (
    <section id="latest-news" className="relative overflow-hidden bg-linear-to-b from-[#06122b] via-[#0b1c42] to-[#132d63] px-0 py-14 text-white sm:py-16 md:py-20">
       

      <div className="relative z-10 mx-auto w-[94vw] max-w-330">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9fc2ff]">Newsroom</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Latest Updates</h2>
          </div>
          <a href="/contact" className="text-sm font-semibold text-[#b7d3ff] transition hover:text-white hover:underline">
            Media inquiries
          </a>
        </div>

        <div className="mb-8">
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d4e4ff] sm:text-base">
            Follow our recent announcements, industry insights, and company developments.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_24px_56px_rgba(5,16,38,0.42)] backdrop-blur-md">
            <div className="relative h-72 sm:h-80 md:h-96">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#071836]/92 via-[#092658]/42 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
            </div>

            <div className="relative p-6 sm:p-7">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a8c9ff]">{featured.date}</p>
                <span className="rounded-full border border-white/30 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d5e7ff]">
                  {featured.category}
                </span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d6e5ff] sm:text-base">{featured.excerpt}</p>
              <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b7d3ff] transition hover:gap-3 hover:text-white">
                Read full story <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <div className="relative rounded-3xl border border-white/18 bg-white/8 p-4 shadow-[0_20px_46px_rgba(5,16,38,0.34)] backdrop-blur-sm sm:p-5">
            <div className="pointer-events-none absolute left-7 top-16 hidden h-[calc(100%-5rem)] w-px bg-linear-to-b from-[#7db2ff]/55 via-[#7db2ff]/25 to-transparent sm:block" />
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b6d4ff]">More Headlines</p>
            </div>

            <div className="grid gap-4">
              {feed.map((item) => (
                <article
                  key={item.title}
                  className="group relative rounded-2xl border border-white/20 bg-[#0f2b5b]/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9fc2ff]/45 hover:bg-[#113468]/65"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a8c9ff]">{item.date}</p>
                    <span className="rounded-full border border-[#9fc2ff]/35 bg-[#9fc2ff]/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d9e9ff]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#cfe1ff]">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
