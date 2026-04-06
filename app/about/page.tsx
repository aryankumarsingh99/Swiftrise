import HeroSection from "@/components/About/HeroSection";
import MilestonesSection from "@/components/About/MilestonesSection";
import JourneySection from "@/components/About/JourneySection";
import ProcessSection from "@/components/About/ProcessSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SwiftRise, our delivery philosophy, project milestones, and the engineering values that guide every client engagement.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MilestonesSection />
      <JourneySection />
      <ProcessSection />
    </>
  );
}
