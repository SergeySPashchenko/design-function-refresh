import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;
const images = [
      `${base}assets/bottle.png`,
      `${base}assets/lab.png`,
      `${base}assets/herbs.png`,
      `${base}assets/warehouse.png`,
];

const Gallery = () => {
      return (
            <div className="min-h-screen bg-background">
                  <Navbar />
                  <div className="pt-32 pb-20 px-6 container mx-auto">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-16"
                        >
                              <h2 className="text-secondary font-medium tracking-wider mb-4">GALLERY</h2>
                              <h1 className="text-4xl md:text-5xl font-bold mb-6">Idingo in Action</h1>
                              <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Take a look at our state-of-the-art facilities and our commitment to quality in every step of our process.
                              </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {images.map((img, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.5, delay: index * 0.1 }}
                                          className="overflow-hidden rounded-2xl aspect-video relative group"
                                    >
                                          <img
                                                src={img}
                                                alt={`Gallery image ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                          />
                                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-white font-medium">View Image</span>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
                  <Footer />
            </div>
      );
};

export default Gallery;
