import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="animate-rise relative isolate min-h-[92vh] overflow-hidden text-white">
      <Image
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
        alt="Leadership team in strategic meeting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,84,0.38)_0%,rgba(4,27,82,0.72)_58%,rgba(2,21,70,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.14)_0%,transparent_35%),radial-gradient(circle_at_88%_68%,rgba(88,131,255,0.15)_0%,transparent_33%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_0.65px,transparent_0.65px)] bg-size-[18px_18px] opacity-30" />

      <div className="relative mx-auto flex min-h-[92vh] w-[94vw] max-w-330 flex-col px-2 pb-10 pt-6 sm:px-4 md:pb-14 md:pt-8">
        <header className="flex items-center justify-between gap-4 text-[0.98rem] text-white/90">
          <Link className="text-5xl font-semibold tracking-tight text-white" href="/" aria-label="ECI home">
            ECI.
          </Link>
          <nav className="hidden items-center gap-8 text-[1.05rem] md:flex" aria-label="Primary navigation">
            <Link className="transition hover:text-white" href="/about">
              About Us
            </Link>
            <Link className="transition hover:text-white" href="/services">
              Service
            </Link>
            <Link className="transition hover:text-white" href="/projects">
              Team
            </Link>
            <Link className="transition hover:text-white" href="/projects">
              News
            </Link>
            <Link className="transition hover:text-white" href="/contact">
              Contact
            </Link>
          </nav>
        </header>

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
                We bring together disciplined risk management, tailored protection, and long-term investment thinking under
                one integrated approach.
              </p>
              <Link
                className="inline-flex items-center gap-2 self-end whitespace-nowrap border-b border-white/65 pb-1 text-[1.85rem] font-medium text-white transition hover:border-white"
                href="/services"
              >
                Explore Our Services <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
