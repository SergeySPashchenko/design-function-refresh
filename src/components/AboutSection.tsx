import { motion } from "framer-motion";
import { FlaskConical, Leaf, ShieldCheck } from "lucide-react";

const features = [
  { icon: FlaskConical, title: "Research You Can Trust", desc: "Every formula starts with peer-reviewed science. No guesswork, no shortcuts." },
  { icon: Leaf, title: "Ingredients That Matter", desc: "We're picky — only the purest compounds from suppliers we know personally." },
  { icon: ShieldCheck, title: "Your Satisfaction, Guaranteed", desc: "Not happy? Full refund, no awkward conversations. That's a promise." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}assets/bottle.png`}
                alt="Scientist researching natural extracts"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
              Hey, We're Idingo 👋
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Supplements that
              <br />
              <span className="italic font-normal text-primary">actually work</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              We started Idingo because we were tired of supplements that promise everything and deliver nothing. So we built a company around one idea: <strong className="text-foreground">transparency</strong>. Every ingredient, every study, every result — open for you to see.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex gap-4 items-start group/item cursor-default"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:bg-primary group-hover/item:scale-110">
                    <f.icon className="w-5 h-5 text-primary transition-colors duration-300 group-hover/item:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">{f.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
