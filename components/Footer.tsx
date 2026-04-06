import Link from "next/link";

export default function Footer() {
  return (
    <footer className="animate-rise bg-[#0d1b36] px-0 pt-14 pb-6 text-[#c5d3e8] [animation-delay:360ms]">
      <div className="mx-auto w-[92vw] max-w-7xl">

        {/* ── Top grid ── */}
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 inline-flex items-center gap-3">
              <img
                src="/logo.png"
                alt="ECI Logo"
                className="h-15 w-auto object-contain"
              />
             </div>
            <p className="text-lg leading-relaxed text-white/60 sm:text-xl">
              Built on trust, designed for tomorrow. Planning, building, and modernising the environments where growth happens.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {[
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Twitter / X", path: "M4 4l16 16M4 20L20 4" },
                { label: "Instagram", path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a4 4 0 100 8 4 4 0 000-8zm4.5-1a.7.7 0 100 1.4.7.7 0 000-1.4z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid size-8 place-items-center rounded-full border border-white/20 text-white/50 transition hover:border-white/60 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                    <path d={s.path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-white/40">Company</h3>
            <ul className="grid gap-2.5 text-lg">
              {[
                  { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/news", label: "News" },
                { href: "/contact", label: "Contact" }
                
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-white/40">Services</h3>
            <ul className="grid gap-2.5 text-lg">
              {[
                "Architecture & Design",
                "Engineering & Build",
                "Digital Operations",
                "Infrastructure",
                "Strategic Consulting",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 transition hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-white/40">Contact</h3>
            <address className="grid gap-3 text-lg not-italic text-white/60">
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true">
                  <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>33/11, Star House, Lane-4, Bhagabat Sandhan Colony, Rasulgarh, Bhubaneswar, Odisha - 751010</span>
              </p>
              <p className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 text-white/70" aria-hidden="true">
                  <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1.3 1.3 0 011.3-.3c1 .34 2.07.52 3.2.52a1.3 1.3 0 011.3 1.3V20a1.3 1.3 0 01-1.3 1.3C10.8 21.3 2.7 13.2 2.7 3.3A1.3 1.3 0 014 2h3.3A1.3 1.3 0 018.6 3.3c0 1.13.18 2.2.52 3.2.13.45.01.94-.3 1.3l-2.22 2.2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="tel:+917008796745" className="transition hover:text-white">+91 70087 96745</a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 text-white/70" aria-hidden="true">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M4 8l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="mailto:contactswiftrise@gmail.com" className="transition hover:text-white">contactswiftrise@gmail.com</a>
              </p>
              <p>Mon – Fri, 9:00 AM – 6:00 PM</p>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-base text-white/40">
          <p>&copy; {new Date().getFullYear()} SwiftRise Solution PVT. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/services#privacy-policy" className="transition hover:text-white/70">Privacy Policy</Link>
            <Link href="/services#terms-of-service" className="transition hover:text-white/70">Terms of Service</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}
