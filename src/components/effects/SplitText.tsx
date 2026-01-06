import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  immediate?: boolean;
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  immediate = false,
}: SplitTextProps) {
  const words = text.split(" ");

  const animationProps = immediate
    ? {
        initial: "hidden" as const,
        animate: "visible" as const,
      }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once, margin: "0px", amount: 0 },
      };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      {...animationProps}
    >
      <div className="flex flex-wrap justify-center">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", rotateX: -80 },
                visible: {
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    delay: delay + wordIndex * staggerDelay,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Character-level split for more dramatic effects
interface SplitCharsProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function SplitChars({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.02,
  once = true,
}: SplitCharsProps) {
  const chars = text.split("");

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px", amount: 0 }}
    >
      <div className="flex flex-wrap justify-center">
        {chars.map((char, index) => (
          <span key={index} className="overflow-hidden">
            <motion.span
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: delay + index * staggerDelay,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
