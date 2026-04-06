import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="animate-rise relative isolate min-h-[100vh] overflow-hidden text-white">
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
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
