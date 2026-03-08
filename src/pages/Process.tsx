import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Beaker, Leaf, PackageCheck, ShieldCheck, Truck, FlaskConical } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import processHero from "@/assets/process-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const processSteps = [
  { num: "01", title: "We Listen", desc: "It starts with understanding what your body needs. We research, test, and iterate until the science says 'yes'.", icon: Leaf },
  { num: "02", title: "We Formulate", desc: "Our team blends bioactive compounds into synergistic formulas that your body actually absorbs.", icon: FlaskConical },
  { num: "03", title: "We Test", desc: "Every batch undergoes rigorous third-party testing for purity, potency, and safety before production.", icon: ShieldCheck },
  { num: "04", title: "We Produce", desc: "GMP-certified facilities ensure pharmaceutical-grade quality in every single capsule we make.", icon: Beaker },
  { num: "05", title: "We Deliver", desc: "From our facilities to your doorstep — fresh, tested, and ready to work for you.", icon: Truck },
  { num: "06", title: "We Educate", desc: "Because an informed customer is our best customer. We share the science behind every capsule.", icon: PackageCheck },
];

const certifications = [
  { label: "GMP Certified", desc: "Good Manufacturing Practice standards" },
  { label: "ISO 22000", desc: "Food safety management systems" },
  { label: "Third-Party Tested", desc: "Independent laboratory verification" },
  { label: "FDA Registered", desc: "Compliant facility registration" },
];

const Process = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={processHero} alt="IDINGO manufacturing facility" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            Our Process
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Precision at
            <br />
            <span className="italic font-normal text-primary">Every Step</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            From concept to capsule — a rigorous journey through science, testing, and quality control.
          </motion.p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">How We Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Your journey <span className="italic text-primary">with us</span>
            </h2>
          </motion.div>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Progress line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px">
              <motion.div className="absolute top-0 left-0 w-full bg-primary origin-top" style={{ height: lineHeight }} />
            </div>

            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * i }}
                  className={`relative flex items-start gap-8 mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 z-10 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/30 group"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-display text-5xl font-bold text-primary/15">{step.num}</span>
                    <h3 className="font-display text-2xl font-semibold text-foreground -mt-2 mb-3">{step.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Quality Standards</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Certified <span className="italic text-primary">excellence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{cert.label}</h3>
                <p className="text-xs text-muted-foreground font-body">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            See the science behind <span className="italic">every capsule</span>
          </motion.h2>
          <p className="text-primary-foreground/70 text-lg mb-10 font-body max-w-lg mx-auto">
            Explore our ingredients and research methodology in detail.
          </p>
          <a href="/experience" className="inline-flex px-10 py-5 bg-background text-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-background/90 transition-all duration-300 hover:scale-105">
            Explore Experience
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;