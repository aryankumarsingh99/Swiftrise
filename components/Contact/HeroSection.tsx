import Image from "next/image";

export default function HeroSection() {
  const imageSet = {
    hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  };

  return (
    <section className="animate-rise relative isolate min-h-screen overflow-hidden text-white">
      <Image
        src={imageSet.hero}
        alt="Leadership team in strategic meeting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,56,0.44)_0%,rgba(6,32,72,0.78)_55%,rgba(5,20,44,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.16)_0%,transparent_34%),radial-gradient(circle_at_88%_72%,rgba(194,153,93,0.22)_0%,transparent_33%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_0.7px,transparent_0.7px)] bg-size-[20px_20px] opacity-25" />
      <div className="absolute left-8 right-8 top-20 hidden h-px bg-linear-to-r from-transparent via-white/40 to-transparent md:block" />

      <div className="relative mx-auto flex min-h-[92vh] w-[94vw] max-w-330 flex-col px-2 pb-10 pt-8 sm:px-4 md:pb-14 md:pt-12">
        <div className="mt-auto">
          <p className="mb-4 text-xs font-semibold tracking-[0.38em] text-[#e2c99d] sm:text-sm">CONTACT</p>
          <h1 className="max-w-[15ch] font-(--font-playfair-display) text-4xl leading-[1.05] text-[#fefaf0] sm:text-5xl md:text-6xl lg:text-7xl">
            Let us shape your next chapter.
          </h1>

          <div className="mt-8 rounded-2xl border border-white/24 bg-[#0f2748]/42 px-5 py-5 backdrop-blur-sm md:mt-12 md:px-7 md:py-6">
            <div className="grid gap-6 text-base leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
              <p className="max-w-[34ch]">
                Tell us where you are now and where you want to go. We will propose a focused roadmap with clear business value.
              </p>
              <p className="max-w-[36ch]">
                Our team will respond with practical steps and tailored solutions for your needs.
              </p>
              <a
                className="inline-flex items-center gap-2 self-end whitespace-nowrap rounded-full border border-[#e2c99d]/70 bg-[#e2c99d]/15 px-5 py-2 text-sm font-semibold tracking-[0.14em] text-[#f8ecd6] transition hover:-translate-y-px hover:bg-[#e2c99d]/25"
                href="mailto:hello@aurevia.com"
              >
                Email Us <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
