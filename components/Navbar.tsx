"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`flex items-center fixed top-0 left-0 w-full z-50 justify-between pt-6 gap-4 text-[0.98rem] text-white/90 px-6 md:px-29 transition-colors duration-300 ${
        scrolled ? "bg-[#113f67]" : "bg-transparent"
      }`}
    >
      <Link href="/" aria-label="ECI home">
        <img
          src="/logo.png"
          alt="ECI Logo"
          className="h-10 w-auto object-contain sm:h-15"
        />
      </Link>
      {/* Desktop Nav */}
      <nav className="hidden items-center gap-8 text-[1.05rem] md:flex" aria-label="Hero navigation">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/services", label: "Service" },
          { href: "/projects", label: "Projects" },
          { href: "/team", label: "Team" },
          { href: "/news", label: "News" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              `group relative transition pb-1 ${pathname === item.href ? "text-white font-semibold" : ""}`
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
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 focus:outline-none"
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
      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-[#0d1b36] shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ boxShadow: menuOpen ? "-4px 0 24px rgba(0,0,0,0.18)" : "none" }}
      >
        <button
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col items-center justify-center gap-8 mt-20 text-xl" aria-label="Mobile navigation">
          <Link className="transition hover:text-white" href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link className="transition hover:text-white" href="/services" onClick={() => setMenuOpen(false)}>
            Service
          </Link>
          <Link className="transition hover:text-white" href="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link className="transition hover:text-white" href="/team" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
          <Link className="transition hover:text-white" href="/news" onClick={() => setMenuOpen(false)}>
            News
          </Link>
          <Link className="transition hover:text-white" href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
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