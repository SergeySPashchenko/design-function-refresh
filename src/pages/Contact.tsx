import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Mail, MapPin, Clock, ChevronDown, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHero from "@/assets/contact-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const contactInfo = [
  { icon: Mail, title: "Email", value: "hello@idingo.com", desc: "We respond within 24 hours" },
  { icon: MapPin, title: "Location", value: "Europe & Worldwide", desc: "Global shipping available" },
  { icon: Clock, title: "Support Hours", value: "Mon – Fri, 9–18 CET", desc: "Weekend tickets processed Monday" },
];

const faqs = [
  { q: "How long does shipping take?", a: "US orders arrive in 3–5 business days. International orders typically take 7–14 business days depending on location." },
  { q: "What is your return policy?", a: "We offer a 60-day money-back guarantee. If you're not satisfied, return the product for a full refund — no questions asked." },
  { q: "Are your supplements third-party tested?", a: "Yes. Every batch is independently tested for purity, potency, heavy metals, and microbiological contamination. Certificates of Analysis are available upon request." },
  { q: "Can I take multiple IDINGO products together?", a: "Most of our products are designed to work synergistically. However, we recommend consulting with a healthcare professional if you have specific concerns." },
  { q: "Do you ship internationally?", a: "Yes! We currently ship to 15+ countries. Check our shipping page for the full list of supported destinations." },
  { q: "Where are your products manufactured?", a: "All IDINGO products are manufactured in our GMP-certified, FDA-registered facility in Oklahoma City, OK." },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const locations = [
  { name: "Headquarters", address: "Boynton Beach, FL", coords: "26.5317° N, 80.0905° W" },
  { name: "Warehouse", address: "Norcross, GA", coords: "33.9412° N, 84.2135° W" },
  { name: "Manufacturing", address: "Oklahoma City, OK", coords: "35.4676° N, 97.5164° W" },
];

const Contact = () => {
  useSEO({ title: "Contact IDINGO — Get in Touch", description: "Have a question about IDINGO supplements? Reach out to our team. We respond within 24 hours." });
  const { toast } = useToast();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent! 🎉", description: "We'll get back to you shortly. Thanks for reaching out!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImgY }}>
          <img src={contactHero} alt="Get in touch with IDINGO" className="w-full h-full object-cover scale-[1.15]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            Contact Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Let's
            <br />
            <span className="italic font-normal text-primary">Talk</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            Got a question, idea, or just want to chat about supplements? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-sm text-primary font-body font-semibold mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground font-body">{info.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* FORM */}
          <div className="max-w-2xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Send a Message</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Say <span className="italic text-primary">Hello</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none hover:border-primary/30"
                />
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* LOCATIONS MAP */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Our Locations</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Where we <span className="italic text-primary">operate</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative map dot */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/30 group-hover:bg-primary animate-pulse" />
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{loc.name}</h3>
                <p className="text-sm text-primary font-body font-semibold mb-1">{loc.address}</p>
                <p className="text-xs text-muted-foreground font-body">{loc.coords}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-16"
          >
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Common <span className="italic text-primary">questions</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-body text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
