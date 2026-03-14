import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function AboutPage() {
    const imageSet = {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    };
  const stats = [
    { value: "24+", label: "Years of Experience" },
    { value: "180+", label: "Projects Delivered" },
    { value: "11", label: "Specialist Teams" },
    { value: "97%", label: "Client Retention Rate" },
  ];

  const processSteps = [
    "Discover priorities and constraints with leadership teams.",
    "Design a phased blueprint with budget and risk clarity.",
    "Execute with specialist teams and transparent reporting.",
    "Optimize after launch with measurable improvement cycles.",
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
            <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">ABOUT ECI</p>
            <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
              A Global Partner in Risk, Insurance &amp; Financial Security
            </h1>

            <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
              <div className="grid gap-5 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
                <p className="max-w-[34ch]">
                  ECI corporate helps businesses and families protect what matters most through disciplined risk management,
                  insurance, and investment solutions.
                </p>
                <p className="max-w-[36ch]">
                  We bring together disciplined risk management, tailored protection, and long-term investment thinking
                  under one integrated approach.
                </p>
                <a
                  className="inline-flex items-center gap-2 self-end whitespace-nowrap border-b border-white/65 pb-1 text-[1.85rem] font-medium text-white transition hover:border-white"
                  href="/services"
                >
                  Explore Our Services <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-rise px-0 py-16 md:py-20">
        <div className="mx-auto grid w-[92vw] max-w-7xl gap-4 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">About us</p>
            <h1 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
              Rooted in craftsmanship, driven by measurable progress.
            </h1>
          </div>
          <p className="text-[1.02rem] text-[--ink-soft]">
            Since 2002, Aurevia Group has advised and delivered projects that demand both precision and perspective.
            Our approach blends rigorous planning standards with adaptive methods, helping clients move from strategy to
            execution with confidence.
          </p>
        </div>
      </section>

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
    </>
  );
}
