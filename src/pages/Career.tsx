import { motion } from "framer-motion";
import { Briefcase, Heart, TrendingUp, Users, Leaf, FlaskConical, Truck, Megaphone, Code, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import careerHero from "@/assets/career-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Full health coverage plus a monthly supplement allowance — we practice what we preach." },
  { icon: TrendingUp, title: "Growth Path", desc: "Annual education budget, conference access, and clear promotion tracks for every role." },
  { icon: Users, title: "Remote-First", desc: "Work from anywhere. We collaborate async-first with quarterly in-person offsites." },
  { icon: Leaf, title: "Mission-Driven", desc: "Your work directly impacts thousands of people optimizing their health every day." },
];

const openings = [
  { title: "Research Scientist", department: "R&D", location: "Remote / Oklahoma City, OK", type: "Full-time", icon: FlaskConical },
  { title: "Quality Assurance Lead", department: "Operations", location: "Norcross, GA", type: "Full-time", icon: Briefcase },
  { title: "Supply Chain Coordinator", department: "Logistics", location: "Norcross, GA", type: "Full-time", icon: Truck },
  { title: "Brand & Content Manager", department: "Marketing", location: "Remote", type: "Full-time", icon: Megaphone },
  { title: "Full-Stack Engineer", department: "Engineering", location: "Remote", type: "Full-time", icon: Code },
  { title: "Customer Success Specialist", department: "Support", location: "Remote", type: "Full-time", icon: Users },
];

const values = [
  { number: "01", title: "Evidence Over Hype", desc: "We make decisions based on data, research, and clinical evidence — never trends." },
  { number: "02", title: "Radical Transparency", desc: "Open salaries, open roadmap, open formulas. We share everything." },
  { number: "03", title: "Ownership Mindset", desc: "Every team member has equity and the autonomy to drive meaningful change." },
  { number: "04", title: "Continuous Learning", desc: "We invest in your growth — courses, conferences, mentorship, and cross-team rotations." },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={careerHero} alt="IDINGO team collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            Join Our Team
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Build the Future
            <br />
            <span className="italic font-normal text-primary">of Wellness</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            We're assembling a world-class team of scientists, engineers, and creatives to redefine the supplement industry.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10">
            <a href="#openings" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 inline-flex">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY IDINGO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Why IDINGO</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-foreground">
              More than a <span className="italic text-primary">job</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body leading-relaxed">
              At IDINGO, you won't just clock in — you'll help millions of people take control of their health with products backed by real science.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CULTURE VALUES */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Culture</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Principles we <span className="italic text-primary">live by</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300"
              >
                <span className="font-display text-4xl font-bold text-primary/15 shrink-0">{v.number}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Open Positions</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Find your <span className="italic text-primary">role</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-semibold text-foreground">{job.title}</h3>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      {job.department} · {job.location} · {job.type}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Don't see your <span className="italic">role</span>?
          </motion.h2>
          <p className="text-primary-foreground/70 text-lg mb-10 font-body max-w-lg mx-auto">
            We're always looking for exceptional people. Send us your resume and tell us how you'd contribute.
          </p>
          <Link to="/contact" className="inline-flex px-10 py-5 bg-background text-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-background/90 transition-all duration-300 hover:scale-105">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
