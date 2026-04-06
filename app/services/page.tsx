import HeroSection from "@/components/Services/HeroSection";
import ServicesGridSection from "@/components/Services/ServicesGridSection";
import TermsOfServiceSection from "@/components/Services/TermsOfServiceSection";
import PrivacyPolicySection from "@/components/Services/PrivacyPolicySection";
import TestimonialsSection from "@/components/Services/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SwiftRise services including product engineering, cloud infrastructure, platform operations, and digital transformation delivery.",
  alternates: {
    canonical: "/services",
  },
};


export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesGridSection />
     
      {/* <TermsOfServiceSection />
      <PrivacyPolicySection /> */}
       <TestimonialsSection />
    </>
  );
}
