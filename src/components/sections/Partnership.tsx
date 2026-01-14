import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { partnershipItems } from "@/data/content";
import { cn } from "@/lib/utils";

export function Partnership() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="partnership"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 xl:gap-40">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle
                title={"PARTNERSHIP\nSTRUCTURE"}
                align="left"
                size="sidebar"
                titleClassName="lg:text-[3.2rem]"
              />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-12 md:gap-16 lg:gap-20 lg:pl-12 xl:pl-24">
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

function PartnershipPanel({ item, index }: PartnershipPanelProps) {
  const isEven = index % 2 === 0;
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
    hidden: { opacity: 0, scale: 0.95, clipPath: "inset(10% 0 10% 0)" },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const bgHighlight =
    isEven || item.id === "loadSharing"
      ? "bg-white p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-r-none border border-[var(--color-steel-dark)]/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] -ml-4 md:-ml-8 lg:-ml-12 -mr-6 md:-mr-12 lg:-mr-16"
      : "py-12 md:py-16";

  return (
    <motion.div
      className={cn(
        "partnership-panel relative transition-all duration-500",
        bgHighlight
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {item.id === "loadSharing" ? (
        /* SPECIAL VERTICAL LAYOUT FOR LOAD SHARING */
        <div className="flex flex-col items-start text-left w-full">
          {/* Header */}
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

          {/* Image */}
          {imagePath && (
            <motion.div
              className="relative w-full max-w-[800px] mr-auto overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group mb-12"
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
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Description */}
          {item.description && (
            <motion.p
              className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-4xl"
              variants={textVariants}
            >
              {item.description}
            </motion.p>
          )}
        </div>
      ) : (
        /* STANDARD 2-COLUMN GRID LAYOUT */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text/Content Column */}
          <div
            className={cn(
              "order-2 flex flex-col items-start text-left",
              isEven ? "md:order-1" : "md:order-2"
            )}
          >
            <div
              className={cn(
                "w-full max-w-4xl flex flex-col items-start text-left",
                isEven ? "mx-auto" : "md:ml-0 md:mr-auto"
              )}
            >
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

              {item.description && (
                <motion.p
                  className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light mb-12"
                  variants={textVariants}
                >
                  {item.description}
                </motion.p>
              )}

              {hasTwoColumns ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 w-full">
                  <motion.div variants={textVariants}>
                    {item.leftColumn!.heading && (
                      <h4 className="text-[var(--color-text-primary)] font-display text-xl md:text-2xl mb-6 tracking-wide border-b border-[var(--color-accent-orange)]/30 pb-4 inline-block">
                        {item.leftColumn!.heading}
                      </h4>
                    )}
                    <ul className="space-y-4">
                      {item.leftColumn!.items.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 group/item"
                        >
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

                  <motion.div variants={textVariants}>
                    {item.rightColumn!.heading && (
                      <h4 className="text-[var(--color-text-primary)] font-display text-xl md:text-2xl mb-6 tracking-wide border-b border-[var(--color-accent-orange)]/30 pb-4 inline-block">
                        {item.rightColumn!.heading}
                      </h4>
                    )}
                    <ul className="space-y-4">
                      {item.rightColumn!.items.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 group/item"
                        >
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
              ) : item.points && item.points.length > 0 ? (
                <ul className="space-y-6 w-full">
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
            </div>
          </div>

          {/* Visual Column */}
          {imagePath && (
            <div
              className={cn(
                "order-1 flex flex-col gap-12 lg:gap-16 items-center",
                isEven ? "md:order-2" : "md:order-1"
              )}
            >
              <motion.div
                className={cn(
                  "relative w-full max-w-[800px] group overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]",
                  isEven ? "md:ml-0 md:mr-auto" : "mx-auto"
                )}
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
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>

              {isDualImage && secondImagePath && (
                <motion.div
                  className="relative w-full max-w-[650px] overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group ml-auto"
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
                      className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
