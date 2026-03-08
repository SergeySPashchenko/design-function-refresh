import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "We Listen", desc: "It starts with understanding what your body needs. We research, test, and iterate until the science says 'yes'." },
  { num: "02", title: "We Formulate", desc: "Our team blends herbs, minerals, and vitamins into synergistic formulas that your body actually absorbs." },
  { num: "03", title: "We Deliver", desc: "From our GMP-certified facilities to your doorstep — fresh, tested, and ready to work for you." },
  { num: "04", title: "We Educate", desc: "Because an informed customer is our best customer. We share the science behind every capsule." },
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
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Your Journey With Us</h2>
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
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-background transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/30"
              />

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
