import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Truck, Users, Beaker } from "lucide-react";

const cards = [
  { icon: TrendingUp, title: "Growth", subtitle: "Marketing & Collaboration", color: "from-primary/20 to-accent/10" },
  { icon: BookOpen, title: "Educate", subtitle: "Inform & Inspire", color: "from-accent/20 to-primary/10" },
  { icon: Truck, title: "Distribution", subtitle: "Delivery & Supply", color: "from-primary/15 to-accent/15" },
  { icon: Users, title: "Foundation", subtitle: "Research & Development", color: "from-accent/15 to-primary/20" },
  { icon: Beaker, title: "Formulation", subtitle: "Safety & Efficacy", color: "from-primary/20 to-accent/20" },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
            Elevate Your Health
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What We're All About
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-gradient-to-br ${card.color} rounded-2xl p-8 text-center cursor-pointer border border-border hover:border-primary/30 transition-colors`}
            >
              <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
