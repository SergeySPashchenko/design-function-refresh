import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <StatsSection />
      <ExpertiseSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
