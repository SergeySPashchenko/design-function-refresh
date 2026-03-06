import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/design-function-refresh/assets/lab.png" alt="Natural supplements and herbs" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6"
        >
          Idingo LLC · Est. 2008
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-8"
        >
          Natural Formulas
          <br />
          <span className="italic font-normal">Based on Science</span>
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-10"
        >
          Your #1 health advocate — optimizing wellness through pure, organic, science-backed supplements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-colors"
          >
            Discover More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
