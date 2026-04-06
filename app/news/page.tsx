import FeaturedNewsSection from "@/components/News/FeaturedNewsSection";
import HeroSection from "@/components/News/HeroSection";
import LatestNewsSection from "@/components/News/LatestNewsSection";
import SubscribeBannerSection from "@/components/News/SubscribeBannerSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Read the latest SwiftRise insights, product updates, engineering stories, and announcements from our technology teams.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return (
    <>
      <HeroSection />
      <FeaturedNewsSection />
      <LatestNewsSection />
      <SubscribeBannerSection />
    </>
  );
}
