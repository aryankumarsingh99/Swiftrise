"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full text-[0.98rem] text-white transition-colors duration-300 py-3 sm:py-4 lg:pt-6 lg:pb-0 ${
        scrolled ? "bg-[#113f67]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center w-full px-4 sm:px-6 lg:px-12">
        {/* Logo + Desktop Nav Group */}
        <div className="flex items-center gap-8 lg:gap-16 xl:gap-24 ml-0 lg:ml-24 xl:ml-32 2xl:ml-18">
          <Link href="/" aria-label="ECI home" className="shrink-0">
            <img
              src="/logo.png"
              alt="ECI Logo"
              className="h-9 w-auto object-contain sm:h-10 md:h-9 lg:h-11 xl:h-13 2xl:h-15"
            />
          </Link>
          <nav
            className="hidden lg:flex items-center font-bold lg:gap-8 lg:text-[0.98rem] xl:gap-10 xl:text-[1.1rem] 2xl:gap-12 2xl:text-[1.2rem]"
            style={{ fontFamily: "var(--font-playfair-display), serif" }}
            aria-label="Hero navigation"
          >
            {[
              { href: "/", label: "HOME" }, 
              { href: "/about", label: "ABOUT US" },
              { href: "/services", label: "SERVICES" },
              { href: "/news", label: "NEWS" },
              { href: "/contact", label: "CONTACT" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  `group relative transition pb-1 ${pathname === item.href ? "text-white font-bold " : ""}`
                }
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-white transition-all duration-300 origin-left
                    ${pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            ))}
          </nav>
        </div>
        {/* Mobile Hamburger */}
        <div className="flex-1 flex justify-end lg:hidden">
          <button
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1 focus:outline-none"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>




      
      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[min(82vw,22rem)] transform bg-[#0d1b36] shadow-lg transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ boxShadow: menuOpen ? "-4px 0 24px rgba(0,0,0,0.18)" : "none" }}
      >
        <button
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <nav
          className="mt-20 flex flex-col items-center justify-center gap-8 text-lg sm:text-xl md:text-lg"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
          aria-label="Mobile navigation"
        >
          <Link className="transition hover:text-white" href="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link className="transition hover:text-white" href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link className="transition hover:text-white" href="/services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </Link>
          
          
          <Link className="transition hover:text-white" href="/news" onClick={() => setMenuOpen(false)}>
            NEWS
          </Link>
          <Link className="transition hover:text-white" href="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </nav>
      </div>
      {/* Overlay for menu */}
      {menuOpen && (
        <div
            className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}