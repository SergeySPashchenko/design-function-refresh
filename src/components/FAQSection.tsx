import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes IDINGO supplements different?",
    a: "All our products are formulated using peer-reviewed research, manufactured in GMP-certified facilities, and tested by independent third-party laboratories. We use only vegan, organic, and additive-free ingredients.",
  },
  {
    q: "Are your products third-party tested?",
    a: "Yes. Every batch undergoes rigorous third-party testing for purity, potency, and contaminants. Certificates of Analysis are available for all products upon request.",
  },
  {
    q: "Do you offer international shipping?",
    a: "We currently ship to the United States, Canada, UK, and the European Union. We're expanding to additional markets in 2026.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 60-day money-back guarantee on all products, no questions asked. If you're not satisfied, contact us for a full refund.",
  },
  {
    q: "Are your supplements suitable for vegans?",
    a: "Absolutely. All IDINGO products are 100% vegan-friendly, free from animal-derived ingredients, and certified cruelty-free.",
  },
  {
    q: "How should I store the supplements?",
    a: "Store in a cool, dry place away from direct sunlight. Keep the bottle tightly sealed. Refrigeration is not required unless specified on the label.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
