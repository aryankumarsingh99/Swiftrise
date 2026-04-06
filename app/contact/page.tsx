import HeroSection from "@/components/Contact/HeroSection";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import MapSection from "@/components/Contact/MapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SwiftRise to discuss software development, cloud transformation, automation, and technology consulting requirements.",
  alternates: {
    canonical: "/contact",
  },
};

type ContactPageProps = {
  searchParams?: Promise<{ status?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = (await searchParams) || {};

  return (
    <>
      <HeroSection />

      <ContactFormSection status={params.status} />
      <MapSection />
    </>
  );
}
