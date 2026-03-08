import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({ title: "IDINGO — Science-Backed Natural Supplements", description: "Pure, organic, science-backed supplements designed for optimal health. Trusted by thousands worldwide. Est. 2008." });
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ExpertiseSection />
          <ProcessSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
