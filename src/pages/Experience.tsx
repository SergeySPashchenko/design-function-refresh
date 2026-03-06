import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, lazy, Suspense } from "react";

const Scene = lazy(() => import("@/components/three/Scene"));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Experience() {
  const assemblyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: assemblyRef,
    offset: ["start end", "end start"],
  });

  const ingredientsY = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
  const capsuleY = useTransform(scrollYProgress, [0.2, 0.4], [200, 0]);
  const bottleBaseY = useTransform(scrollYProgress, [0.4, 0.6], [200, 0]);
  const capY = useTransform(scrollYProgress, [0.6, 0.8], [-200, 0]);
  const reveal = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div className="bg-[hsl(160,15%,5%)] text-[hsl(40,30%,92%)] min-h-screen font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(160,15%,5%)]/80 backdrop-blur-md border-b border-[hsl(152,20%,15%)]">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="font-display text-2xl font-bold tracking-tight">
            IDINGO<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["Story", "Science", "Products", "Research"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-wider text-[hsl(40,20%,60%)] hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a href="#products" className="hidden md:inline-flex px-6 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-accent transition-colors">
            Shop
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-[hsl(160,15%,5%)]" />}>
            <Scene />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(160,15%,5%)]/90 via-[hsl(160,15%,5%)]/50 to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl"
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
            className="mt-6 text-lg md:text-xl text-[hsl(40,20%,60%)] max-w-xl"
          >
            Precision formulated nutritional science engineered for human performance and longevity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex gap-4"
          >
            <a href="#science" className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-colors">
              Explore Science
            </a>
            <a href="#products" className="px-8 py-4 border border-[hsl(40,20%,30%)] text-[hsl(40,30%,92%)] font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-[hsl(152,20%,10%)] transition-colors">
              View Products
            </a>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-32 border-t border-[hsl(152,20%,12%)]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-10">
              Modern life depletes biological <span className="italic text-primary">performance</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <p className="text-[hsl(40,20%,55%)] text-lg leading-relaxed">
                Chronic stress, poor nutrition and sleep deprivation degrade metabolic efficiency at a cellular level.
              </p>
              <p className="text-[hsl(40,20%,55%)] text-lg leading-relaxed">
                IDINGO develops targeted supplement formulations to restore optimal function using evidence-based compounds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCIENCE */}
      <section id="science" className="py-32 bg-[hsl(160,12%,8%)] border-t border-[hsl(152,20%,12%)]">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Clinically researched <span className="italic text-primary">ingredients</span>
            </h2>
            <p className="text-[hsl(40,20%,55%)] text-lg max-w-2xl mx-auto">
              Each compound is selected using peer-reviewed research and bioavailability optimization for maximum efficacy.
            </p>
          </motion.div>

          {/* Ingredients grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { name: "Ashwagandha", benefit: "Stress & Cortisol" },
              { name: "NMN", benefit: "Cellular Energy" },
              { name: "Lion's Mane", benefit: "Cognitive Function" },
              { name: "Magnesium L-Threonate", benefit: "Neural Health" },
              { name: "Vitamin D3+K2", benefit: "Bone & Immune" },
              { name: "Omega-3 DHA", benefit: "Brain & Heart" },
              { name: "Rhodiola Rosea", benefit: "Endurance" },
              { name: "Curcumin C3", benefit: "Inflammation" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[hsl(160,10%,12%)] border border-[hsl(152,20%,15%)] hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold mb-1">{item.name}</h3>
                <p className="text-xs text-[hsl(40,20%,45%)]">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTLE ASSEMBLY */}
      <section ref={assemblyRef} className="min-h-[300vh] relative border-t border-[hsl(152,20%,12%)]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
              Precision <span className="italic text-primary">formulation</span> process
            </h2>
            <div className="flex flex-col items-center gap-4">
              <motion.div style={{ y: ingredientsY }} className="px-8 py-4 rounded-xl bg-primary/20 border border-primary/30 text-sm font-medium">
                🧬 Active Ingredients
              </motion.div>
              <motion.div style={{ y: capsuleY }} className="px-8 py-4 rounded-xl bg-[hsl(160,10%,15%)] border border-[hsl(152,20%,20%)] text-sm font-medium">
                💊 Capsule Formation
              </motion.div>
              <motion.div style={{ y: bottleBaseY }} className="px-8 py-4 rounded-xl bg-[hsl(160,10%,15%)] border border-[hsl(152,20%,20%)] text-sm font-medium">
                🏺 Bottle Base
              </motion.div>
              <motion.div style={{ y: capY }} className="px-8 py-4 rounded-xl bg-[hsl(160,10%,15%)] border border-[hsl(152,20%,20%)] text-sm font-medium">
                🔒 Bottle Cap
              </motion.div>
              <motion.div style={{ opacity: reveal }} className="mt-6 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-display text-lg font-bold">
                ✅ IDINGO Formula Complete
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-32 bg-[hsl(160,12%,8%)] border-t border-[hsl(152,20%,12%)]">
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Product <span className="italic text-primary">Line</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Energy", "Recovery", "Focus"].map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-3xl bg-[hsl(160,10%,10%)] border border-[hsl(152,20%,15%)] overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-[hsl(152,20%,12%)] to-[hsl(160,15%,8%)] flex items-center justify-center">
                  <div className="w-24 h-32 rounded-lg bg-[hsl(152,30%,20%)] group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">IDINGO {p}</h3>
                  <p className="text-sm text-[hsl(40,20%,50%)] mb-4">Scientifically optimized formulation.</p>
                  <button className="text-sm font-semibold text-primary hover:text-accent transition-colors uppercase tracking-wider">
                    View Product →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="py-32 border-t border-[hsl(152,20%,12%)]">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Transparent <span className="italic text-primary">research</span>
            </h2>
            <p className="text-[hsl(40,20%,55%)] text-lg max-w-2xl mx-auto">
              Ingredient sourcing, laboratory testing and clinical studies are openly published for full transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-b from-[hsl(160,15%,5%)] to-[hsl(152,20%,10%)] text-center border-t border-[hsl(152,20%,12%)]">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-10"
        >
          Start optimizing your <span className="italic text-primary">biology</span>
        </motion.h2>
        <a href="#products" className="inline-flex px-10 py-5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-colors">
          Shop Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-[hsl(152,20%,12%)]">
        <p className="text-sm text-[hsl(40,20%,35%)]">© IDINGO 2026 — Advanced Nutritional Science</p>
      </footer>
    </div>
  );
}
