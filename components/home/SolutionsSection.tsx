import Image from "next/image";

export default function SolutionsSection() {
  return (
    <>
    <section className="w-full min-h-[90vh] py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm sm:text-base tracking-widest text-gray-500 mb-3">WHAT WE OFFER</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">Solutions Built For<br />Lasting Security</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Life &amp; Healty Insurance</h3>
          <p className="text-gray-600 mb-8 text-base sm:text-lg md:text-xl">Our life and health protection programs provide financial security for you, your family, and your key people in moments of uncertainty. From medical coverage and income replacement to legacy planning, our solutions help you stay focused on recovery and wellbeing instead of unexpected costs.</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm sm:text-base">Medical expense coverage</span>
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm sm:text-base">Flexible plans</span>
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm sm:text-base">Critical illness protection</span>
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm sm:text-base">Family security</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-lg">We provide integrated service solutions that enhance protection, improve clarity, and deliver consistent value for clients seeking reliable, long-term stability.</p>
        </div>
        <div className="flex justify-center items-center"> 
          <div className="w-full h-80 xs:h-96 sm:h-[32rem] md:h-[38rem] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Family security and insurance"
              width={1200}
              height={900}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
     </>
  );
}
