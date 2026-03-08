import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import galleryHero from "@/assets/gallery-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const base = import.meta.env.BASE_URL;

const galleryItems = [
  { src: `${base}assets/bottle.png`, title: "Premium Capsule Line", category: "Products", desc: "Our flagship product packaging designed for maximum freshness." },
  { src: `${base}assets/gallery-capsules.jpg`, title: "Omega-3 Softgels", category: "Products", desc: "High-potency fish oil capsules with superior bioavailability." },
  { src: `${base}assets/lab.png`, title: "Laboratory Testing", category: "Research", desc: "HPLC and mass spectrometry analysis in our partner labs." },
  { src: `${base}assets/gallery-scientist.jpg`, title: "Botanical Research", category: "Research", desc: "Our scientists analyze plant extracts for optimal compound profiles." },
  { src: `${base}assets/herbs.png`, title: "Raw Botanical Ingredients", category: "Sourcing", desc: "Sustainably sourced bioactive compounds before extraction." },
  { src: `${base}assets/gallery-farm.jpg`, title: "Organic Herb Farm", category: "Sourcing", desc: "Partner farms growing medicinal herbs under controlled conditions." },
  { src: `${base}assets/warehouse.png`, title: "Distribution Center", category: "Logistics", desc: "Climate-controlled storage ensuring product integrity." },
  { src: `${base}assets/gallery-fulfillment.jpg`, title: "Global Fulfillment", category: "Logistics", desc: "Fast order processing and shipping to 15+ countries worldwide." },
];

const categories = ["All", "Products", "Research", "Sourcing", "Logistics"];

const Gallery = () => {
  useSEO({ title: "Gallery — IDINGO Products & Facilities", description: "Explore IDINGO's facilities, products, and the commitment to quality at every step of our process." });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (dir: number) => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex + dir;
    if (next >= 0 && next < filtered.length) setLightboxIndex(next);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImgY }}>
          <img src={galleryHero} alt="IDINGO products showcase" className="w-full h-full object-cover scale-[1.15]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
        <div className="relative z-20 container mx-auto px-6 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-body text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            Gallery
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-3xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            IDINGO
            <br />
            <span className="italic font-normal text-primary">in Action</span>
            <span className="text-primary">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            A look inside our facilities, products, and the commitment to quality at every step.
          </motion.p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">Behind the Scenes</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our <span className="italic text-primary">world</span>
            </h2>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(i)}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-border cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-primary font-semibold">{item.category}</span>
                    <h3 className="font-display text-lg font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-xs text-white/60 font-body mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Image: ${filtered[lightboxIndex!]?.title}`}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Nav buttons */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            {lightboxIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                aria-label="Next image"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center">
                <span className="font-body text-xs tracking-[0.15em] uppercase text-primary font-semibold">
                  {filtered[lightboxIndex].category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">{filtered[lightboxIndex].title}</h3>
                <p className="text-sm text-white/60 font-body mt-1">{filtered[lightboxIndex].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Want to learn <span className="italic">more</span>?
          </motion.h2>
          <p className="text-primary-foreground/70 text-lg mb-10 font-body max-w-lg mx-auto">
            Discover the science and process behind every IDINGO product.
          </p>
          <Link to="/process" className="inline-flex px-10 py-5 bg-background text-foreground font-body font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-background/90 transition-all duration-300 hover:scale-105">
            Our Process
          </Link>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
