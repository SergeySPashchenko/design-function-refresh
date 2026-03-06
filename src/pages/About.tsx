import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const About = () => {
      return (
            <div className="min-h-screen bg-background">
                  <Navbar />
                  <div className="pt-24">
                        <AboutSection />
                        <StatsSection />
                  </div>
                  <Footer />
            </div>
      );
};

export default About;
