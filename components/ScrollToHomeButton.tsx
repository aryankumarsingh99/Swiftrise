"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ScrollToHomeButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMessageClick = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      const whatsappUrl = "https://wa.me/+919583245585";
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`fixed bottom-12 right-8 z-70 flex flex-col gap-3 transition-all duration-300 sm:bottom-16 sm:right-10 ${
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
       
 
      <button
        type="button"
        aria-label="Scroll to home section"
        onClick={handleClick}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#12395c]/35 bg-[#12395c] text-[#ffffff] shadow-[0_10px_24px_rgba(18,57,92,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#12395c]/55 hover:bg-linear-to-b hover:from-[#73bcfb] hover:to-[#12395c]"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
}
