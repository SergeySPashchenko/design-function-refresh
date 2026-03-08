import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Leaf, ShieldCheck, Heart, Users, Target, Rocket, Award, Globe, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import aboutHero from "@/assets/about-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const values = [
  { icon: FlaskConical, title: "Science First", desc: "Every formula starts with peer-reviewed research. No guesswork, no shortcuts — just proven compounds." },
  { icon: Leaf, title: "Pure Ingredients", desc: "We select only the highest-quality bioactive compounds. No fillers, no synthetics, no compromises." },
  { icon: ShieldCheck, title: "Full Transparency", desc: "Every ingredient, every dosage, every lab result — openly published for you to verify." },
  { icon: Heart, title: "Customer Obsessed", desc: "Not happy? Full refund, no questions. Your trust is everything to us." },
  { icon: Users, title: "Community Driven", desc: "We build with our customers, not just for them. Your feedback shapes every product." },
  { icon: Target, title: "Results Focused", desc: "We measure success by your outcomes. If it doesn't work, it doesn't ship." },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "IDINGO was born from a simple idea: supplements should be backed by science, not marketing.", icon: Rocket },
  { year: "2020", title: "First Product Launch", desc: "Our flagship cognitive support formula hit the market — sold out in 3 weeks.", icon: Award },
  { year: "2021", title: "10,000 Customers", desc: "Word spread fast. We crossed 10K customers without a single paid ad.", icon: Users },
  { year: "2022", title: "GMP Certification", desc: "Our Oklahoma City facility received full GMP certification for pharmaceutical-grade production.", icon: ShieldCheck },
  { year: "2023", title: "International Expansion", desc: "Expanded distribution to 15 countries across Europe, Asia, and South America.", icon: Globe },
  { year: "2024", title: "30+ Products", desc: "Our product line grew to over 30 evidence-based formulations across 6 wellness categories.", icon: TrendingUp },
];

const team = [
  { role: "Research & Development", desc: "PhD-level scientists developing evidence-based formulations with clinical precision." },
  { role: "Quality Assurance", desc: "Rigorous testing protocols ensuring every batch meets pharmaceutical-grade standards." },
  { role: "Customer Experience", desc: "Dedicated team providing personalized guidance on supplementation and wellness." },
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImgY }}>
          <img src={aboutHero} alt="IDINGO laboratory" className="w-full h-full object-cover scale-[1.15]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            About IDINGO
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Built on
            <br />
            <span className="italic font-normal text-primary">Transparency</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            We started IDINGO because we were tired of supplements that promise everything and deliver nothing.
          </motion.p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Mission</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Supplements that <span className="italic text-primary">actually work</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                We built a company around one idea: <strong className="text-foreground">transparency</strong>. Every ingredient, every study, every result — open for you to see.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-body">
                Our team of researchers and formulators works tirelessly to create products backed by real science, not marketing hype.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY TIMELINE */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Journey</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Key <span className="italic text-primary">milestones</span>
            </h2>
          </motion.div>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Progress line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px">
              <motion.div className="absolute top-0 left-0 w-full bg-primary origin-top" style={{ height: lineHeight }} />
            </div>

            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start gap-8 mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 z-10 rounded-full bg-background border-2 border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/30 group"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold tracking-wider mb-2">{m.year}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{m.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-sm">{m.desc}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Values</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              What drives <span className="italic text-primary">us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsSection />

      {/* TEAM */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Team</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Experts behind the <span className="italic text-primary">formula</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl bg-background border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-xl font-bold text-primary">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{t.role}</h3>
                <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to feel the <span className="italic">difference</span>?
          </motion.h2>
          <p className="text-primary-foreground/70 text-lg mb-10 font-body max-w-lg mx-auto">
            Join thousands who trust IDINGO for their daily wellness routine.
          </p>
          <a href="/experience" className="inline-flex px-10 py-5 bg-background text-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-background/90 transition-all duration-300 hover:scale-105">
            Explore Our Science
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
