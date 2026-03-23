import Image from "next/image";

export default function FoundationSection() {
  return (
    <section className="w-full min-h-[90vh]  bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base tracking-widest text-white mb-3">OUR FOUNDATION</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">Precision-Driven Solutions<br />For A Secure Tomorrow</h2>
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          <p className="text-white text-base md:col-span-1">We create integrated protection solutions that enhance stability, reduce uncertainty, and support long-term confidence for individuals, families, and modern businesses.</p>
          <p className="text-white text-base md:col-span-1">Our approach delivers clarity and measurable value by simplifying complexity, strengthening resilience, and providing future-ready strategies that empower clients’ progress.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-14">
          <div className="border-4 border-[#ffffff] rounded-2xl p-8 flex flex-col gap-3 bg-[#113f67] shadow-md">
            <span className="text-3xl mb-2">✔️</span>
            <h3 className="font-semibold text-white text-lg sm:text-2xl mb-2">VISION</h3>
            <p className="text-white text-base">We aim to build a future where individuals and businesses operate with complete assurance, supported by dependable, adaptable protection systems designed to strengthen stability, reduce vulnerabilities, and deliver long-term security in every condition.</p>
          </div>

          <div className="border-4 border-[#113f67] rounded-2xl p-8 flex flex-col gap-3 bg-white shadow-md">
            <span className="text-3xl mb-2">⚙️</span>
            <h3 className="font-semibold text-[#113f67] text-lg sm:text-2xl mb-2">MISSION</h3>
            <p className="text-black text-base">Our mission is to deliver integrated insurance and financial solutions that simplify complexity, minimize risk, and empower clients with clarity, transparency, and measurable value through consistently reliable service and forward-focused strategic guidance.</p>
          </div>
        </div>
        <div className="mb-3 text-sm sm:text-base tracking-widest text-white">OUR IMPACT</div>
        <div className="rounded-2xl overflow-hidden bg-gray-100">
          <div className="relative w-full border-6 border-r-4 border-[#ffffff] h-80 xs:h-96 sm:h-[32rem] md:h-[38rem]">
            <Image
              src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team impact"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-5 py-6 sm:px-10 sm:py-10 flex flex-col gap-3 sm:flex-row sm:gap-10 text-white text-base sm:text-lg">
              <div className="sm:w-1/2 mb-2 sm:mb-0">
                We deliver consistent project outcomes through structured processes and attentive oversight, ensuring developments progress smoothly and meet every expectation with reliable, measurable results.
              </div>
              <div className="sm:w-1/2">
                Our approach reduces risk, improves efficiency, and strengthens client confidence, creating long-term value across every stage of the built environment lifecycle.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modern decorated background: bold diagonal split, blurred accent, and dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Bold diagonal split */}
        <svg width="100%" height="100%" className="absolute left-0 top-0" style={{zIndex: 0}}>
          <defs>
            <linearGradient id="diagSplit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#113f67" />
              <stop offset="55%" stopColor="#113f67" />
              <stop offset="55%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagSplit)" />
        </svg>
        {/* Large blurred accent circle */}
        <div style={{
          position: 'absolute',
          left: '-120px',
          top: '30%',
          width: '420px',
          height: '420px',
          background: '#113f67',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.18,
          zIndex: 1,
        }} />
        {/* Subtle dot grid overlay */}
        <svg width="100%" height="100%" className="absolute left-0 top-0" style={{opacity: 0.2, zIndex: 2}}>
          <defs>
            <pattern id="dotGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="2.8" fill="#113f67" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>
    </section>
  );
}
