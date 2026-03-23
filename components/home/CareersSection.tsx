import Link from "next/link";

export default function CareersSection() {
  const cultureCards = [
    { label: "Collaborative Culture", text: "Flat teams, shared accountability, and open dialogue at every level of the organisation." },
    { label: "Global Exposure", text: "Work on landmark projects in infrastructure, architecture, and industrial operations worldwide." },
    { label: "Growth by Design", text: "Structured mentorship, continuous learning programmes, and clear paths to leadership." },
  ];
  const jobCards = [
    { title: "Senior Project Manager", dept: "Delivery", location: "New York, NY", type: "Full-time", icon: "fa fa-briefcase", desc: "Lead project teams, manage delivery timelines, and ensure client satisfaction." },
    { title: "Industrial Process Engineer", dept: "Engineering", location: "Remote / On-site", type: "Full-time", icon: "fa fa-cogs", desc: "Design and optimize industrial processes for efficiency and safety." },
    { title: "Architecture Lead", dept: "Design", location: "London, UK", type: "Full-time", icon: "fa fa-building", desc: "Oversee architectural projects and mentor junior designers." },
    { title: "Digital Operations Analyst", dept: "Technology", location: "New York, NY", type: "Full-time", icon: "fa fa-laptop", desc: "Analyze digital operations and recommend improvements for business growth." },
    { title: "Construction Site Supervisor", dept: "Infrastructure", location: "Chicago, IL", type: "Contract", icon: "fa fa-hard-hat", desc: "Supervise construction sites and ensure compliance with safety standards." },
    { title: "Strategy & Partnerships Manager", dept: "Business Development", location: "Hybrid", type: "Full-time", icon: "fa fa-users", desc: "Develop business strategies and manage key partnerships." },
  ];
  return (
    <section className="animate-rise  bg-white px-0 py-24 [animation-delay:330ms] md:py-32">
      <div className="mx-auto w-[92vw] max-w-7xl">
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeInLeft duration-700">
            <p className="mb-2 text-[0.85rem] uppercase tracking-[0.14em] text-[--accent] font-bold">Careers</p>
            <h2 className="font-(--font-playfair-display) text-4xl md:text-5xl font-extrabold text-[#232d4b] drop-shadow-sm">Your Future Starts Here</h2>
            <p className="mt-4 text-lg text-[--ink-soft] max-w-[38ch]">We empower you to grow, lead, and make a difference. Explore our culture and open roles below.</p>
           </div>
          <div className="flex justify-center animate-fadeInRight duration-700">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80" alt="Careers" className="rounded-2xl shadow-lg w-full max-w-md h-auto" />
          </div>
        </div>
        <div className="mt-8 w-full overflow-hidden pb-4 relative">
          <div className="flex gap-8 min-w-max animate-autoSlide" style={{ animation: 'autoSlide 12s linear infinite' }}>
            {cultureCards.map((item, idx) => (
              <div key={item.label} className="rounded-2xl border-4 border-[#113f67]  bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center min-w-[320px]">
                <h3 className="font-(--font-playfair-display) text-xl text-[--ink] font-bold mb-2">{item.label}</h3>
                <p className="mt-2 text-sm text-[--ink-soft] text-center">{item.text}</p>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes autoSlide {
              0% { transform: translateX(0); }
              33% { transform: translateX(-340px); }
              66% { transform: translateX(-680px); }
              100% { transform: translateX(0); }
            }
          `}</style>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobCards.map((role, idx) => (
            <div key={role.title} className="perspective">
              <article
                className={`relative w-full h-full rounded-2xl border-4 border-[#113f67] shadow-md transition-shadow duration-300 animate-fadeInUp duration-700 delay-${idx*100} group flip-card`}
                style={{ minHeight: 170 }}
              >
                {/* Card Front */}
                <div className="flip-card-inner group-hover:rotate-y-180 transition-transform duration-500 w-full h-full">
                  <div className="flip-card-front absolute inset-0 bg-white p-6 flex flex-col gap-4 rounded-2xl z-10 backface-hidden">
                    <div className="flex items-center gap-4">
                      <h3 className="font-(--font-playfair-display) text-lg leading-snug text-[--ink] font-bold">{role.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full px-2.5 py-0.5 text-xs text-[--accent] font-bold">{role.dept}</span>
                      <span className="rounded-full border border-[--line] px-2.5 py-0.5 text-xs text-[--ink-soft]">{role.location}</span>
                      <span className="rounded-full border border-[--line] px-2.5 py-0.5 text-xs text-[--ink-soft]">{role.type}</span>
                    </div>
                  </div>
                  {/* Card Back (sliding content) */}
                  <div className="flip-card-back absolute inset-0 bg-[#113f67] p-6 flex flex-col justify-center items-center gap-4 rounded-2xl z-20 backface-hidden rotate-y-180">
                    <p className="text-sm text-center font-medium animate-slideUp text-white">{role.desc}</p>
                    <Link
                      href="/contact"
                      aria-label={`Apply for ${role.title}`}
                      className="inline-block rounded-full bg-white text-[#232d4b] px-4 py-2 font-semibold shadow hover:bg-[#232d4b] hover:text-white transition !hover:text-white"
                    >
                      Apply
                    </Link>
                  </div>
    x            </div>
              </article>
            </div>
          ))}
        </div>
        <style>{`
          .perspective { perspective: 1200px; }
          .flip-card { min-height: 240px; }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.5s cubic-bezier(.4,0,.2,1);
          }
          .group:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            backface-visibility: hidden;
            border-radius: 1rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          @keyframes slideUp {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp { animation: slideUp 0.5s cubic-bezier(.4,0,.2,1) both; }
        `}</style>
      </div>
    </section>
  );
}
