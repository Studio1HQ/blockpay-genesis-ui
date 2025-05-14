
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-teal-900 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
