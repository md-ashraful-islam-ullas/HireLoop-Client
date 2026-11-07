import Banner from "@/components/home/Banner";
import CTA from "@/components/home/CTA";
import JobFeature from "@/components/home/JobFeature";
import PriceSection from "@/components/pricing/PriceSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <JobFeature />
      <PriceSection />
      <CTA />
      <Footer />
    </div>
  );
}
