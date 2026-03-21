import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import ChooseUsSection from "@/components/home/ChooseUsSection";
import CareersSection from "@/components/home/CareersSection";
import NewsletterSection from "@/components/home/NewsletterSection";

function IconBadge({ kind }: { kind: "draft" | "gear" | "factory" | "chart" | "shield" | "team" | "target" | "time" }) {
  const base = "size-5";

  if (kind === "draft") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 16l5-11 5 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "gear") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M12 8.6a3.4 3.4 0 100 6.8 3.4 3.4 0 000-6.8z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M19 12a6.9 6.9 0 00-.1-1.2l2-1.6-2-3.4-2.5 1a7 7 0 00-2.1-1.2L14 3h-4l-.3 2.6a7 7 0 00-2.1 1.2l-2.5-1-2 3.4 2 1.6A7.2 7.2 0 005 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.5-1a7 7 0 002.1 1.2L10 21h4l.3-2.6a7 7 0 002.1-1.2l2.5 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "factory") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 20V9l6 3V9l6 3V6h2v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "chart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 16v-4M12 16V8M17 16v-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.6-2.8 7.9-7 10-4.2-2.1-7-5.4-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <path d="M8 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 19a4 4 0 018 0M12 19a4 4 0 018 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  const imageSet = {
    hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    partner: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",
    journey: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
    about: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    team1: "https://images.unsplash.com/photo-1519340333755-afc1f9e8d8c7?auto=format&fit=crop&w=800&q=80",
    team2: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
    team3: "https://images.unsplash.com/photo-1508214757746-8b2b0a6a3c4a?auto=format&fit=crop&w=800&q=80",
    team4: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    team5: "https://images.unsplash.com/photo-1517841905240-472c7ca8c0b8?auto=format&fit=crop&w=800&q=80",
    portfolioA: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    portfolioB: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    portfolioC: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    blogA: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    blogB: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    blogC: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  };

  const choosePoints = [
    { icon: "team", title: "Integrated Teams", text: "Cross-functional specialists from concept to commissioning." },
    { icon: "shield", title: "Trusted Governance", text: "Classic accountability standards with modern delivery tools." },
    { icon: "target", title: "Outcome Focus", text: "Planning frameworks tied to measurable business value." },
    { icon: "time", title: "Long-Term Partnership", text: "Support beyond handover with optimization and scaling guidance." },
  ];

  return (
    <>
      <HeroSection imageSet={imageSet} />
      <StatsSection />
      <AboutSection />
      <TeamSection />
      <ChooseUsSection choosePoints={choosePoints} IconBadge={IconBadge} />
      <CareersSection />
      <NewsletterSection />
    </>
  );
}
