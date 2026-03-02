import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">About</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-8">
              Building things that <span className="italic">matter</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary-foreground font-body text-lg leading-relaxed">
              I'm a developer and designer who believes in the power of thoughtful,
              well-crafted digital products. Every project is an opportunity to solve
              real problems with elegant solutions.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              With a focus on clean code, intuitive interfaces, and seamless user
              experiences, I bring ideas to life — from concept to production.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { number: "5+", label: "Years Exp." },
                { number: "30+", label: "Projects" },
                { number: "100%", label: "Passion" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <p className="font-display text-3xl text-primary">{stat.number}</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">{stat.label}</p>
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
