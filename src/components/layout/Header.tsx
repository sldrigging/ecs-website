import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { navigation } from "@/data/content";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.9)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
      }}
    >
      <div
        className="w-full"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-18 md:h-22" : "h-24 md:h-32"
          )}
        >
          {/* Logo Container */}
          <div className="flex-1 flex items-center">
            <motion.a
              href="#"
              className="relative flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={images.logo}
                alt="Ecommerce Solutions"
                className={cn(
                  "transition-all duration-500 object-contain",
                  isScrolled ? "h-12 md:h-14" : "h-14 md:h-20"
                )}
              />
            </motion.a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-initial">
            {navigation.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-base font-medium tracking-wide text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className="relative z-10 inline-block font-mono text-xs tracking-[0.2em] uppercase">
                  {item.label}
                  {/* Hover underline - inside the text span for proper alignment */}
                  <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[var(--color-accent-orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Right side spacer to push nav towards center */}
          <div className="flex-1 hidden lg:block" />

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-7 h-[2px] bg-white" />
            <span className="w-5 h-[2px] bg-[var(--color-accent-orange)]" />
            <span className="w-7 h-[2px] bg-white" />
          </motion.button>
        </div>
      </div>

      {/* Bottom border line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-steel-dark)] to-transparent"
        style={{
          opacity: useTransform(scrollY, [0, 100], [0, 1]),
        }}
      />
    </motion.header>
  );
}
