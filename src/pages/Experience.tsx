import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Beaker, Leaf, Brain, Heart, Shield, Zap, FlaskConical, Microscope, Sprout, Search, TestTubes, PackageCheck, ArrowRight } from "lucide-react";
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
    title: "Збір та відбір рослин",
    titleEn: "Plant Sourcing",
    desc: "Ми співпрацюємо з сертифікованими органічними фермами в Індії, Перу та Скандинавії. Кожна рослина вирощується без пестицидів, збирається вручну в пік біологічної активності.",
    detail: "Контроль ґрунту, клімату та сезонності забезпечує максимальну концентрацію активних речовин.",
    icon: Sprout,
  },
  {
    step: "02",
    title: "Екстракція та стандартизація",
    titleEn: "Extraction & Standardization",
    desc: "Сировина проходить м'яку водно-спиртову або CO₂-екстракцію для збереження повного фітохімічного профілю. Кожен екстракт стандартизується до точного відсотка активних сполук.",
    detail: "Наприклад, Ashwagandha стандартизується до ≥5% вітанолідів, Curcumin — до 95% куркуміноїдів.",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "Лабораторний аналіз",
    titleEn: "Laboratory Analysis",
    desc: "Незалежні лабораторії проводять повний спектр тестування: важкі метали, мікробіологія, пестициди, розчинники та ідентифікація через HPLC/масс-спектрометрію.",
    detail: "Кожна партія отримує Certificate of Analysis (CoA) з детальними результатами.",
    icon: Microscope,
  },
  {
    step: "04",
    title: "Клінічна валідація",
    titleEn: "Clinical Validation",
    desc: "Ми аналізуємо peer-reviewed дослідження з PubMed та клінічні випробування для визначення оптимальних дозувань та синергії між інгредієнтами.",
    detail: "Кожен продукт базується мінімум на 3-5 рандомізованих контрольованих дослідженнях.",
    icon: Search,
  },
  {
    step: "05",
    title: "Біодоступність та формуляція",
    titleEn: "Bioavailability & Formulation",
    desc: "Інгредієнти комбінуються з підсилювачами біодоступності — піперин для куркуміну, ліпосомальна технологія для вітамінів, хелатні форми мінералів.",
    detail: "Це збільшує засвоєння до 20× порівняно зі стандартними формами.",
    icon: TestTubes,
  },
  {
    step: "06",
    title: "Фінальний контроль та випуск",
    titleEn: "Final QC & Release",
    desc: "Готовий продукт проходить фінальну перевірку стабільності, мікробіологічного забруднення та відповідності етикетці перед запечатуванням.",
    detail: "Кожна банка має унікальний batch-номер для повної простежуваності.",
    icon: PackageCheck,
  },
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

      {/* HERO with botanical image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={botanicalHero}
            alt="Botanical research ingredients"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
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
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          >
            From Nature
            <br />
            <span className="italic font-normal text-primary">to Science</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          >
            Від збору рослин до лабораторного аналізу — кожен інгредієнт проходить суворий шлях перевірки.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex gap-4"
          >
            <a href="#research-journey" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105">
              Дослідження
            </a>
            <a href="#science" className="px-8 py-4 border border-white/30 text-white font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-300">
              Інгредієнти
            </a>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH JOURNEY — New detailed section */}
      <section id="research-journey" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-20">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Дослідження інгредієнтів</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Від рослини до <span className="italic text-primary">формули</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Кожен продукт IDINGO проходить 6 етапів дослідження та контролю якості — від поля до вашої полиці.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {researchJourney.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group relative grid md:grid-cols-[80px_1fr] gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Step number + icon */}
                  <div className="flex md:flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-display text-xs font-bold text-muted-foreground tracking-wider">{item.step}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                      <span className="text-xs text-muted-foreground font-body hidden md:inline">/ {item.titleEn}</span>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground font-body">{item.detail}</p>
                    </div>
                  </div>

                  {/* Connecting line */}
                  {i < researchJourney.length - 1 && (
                    <div className="hidden md:block absolute -bottom-3 left-[40px] w-px h-6 bg-border" />
                  )}
                </motion.div>
              );
            })}
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
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
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
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-6 rounded-2xl bg-background border border-border text-center group hover:border-primary/40 transition-all duration-300"
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
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
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
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-background border border-border"
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
