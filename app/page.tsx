import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import Navbar from "@/components/Navbar";

function IconBadge({ kind }: { kind: "draft" | "gear" | "factory" | "chart" | "shield" | "team" | "target" | "time" }) {
  const base = "size-5";

  if (kind === "draft") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 16l5-11 5 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "gear") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M12 8.6a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M19 12a6.9 6.9 0 00-.1-1.2l2-1.6-2-3.4-2.5 1a7 7 0 00-2.1-1.2L14 3h-4l-.3 2.6a7 7 0 00-2.1 1.2l-2.5-1-2 3.4 2 1.6A7.2 7.2 0 005 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.5-1a7 7 0 002.1 1.2L10 21h4l.3-2.6a7 7 0 002.1-1.2l2.5 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "factory") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 20V9l6 3V9l6 3V6h2v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "chart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 16v-4M12 16V8M17 16v-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.6-2.8 7.9-7 10-4.2-2.1-7-5.4-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M8 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 19a4 4 0 018 0M12 19a4 4 0 018 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  const imageSet = {
    hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    partner: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
    journey: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
    about: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    team1: "https://images.unsplash.com/photo-1519340333755-afc1f9e8d8c7?auto=format&fit=crop&w=800&q=80",
    team2: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
    team3: "https://images.unsplash.com/photo-1508214757746-8b2b0a6a3c4a?auto=format&fit=crop&w=800&q=80",
    team4: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    team5: "https://images.unsplash.com/photo-1517841905240-472c7ca8c0b8?auto=format&fit=crop&w=800&q=80",
    portfolioA: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    portfolioB: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    portfolioC: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    blogA: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    blogB: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    blogC: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  };

  const whatsNew = [
    {
      icon: "draft" as const,
      title: "AI Monitoring Dashboard Launched",
      description:
        "A new operations intelligence layer now gives leadership real-time visibility across project milestones and plant performance.",
      tag: "Product Update",
    },
    {
      icon: "gear" as const,
      title: "New Automation Partnerships",
      description:
        "We expanded our implementation ecosystem with automation specialists to speed up digital retrofit deployments.",
      tag: "Partnership",
    },
    {
      icon: "factory" as const,
      title: "NorthRiver Phase-II Completed",
      description:
        "The second modernization phase went live with zero downtime and measurable throughput improvements within four weeks.",
      tag: "Case Update",
    },
    {
      icon: "chart" as const,
      title: "Executive Briefing Series",
      description:
        "Monthly strategy sessions now share practical frameworks for scaling infrastructure and operations across regions.",
      tag: "Leadership",
    },
  ];

  const choosePoints = [
    {
      icon: "team" as const,
      title: "Integrated Teams",
      text: "Cross-functional specialists from concept to commissioning.",
    },
    {
      icon: "shield" as const,
      title: "Trusted Governance",
      text: "Classic accountability standards with modern delivery tools.",
    },
    {
      icon: "target" as const,
      title: "Outcome Focus",
      text: "Planning frameworks tied to measurable business value.",
    },
    {
      icon: "time" as const,
      title: "Long-Term Partnership",
      text: "Support beyond handover with optimization and scaling guidance.",
    },
  ];


  const stats = [
    { value: "24+", label: "Years of Experience" },
    { value: "180+", label: "Projects Delivered" },
    { value: "11", label: "Specialist Teams" },
    { value: "97%", label: "Client Retention Rate" },
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
            <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">ABOUT SWIFTWRISE</p>
            <h1 className="max-w-[18ch] text-4xl font-medium leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
              Building the Future with Code, AI, &amp; and Innovation
            </h1>

            <div className="mt-8 border-t border-white/35 pt-5 md:mt-12 md:pt-7">
              <div className="grid gap-5 text-[1.08rem] leading-relaxed text-white/90 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
                <p className="max-w-[34ch]">
                  SwiftWrise helps businesses and families protect what matters most through disciplined risk management,
                  insurance, and investment solutions.
                </p>
                <p className="max-w-[36ch]">
                  We bring together disciplined risk management, tailored protection, and long-term investment thinking
                  under one integrated approach.
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

      <section className="animate-rise border-y border-[--line] bg-[--surface] px-0 py-8 [animation-delay:80ms]">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <p className="mb-5 text-center text-[0.68rem] uppercase tracking-[0.18em] text-[--ink-soft]">
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "Halden Properties",
              "NorthRiver Industries",
              "CivicWorks Authority",
              "Meridian Capital",
              "Stratos Infrastructure",
              "Kelvin Group",
            ].map((name) => (
              <span
                key={name}
                className="font-(--font-playfair-display) text-base text-[--ink-soft] opacity-60 transition hover:opacity-100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-rise bg-[#e8e8ea] px-0 py-9 text-[#111523] [animation-delay:60ms] md:py-12">
        <div className="mx-auto w-[95vw] max-w-330">
          <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14">
            <h2 className="max-w-[13ch] text-4xl font-medium leading-[1.08] sm:text-5xl md:text-[4.25rem]">
              Who We Are As Your Risk &amp; Finance Partner
            </h2>
            <p className="max-w-[44ch] self-start pt-1 text-[1.08rem] leading-relaxed text-[#22293c]/95 md:justify-self-end">
              Our role is more than providing policies or products. We work alongside you as an advisor, translating
              complex risks into clear choices and designing protection and investment strategies aligned with your goals,
              governance, and responsibilities.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden border border-[#d1d5de] bg-[#d9dee9] md:mt-10">
            <Image
              src={imageSet.partner}
              alt="Partners celebrating a successful strategic decision"
              width={1800}
              height={980}
              className="h-[52vw] max-h-155 min-h-75 w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,43,95,0.22)_0%,rgba(20,34,83,0.44)_100%)] mix-blend-multiply" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[34px_34px] opacity-20" />
          </div>
        </div>
      </section>

      <section className="animate-rise relative overflow-hidden bg-[#ededee] px-0 py-18 text-[#111523] [animation-delay:70ms] md:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 bg-[radial-gradient(rgba(23,34,56,0.10)_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-35" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-62 w-62 bg-[radial-gradient(rgba(23,34,56,0.10)_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-35" />

        <div className="relative mx-auto w-[92vw] max-w-7xl">
          <p className="text-center text-[1.7rem] tracking-tight text-[#1c2438]/95">WHAT WE GOT</p>
          <h2 className="mx-auto mt-4 max-w-[31ch] text-center text-4xl font-medium leading-[1.15] sm:text-5xl md:text-[4.05rem]">
            More Than Products - We Advise, Translate Complex Risk, And Help You Choose With Confidence.
          </h2>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-16">
            <article className="mx-auto w-full max-w-62.5 text-left md:max-w-none">
              <p className="text-6xl font-medium leading-none sm:text-7xl">
                200<span className="align-top text-4xl">+</span>
              </p>
              <p className="mt-3 text-[1.35rem] leading-snug text-[#1f273b]/95">
                Years of Combined
                <br />
                Expertise in insurance
              </p>
            </article>

            <article className="mx-auto w-full max-w-62.5 text-left md:max-w-none">
              <p className="text-6xl font-medium leading-none sm:text-7xl">
                92<span className="align-top text-4xl">+</span>
              </p>
              <p className="mt-3 text-[1.35rem] leading-snug text-[#1f273b]/95">
                Thousand Corporate
                <br />
                Clients worldwide
              </p>
            </article>

            <article className="mx-auto w-full max-w-62.5 text-left md:max-w-none">
              <p className="text-6xl font-medium leading-none sm:text-7xl">
                150<span className="ml-1 text-4xl lowercase">k</span>
              </p>
              <p className="mt-3 text-[1.35rem] leading-snug text-[#1f273b]/95">
                Policies &amp; Portfolios
                <br />
                under management
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="animate-rise relative overflow-hidden bg-[#ededee] px-0 pb-12 pt-8 text-[#12182b] [animation-delay:76ms] md:pb-14 md:pt-10">
        <div className="pointer-events-none absolute left-0 top-0 h-52 w-52 bg-[radial-gradient(rgba(23,34,56,0.10)_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-35" />
        <div className="pointer-events-none absolute right-0 top-0 h-42 w-58 bg-[radial-gradient(rgba(23,34,56,0.10)_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-35" />

        <div className="relative mx-auto w-[96vw] max-w-330">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_1.08fr] md:gap-12">
            <div>
              <p className="text-[1.4rem] tracking-tight text-[#1c2438]/95">HOW WE PATNER</p>
              <h2 className="mt-3 max-w-[12ch] text-5xl font-medium leading-[1.06] md:text-[4.35rem]">
                How We Patner
                <br />
                With You
              </h2>
            </div>
            <p className="max-w-[40ch] pt-5 text-[1.15rem] leading-relaxed text-[#1f273c]/95 md:justify-self-end md:pt-8">
              Every client is different, but our way of working is consistent: listen carefully, analyze rigorously,
              design thoughtfully, and stay present over time. Our process is transparent, collaborative, and structured
              so you always know what to expect.
            </p>
          </div>

          <div className="mt-8 grid gap-2 md:mt-10 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Understand Your World",
                text: "We begin with a detailed conversation about your people, assets, obligations, and objectives. For corporate clients, we look at operations",
              },
              {
                step: "02",
                title: "Analyze Risks & Opportunities",
                text: "Our specialists map out your risk exposures and financial scenarios - from operational and liability risks to market and longevity risks.",
              },
              {
                step: "03",
                title: "Design Integrated Solutions",
                text: "We then design a coordinated plan that aligns insurance, financial protections, and investment strategies. This may include life and health programs.",
              },
              {
                step: "04",
                title: "Monitor, Review & Evolve",
                text: "Your world does not stand still - and neither should your protections. We regularly review your arrangements, adjust to new regulations",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="relative flex min-h-85 flex-col overflow-hidden border border-white/8 bg-[#1a215b] p-6 text-white md:min-h-105 md:p-7"
              >
                <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(rgba(255,255,255,0.11)_0.6px,transparent_0.6px)] bg-size-[11px_11px] opacity-35" />
                <h3 className="relative max-w-[12ch] text-[2.75rem] font-medium leading-[1.08]">{item.title}</h3>
                <p className="relative mt-5 max-w-[26ch] text-[1.06rem] leading-relaxed text-white/88">{item.text}</p>
                <p className="relative mt-auto pt-8 text-6xl font-medium leading-none text-white/92">{item.step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-rise bg-[#ededee] px-0 pb-10 pt-8 text-[#12182b] [animation-delay:78ms] md:pb-14 md:pt-12">
        <div className="mx-auto w-[96vw] max-w-330">
          <p className="text-[1.35rem] tracking-tight text-[#1c2438]/95">OUR JOURNEY</p>
          <h2 className="mt-2 max-w-[12ch] text-5xl font-medium leading-[1.08] md:text-[4.2rem]">
            From Risk Expertise To
            <br />
            Integrated Solutions
          </h2>

          <div className="mt-7 grid items-end gap-8 md:mt-8 md:grid-cols-[1fr_1.18fr] md:gap-10">
            <div className="order-2 md:order-1">
              <h3 className="text-[2.7rem] font-medium leading-[1.12]">Foundations in Risk &amp; Insurance</h3>
              <p className="mt-3 max-w-[52ch] text-[1.06rem] leading-relaxed text-[#1e2539]/95">
                We began with a clear focus: bringing structure and clarity to risk. Our early teams built strong
                expertise in insurance, underwriting discipline, and claims management - establishing the foundations of
                trust and reliability that still define us today.
              </p>

              <div className="mt-10 flex items-center gap-6 text-[1.7rem] text-[#1f2639]">
                <button type="button" aria-label="Previous journey step" className="transition hover:opacity-70">
                  &larr;
                </button>
                <p className="text-[1.75rem] tracking-tight">
                  02/<span className="text-[#8e93a2]">04</span>
                </p>
                <button type="button" aria-label="Next journey step" className="transition hover:opacity-70">
                  &rarr;
                </button>
              </div>
            </div>

            <div className="relative order-1 overflow-hidden border border-[#d4d7e0] bg-[#d9dee9] md:order-2">
              <Image
                src={imageSet.journey}
                alt="Client advisory meeting in progress"
                width={1800}
                height={1100}
                className="h-72 w-full object-cover sm:h-80 md:h-96"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,43,95,0.22)_0%,rgba(20,34,83,0.44)_100%)] mix-blend-multiply" />
            </div>
          </div>

          <div className="mt-8">
            <div className="relative h-px w-full bg-[repeating-linear-gradient(to_right,#969bab_0_6px,transparent_6px_12px)]" />
            <div className="-mt-1.75 grid grid-cols-4 items-start">
              {[
                { id: "01", active: false },
                { id: "02", active: true },
                { id: "03", active: false },
                { id: "04", active: false },
              ].map((item) => (
                <div key={item.id} className="text-left">
                  <span
                    className={`mb-2 block size-3 rounded-full ${item.active ? "bg-black" : "bg-[#d4d8e2]"}`}
                    aria-hidden="true"
                  />
                  <p className="text-[1.65rem] tracking-tight text-[#2a3145]">{item.id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="animate-rise bg-[#f7f7fa] px-0 py-16 text-[#111523] [animation-delay:80ms] md:py-20">
        <div className="mx-auto w-[96vw] max-w-330">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_1.08fr] md:gap-12">
            <div>
              <p className="text-[1.2rem] tracking-tight text-[#1c2438]/95">OUR TEAM</p>
              <h2 className="mt-2 max-w-[12ch] text-5xl font-medium leading-[1.08] md:text-[4.1rem]">The Leadership</h2>
            </div>
            <p className="max-w-[38ch] pt-5 text-[1.08rem] leading-relaxed text-[#22293c]/95 md:justify-self-end md:pt-8">
              Our leadership brings decades of expertise in risk management, strategic insight, and long-term value creation for clients across diverse industries.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[{
              img: imageSet.team1,
              name: "Claude Bébéar",
              role: "Founder & Strategic Visionary",
            }, {
              img: imageSet.team2,
              name: "Bertrand Poupart-Lafarge",
              role: "Chief Financial Officer",
            }, {
              img: imageSet.team3,
              name: "Henri De Castries",
              role: "CEO & Architect Of Globalization",
            }, {
              img: imageSet.team4,
              name: "Thomas Buberl",
              role: "CEO & Architect Of Globalization",
            }, {
              img: imageSet.team5,
              name: "Eugéne Dé Clarie",
              role: "Chief Operating Officer",
            }].map((member) => (
              <div key={member.name} className="flex flex-col items-center border border-[#e2e3e8] bg-white p-6">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={340}
                  height={340}
                  className="mb-4 h-65 w-65 object-cover"
                />
                <p className="text-lg font-semibold text-[#1a223b]">{member.name}</p>
                <p className="mt-1 text-[1.05rem] text-[#6a6f7b]">{member.role}</p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center border border-[#e2e3e8] bg-[#1a215b] p-6 text-white">
              <div className="mb-4 h-65 w-65 bg-[radial-gradient(rgba(255,255,255,0.11)_0.6px,transparent_0.6px)] bg-size-[11px_11px] flex items-center justify-center">
                <span className="text-2xl font-semibold">Join Us!</span>
              </div>
              <p className="text-lg font-semibold">Join Us!</p>
              <p className="mt-1 text-[1.05rem] text-white/80">The Next Generation</p>
            </div>
          </div>
        </div>
      </section>
      <section className="animate-rise relative overflow-hidden min-h-[92vh] text-white px-0 py-16 [animation-delay:220ms] md:py-20">
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
        <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 bg-[radial-gradient(rgba(255,255,255,0.13)_0.7px,transparent_0.7px)] bg-size-[14px_14px] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(44,56,110,0.22)_0%,rgba(35,45,75,0.44)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465101046530-73398c7f1d49?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-18" />

        <div className="relative mx-auto flex flex-col items-center justify-center w-[92vw] max-w-4xl py-10">
          <h2 className="mb-4 text-center text-4xl font-semibold md:text-5xl">Ready To Secure Your Future?</h2>
          <p className="mb-8 text-center text-lg font-medium text-white/90">
            Whether You&apos;re Protecting Your Family, Your Assets, Or Your Business,<br />
            We&apos;re Here To Provide Tailored Solutions That Fit Your Needs.
          </p>
          <form className="flex w-full max-w-xl items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 rounded-full border border-white/30 bg-white/90 px-5 py-3 text-lg text-[#232d4b] outline-none focus:border-white"
              required
            />
            <button
              type="submit"
              className="rounded-full border border-white bg-[#232d4b] px-6 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-[#232d4b]"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      <section className="animate-rise border-y border-[--line] bg-[--surface] px-0 py-16 [animation-delay:180ms] md:py-20">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Why Choose Us</p>
          <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
            Built to deliver certainty in complex environments.
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {choosePoints.map((point) => (
              <article key={point.title} className="rounded-xl border border-[--line] bg-white px-4 py-4 text-[--ink-soft]">
                <div className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,white_88%)] text-[--accent]">
                  <IconBadge kind={point.icon} />
                </div>
                <h3 className="font-(--font-playfair-display) text-lg text-[--ink]">{point.title}</h3>
                <p className="mt-1 text-sm">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>




      <section className="animate-rise border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_60%,white_40%)] px-0 py-16 [animation-delay:300ms] md:py-20">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Statistics</p>
          <h2 className="max-w-[18ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
            Measurable outcomes, year after year.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <article key={item.label} className="rounded-[0.8rem] border border-[--line] bg-[--surface] px-3 py-4 text-center">
                <p className="font-(--font-playfair-display) text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-[--ink-soft]">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      

     

      {/* ── Careers ────────────────────────────────────────────── */}
      <section className="animate-rise border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_55%,white_45%)] px-0 py-16 [animation-delay:330ms] md:py-20">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Careers</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-[22ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
              Build the next chapter of your career with us.
            </h2>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-[--line] bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-[--ink] transition hover:bg-[--surface]"
              href="/contact"
            >
              See All Openings
            </Link>
          </div>

          {/* Culture highlight banner */}
          <div className="mt-8 rounded-2xl border border-[--line] bg-[--surface] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Collaborative Culture", text: "Flat teams, shared accountability, and open dialogue at every level of the organisation." },
                { label: "Global Exposure", text: "Work on landmark projects in infrastructure, architecture, and industrial operations worldwide." },
                { label: "Growth by Design", text: "Structured mentorship, continuous learning programmes, and clear paths to leadership." },
              ].map((item) => (
                <div key={item.label} className="border-t border-[--line] pt-4 md:border-l md:border-t-0 md:pl-6 first:border-0 first:pt-0 first:pl-0">
                  <h3 className="font-(--font-playfair-display) text-xl text-[--ink]">{item.label}</h3>
                  <p className="mt-2 text-sm text-[--ink-soft]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open roles */}
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: "Senior Project Manager", dept: "Delivery", location: "New York, NY", type: "Full-time" },
              { title: "Industrial Process Engineer", dept: "Engineering", location: "Remote / On-site", type: "Full-time" },
              { title: "Architecture Lead", dept: "Design", location: "London, UK", type: "Full-time" },
              { title: "Digital Operations Analyst", dept: "Technology", location: "New York, NY", type: "Full-time" },
              { title: "Construction Site Supervisor", dept: "Infrastructure", location: "Chicago, IL", type: "Contract" },
              { title: "Strategy & Partnerships Manager", dept: "Business Development", location: "Hybrid", type: "Full-time" },
            ].map((role) => (
              <article
                key={role.title}
                className="group flex items-start justify-between gap-4 rounded-[0.8rem] border border-[--line] bg-[--surface] px-5 py-4 transition hover:border-[--accent] hover:shadow-[0_8px_24px_rgba(31,42,45,0.06)]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[--ink-soft]">{role.dept}</p>
                  <h3 className="mt-1 font-(--font-playfair-display) text-lg leading-snug text-[--ink]">{role.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[--line] px-2.5 py-0.5 text-xs text-[--ink-soft]">
                      {role.location}
                    </span>
                    <span className="rounded-full border border-[--line] px-2.5 py-0.5 text-xs text-[--ink-soft]">
                      {role.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  aria-label={`Apply for ${role.title}`}
                  className="mt-1 shrink-0 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,white_88%)] px-3 py-1.5 text-xs font-semibold text-[--accent] transition group-hover:bg-[--accent] group-hover:text-white"
                >
                  Apply
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

 <section className="animate-rise px-0 py-16 [animation-delay:320ms] md:py-20">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Meet us here</p>
          <h2 className="max-w-[18ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
            Visit our office and innovation hub.
          </h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <aside className="rounded-[0.9rem] border border-[--line] bg-[--surface] p-5">
              <h3 className="font-(--font-playfair-display) text-2xl">Aurevia Group HQ</h3>
              <p className="mt-2 text-[--ink-soft]">
                45 Innovation Avenue, Central Business District, New York, NY 10018
              </p>
              <div className="mt-4 grid gap-2 text-sm text-[--ink-soft]">
                <p>
                  <span className="font-semibold text-[--ink]">Phone:</span> +1 212 555 0188
                </p>
                <p>
                  <span className="font-semibold text-[--ink]">Email:</span> hello@aurevia.com
                </p>
                <p>
                  <span className="font-semibold text-[--ink]">Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM
                </p>
              </div>
              <Link
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[--accent] px-5 py-3 text-[0.95rem] font-semibold text-white transition hover:-translate-y-px hover:bg-[--accent-strong]"
                href="/contact"
              >
                Book a Meeting
              </Link>
            </aside>

            <div className="overflow-hidden rounded-[0.9rem] border border-[--line] bg-[--surface]">
              <iframe
                title="Aurevia Group location map"
                src="https://maps.google.com/maps?q=Times%20Square%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-90 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ── Newsletter CTA ───────────────────────────────────── */}
      <section className="animate-rise px-0 py-16 [animation-delay:335ms] md:py-20">
        <div className="mx-auto w-[92vw] max-w-7xl">
          <div className="overflow-hidden rounded-2xl bg-[--ink] px-8 py-12 text-black md:px-14">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-gray-400">Insights Newsletter</p>
                <h2 className="font-(--font-playfair-display) text-3xl leading-tight text-black md:text-4xl">
                  Strategy and delivery thinking, straight to your inbox.
                </h2>
                <p className="mt-3 text-sm text-gray-500">
                  One brief per month. No noise — just field-tested perspectives on infrastructure, operations, and growth.
                </p>
              </div>
              <div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
