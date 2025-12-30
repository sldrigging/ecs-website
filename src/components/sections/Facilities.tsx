import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { facilities } from "@/data/content";

export function Facilities() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-32 lg:py-48"
      id="facilities"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="FACILITIES" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4 text-[var(--color-steel-mid)]">
                <div className="w-px h-16 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-32 md:gap-48 lg:gap-64">
            {facilities.map((facility, index) => (
              <FacilityPanel
                key={facility.id}
                facility={facility}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FacilityPanelProps {
  facility: (typeof facilities)[number];
  index: number;
}

function FacilityPanel({ facility }: FacilityPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Resolve image paths from images data
  const imagePath =
    (images as Record<string, string>)[facility.image] || facility.image;
  const secondImagePath = facility.secondImage
    ? (images as Record<string, string>)[facility.secondImage] || imagePath
    : imagePath;

  // Determine if this is a dual-image layout (no points and no description)
  const isDualImage =
    !facility.points?.length && !facility.description && facility.secondImage;

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95, clipPath: "inset(20% 0 20% 0)" },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual Element */}
        <div className="order-1 md:order-2">
          <motion.div
            className="relative aspect-video w-full max-w-[600px] mx-auto xl:ml-0 xl:mr-auto group overflow-hidden rounded-3xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full h-full"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                src={imagePath}
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <div className="w-full max-w-xl mx-auto flex flex-col items-start text-left">
            <motion.h3
              className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight uppercase"
              variants={textVariants}
            >
              {facility.title}
            </motion.h3>

            <motion.p
              className="text-2xl md:text-3xl text-[var(--color-accent-orange)] mb-12 font-light italic leading-snug opacity-90"
              variants={textVariants}
            >
              {facility.subtitle}
            </motion.p>

            {/* Conditional Content: Points, Description, or Second Image */}
            {facility.points && facility.points.length > 0 ? (
              <ul className="space-y-6 w-full">
                {facility.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6 group/item"
                    variants={textVariants}
                  >
                    <span className="text-[var(--color-accent-orange)] mt-2 text-2xl font-light transition-transform group-hover/item:translate-x-1 shrink-0">
                      ━
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed group-hover/item:text-[var(--color-text-primary)] transition-colors duration-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            ) : facility.description ? (
              <motion.p
                className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
                variants={textVariants}
              >
                {facility.description}
              </motion.p>
            ) : isDualImage ? (
              /* Dual-image layout: Second image where content would be */
              <motion.div
                className="relative aspect-video w-full max-w-[500px] overflow-hidden rounded-3xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
                variants={textVariants}
              >
                <img
                  src={secondImagePath}
                  alt={`${facility.title} detail`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
