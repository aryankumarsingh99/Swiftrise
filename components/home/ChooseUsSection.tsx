import React from "react";
import Image from "next/image";

type IconKind = "draft" | "gear" | "factory" | "chart" | "shield" | "team" | "target" | "time";

type ChoosePoint = {
  icon: IconKind;
};

type ChooseUsSectionProps = {
  choosePoints: ChoosePoint[];
  IconBadge?: React.ComponentType<{ kind: IconKind }>;
};

export default function ChooseUsSection({ choosePoints, IconBadge }: ChooseUsSectionProps) {
  const defaultStepIcons: IconKind[] = ["team", "time", "target"];

  return (
    <section className="relative bg-[#113f67] px-2 sm:px-4 py-0 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden w-full">
      {/* Floating SVG accents */}
      <svg className="absolute -top-10 -left-10 w-56  h-56 opacity-20 animate-float-slow" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#ffffff" /></svg>
      <svg className="absolute -bottom-16 right-0 w-72 h-72 opacity-10 animate-float" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#ffffff" /></svg>
      {/* Top badge */}
      <div className="w-full flex justify-center pt-12">
        <span className="bg-[#113f67] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest shadow-md border border-[#e3eaf3] animate-fade-in-down">WHY CHOOSE US</span>
      </div>
      {/* Headline */}
      <h2 className="mt-6 text-center text-4xl md:text-5xl font-extrabold text-[#ffffff] w-full px-2 animate-slide-in-down">
        Your <span className="text-[#5a83ff] font-semibold italic">Trusted</span> Technology Partner
        <span className="block h-1 w-16 bg-[#ffffff] mx-auto mt-3 rounded-full animate-grow-x"></span>
      </h2>
      {/* Features and image */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 mt-10 w-full px-0">
        {/* Left features */}
        <div className="flex-1 flex flex-col gap-8 text-right pr-0 md:pr-8 w-full max-w-none">
          <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-lg font-bold text-[#113f67] flex items-center justify-end gap-2 group-hover:underline">
              <span className="w-1 h-8 bg-[#113f67] rounded-full inline-block mr-2" />Full-Stack Product Engineering
            </h3>
            <p className="text-sm text-[#232d4b] mt-1">From frontend experiences and backend APIs to scalable cloud services.</p>
          </div>
          <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-lg font-bold text-[#113f67] flex items-center justify-end gap-2 group-hover:underline">
              <span className="w-1 h-8 bg-[#113f67] rounded-full inline-block mr-2" />Modern Monitoring &amp; Platform Analytics
            </h3>
            <p className="text-sm text-[#232d4b] mt-1">Real-time observability, alerting dashboards, and performance insights.</p>
          </div>
        </div>
        {/* Center image */}
        <div className="relative shrink-0 border-4 border-[#5a83ff] rounded-2xl overflow-hidden shadow-2xl bg-[#d9dee9] w-65 xs:w-80 sm:w-95 h-45 xs:h-55 sm:h-70 flex items-center justify-center animate-float">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
            alt="Technology collaboration"
            fill
            className="object-cover"
          />
        </div>
        {/* Right features */}
        <div className="flex-1 flex flex-col gap-8 text-left pl-0 md:pl-8 w-full max-w-none">
          <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-lg font-bold text-[#113f67] flex items-center gap-2 group-hover:underline">
              Security-First Delivery Approach<span className="w-1 h-8 bg-[#113f67] rounded-full inline-block ml-2" />
            </h3>
            <p className="text-sm text-[#232d4b] mt-1">We prioritize secure architecture, compliance, and resilient deployment pipelines.</p>
          </div>
          <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <h3 className="text-lg font-bold text-[#113f67] flex items-center gap-2 group-hover:underline">
              24/7 Support &amp; Incident Response<span className="w-1 h-8 bg-[#113f67] rounded-full inline-block ml-2" />
            </h3>
            <p className="text-sm text-[#232d4b] mt-1">Round-the-clock monitoring, rapid fixes, and on-call engineering assistance.</p>
          </div>
        </div>
      </div>
      {/* Steps section - full width */}
      <div className="w-full flex flex-col md:flex-row mt-16 pb-16 px-0 gap-8">
        {/* Step 1 */}
        <div className="flex-1 bg-white backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center border-2 border-[#113f67]/30 min-w-0 mb-4 md:mb-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <span className="bg-[#113f67] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">Step 1</span>
          <div className="mb-3 text-4xl text-[#113f67]">{IconBadge ? <IconBadge kind={choosePoints[0]?.icon ?? defaultStepIcons[0]} /> : '🛎️'}</div>
          <h4 className="text-lg font-bold text-[#113f67] mb-1">Select Your Tech Service</h4>
          <p className="text-sm text-[#232d4b] text-center">Choose software development, cloud setup, automation, or data engineering based on your goals.</p>
        </div>
        {/* Step 2 */}
        <div className="flex-1 bg-white backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center border-2 border-[#113f67]/30 min-w-0 mb-4 md:mb-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <span className="bg-[#113f67] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">Step 2</span>
          <div className="mb-3 text-4xl text-[#113f67]">{IconBadge ? <IconBadge kind={choosePoints[1]?.icon ?? defaultStepIcons[1]} /> : '📅'}</div>
          <h4 className="text-lg font-bold text-[#113f67] mb-1">Plan Sprint &amp; Timeline</h4>
          <p className="text-sm text-[#232d4b] text-center">Pick your timeline and we&apos;ll align the technical roadmap, milestones, and delivery plan.</p>
        </div>
        {/* Step 3 */}
        <div className="flex-1 bg-white backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center border-2 border-[#113f67]/30 min-w-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <span className="bg-[#113f67] text-white text-xs font-bold px-4 py-1 rounded-full mb-4">Step 3</span>
          <div className="mb-3 text-4xl text-[#113f67]">{IconBadge ? <IconBadge kind={choosePoints[2]?.icon ?? defaultStepIcons[2]} /> : '🏠'}</div>
          <h4 className="text-lg font-bold text-[#113f67] mb-1">Build Goes Live</h4>
          <p className="text-sm text-[#232d4b] text-center">Our engineering team ships your solution, monitors performance, and supports scale with confidence.</p>
        </div>
      </div>
    </section>
  );
}
