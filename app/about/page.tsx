import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function AboutPage() {
    const imageSet = {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    };
   
  const processSteps = [
    "Discover priorities and constraints with leadership teams.",
    "Design a phased blueprint with budget and risk clarity.",
    "Execute with specialist teams and transparent reporting.",
    "Optimize after launch with measurable improvement cycles.",
  ];

  return (
    <>
      <section className="animate-rise relative isolate min-h-[100vh] overflow-hidden text-white">
        <Image
          src={"https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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
            <p className="mb-3 text-[1.9rem] tracking-tight text-white/90">ABOUT SWIFTRISE</p>
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
        <div className="mx-auto w-[92vw] max-w-5xl flex flex-col items-center">
          <p className="mb-2 text-[0.72rem] uppercase tracking-[0.14em] text-[--accent] font-bold animate-fadeInUp">About Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#232d4b] mb-6 text-center animate-fadeInUp">A Timeline of Excellence</h2>
          <p className="text-lg text-[--ink-soft] mb-12 text-center max-w-2xl animate-fadeInUp">
            Since 2002, Aurevia Group has been a trusted partner for organizations seeking precision, perspective, and progress. Our journey is marked by milestones that reflect our commitment to quality and innovation.
          </p>
          {/* Timeline */}
          <ol className="relative border-l-4 border-[--accent]/20 pl-8 mb-12 max-w-2xl w-full animate-fadeInUp">
            <li className="mb-10 ml-4">
              <div className="absolute -left-6 flex items-center justify-center   text-gray-600 text-xl font-bold">2002</div>
              <h3 className="font-bold text-[--ink] text-lg mb-1">Founded</h3>
              <p className="text-[--ink-soft] text-sm">Aurevia Group is established, rooted in craftsmanship and vision.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute -left-6 flex items-center justify-center text-gray-600 text-xl font-bold">2010</div>
              <h3 className="font-bold text-[--ink] text-lg mb-1">100+ Projects Delivered</h3>
              <p className="text-[--ink-soft] text-sm">Expanded across multiple sectors, delivering measurable results.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute -left-6 flex items-center justify-center   text-gray-600 text-xl font-bold">2018</div>
              <h3 className="font-bold text-[--ink] text-lg mb-1">Specialist Teams</h3>
              <p className="text-[--ink-soft] text-sm">Built 11+ dedicated teams for tailored client solutions.</p>
            </li>
            <li className="ml-4">
              <div className="absolute -left-6 flex items-center justify-center   text-gray-600 text-xl font-bold">Today</div>
              <h3 className="font-bold text-[--ink] text-lg mb-1">97% Client Retention</h3>
              <p className="text-[--ink-soft] text-sm">Long-term partnerships and industry-leading satisfaction.</p>
            </li>
          </ol>
          {/* Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl animate-fadeInUp">
            <div className="flex flex-col items-center">
              <span className="inline-flex  items-center justify-center   text-gray-600 text-2xl font-bold mb-2">24+</span>
              <span className="text-xs text-[--ink-soft]">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="inline-flex   items-center justify-center   text-gray-600  text-2xl font-bold  mb-2">180+</span>
              <span className="text-xs text-[--ink-soft]">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center"> 
              <span className="inline-flex   items-center justify-center   text-gray-600 text-2xl font-bold  mb-2">11</span>
              <span className="text-xs text-[--ink-soft]">Specialist Teams</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="inline-flex   items-center justify-center   text-gray-600 text-2xl font-bold  mb-2">97%</span>
              <span className="text-xs text-[--ink-soft]">Client Retention</span>
            </div>
          </div>
        </div>
      </section>


 

   <section
    className="animate-rise bg-[#113f67] px-0 pb-10 pt-8 text-[#ffffff] [animation-delay:78ms] md:pb-14 md:pt-12 relative overflow-hidden"
     style={{
       backgroundImage:
         'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
       backgroundSize: 'cover',
       backgroundPosition: 'center'
     }}
   >
        <div className="mx-auto w-[96vw] max-w-330">
          <p className="text-[1.35rem] tracking-tight text-[#ffffff]">OUR JOURNEY</p>
          <h2 className="mt-2 max-w-[12ch] text-5xl font-medium leading-[1.08] md:text-[4.2rem]">
            From Risk Expertise To
            <br />
            Integrated Solutions
          </h2>

          <div className="mt-7 grid items-end gap-8 md:mt-8 md:grid-cols-[1fr_1.18fr] md:gap-10">
            <div className="order-2 md:order-1">
              <h3 className="text-[2.7rem] font-medium leading-[1.12]">Foundations in Risk &amp; Insurance</h3>
              <p className="mt-3 max-w-[52ch] text-[1.06rem] leading-relaxed text-[#ffffff]">
                We began with a clear focus: bringing structure and clarity to risk. Our early teams built strong
                expertise in insurance, underwriting discipline, and claims management - establishing the foundations of
                trust and reliability that still define us today.
              </p>

              <div className="mt-10 flex items-center gap-6 text-[1.7rem] text-[#ffffff]">
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

            <div className="relative order-1 overflow-hidden border-6 border-[#d4d7e0] shadow md:order-2">
              <Image
                src={"https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Client advisory meeting in progress"
                width={1800}
                height={1100}
                className="h-72 w-full object-cover sm:h-80 md:h-96 filter brightness-100"
              />
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
                    className={`mb-2 block size-3 rounded-full ${item.active ? "bg-[#ffffff]" : "bg-[#838383]"} mx-auto`}
                    aria-hidden="true"
                  />
                  <p className="text-[1.65rem] tracking-tight text-[#ffffff]">{item.id}</p>
                </div>
              ))}
            </div>
          </div>
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
