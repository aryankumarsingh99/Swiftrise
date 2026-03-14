    import Navbar from "@/components/Navbar";
    import Image from "next/image";
    const portfolio = [
      {
        name: "Regal Square Redevelopment",
        category: "Commercial District",
        result: "32% faster handover with phased delivery strategy.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "NorthRiver Process Upgrade",
        category: "Industrial Facility",
        result: "22% productivity lift from operations modernization.",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Civic Hall Restoration",
        category: "Public Infrastructure",
        result: "Heritage integrity preserved while meeting modern code.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      },
    ];
        <section className="animate-rise px-0 py-16 [animation-delay:220ms] md:py-20">
          <div className="mx-auto w-[92vw] max-w-7xl">
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Portfolio</p>
            <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
              Signature work across industries and scales.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {portfolio.map((item) => (
                <article key={item.name} className="rounded-[0.8rem] border border-[--line] bg-[--surface] p-5">
                  <div className="mb-3 overflow-hidden rounded-lg border border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_74%,white_26%)]">
                    <img
                      src={item.image}
                      alt={`${item.name} project visual`}
                      width={520}
                      height={320}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[--ink-soft]">{item.category}</p>
                  <h3 className="mt-2 font-(--font-playfair-display) text-xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-[--ink-soft]">{item.result}</p>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center rounded-full border border-[--line] bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-[--ink] transition hover:bg-[--surface-soft]"
                href="/projects"
              >
                Open Full Portfolio
              </a>
            </div>
          </div>
        </section>
  const imageSet = {
    blogA: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    blogB: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    blogC: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  };

  const blogPosts = [
    {
      title: "Modernizing Legacy Plants Without Downtime",
      excerpt:
        "A phased framework for upgrading operations while protecting daily output and stakeholder confidence.",
      href: "/services",
      image: imageSet.blogA,
    },
    {
      title: "Design Principles for Long-Life Commercial Assets",
      excerpt:
        "How classic spatial planning and modern systems thinking create resilient business environments.",
      href: "/about",
      image: imageSet.blogB,
    },
    {
      title: "From Reporting to Decisions: Practical Project Data",
      excerpt:
        "Why concise operational dashboards outperform static reports in high-stakes project delivery.",
      href: "/projects",
      image: imageSet.blogC,
    },
  ];
export default function ProjectsPage() {
    const imageSet = {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    };
  const projects = [
    {
      name: "Regal Square Redevelopment",
      type: "Commercial District",
      result: "32% faster handover with phased execution planning",
    },
    {
      name: "NorthRiver Process Upgrade",
      type: "Industrial Facility",
      result: "22% productivity lift through systems modernization",
    },
    {
      name: "Civic Hall Restoration",
      type: "Public Infrastructure",
      result: "Preserved original heritage elements while meeting modern code",
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
            <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">PROJECTS</p>
            <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
              Signature work across industries and scales
            </h1>

            <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
              <div className="grid gap-5 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
                <p className="max-w-[34ch]">
                  From commercial districts to industrial facilities and public infrastructure, our portfolio demonstrates measurable impact and lasting value.
                </p>
                <p className="max-w-[36ch]">
                  Explore our approach to delivery, modernization, and transformation across diverse project types.
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
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Selected projects</p>
            <h1 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
              Delivery with context, not templates.
            </h1>
            <div className="mt-6 overflow-hidden rounded-[0.8rem] border border-[--line]">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="grid gap-3 border-t border-[--line] bg-[--surface] px-5 py-4 first:border-t-0 md:grid-cols-[1.2fr_1fr]"
                >
                  <div>
                    <h2 className="font-(--font-playfair-display) text-xl">{project.name}</h2>
                    <p className="mt-1 text-[--ink-soft]">{project.type}</p>
                  </div>
                  <p className="text-[--ink-soft]">{project.result}</p>
                </article>
              ))}
            </div>
          </div>
      </section>
    {/* ...existing code... */}
      <section className="animate-rise px-0 py-16 [animation-delay:340ms] md:py-20">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Blog</p>
              <h2 className="max-w-[18ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
                Perspectives from the field and boardroom.
              </h2>
            </div>
            <a className="text-sm font-semibold text-[--accent] hover:underline" href="/about">
              Visit Insights
            </a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-[0.8rem] border border-[--line] bg-[--surface] p-5">
                <div className="mb-3 overflow-hidden rounded-lg border border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_74%,white_26%)]">
                  <img
                    src={post.image}
                    alt={`${post.title} article visual`}
                    width={520}
                    height={320}
                    className="h-36 w-full object-cover"
                  />
                </div>
                <h3 className="font-(--font-playfair-display) text-xl leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm text-[--ink-soft]">{post.excerpt}</p>
                <a className="mt-4 inline-block text-sm font-semibold text-[--accent] hover:underline" href={post.href}>
                  Read article
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
