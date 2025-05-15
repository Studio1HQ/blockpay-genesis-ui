
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BottomToolbar from "@/components/BottomToolbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-teal-900 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <Footer />
      <BottomToolbar />
    </div>
  );
};

export default Index;
