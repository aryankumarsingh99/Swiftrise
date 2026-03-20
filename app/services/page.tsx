import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function ServicesPage() {
    const imageSet = {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    };
  const services = [
    {
      title: "Mobile Engineering",
      description:
        "Master planning, heritage-sensitive architecture, and future-ready spaces that balance character with performance.",
    },
    {
      title: "AI / ML Integration",
      description:
        "Civil, mechanical, and electrical execution managed through disciplined timelines, clear documentation, and quality controls.",
    },
    {
      title: "IOT & Digital Innovation",
      description:
        "Production process improvements, automation readiness, and retrofits that increase output without disrupting continuity.",
    },
    {
      title: "Cyber Security",
      description:
        "Data-enabled operations, management dashboards, and practical AI integrations built around measurable business outcomes.",
    },
    {
      title: "Data Analytics & Big Data",
      description:
        "Comprehensive maintenance, safety protocols, and operational support for seamless facility performance.",
    },
     {
      title: "Blockchain & Web3 Solutions",
      description:
        "Comprehensive maintenance, safety protocols, and operational support for seamless facility performance.",
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
          src={"https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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
            <div className="flex flex-row gap-8 py-2 relative justify-start">
              {/* Cards with vertical title overlays */}
              <div className="flex gap-4">
                {services.map((service, idx) => {
                  const unsplashImages = [
                    "https://images.unsplash.com/photo-1647964185852-cdc3069aa0ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                  ];
                  return (
                    <div
                      key={service.title}
                      className={
                        `relative rounded-xl shadow-md border border-[#e2e3e8] mx-2 h-85 overflow-hidden flex items-end group transition-all duration-500 min-w-45 max-w-45 hover:min-w-85 hover:max-w-85` +
                        (idx === services.length - 1 ? ' bg-linear-to-t from-[#e2e3e8] to-transparent' : '')
                      }
                      style={{
                        backgroundImage: `url(${unsplashImages[idx % unsplashImages.length]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Vertical text overlay for all cards, hidden on hover */}
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold tracking-wide -rotate-90 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-0">
                        {service.title}
                      </span>
                      {/* Sliding content from bottom on hover */}
                      <div className={
                        `absolute left-0 bottom-0 w-full bg-linear-to-t from-[#232d4b]/80 to-transparent p-6 transition-transform duration-500 translate-y-full group-hover:translate-y-0` +
                        (idx === services.length - 1 ? ' group-hover:bg-linear-to-t group-hover:from-[#232d4b]/80 group-hover:to-transparent' : '')
                      }>
                        <p className="text-white text-lg font-bold mb-1">{service.title}</p>
                        <p className="text-white text-sm">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
