"use client";


import { useEffect, useRef, useState } from "react";

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showContent, setShowContent] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setShowContent(true);
        } else {
          // Add a small delay before hiding for smooth fade-out
          timeoutRef.current = setTimeout(() => setShowContent(false), 400);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-[90vh] py-20 md:py-32 bg-linear-to-b from-white via-[#f4f8fc] to-white relative overflow-hidden">
      {/* Animated background style and elements (from FoundationSection) */}
      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-120px); }
        }
        @keyframes bubbleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-40px) scale(1.1); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        @keyframes gradPulse {
          0% { opacity: 0.18; }
          50% { opacity: 0.32; }
          100% { opacity: 0.18; }
        }
        .slide-in-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1);
        }
        .slide-in-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1);
        }
        .slide-in-active {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        @keyframes cardBorderPulse {
          0% { box-shadow: 0 0 0 0 rgba(17, 63, 103, 0.16); }
          50% { box-shadow: 0 0 0 10px rgba(17, 63, 103, 0); }
          100% { box-shadow: 0 0 0 0 rgba(17, 63, 103, 0); }
        }
        .offer-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .offer-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #113f67 0%, #2c6da3 100%);
          transform: scaleX(0.35);
          transform-origin: left;
          transition: transform 0.45s ease;
        }
        .offer-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%);
          transform: translateX(-120%);
          transition: transform 0.65s ease;
          pointer-events: none;
        }
        .offer-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 36px rgba(17, 63, 103, 0.22);
          border-color: #2c6da3;
          animation: cardBorderPulse 1.3s ease-out;
        }
        .offer-card:hover::before {
          transform: scaleX(1);
        }
        .offer-card:hover::after {
          transform: translateX(120%);
        }
        .offer-card h4 {
          transition: color 0.35s ease, transform 0.35s ease;
        }
        .offer-card:hover h4 {
          color: #0b3355;
          transform: translateX(2px);
        }
        .section-glow-title {
          position: relative;
          display: inline-block;
          text-shadow: 0 6px 20px rgba(17, 63, 103, 0.18);
        }
      `}</style>

      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 1200 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="techLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#113f67" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#113f67" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#113f67" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0 150H1200" stroke="url(#techLineGradient)" strokeWidth="2" />
          <path d="M0 350H1200" stroke="url(#techLineGradient)" strokeWidth="2" />
          
        </svg>

        <svg
          className="absolute left-8 top-10 h-72 w-72 opacity-200"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "gradPulse 8s ease-in-out infinite" }}
          aria-hidden="true"
        >
          <circle cx="160" cy="160" r="110" stroke="#113f67" strokeOpacity="2.2" strokeWidth="2.5" strokeDasharray="8 10" />
          <circle cx="160" cy="160" r="78" stroke="#2c6da3" strokeOpacity="2.24" strokeWidth="2" />
          <path d="M160 50V270" stroke="#113f67" strokeOpacity="2.14" strokeWidth="2" />
          <path d="M50 160H270" stroke="#113f67" strokeOpacity="2.14" strokeWidth="2" />
        </svg>

        <svg
          className="absolute right-4 bottom-6 h-64 w-80 opacity-95"
          viewBox="0 0 420 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "waveMove 24s linear infinite" }}
          aria-hidden="true"
        >
          <path d="M12 198C90 120 154 255 232 198C302 145 347 235 410 192" stroke="#113f67" strokeOpacity="1.22" strokeWidth="4" strokeLinecap="round" />
          <path d="M15 230C95 158 156 274 234 230C308 188 352 266 408 230" stroke="#2c6da3" strokeOpacity="1.26" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 9" />
          <circle cx="84" cy="124" r="6" fill="#113f67" fillOpacity="1.22" />
          <circle cx="206" cy="90" r="8" fill="#2c6da3" fillOpacity="1.24" />
          <circle cx="332" cy="130" r="6" fill="#113f67" fillOpacity="1.2" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-[#113f67]/6 to-transparent" />
        <div className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-[#113f67]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-[#2c6da3]/10 blur-3xl" />

        <div style={{
          position: 'absolute',
          left: '12%',
          top: '18%',
          width: '60px',
          height: '60px',
          background: '#113f67',
          borderRadius: '50%',
          filter: 'blur(1px)',
          zIndex: 2,
          animation: 'bubbleFloat 3s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          right: '8%',
          top: '32%',
          width: '46px',
          height: '46px',
          background: '#113f67',
          borderRadius: '50%',
          filter: 'blur(1.5px)',
          zIndex: 2,
          animation: 'bubbleFloat 9s 1.5s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          left: '30%',
          bottom: '8%',
          width: '44px',
          height: '44px',
          background: '#113f67',
          borderRadius: '50%',
          filter: 'blur(1.5px)',
          zIndex: 2,
          animation: 'bubbleFloat 11s 2.5s ease-in-out infinite',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Section */}
        <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`}>
          <p className="inline-flex rounded-full border border-[#113f67]/25 bg-[#113f67]/8 px-4 py-1 text-sm sm:text-base tracking-widest text-[#113f67] mb-4">WHAT WE OFFER</p>
          <h2 className="section-glow-title text-3xl sm:text-5xl md:text-6xl font-bold text-[#113f67] mb-10 leading-tight">Delivering Intelligent Solutions for a Digital-First World</h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg md:text-lg max-w-3xl">At Swiftrise Solution Pvt. Ltd., we offer a comprehensive suite of technology solutions designed to empower businesses with scalability, intelligence, and performance. Our offerings are built to address modern challenges while enabling future-ready growth through innovation and precision engineering.</p>
        </div>

        {/* Offerings Grid */}
        <div className="space-y-12">
          <h3 className={`text-2xl sm:text-3xl font-semibold text-[#113f67] slide-in-left${showContent ? ' slide-in-active' : ''}`}>Our Offerings</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Offering 1 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">Advanced Digital Engineering</h4>
                <p className="text-gray-600 text-sm sm:text-base">We develop robust, scalable, and high-performance applications tailored to meet evolving business demands, ensuring seamless functionality and superior user experience.</p>
              </div>
            </div>

            {/* Offering 2 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">AI & Machine Learning Solutions</h4>
                <p className="text-gray-600 text-sm sm:text-base">Harness the power of artificial intelligence to automate processes, gain predictive insights, and enable data-driven decision-making across your organization.</p>
              </div>
            </div>

            {/* Offering 3 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">Web & Platform Development</h4>
                <p className="text-gray-600 text-sm sm:text-base">We create responsive, secure, and scalable web platforms that deliver exceptional user experiences and support business scalability.</p>
              </div>
            </div>

            {/* Offering 4 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">Mobile Application Development</h4>
                <p className="text-gray-600 text-sm sm:text-base">From concept to deployment, we build intuitive and high-performance mobile applications designed for engagement and efficiency.</p>
              </div>
            </div>

            {/* Offering 5 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">Cloud & DevOps Enablement</h4>
                <p className="text-gray-600 text-sm sm:text-base">Accelerate your digital transformation with secure cloud infrastructure, continuous integration pipelines, and optimized deployment strategies.</p>
              </div>
            </div>

            {/* Offering 6 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.6s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">Smart Systems & IoT Solutions</h4>
                <p className="text-gray-600 text-sm sm:text-base">Enable intelligent connectivity with real-time data processing and automated systems for smarter operations and enhanced efficiency.</p>
              </div>
            </div>

            {/* Offering 7 */}
            <div className={`slide-in-left${showContent ? ' slide-in-active' : ''}`} style={{ transitionDelay: '0.7s' }}>
              <div className="offer-card bg-white border-4 border-[#113f67] rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-[#113f67] mb-3">Data Analytics & Insights</h4>
                <p className="text-gray-600 text-sm sm:text-base">Transform raw data into actionable intelligence with advanced analytics, visualization, and reporting tools.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className={`bg-linear-to-r from-[#113f67]/5 to-[#22547f]/5 rounded-lg p-8 border-l-4 border-[#113f67] slide-in-left${showContent ? ' slide-in-active' : ''}`}>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl">Our offerings are designed not just to solve problems—but to create intelligent, scalable ecosystems that drive long-term business success.</p>
        </div>
      </div>
    </section>
  );
}
