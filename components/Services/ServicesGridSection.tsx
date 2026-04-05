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

const unsplashImages = [
  "https://images.unsplash.com/photo-1647964185852-cdc3069aa0ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function ServicesGridSection() {
  return (
    <section className="animate-rise border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_68%,white_32%)] px-0 py-16 md:py-20">
      <div className="mx-auto w-[92vw] max-w-7xl">
        <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Services</p>
        <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
          Capabilities for every phase of growth.
        </h2>
        <div className="overflow-x-auto py-2 md:overflow-x-visible">
          <div className="flex w-max flex-row gap-4 md:w-full md:flex-row md:gap-8">
            {services.map((service, idx) => {
              return (
                <div
                  key={service.title}
                  className={
                    "relative mx-0 flex h-60 min-w-[260px] max-w-[260px] items-end overflow-hidden rounded-xl border border-[#e2e3e8] shadow-md transition-all duration-500 group md:mx-2 md:h-85 md:w-full md:min-w-45 md:max-w-45 hover:md:min-w-85 hover:md:max-w-85" +
                    (idx === services.length - 1 ? " bg-linear-to-t from-[#e2e3e8] to-transparent" : "")
                  }
                  style={{
                    backgroundImage: `url(${unsplashImages[idx % unsplashImages.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#232d4b]/90 to-transparent p-4 transition-transform duration-500 md:translate-y-full md:p-6 md:group-hover:translate-y-0">
                    <p className="mb-1 text-lg font-bold text-white">{service.title}</p>
                    <p className="text-sm text-white">{service.description}</p>
                  </div>
                  <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-lg font-bold tracking-wide text-white transition-opacity duration-300 group-hover:opacity-0 md:block">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
