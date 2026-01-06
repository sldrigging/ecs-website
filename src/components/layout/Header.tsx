import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/content";
import { images } from "@/data/images";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      <div
        className="w-full"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Container */}
          <div className="flex-1 flex items-center">
            <a
              href="#"
              className="relative flex items-center group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={images.logo}
                alt="Ecommerce Solutions"
                className="h-12 md:h-16 object-contain"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-initial">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-base font-bold tracking-wide text-white hover:text-[var(--color-accent-orange)] transition-colors duration-300 group cursor-pointer"
              >
                <span className="relative z-10 inline-block font-mono text-sm tracking-[0.2em] uppercase">
                  {item.label}
                  {/* Hover underline - inside the text span for proper alignment */}
                  <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[var(--color-accent-orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </button>
            ))}
          </nav>

          {/* Right side spacer to push nav towards center */}
          <div className="flex-1 hidden lg:block" />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer relative z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
              className="w-7 h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="w-5 h-[2px] bg-[var(--color-accent-orange)]"
            />
            <motion.span
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
              className="w-7 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-steel-dark)] to-transparent" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-20 md:top-24 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-[var(--color-steel-dark)]"
          >
            <nav className="flex flex-col py-6 px-12">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative py-4 pl-6 text-left text-white hover:text-[var(--color-accent-orange)] transition-colors duration-300 group border-b border-[var(--color-steel-dark)]/30"
                >
                  <span className="font-mono text-lg tracking-[0.2em] uppercase">
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[var(--color-accent-orange)] group-hover:h-8 transition-all duration-300"
                  />
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
