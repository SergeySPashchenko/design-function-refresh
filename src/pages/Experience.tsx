import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Beaker, Leaf, Brain, Heart, Shield, Zap, FlaskConical, Microscope, Sprout, Dna, Atom } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const ingredients = [
  { name: "Ashwagandha", benefit: "Stress & Cortisol", icon: Leaf },
  { name: "NMN", benefit: "Cellular Energy", icon: Zap },
  { name: "Lion's Mane", benefit: "Cognitive Function", icon: Brain },
  { name: "Magnesium L-Threonate", benefit: "Neural Health", icon: FlaskConical },
  { name: "Vitamin D3+K2", benefit: "Bone & Immune", icon: Shield },
  { name: "Omega-3 DHA", benefit: "Brain & Heart", icon: Heart },
  { name: "Rhodiola Rosea", benefit: "Endurance", icon: Leaf },
  { name: "Curcumin C3", benefit: "Inflammation", icon: Beaker },
];

const steps = [
  { label: "Active Ingredients", desc: "Sourced from certified organic farms" },
  { label: "Capsule Formation", desc: "Precision-dosed vegetable capsules" },
  { label: "Quality Testing", desc: "Third-party lab verified purity" },
  { label: "Final Product", desc: "Sealed and shipped fresh to you" },
];

export default function Experience() {
  const assemblyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: assemblyRef,
    offset: ["start end", "end start"],
  });

  const reveal = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated botanical background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          {/* Floating botanical elements */}
          {[Leaf, Sprout, Dna, Atom, Leaf, Sprout].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.05, 0.15, 0.05],
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            >
              <Icon className="w-16 h-16 md:w-24 md:h-24" />
            </motion.div>
          ))}
          {/* Organic circles */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.1, 1], rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full border border-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/40 z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4"
          >
            The IDINGO Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-foreground"
          >
            Optimize Your
            <br />
            <span className="italic font-normal text-primary">Biology</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl font-body"
          >
            Precision formulated nutritional science engineered for human performance and longevity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex gap-4"
          >
            <a href="#science" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105">
              Explore Science
            </a>
            <a href="#products" className="px-8 py-4 border border-border text-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-muted transition-all duration-300">
              View Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 text-foreground">
              Modern life depletes biological <span className="italic text-primary">performance</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                Chronic stress, poor nutrition and sleep deprivation degrade metabolic efficiency at a cellular level.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                IDINGO develops targeted supplement formulations to restore optimal function using evidence-based compounds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCIENCE — Ingredients */}
      <section id="science" className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Ingredients</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Clinically researched <span className="italic text-primary">compounds</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Each ingredient is selected using peer-reviewed research and bioavailability optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {ingredients.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-sm font-semibold mb-1 text-foreground">{item.name}</h3>
                  <p className="text-xs text-muted-foreground font-body">{item.benefit}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORMULATION PROCESS */}
      <section ref={assemblyRef} className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Process</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Precision <span className="italic text-primary">formulation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-6 rounded-2xl bg-card border border-border text-center group hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-display font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="font-display text-base font-semibold mb-2 text-foreground">{step.label}</h3>
                <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Products</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Product <span className="italic text-primary">Line</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Energy", desc: "Mitochondrial support for sustained natural energy throughout your day.", icon: Zap },
              { name: "Recovery", desc: "Accelerate muscle repair and reduce inflammation post-exercise.", icon: Heart },
              { name: "Focus", desc: "Nootropic stack for enhanced concentration and mental clarity.", icon: Brain },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group rounded-2xl bg-background border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">IDINGO {p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 font-body">{p.desc}</p>
                    <button className="text-sm font-semibold text-primary hover:text-accent transition-colors uppercase tracking-wider font-body">
                      View Product →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Transparency</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Transparent <span className="italic text-primary">research</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Ingredient sourcing, laboratory testing and clinical studies are openly published for full transparency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { stat: "56+", label: "Clinical Studies", icon: Microscope },
              { stat: "99.7%", label: "Purity Rate", icon: Beaker },
              { stat: "30+", label: "Products Launched", icon: FlaskConical },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-4" />
                  <p className="font-display text-3xl font-bold text-foreground mb-1">{item.stat}</p>
                  <p className="text-sm text-muted-foreground font-body">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground"
          >
            Start optimizing your <span className="italic">biology</span>
          </motion.h2>
          <p className="text-primary-foreground/70 text-lg mb-10 font-body max-w-lg mx-auto">
            Join thousands who trust IDINGO for their daily wellness routine.
          </p>
          <a href="#products" className="inline-flex px-10 py-5 bg-background text-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-background/90 transition-all duration-300 hover:scale-105">
            Shop Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
