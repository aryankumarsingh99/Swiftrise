"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function JourneySection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const journeySteps = [
    {
      id: "01",
      title: "The Beginning",
      subtitle: "Building the foundation",
      body: "Our journey started with a focus on solving complex business challenges through technology. By combining strong engineering fundamentals with a forward-thinking mindset, we laid the foundation for building scalable and intelligent systems.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "02",
      title: "The Growth Phase",
      subtitle: "Expanding capability",
      body: "As we expanded, we embraced advancements in Artificial Intelligence, cloud computing, and digital platforms. This enabled us to deliver smarter, faster, and more efficient solutions tailored to modern business needs.",
      image: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "03",
      title: "Innovation & Expansion",
      subtitle: "Creating integrated ecosystems",
      body: "With the development of our flagship platform, SwiftRise, we moved beyond traditional services to create integrated digital ecosystems. Our solutions began to focus not just on execution, but on intelligence, automation, and real-time insights.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "04",
      title: "Where We Are Today",
      subtitle: "Delivering future-ready solutions",
      body: "Today, Swiftrise stands as a technology-driven company delivering scalable, AI-powered solutions that help businesses innovate, adapt, and lead in a digital-first world.",
      image: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "05",
      title: "Looking Ahead",
      subtitle: "Driving the next chapter",
      body: "Our journey continues with a strong commitment to innovation, performance, and impact. We aim to push boundaries, explore new technologies, and build solutions that define the future of digital transformation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const activeStep = journeySteps[imageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % journeySteps.length);
        setFadeOut(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [journeySteps.length]);

  return (
    <section
      className="animate-rise relative overflow-hidden bg-[#113f67] px-0 pb-10 pt-8 text-[#ffffff] [animation-delay:78ms] md:pb-14 md:pt-12"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay background */}
      <style>{`
        @keyframes gradientShift {
          0% { filter: brightness(1) saturate(0.8); }
          50% { filter: brightness(1.1) saturate(1); }
          100% { filter: brightness(1) saturate(0.8); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes rotateBorder {
          0% { background: linear-gradient(0deg, #d4d7e0, #ffffff, #d4d7e0); }
          50% { background: linear-gradient(180deg, #ffffff, #d4d7e0, #ffffff); }
          100% { background: linear-gradient(360deg, #d4d7e0, #ffffff, #d4d7e0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-gradient-shift {
          animation: gradientShift 3s ease-in-out infinite;
        }
        
        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto w-[96vw] max-w-330">
        <p className="text-[1.35rem] tracking-tight text-[#ffffff] animate-fadeInUp">OUR JOURNEY</p>
        <h2 className="mt-2 max-w-[12ch] text-5xl font-medium leading-[1.08] md:text-[4.2rem] animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          From Vision to Intelligent Innovation
          <br />
          
        </h2>
        <p className="mt-4 max-w-[64ch] text-[1.03rem] leading-relaxed text-[#ffffff]/92 animate-fadeInUp" style={{ animationDelay: '160ms' }}>
          Swiftrise Solution Pvt. Ltd. was founded with a clear vision to bridge the gap between emerging technology and real-world application. What began as an ambition to build impactful digital solutions has evolved into a journey of continuous innovation, engineering excellence, and purposeful growth.
        </p>

        <div className="mt-7 grid items-end gap-8 md:mt-8 md:grid-cols-[1fr_1.18fr] md:gap-10">
          <div className="order-2 md:order-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#c9dbff]">{activeStep.id} / 05</p>
            <h3 className="mt-2 text-[2.7rem] font-medium leading-[1.12]">{activeStep.title}</h3>
            <p className="mt-2 text-[1rem] font-semibold tracking-wide text-[#d8e6ff]">{activeStep.subtitle}</p>
            <p className="mt-4 max-w-[56ch] text-[1.06rem] leading-relaxed text-[#ffffff]">
              {activeStep.body}
            </p>

            <div className="mt-10 flex items-center gap-6 text-[1.7rem] text-[#ffffff]">
              <button 
                type="button" 
                aria-label="Previous journey step"
                onClick={() => setImageIndex((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)}
                className="transition hover:opacity-70 hover:scale-110 hover:text-blue-300"
              >
                &larr;
              </button>
              <p className="text-[1.75rem] tracking-tight font-semibold">
                {String(imageIndex + 1).padStart(2, '0')}/<span className="text-[#8e93a2]">05</span>
              </p>
              <button 
                type="button"
                aria-label="Next journey step"
                onClick={() => setImageIndex((prev) => (prev + 1) % journeySteps.length)}
                className="transition hover:opacity-70 hover:scale-110 hover:text-blue-300"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="relative order-1 overflow-hidden border-6 border-[#d4d7e0] shadow md:order-2 group animate-fadeInUp animate-gradient-shift" style={{ animationDelay: '300ms' }}>
            <div className="relative h-72 w-full sm:h-80 md:h-96 overflow-hidden">
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                width={1800}
                height={1100}
                className={`h-full w-full object-cover filter brightness-100 transition-all duration-700 ease-in-out ${
                  fadeOut ? "opacity-0 scale-105 blur-md" : "opacity-100 scale-100 blur-0"
                }`}
              />
              {/* Shimmer overlay */}
              <div className="shimmer-overlay group-hover:opacity-100" />
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#113f67]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        <div className="mt-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <div className="relative h-px w-full bg-[repeating-linear-gradient(to_right,#969bab_0_6px,transparent_6px_12px)]" />
          <div className="-mt-1.75 grid grid-cols-5 items-start">
            {journeySteps.map((item, idx) => {
              const active = imageIndex === idx;

              return (
              <div 
                key={item.id} 
                className="text-left group cursor-pointer"
                onClick={() => setImageIndex(idx)}
                style={{ animationDelay: `${500 + idx * 50}ms` }}
              >
                <span
                  className={`mb-2 block size-3 rounded-full transition-all duration-300 mx-auto ${
                    active ? "bg-[#ffffff] shadow-lg shadow-white/50 animate-pulse-slow scale-125" : "bg-[#838383] group-hover:scale-150 group-hover:shadow-md group-hover:shadow-[#838383]/50"
                  }`}
                  aria-hidden="true"
                />
                <p className={`text-[1.65rem] tracking-tight transition-all duration-300 font-semibold ${active ? "text-[#ffffff] font-bold" : "text-[#8e93a2] group-hover:text-[#ffffff]"}`}>{item.id}</p>
              </div>
              );
            })}
          </div>
        </div>

        <p className="mt-8 max-w-[68ch] text-[1rem] leading-relaxed text-[#ffffff]/92 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
          Every step of our journey reflects our commitment to engineering intelligent systems that drive progress and create lasting value.
        </p>
      </div>
    </section>
  );
}