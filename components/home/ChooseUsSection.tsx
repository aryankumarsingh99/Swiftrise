export default function ChooseUsSection({ choosePoints, IconBadge }: { choosePoints: any[]; IconBadge: any }) {
  return (
    <section className="relative bg-[#113f67] px-2 sm:px-4 py-0 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden w-full text-white">
      {/* Top badge */}
      <div className="w-full flex justify-center pt-8 sm:pt-12">
        <span className="bg-white text-[#232d4b] px-4 sm:px-5 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-md border border-[#eee]">WHY CHOOSE US</span>
      </div>
      {/* Headline */}
      <h2 className="mt-4 sm:mt-6 text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full px-2">
        Your <span className="text-[#5a83ff] font-semibold italic">Trusted</span> Homecare Partner
      </h2>
      {/* Centered image and features - now full width */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 mt-8 sm:mt-10 w-full px-0">
        {/* Left features */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 text-right pr-0 md:pr-8 w-full max-w-none">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-end gap-2">
              <span className="w-1 h-6 sm:w-1.5 sm:h-8 bg-[#5a83ff] rounded-full inline-block mr-2" />Medical &amp; Non-Medical Services
            </h3>
            <p className="text-xs sm:text-sm text-[#d9dee9] mt-1">From nursing and therapy to companionship and daily assistance</p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-end gap-2">
              <span className="w-1 h-6 sm:w-1.5 sm:h-8 bg-[#5a83ff] rounded-full inline-block mr-2" />Modern Monitoring &amp; Health Tracking
            </h3>
            <p className="text-xs sm:text-sm text-[#d9dee9] mt-1">Technology-enabled tracking, digital reports, medication reminders</p>
          </div>
        </div>
        {/* Center image */}
        <div className="flex-shrink-0 border-2 border-[#5a83ff] rounded-xl overflow-hidden shadow-xl bg-[#d9dee9] w-[220px] xs:w-[280px] sm:w-[340px] h-[140px] xs:h-[180px] sm:h-[240px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
            alt="Homecare Service"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right features */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 text-left pl-0 md:pl-8 w-full max-w-none">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              Family-Centered Care Approach<span className="w-1 h-6 sm:w-1.5 sm:h-8 bg-[#5a83ff] rounded-full inline-block ml-2" />
            </h3>
            <p className="text-xs sm:text-sm text-[#d9dee9] mt-1">We focus on comfort, dignity, independence, and building trust</p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              24/7 Support &amp; Emergency Assistance<span className="w-1 h-6 sm:w-1.5 sm:h-8 bg-[#5a83ff] rounded-full inline-block ml-2" />
            </h3>
            <p className="text-xs sm:text-sm text-[#d9dee9] mt-1">Round-the-clock care, monitoring, and helpline to ensure safety at all times.</p>
          </div>
        </div>
      </div>
      {/* Steps section - full width */}
      <div className="w-full flex flex-col md:flex-row mt-10 sm:mt-16 pb-10 sm:pb-16 px-0 gap-6 sm:gap-0">
        {/* Step 1 */}
        <div className="flex-1 bg-[#d9dee9] rounded-2xl shadow-lg p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center border border-[#113f67]/30 min-w-0 mb-4 md:mb-0">
          <span className="bg-[#5a83ff] text-white text-xs font-bold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">Step 1</span>
          <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl text-[#113f67]">{IconBadge ? <IconBadge kind={choosePoints[0]?.icon} /> : '🛎️'}</div>
          <h4 className="text-base sm:text-lg font-bold text-[#113f67] mb-1">Select Your Service</h4>
          <p className="text-xs sm:text-sm text-[#232d4b] text-center">Choose from nursing care, elder care, therapy, or medical assistance based on your specific needs.</p>
        </div>
        {/* Step 2 */}
        <div className="flex-1 bg-[#d9dee9] rounded-2xl shadow-lg p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center border border-[#113f67]/30 min-w-0 mb-4 md:mb-0">
          <span className="bg-[#5a83ff] text-white text-xs font-bold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">Step 2</span>
          <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl text-[#113f67]">{IconBadge ? <IconBadge kind={choosePoints[1]?.icon} /> : '📅'}</div>
          <h4 className="text-base sm:text-lg font-bold text-[#113f67] mb-1">Choose Date &amp; Time</h4>
          <p className="text-xs sm:text-sm text-[#232d4b] text-center">Pick your preferred date and time, and we'll assign a certified caregiver and share booking details.</p>
        </div>
        {/* Step 3 */}
        <div className="flex-1 bg-[#d9dee9] rounded-2xl shadow-lg p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center border border-[#113f67]/30 min-w-0">
          <span className="bg-[#5a83ff] text-white text-xs font-bold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">Step 3</span>
          <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl text-[#113f67]">{IconBadge ? <IconBadge kind={choosePoints[2]?.icon} /> : '🏠'}</div>
          <h4 className="text-base sm:text-lg font-bold text-[#113f67] mb-1">Care Begins at Home</h4>
          <p className="text-xs sm:text-sm text-[#232d4b] text-center">Our professional caregiver arrives at your location and starts personalized care with full support.</p>
        </div>
      </div>
    </section>
  );
}
