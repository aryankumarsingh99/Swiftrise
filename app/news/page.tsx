import FeaturedNewsSection from "@/components/News/FeaturedNewsSection";
import HeroSection from "@/components/News/HeroSection";
import LatestNewsSection from "@/components/News/LatestNewsSection";
import SubscribeBannerSection from "@/components/News/SubscribeBannerSection";

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
