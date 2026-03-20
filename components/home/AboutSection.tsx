export default function AboutSection() {
  return (
    <section id="about" className="animate-rise px-0 py-20 md:py-28 bg-white">
      <div className="mx-auto w-[92vw] max-w-5xl flex flex-col items-center">
        <p className="mb-2 text-[0.72rem] uppercase tracking-[0.14em] text-[--accent] font-bold animate-fadeInUp">About Us</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#232d4b] mb-6 text-center animate-fadeInUp">A Timeline of Excellence</h2>
        <p className="text-lg text-[--ink-soft] mb-12 text-center max-w-2xl animate-fadeInUp">
          Since 2002, Aurevia Group has been a trusted partner for organizations seeking precision, perspective, and progress. Our journey is marked by milestones that reflect our commitment to quality and innovation.
        </p>
        {/* Timeline */}
        <ol className="relative border-l-4 border-[--accent]/20 pl-8 mb-12 max-w-2xl w-full animate-fadeInUp">
          <li className="mb-10 ml-4">
            <div className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-[--accent] rounded-full shadow text-white text-xl font-bold">2002</div>
            <h3 className="font-bold text-[--ink] text-lg mb-1">Founded</h3>
            <p className="text-[--ink-soft] text-sm">Aurevia Group is established, rooted in craftsmanship and vision.</p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-[--accent] rounded-full shadow text-white text-xl font-bold">2010</div>
            <h3 className="font-bold text-[--ink] text-lg mb-1">100+ Projects Delivered</h3>
            <p className="text-[--ink-soft] text-sm">Expanded across multiple sectors, delivering measurable results.</p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-[--accent] rounded-full shadow text-white text-xl font-bold">2018</div>
            <h3 className="font-bold text-[--ink] text-lg mb-1">Specialist Teams</h3>
            <p className="text-[--ink-soft] text-sm">Built 11+ dedicated teams for tailored client solutions.</p>
          </li>
          <li className="ml-4">
            <div className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-[--accent] rounded-full shadow text-white text-xl font-bold">Today</div>
            <h3 className="font-bold text-[--ink] text-lg mb-1">97% Client Retention</h3>
            <p className="text-[--ink-soft] text-sm">Long-term partnerships and industry-leading satisfaction.</p>
          </li>
        </ol>
        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl animate-fadeInUp">
          <div className="flex flex-col items-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--accent] text-white text-2xl font-bold shadow mb-2">24+</span>
            <span className="text-xs text-[--ink-soft]">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--accent] text-white text-2xl font-bold shadow mb-2">180+</span>
            <span className="text-xs text-[--ink-soft]">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--accent] text-white text-2xl font-bold shadow mb-2">11</span>
            <span className="text-xs text-[--ink-soft]">Specialist Teams</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--accent] text-white text-2xl font-bold shadow mb-2">97%</span>
            <span className="text-xs text-[--ink-soft]">Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  );
}
