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
            <p className="text-sm leading-relaxed text-white/60">
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Company</h3>
            <ul className="grid gap-2.5 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Careers" },
                { href: "/contact", label: "Press & Media" },
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Services</h3>
            <ul className="grid gap-2.5 text-sm">
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Contact</h3>
            <address className="grid gap-3 text-sm not-italic text-white/60">
              <p>45 Innovation Avenue<br />New York, NY 10018</p>
              <p>
                <a href="tel:+12125550188" className="transition hover:text-white">  +1 212 555 0188</a>
              </p>
              <p>
                <a href="mailto:hello@aurevia.com" className="transition hover:text-white">hello@aurevia.com</a>
              </p>
              <p>Mon – Fri, 9:00 AM – 6:00 PM</p>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Aurevia Group. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="transition hover:text-white/70">Privacy Policy</Link>
            <Link href="/contact" className="transition hover:text-white/70">Terms of Service</Link>
            <Link href="/contact" className="transition hover:text-white/70">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
