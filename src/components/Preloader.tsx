import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[hsl(30,10%,8%)] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[hsl(40,20%,92%)] mb-2">
          IDINGO<span className="text-primary">.</span>
        </h1>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(40,20%,92%)]/40 mb-8">
          Advanced Nutritional Science
        </p>
      </motion.div>

      <div className="w-48 h-px bg-primary-foreground/10 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-y-0 left-0 bg-primary"
          style={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-body text-[10px] tracking-widest uppercase text-primary-foreground/30 mt-4"
      >
        {Math.min(Math.round(progress), 100)}%
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
