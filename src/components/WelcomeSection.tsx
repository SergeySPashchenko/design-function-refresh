import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WelcomeSection = () => {
      return (
            <section className="py-24 bg-background overflow-hidden">
                  <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                              <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                              >
                                    <h4 className="text-secondary font-medium tracking-widest mb-4">A HEALTHIER WAY TO LIVE</h4>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Welcome to Idingo</h2>
                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                          Idingo is an established supplement manufacturer formulating a wide range of nutraceuticals and natural health products. All our products are vegan-friendly, organic, pure, and free from additives, preservatives, and hormones.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                          {[
                                                { title: "Research", desc: "Formulating safe and effective supplements." },
                                                { title: "Ingredients", desc: "Top quality and sourced from finest suppliers." },
                                                { title: "Guarantee", desc: "Money back, no questions asked guarantee." }
                                          ].map((item, i) => (
                                                <div key={i} className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
                                                      <h3 className="font-bold mb-2">{item.title}</h3>
                                                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                </div>
                                          ))}
                                    </div>
                              </motion.div>

                              <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="relative"
                              >
                                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                          <img
                                                src="/design-function-refresh/assets/about-img-Clmyjdti.jpg"
                                                alt="Idingo facilities"
                                                className="w-full h-full object-cover"
                                          />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                                          <p className="text-primary-foreground font-bold text-xl">15+ Years</p>
                                          <p className="text-primary-foreground/80">of Excellence</p>
                                    </div>
                              </motion.div>
                        </div>
                  </div>
            </section>
      );
};

export default WelcomeSection;
