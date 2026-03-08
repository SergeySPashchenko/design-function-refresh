import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Beaker, Leaf, Brain, Heart, Shield, Zap, FlaskConical, Microscope, Sprout, Search, TestTubes, PackageCheck, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import botanicalHero from "@/assets/botanical-hero.jpg";

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

const researchJourney = [
  {
    step: "01",
    title: "Selection & Sourcing",
    desc: "We use only bioactive dietary supplements backed by clinical evidence. Each raw material is selected for maximum potency and purity — no fillers, no synthetics.",
    detail: "Soil quality, seasonality, and harvest timing are controlled to ensure peak concentration of active compounds.",
    icon: Sprout,
  },
  {
    step: "02",
    title: "Extraction & Standardization",
    desc: "Raw materials undergo gentle water-ethanol or CO₂ extraction to preserve their full phytochemical profile. Each extract is standardized to precise active compound percentages.",
    detail: "For example, Ashwagandha is standardized to ≥5% withanolides, Curcumin — to 95% curcuminoids.",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "Laboratory Analysis",
    desc: "Independent labs conduct full-spectrum testing: heavy metals, microbiology, pesticides, solvents, and identity verification via HPLC/mass spectrometry.",
    detail: "Every batch receives a Certificate of Analysis (CoA) with detailed results.",
    icon: Microscope,
  },
  {
    step: "04",
    title: "Clinical Validation",
    desc: "We analyze peer-reviewed studies from PubMed and clinical trials to determine optimal dosages and synergies between ingredients.",
    detail: "Each product is based on a minimum of 3–5 randomized controlled studies.",
    icon: Search,
  },
  {
    step: "05",
    title: "Bioavailability & Formulation",
    desc: "Ingredients are combined with bioavailability enhancers — piperine for curcumin, liposomal technology for vitamins, chelated mineral forms.",
    detail: "This increases absorption up to 20× compared to standard forms.",
    icon: TestTubes,
  },
  {
    step: "06",
    title: "Final QC & Release",
    desc: "The finished product undergoes final stability testing, microbiological contamination screening, and label compliance verification before sealing.",
    detail: "Every jar has a unique batch number for full traceability.",
    icon: PackageCheck,
  },
];

const steps = [
  { label: "Active Ingredients", desc: "Clinically validated bioactive compounds" },
  { label: "Capsule Formation", desc: "Precision-dosed vegetable capsules" },
  { label: "Quality Testing", desc: "Third-party lab verified purity" },
  { label: "Final Product", desc: "Sealed and shipped fresh to you" },
];

function TimelineStep({ item, index, total }: { item: typeof researchJourney[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });
  const [isActive, setIsActive] = useState(false);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsActive(v > 0.3);
  });

  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  // Mobile: single column, all content on right
  // Desktop: zigzag left/right
  return (
    <div ref={ref} className="relative">
      {/* MOBILE layout */}
      <div className="md:hidden grid grid-cols-[48px_1fr] items-start gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${
              isActive ? "bg-primary shadow-lg shadow-primary/30" : "bg-card border-2 border-border"
            }`}
          >
            <Icon className={`w-5 h-5 transition-colors duration-500 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
          </motion.div>
          {index < total - 1 && (
            <div className="relative w-0.5 flex-1 min-h-[40px] bg-border">
              <motion.div
                className="absolute inset-0 origin-top bg-primary"
                style={{ scaleY: lineScaleY }}
              />
            </div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pb-8"
        >
          <span className="font-display text-3xl font-bold text-primary/15">{item.step}</span>
          <h3 className="font-display text-lg font-bold text-foreground -mt-1 mb-2">{item.title}</h3>
          <p className="text-muted-foreground font-body leading-relaxed mb-3 text-sm">{item.desc}</p>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isActive ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
              <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground font-body">{item.detail}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* DESKTOP layout */}
      <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-start">
        {/* Left content */}
        <div className={isLeft ? "pr-8" : ""}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-right"
            >
              <span className="font-display text-6xl font-bold text-primary/10">{item.step}</span>
              <h3 className="font-display text-2xl font-bold text-foreground -mt-2 mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-3">{item.desc}</p>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isActive ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10 justify-end">
                  <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0 rotate-180" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Center timeline */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
              isActive ? "bg-primary shadow-lg shadow-primary/30" : "bg-card border-2 border-border"
            }`}
          >
            <Icon className={`w-6 h-6 transition-colors duration-500 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
          </motion.div>
          {index < total - 1 && (
            <div className="relative w-0.5 flex-1 min-h-[80px] bg-border">
              <motion.div
                className="absolute inset-0 origin-top bg-primary"
                style={{ scaleY: lineScaleY }}
              />
            </div>
          )}
        </div>

        {/* Right content */}
        <div className={!isLeft ? "pl-8" : ""}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="font-display text-6xl font-bold text-primary/10">{item.step}</span>
              <h3 className="font-display text-2xl font-bold text-foreground -mt-2 mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-3">{item.desc}</p>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isActive ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  useSEO({ title: "The IDINGO Experience — From Nature to Science", description: "Explore IDINGO's research journey: ingredient sourcing, lab analysis, clinical validation, and bioavailability-enhanced formulations." });
  const assemblyRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImgY }}>
          <img src={botanicalHero} alt="Botanical research ingredients" className="w-full h-full object-cover scale-[1.15]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            The IDINGO Experience
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            From Nature<br />
            <span className="italic font-normal text-primary">to Science</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            From ingredient research to lab analysis — every compound is rigorously tested before it reaches you.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex gap-4">
            <a href="#research-journey" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105">
              Research
            </a>
            <a href="#science" className="px-8 py-4 border border-white/30 text-white font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-300">
              Ingredients
            </a>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH JOURNEY — Interactive Timeline */}
      <section id="research-journey" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-20">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Research Process</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              From Plant to <span className="italic text-primary">Formula</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Every IDINGO product goes through 6 stages of research and quality control — from raw material to your shelf.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {researchJourney.map((item, i) => (
              <TimelineStep key={item.step} item={item} index={i} total={researchJourney.length} />
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-32 bg-card">
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
      <section id="science" className="py-24 md:py-32">
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
                <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5">
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
      <section ref={assemblyRef} className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Process</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Precision <span className="italic text-primary">formulation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div key={step.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative p-6 rounded-2xl bg-background border border-border text-center group hover:border-primary/40 transition-all duration-300">
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
      <section id="products" className="py-24 md:py-32">
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
                <motion.div key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
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
      <section id="research" className="py-24 md:py-32 bg-card">
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
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-background border border-border">
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
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
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