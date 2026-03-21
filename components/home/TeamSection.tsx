export default function TeamSection() {
  const team = [
    {
      img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Claude Bébéar",
      role: "Founder & Strategic Visionary",
    },
    {
      img: "https://images.unsplash.com/photo-1713947507130-227586ab3024?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bertrand Poupart-Lafarge",
      role: "Chief Financial Officer",
    },
    {
      img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Henri De Castries",
      role: "CEO & Architect Of Globalization",
    },
    {
      img: "https://images.unsplash.com/photo-1630939687530-241d630735df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Thomas Buberl",
      role: "CEO & Architect Of Globalization",
    },
    {
      img: "https://images.unsplash.com/photo-1713947503297-ca19bc5b6e38?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Eugéne Dé Clarie",
      role: "Chief Operating Officer",
    },
  ];
  return (
    <section className="animate-rise bg-[#ffffff] px-0 py-16 [animation-delay:80ms] md:py-20">
      <div className="mx-auto w-[96vw] max-w-330">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[1.2rem] tracking-tight text-[#1c2438]/95 font-bold uppercase">Meet Our Team</p>
            <h2 className="mt-2 max-w-[12ch] text-5xl font-extrabold leading-[1.08] md:text-[4.1rem] text-[#2b5478] drop-shadow-sm">Visionaries & Leaders</h2>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-black max-w-[48ch]">Our leadership blends decades of expertise in risk management, innovation, and value creation for clients across industries. Together, we drive transformation and inspire excellence.</p>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img src="https://images.unsplash.com/photo-1680208730509-2eee550a8b09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden h-[340px] w-full group">
              <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
              <span className="absolute left-1/2 bottom-4 -translate-x-1/2 text-white text-[1.25rem] font-bold tracking-tight whitespace-nowrap bg-black/40 px-4 py-2 rounded-xl drop-shadow-lg">{member.name}</span>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {/* Socials would go here if needed */}
              </div>
              <div className="absolute top-0 right-0 h-full w-full bg-[#113f67] flex flex-col items-center justify-center px-6 transition-transform duration-500 translate-x-full group-hover:translate-x-0 z-20 shadow-lg">
                <h4 className="text-2xl font-bold text-[#ffffff] mb-2 text-center"></h4>
                <p className="text-lg text-[#ffffff] font-bold mb-2 text-center">{member.role}</p>
                <p className="text-sm text-[#f0e7e7] text-center mb-4">Visionary leader with decades of experience in strategic risk management and innovation.</p>
                <div className="flex gap-3 mt-2">
                  {/* Socials would go here if needed */}
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center border border-[#e2e3e8] bg-[#113f67] p-6 text-white rounded-2xl shadow-md">
            <div className="mb-4 h-65 w-65 bg-[radial-gradient(rgba(255,255,255,0.11)_0.6px,transparent_0.6px)] bg-size-[11px_11px] flex items-center justify-center rounded-full">
              <span className="text-2xl font-semibold">Join Us!</span>
            </div>
            <p className="text-lg font-semibold">Join Us!</p>
            <p className="mt-1 text-[1.05rem] text-white/80">The Next Generation</p>
            <a href="/careers" className="mt-4 rounded-full bg-[#2b5478] text-[#ffffff] px-4 py-2 font-bold shadow hover:bg-[#e2e3e8] hover:text-[#2b5478] transition">See Careers</a>
          </div>
        </div>
      </div>
    </section>
  );
}
