import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function ServicesPage() {
    const imageSet = {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    };
  const services = [
    {
      title: "Architecture & Planning",
      description:
        "Master planning, heritage-sensitive architecture, and future-ready spaces that balance character with performance.",
    },
    {
      title: "Engineering & Execution",
      description:
        "Civil, mechanical, and electrical execution managed through disciplined timelines, clear documentation, and quality controls.",
    },
    {
      title: "Industrial Modernization",
      description:
        "Production process improvements, automation readiness, and retrofits that increase output without disrupting continuity.",
    },
    {
      title: "Digital Transformation",
      description:
        "Data-enabled operations, management dashboards, and practical AI integrations built around measurable business outcomes.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Aurevia combines old-school professionalism with modern delivery discipline. Our board trusted their reporting from week one.",
      author: "Anita Rao",
      role: "Director, Halden Properties",
    },
    {
      quote:
        "They redesigned our operations without creating disruption on the floor. The practical impact was immediate and measurable.",
      author: "Marcus Bell",
      role: "Plant Head, NorthRiver Industries",
    },
  ];

  return (
    <>
      <section className="animate-rise relative isolate min-h-[92vh] overflow-hidden text-white">
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
            <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">SERVICES</p>
            <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
              Capabilities for every phase of growth
            </h1>

            <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
              <div className="grid gap-5 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
                <p className="max-w-[34ch]">
                  From architecture and planning to engineering, modernization, and digital transformation, our services are designed for measurable impact.
                </p>
                <p className="max-w-[36ch]">
                  Discover how we help clients move from vision to execution with confidence and clarity.
                </p>
                <a
                  className="inline-flex items-center gap-2 self-end whitespace-nowrap border-b border-white/65 pb-1 text-[1.85rem] font-medium text-white transition hover:border-white"
                  href="/contact"
                >
                  Get In Touch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="animate-rise border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_68%,white_32%)] px-0 py-16 md:py-20"
      >
          <div className="mx-auto w-[92vw] max-w-7xl">
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Services</p>
            <h1 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
              Capabilities for every phase of growth.
            </h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="rounded-[0.8rem] border border-[--line] bg-[--surface] p-5">
                  <h2 className="font-(--font-playfair-display) text-xl">{service.title}</h2>
                  <p className="mt-2 text-[--ink-soft]">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
      </section>

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
    </>
  );
}
