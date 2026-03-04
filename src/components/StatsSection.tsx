import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Safety" },
  { value: "100%", label: "Efficacy" },
  { value: "100%", label: "Guarantee" },
  { value: "100%", label: "External Testing" },
  { value: "100%", label: "Certified" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
