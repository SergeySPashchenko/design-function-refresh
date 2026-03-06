import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Process = () => {
      return (
            <div className="min-h-screen bg-background">
                  <Navbar />
                  <div className="pt-24">
                        <ProcessSection />
                  </div>
                  <Footer />
            </div>
      );
};

export default Process;
