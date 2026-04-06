'use client';

import { useState } from 'react';

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using SwiftRise, you agree to be bound by these Terms of Service. If you do not agree, you must not use the platform.",
    ],
  },
  {
    title: "2. Description of Service",
    paragraphs: [
      "SwiftRise provides an event management platform that enables organizers, exhibitors, and attendees to manage events, registrations, communication, and analytics efficiently.",
    ],
  },
  {
    title: "3. User Accounts",
    bullets: [
      "Users must provide accurate and complete information during registration",
      "You are responsible for maintaining the confidentiality of your account credentials",
      "Any activity under your account is your responsibility",
    ],
  },
  {
    title: "4. Use of the Platform",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the service for unlawful or fraudulent purposes",
      "Interfere with system security or operations",
      "Upload harmful, misleading, or unauthorized content",
    ],
  },
  {
    title: "5. Data and Privacy",
    paragraphs: [
      "SwiftRise collects and processes user data such as name, email, phone number, and usage data to improve services and communication.",
      "Data is used to:",
    ],
    bullets: [
      "Provide and maintain services",
      "Improve platform performance",
      "Communicate updates and support",
    ],
  },
  {
    title: "6. Third-Party Sharing",
    paragraphs: ["Information may be shared:"],
    bullets: [
      "With service providers",
      "When legally required",
      "During business transfers (e.g., merger/acquisition)",
    ],
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "All platform content, features, and technology are owned by SwiftRise and protected under applicable laws. Unauthorized use is strictly prohibited.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: ["SwiftRise shall not be liable for:"],
    bullets: [
      "Indirect or consequential damages",
      "Data loss or service interruptions",
      "Unauthorized access beyond reasonable control",
    ],
  },
  {
    title: "9. Termination",
    paragraphs: [
      "SwiftRise reserves the right to suspend or terminate accounts that violate these terms without prior notice.",
    ],
  },
  {
    title: "10. Changes to Terms",
    paragraphs: [
      "Terms may be updated periodically. Continued use of the platform implies acceptance of revised terms.",
    ],
  },
  {
    title: "11. Contact Information",
    paragraphs: ["For support or legal queries:"],
    bullets: ["Email: contactswiftrise@gmail.com"],
  },
];

export default function TermsOfServiceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>

      <section id="terms-of-service" className="relative isolate overflow-hidden scroll-mt-28 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-96 bg-[linear-gradient(180deg,rgba(29,78,216,0.08)_0%,transparent_60%)]" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-100/20 blur-3xl" />
        
        {/* Decorative SVG pattern - top left */}
        <svg className="absolute -top-10 -left-10 h-72 w-72 opacity-75" fill="none" viewBox="0 0 200 200">
          <defs>
            <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid1)" />
        </svg>

        {/* Decorative circles */}
        <div className="absolute top-20 left-1/4 h-3 w-3 rounded-full bg-indigo-400/30 animate-pulse-glow" />
        <div className="absolute top-32 left-1/3 h-2 w-2 rounded-full bg-blue-400/40 animate-float-delayed" />
        <div className="absolute top-40 right-1/4 h-4 w-4 rounded-full bg-cyan-400/20 animate-glow" />
        
        {/* Decorative SVG pattern - bottom right */}
        <svg className="absolute -bottom-16 -right-12 h-80 w-80 opacity-70" fill="none" viewBox="0 0 200 200">
          <defs>
            <pattern id="dots1" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="2" fill="currentColor" className="text-cyan-500" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots1)" />
        </svg>

        {/* Diagonal accent lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <line x1="0" y1="0" x2="1200" y2="800" stroke="currentColor" className="text-indigo-600" strokeWidth="1" />
          <line x1="300" y1="0" x2="1200" y2="500" stroke="currentColor" className="text-blue-500" strokeWidth="1" />
          <line x1="0" y1="200" x2="900" y2="800" stroke="currentColor" className="text-cyan-500" strokeWidth="1" />
        </svg>

        {/* Corner accent elements */}
        <div className="absolute top-10 right-20 h-16 w-16 rounded-full border-2 border-indigo-200/40" />
        <div className="absolute bottom-40 left-16 h-12 w-12 rounded-full border-2 border-cyan-200/30" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-18">
        <header className="mx-auto max-w-7xl text-center">
           
          <h1 className="mt-4 text-[#113f67] font-(--font-playfair-display) text-3xl leading-tight text-[--ink] md:text-5xl">
            SwiftRise Terms of Service
          </h1>
          <p className="mx-auto mt-4 max-w-[72ch] text-sm leading-relaxed text-slate-600 md:text-base">
            This agreement outlines the rules and responsibilities for using SwiftRise, including account conduct, data usage,
            intellectual property, and legal limitations.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">Effective Date: April 5, 2026</p>
        </header>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {termsSections.map((section, idx) => (
            <article
              key={section.title}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
              className="group relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 cursor-pointer md:h-48 sm:h-auto"
            >


              {/* Mobile: Expandable accordion layout */}
              <div className="md:hidden">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white shrink-0">
                      {idx + 1}
                    </div>
                    <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
                  </div>
                  <svg className={`h-5 w-5 text-indigo-600 transition-transform duration-300 shrink-0 ${hoveredIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                {hoveredIndex === idx && (
                  <div className="border-t border-slate-100 px-4 py-4 text-sm text-slate-600 space-y-2">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed">{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-1.5 pt-2">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-1.5">
                            <span className="mt-1 h-1 w-1 rounded-full bg-indigo-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Desktop: Flip card layout */}
              <div className="hidden md:block">

              {/* Front state - Just title and number - Desktop only */}
              <div
                className={`hidden md:flex absolute inset-0 items-center justify-center px-4 transition-all duration-500 ${
                  hoveredIndex === idx ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white shadow-md">
                    {idx + 1}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                </div>
              </div>

              {/* Back state - Full content - Desktop only */}
              <div
                className={`hidden md:flex absolute inset-0 px-4 py-4 flex-col overflow-y-auto transition-all duration-500 ${
                  hoveredIndex === idx ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-tight">{section.title}</h3>

                <div className="flex-1 space-y-2 text-base text-slate-600">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-1.5 pt-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <span className="mt-1 h-1 w-1 rounded-full bg-indigo-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
