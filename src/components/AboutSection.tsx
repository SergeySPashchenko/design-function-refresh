import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Leaf, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const features = [
  { icon: FlaskConical, title: "Research", desc: "Dedicated team formulating safe, effective supplements backed by science." },
  { icon: Leaf, title: "Pure Ingredients", desc: "Top quality compounds sourced from only the finest global suppliers." },
  { icon: ShieldCheck, title: "Guarantee", desc: "Money-back, no questions asked, satisfaction guarantee on every product." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img src={aboutImg} alt="Scientist researching natural extracts" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
              A Healthier Way to Live
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Welcome to
              <br />
              <span className="italic font-normal text-primary">Idingo</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Idingo is an established supplement manufacturer formulating a wide range of nutraceuticals and natural health products. All our products are vegan-friendly, organic, pure, and free from additives, preservatives, and hormones.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
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
