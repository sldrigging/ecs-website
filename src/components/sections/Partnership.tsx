import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { partnershipItems } from "@/data/content";

export function Partnership() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-24 lg:py-32"
      id="partnership"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle
                title={"PARTNERSHIP\nSTRUCTURE"}
                align="left"
                size="sidebar"
              />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-32 md:gap-48 lg:gap-64">
            {partnershipItems.map((item, index) => (
              <PartnershipPanel key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PartnershipPanelProps {
  item: (typeof partnershipItems)[number];
  index: number;
}

function PartnershipPanel({ item }: PartnershipPanelProps) {
  // Resolve image paths
  const imagePath = item.image
    ? (images as Record<string, string>)[item.image] || item.image
    : null;
  const secondImagePath = item.secondImage
    ? (images as Record<string, string>)[item.secondImage] || imagePath
    : null;

  // Check what content type this is
  const hasTwoColumns = item.leftColumn && item.rightColumn;
  const isDualImage =
    !hasTwoColumns &&
    !item.points?.length &&
    !item.description &&
    secondImagePath;

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95, clipPath: "inset(20% 0 20% 0)" },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {/* Title and Subtitle */}
      <div className="mb-12">
        <motion.h3
          className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight uppercase"
          variants={textVariants}
        >
          {item.title}
        </motion.h3>

        <motion.p
          className="text-2xl md:text-3xl text-[var(--color-accent-orange)] font-light italic leading-snug opacity-90"
          variants={textVariants}
        >
          {item.subtitle}
        </motion.p>
      </div>

      {/* Description (if present) */}
      {item.description && (
        <motion.p
          className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light mb-12 max-w-4xl"
          variants={textVariants}
        >
          {item.description}
        </motion.p>
      )}

      {/* Content Layout */}
      {hasTwoColumns ? (
        /* Two-column layout for bullet point lists */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div variants={textVariants}>
            {item.leftColumn!.heading && (
              <h4 className="text-[var(--color-text-primary)] font-display text-xl md:text-2xl mb-6 tracking-wide">
                {item.leftColumn!.heading}
              </h4>
            )}
            <ul className="space-y-4">
              {item.leftColumn!.items.map((point, i) => (
                <li key={i} className="flex items-start gap-4 group/item">
                  <span className="text-[var(--color-accent-orange)] mt-1 text-xl font-light shrink-0">
                    ━
                  </span>
                  <span className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed group-hover/item:text-[var(--color-text-primary)] transition-colors duration-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={textVariants}>
            {item.rightColumn!.heading && (
              <h4 className="text-[var(--color-text-primary)] font-display text-xl md:text-2xl mb-6 tracking-wide">
                {item.rightColumn!.heading}
              </h4>
            )}
            <ul className="space-y-4">
              {item.rightColumn!.items.map((point, i) => (
                <li key={i} className="flex items-start gap-4 group/item">
                  <span className="text-[var(--color-accent-orange)] mt-1 text-xl font-light shrink-0">
                    ━
                  </span>
                  <span className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed group-hover/item:text-[var(--color-text-primary)] transition-colors duration-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ) : imagePath ? (
        /* Image layout */
        <div
          className={`grid grid-cols-1 ${
            isDualImage ? "md:grid-cols-2" : ""
          } gap-12 lg:gap-16`}
        >
          {/* Main Image */}
          <motion.div
            className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-3xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
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
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Second Image (if dual-image layout) */}
          {isDualImage && secondImagePath && (
            <motion.div
              className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-3xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="w-full h-full"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <img
                  src={secondImagePath}
                  alt={`${item.title} detail`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      ) : item.points?.length ? (
        /* Simple bullet point list */
        <ul className="space-y-6 max-w-2xl">
          {item.points.map((point, i) => (
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
      ) : null}
    </motion.div>
  );
}
