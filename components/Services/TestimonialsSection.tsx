const testimonials = [
  {
    quote:
      "SwiftRise combines strong engineering standards with fast execution. From sprint one, we had complete visibility into delivery, quality, and release progress.",
    author: "PK Argo",
    role: "Akasha  Madi",
  },
  {
    quote:
      "They modernized our legacy platform with zero downtime. Performance improved immediately, and our team now ships features with confidence.",
    author: "rajlaxmi",
    role: " Rajat Mahapatra",
  } 
];

export default function TestimonialsSection() {
  return (
    <section className="animate-rise relative overflow-hidden px-0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10" />

      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <svg className="absolute left-0 top-0 z-0 h-64 w-64 text-indigo-200 opacity-60" fill="none" viewBox="0 0 320 320">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="320" height="320" fill="url(#dots)" />
        </svg>
        <svg className="absolute bottom-0 right-0 z-0 h-64 w-64 text-indigo-200 opacity-60" fill="none" viewBox="0 0 320 320">
          <defs>
            <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="320" height="320" fill="url(#dots2)" />
        </svg>
      </div>

      <div className="relative mx-auto w-[92vw] max-w-7xl">
        
        <h2 className="font-playfair-display mb-12 max-w-[32ch] text-3xl font-extrabold text-slate-900 drop-shadow-sm md:text-5xl">
          Technology partnerships built on <span className="text-indigo-700">engineering excellence</span> and <span className="text-cyan-600">reliable delivery</span>.
        </h2>
        <p className="-mt-8 mb-10 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          From cloud-native architecture to AI-enabled workflows, we help teams launch faster, scale securely, and maintain
          long-term product stability.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <div
              key={item.author}
              className="animate-rise relative flex flex-col overflow-hidden rounded-2xl border border-indigo-100 bg-white/90 p-8 shadow-xl md:p-12"
              style={{ animationDelay: `${120 + idx * 80}ms` }}
            >
              <div className="absolute left-0 top-0 h-full w-2 rounded-l-2xl bg-linear-to-b from-indigo-400 via-blue-400 to-cyan-300" />
              <blockquote className="relative z-10">
                <p className="mb-8 text-xl font-medium italic leading-relaxed text-slate-800">&quot;{item.quote}&quot;</p>
                <footer className="flex flex-col gap-0.5">
                  {item.author === 'PK Argo' ? (
                    <a
                      href="https://pkagroindustries.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-indigo-700 hover:underline hover:text-indigo-900"
                      style={{ textDecoration: 'none' }}
                    >
                      {item.author}
                    </a>
                  ) : item.author === 'rajlaxmi' ? (
                    <a
                      href="https://rajlaxmiwoodenfurniture.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-indigo-700 hover:underline hover:text-indigo-900"
                      style={{ textDecoration: 'none' }}
                    >
                      {item.author}
                    </a>
                  ) : (
                    <span className="text-lg font-semibold text-indigo-700">{item.author}</span>
                  )}
                  <span className="text-sm text-slate-500">{item.role}</span>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
