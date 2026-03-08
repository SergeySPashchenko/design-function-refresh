import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Briefcase, Heart, TrendingUp, Users, Leaf, FlaskConical, Truck, Megaphone, Code, ChevronRight, Upload, Send, FileText, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
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

const positionOptions = [
  "Research Scientist",
  "Quality Assurance Lead",
  "Supply Chain Coordinator",
  "Brand & Content Manager",
  "Full-Stack Engineer",
  "Customer Success Specialist",
  "Other",
];

const Career = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [formData, setFormData] = useState({ name: "", email: "", position: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    else if (formData.name.trim().length > 100) errs.name = "Name must be under 100 characters";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = "Invalid email address";
    if (!formData.position) errs.position = "Please select a position";
    if (file && file.size > 10 * 1024 * 1024) errs.file = "File must be under 10 MB";
    if (file && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      errs.file = "Only PDF and DOC/DOCX files are accepted";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast({
      title: "Application submitted!",
      description: "We'll review your resume and get back to you within 5 business days.",
    });
    setFormData({ name: "", email: "", position: "", message: "" });
    setFile(null);
    setErrors({});
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImgY }}>
          <img src={careerHero} alt="IDINGO team collaboration" className="w-full h-full object-cover scale-[1.15]" />
        </motion.div>
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 flex gap-4">
            <a href="#openings" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 inline-flex">
              View Open Positions
            </a>
            <a href="#apply" className="px-8 py-4 border border-white/30 text-white font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-300 inline-flex">
              Apply Now
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
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, position: job.title }));
                    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                  }}
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

      {/* APPLICATION FORM */}
      <section id="apply" className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Apply Now</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Submit your <span className="italic text-primary">application</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto font-body">
              Fill out the form below and attach your resume. We'll get back to you within 5 business days.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            {/* Name & Email row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-background border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.name && <p className="text-xs text-destructive mt-1 font-body">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-background border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.email && <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>}
              </div>
            </div>

            {/* Position */}
            <div>
              <label htmlFor="position" className="block text-sm font-body font-medium text-foreground mb-2">
                Position <span className="text-destructive">*</span>
              </label>
              <select
                id="position"
                value={formData.position}
                onChange={(e) => setFormData((p) => ({ ...p, position: e.target.value }))}
                className={`w-full px-4 py-3 rounded-xl bg-background border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none ${
                  errors.position ? "border-destructive" : "border-border"
                } ${!formData.position ? "text-muted-foreground" : ""}`}
              >
                <option value="">Select a position…</option>
                {positionOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.position && <p className="text-xs text-destructive mt-1 font-body">{errors.position}</p>}
            </div>

            {/* Resume upload */}
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">
                Resume (PDF or DOC)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              {!file ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full flex items-center justify-center gap-3 px-4 py-8 rounded-xl border-2 border-dashed transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 group ${
                    errors.file ? "border-destructive" : "border-border"
                  }`}
                >
                  <Upload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground font-body transition-colors">
                    Click to upload your resume
                  </span>
                </button>
              ) : (
                <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-primary/5 border border-primary/20">
                  <FileText className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-body flex-1 truncate">{file.name}</span>
                  <span className="text-xs text-muted-foreground font-body shrink-0">
                    {(file.size / 1024 / 1024).toFixed(1)} MB
                  </span>
                  <button
                    type="button"
                    onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                    className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-destructive/10 transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              )}
              {errors.file && <p className="text-xs text-destructive mt-1 font-body">{errors.file}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                Cover Note <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                placeholder="Tell us why you'd be a great fit…"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Application
                </>
              )}
            </motion.button>
          </motion.form>
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
