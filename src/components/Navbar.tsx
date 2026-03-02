import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-foreground">
          M<span className="text-primary">.</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
