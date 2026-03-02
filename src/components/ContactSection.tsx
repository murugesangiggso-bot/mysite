import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl sm:text-6xl mb-6">
            Let's work <span className="italic">together</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something great.
          </p>

          <motion.a
            href="mailto:hello@murugesan.dev"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@murugesan.dev", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-32 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground font-body text-sm">
          © 2026 Murugesan. All rights reserved.
        </p>
        <nav className="flex gap-6">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default ContactSection;
