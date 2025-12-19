import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";

// Facilities data with Unsplash images
const facilitiesData = [
  {
    id: "warehousing",
    title: "Warehousing",
    subtitle: "Receiving, Storage & Shipping",
    description:
      "State-of-the-art warehouse facilities equipped to handle all your ecommerce fulfillment needs. From receiving inventory to storage and shipping, we provide comprehensive solutions.",
    image: images.warehouse1,
  },
  {
    id: "production",
    title: "Production",
    subtitle: "From CNC Machining to Producing Coatings",
    description:
      "Experts in CNC swiss machining, CNC milling and turning, and management of process oriented production.",
    image: images.production,
  },
];

export function Facilities() {
  return (
    <section className="relative" id="facilities">
      <SectionTitle title="FACILITIES" />

      <div className="relative">
        {facilitiesData.map((facility, index) => (
          <FacilityPanel key={facility.id} facility={facility} index={index} />
        ))}
      </div>
    </section>
  );
}

interface FacilityPanelProps {
  facility: (typeof facilitiesData)[number];
  index: number;
}

function FacilityPanel({ facility, index }: FacilityPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.85, 0.7, 0.7, 0.85]
  );
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className="relative py-32 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-[var(--color-bg-primary)]"
          style={{ opacity: overlayOpacity }}
        />

        {/* Directional gradient based on content position */}
        <div
          className={`absolute inset-0 bg-gradient-to-${
            isEven ? "r" : "l"
          } from-[var(--color-bg-primary)] via-transparent to-transparent`}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-6 md:px-12 pointer-events-none"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl w-full flex flex-col items-center text-center relative pointer-events-auto">
          {/* Background Card - Subtle Frosted effect */}
          <div className="absolute inset-0 -inset-x-8 md:-inset-x-12 -inset-y-8 bg-[var(--color-bg-primary)]/40 backdrop-blur-md rounded-2xl border border-white/5 -z-10" />

          {/* Index */}
          <motion.span
            className="font-mono text-xs tracking-[0.4em] text-[var(--color-accent-orange)] mb-6 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Operation 0{index + 1}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight tracking-[0.02em] w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {facility.title.toUpperCase()}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[var(--color-accent-yellow)] mb-8 font-light tracking-wide w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {facility.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed font-light w-full max-w-4xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {facility.description}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent-orange)] to-transparent opacity-60 mt-32 w-48"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 192, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Corner frame elements */}
      <div className="absolute inset-8 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-[var(--color-steel-dark)]" />
        <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-[var(--color-steel-dark)]" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-l border-b border-[var(--color-steel-dark)]" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-[var(--color-steel-dark)]" />
      </div>

      {/* Vertical text label */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isEven ? "right-8" : "left-8"
        } hidden lg:block`}
      >
        <span
          className="font-mono text-xs tracking-[0.3em] text-[var(--color-steel-dark)] whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: isEven ? "rotate(180deg)" : "none",
          }}
        >
          {facility.title.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
