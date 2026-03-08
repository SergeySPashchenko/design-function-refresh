import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent! 🎉", description: "We'll get back to you shortly. Thanks for reaching out!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
            We'd Love to Hear From You
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Say Hello 👋</h2>
          <p className="font-body text-muted-foreground mt-4">
            Got a question, idea, or just want to chat about supplements? Drop us a line.
          </p>
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
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/30"
            />
          </div>
          <textarea
            placeholder="Tell us what's on your mind..."
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none hover:border-primary/30"
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
    </section>
  );
};

export default ContactSection;
