import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-body text-lg mb-6 tracking-widest uppercase"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.9] mb-8"
        >
          Muru<span className="text-gradient">gesan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-secondary-foreground font-body text-xl sm:text-2xl max-w-2xl mx-auto mb-16 font-light"
        >
          Crafting digital experiences with precision, creativity, and purpose.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
        >
          View Work
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Side decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute left-8 top-1/4 w-px h-32 bg-primary/30 origin-top hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute right-8 bottom-1/4 w-px h-32 bg-primary/30 origin-bottom hidden lg:block"
      />
    </section>
  );
};

export default HeroSection;
