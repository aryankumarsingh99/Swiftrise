import HeroSection from "@/components/Services/HeroSection";
import ServicesGridSection from "@/components/Services/ServicesGridSection";
import TermsOfServiceSection from "@/components/Services/TermsOfServiceSection";
import PrivacyPolicySection from "@/components/Services/PrivacyPolicySection";
import TestimonialsSection from "@/components/Services/TestimonialsSection";


export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesGridSection />
      <TestimonialsSection />
      <TermsOfServiceSection />
      <PrivacyPolicySection />
    </>
  );
}
