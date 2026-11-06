import Banner from "@/components/home/Banner";
import CTA from "@/components/home/CTA";
import JobFeature from "@/components/home/JobFeature";
import PriceSection from "@/components/pricing/PriceSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <JobFeature />
      <PriceSection />
      <CTA />
    </div>
  );
}
