import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TransportSpacerProps {
  image: string;
  alt: string;
  flip?: boolean;
  width?: string;
  isFlying?: boolean;
  isSailing?: boolean;
  startPos?: string;
  endPos?: string;
}

export function TransportSpacer({
  image,
  alt,
  flip = false,
  width = "w-24",
  isFlying = false,
  isSailing = false,
  startPos = "80vw",
  endPos = "10vw",
}: TransportSpacerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this specific component (Maximized range)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // horizontal movement (using vw for full-screen travel)
  const x = useTransform(scrollYProgress, [0, 1], [startPos, endPos]);

  // Revealed line mask (reveal from right to left as transport moves)
  // inset(top right bottom left)
  const lineMask = useTransform(
    scrollYProgress,
    [0, 1],
    [`inset(0 0% 0 ${startPos})`, `inset(0 0% 0 ${endPos})`]
  );

  // vertical movement (flight path or water bobbing)
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    isFlying
      ? [20, -40, -40, -40, -40, 20]
      : isSailing
      ? [3, -3, 3, -3, 3, -3]
      : [0, 0, 0, 0, 0, 0]
  );

  // Subtle rotation for "road vibrations", flight tilt, or boat rocking
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    isFlying
      ? [12, 12, 0, 0, -12, -12]
      : isSailing
      ? [1, -1, 1, -1, 1, -1]
      : [0, 1, -1, 1, -1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-48 flex items-center overflow-hidden"
    >
      {/* The Revealed Divider Line - No circle, perfectly synced */}
      <motion.div
        style={{ clipPath: lineMask }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-12 md:px-24"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-steel-dark)]/40 to-[var(--color-steel-dark)]/10" />
      </motion.div>

      {/* Animated Transport Container */}
      <motion.div
        style={{ x, y, rotate }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Custom Image */}
        <img
          src={image}
          alt={alt}
          className={`${width} h-auto object-contain ${
            flip ? "scale-x-[-1]" : ""
          }`}
        />
      </motion.div>
    </div>
  );
}
