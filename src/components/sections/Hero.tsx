import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "@/components/effects/SplitText";
import { images } from "@/data/images";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and scale transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 0.7, 0.9]
  );

  // Content transforms
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <motion.section ref={containerRef} className="relative h-[200vh]" id="hero">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <img
            src={images.hero}
            alt="ECS Warehouse Facility"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/60 via-[var(--color-bg-primary)]/30 to-[var(--color-bg-primary)]"
            style={{ opacity: overlayOpacity }}
          />

          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-primary)_100%)] opacity-60" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline */}
            <motion.div
              className="flex flex-col items-center mt-6 text-white text-base md:text-lg font-medium tracking-[0.4em] mb-4 md:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span>HUMAN POWERED</span>
              <span>AI ENHANCED</span>
            </motion.div>
          </motion.div>

          {/* Main headline */}
          <div className="text-center max-w-6xl">
            <motion.p
              className="text-white text-base md:text-lg font-medium tracking-[0.4em] mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              SPECIALIZING IN
            </motion.p>
            <SplitText
              text="ECOMMERCE"
              className="font-display text-[11vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] text-white drop-shadow-2xl"
              delay={1.2}
            />

            <SplitText
              text="WAREHOUSING"
              className="font-display text-[11vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] text-white drop-shadow-2xl"
              delay={1.4}
            />

            <SplitText
              text={"ORDER\u00A0FULFILLMENT"}
              className="font-display text-[6.5vw] md:text-[4.5vw] lg:text-[3.5vw] leading-[0.9] text-[var(--color-accent-orange)] mt-2 md:mt-4 drop-shadow-2xl"
              delay={1.6}
            />
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center text-[var(--color-steel-light)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] tracking-[0.3em] mb-3">SCROLL</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-steel-light)] to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[var(--color-steel-dark)] opacity-50" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[var(--color-steel-dark)] opacity-50" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[var(--color-steel-dark)] opacity-50" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[var(--color-steel-dark)] opacity-50" />
      </div>
    </motion.section>
  );
}
