import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Research", desc: "We source only the finest compounds, backed by scientific data, to create top quality formulas." },
  { num: "02", title: "Formulation", desc: "Synergistic herbal blends, minerals, vitamins and botanicals come together to form products that work." },
  { num: "03", title: "Distribution", desc: "Building trust through consistency, efficacy, safety and quality with a network of global suppliers." },
  { num: "04", title: "Education", desc: "We share up-to-date information to inspire and educate future generations to enjoy improved health." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
            Optimal Health & Wellness
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">The Journey</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-background" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-display text-5xl font-bold text-primary/20">{step.num}</span>
                <h3 className="font-display text-2xl font-semibold text-foreground -mt-2 mb-3">{step.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
