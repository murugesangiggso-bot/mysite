import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern shopping experience with real-time inventory and seamless checkout.",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Analytics Dashboard",
    category: "UI / UX Design",
    description: "Data visualization tool for tracking business KPIs and growth metrics.",
    color: "from-secondary to-muted",
  },
  {
    title: "Brand Identity System",
    category: "Design System",
    description: "Complete visual identity including typography, color, and component library.",
    color: "from-muted to-secondary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="font-display text-4xl sm:text-5xl">Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative bg-card rounded-lg border border-border p-8 sm:p-10 hover:border-primary/40 transition-colors duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-primary font-body text-xs tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="font-display text-2xl sm:text-3xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground font-body max-w-lg">{project.description}</p>
                </div>
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
