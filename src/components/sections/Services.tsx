import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { services } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--color-bg-primary)] pt-96 lg:pt-160 pb-32 lg:pb-48"
      id="services"
    >
      <div className="w-full px-6 md:px-12 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-40">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-1/4">
            <div className="lg:sticky lg:top-32 h-fit">
              <SectionTitle title="SERVICES" align="left" size="sidebar" />
              <div className="mt-10 hidden lg:flex flex-col items-start gap-4 text-[var(--color-steel-mid)]">
                <div className="w-px h-16 bg-gradient-to-b from-[var(--color-accent-orange)] to-transparent" />
                <span className="text-[10px] font-mono tracking-[0.4em] uppercase [writing-mode:vertical-lr] rotate-180">
                  Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:w-3/4 flex flex-col gap-32 md:gap-48 lg:gap-64">
            {services.map((service, index) => (
              <ServicePanel key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServicePanelProps {
  service: (typeof services)[number];
  index: number;
}

function ServicePanel({ service, index }: ServicePanelProps) {
  // Mapping service IDs to "Masterpiece Grade" Unsplash images
  const imageMap: Record<string, string> = {
    ecommerce:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    integration:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    advertising:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  };

  const imagePath = imageMap[service.id] || imageMap.ecommerce;

  // Variants for reliable reveal
  const itemVariants: Variants = {
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
      className="service-panel w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual Element */}
        <div className="order-1 md:order-2">
          <motion.div
            className="relative aspect-[4/3] md:aspect-square w-full max-w-[500px] mx-auto group overflow-hidden rounded-3xl bg-[var(--color-bg-secondary)]"
            variants={imageReveal}
          >
            {/* Main Image */}
            <img
              src={imagePath}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Luxury Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-60" />

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[var(--color-accent-orange)] transition-all duration-500 group-hover:w-16 group-hover:h-16 opacity-60" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[var(--color-accent-orange)] transition-all duration-500 group-hover:w-16 group-hover:h-16 opacity-60" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <span className="font-mono text-sm text-[var(--color-accent-orange)] tracking-widest">
              0{index + 1}
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[var(--color-accent-orange)]/50 to-transparent" />
          </motion.div>

          <motion.h3
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight tracking-tight"
            variants={itemVariants}
          >
            {service.title.toUpperCase()}
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl text-[var(--color-accent-yellow)] mb-10 font-light italic leading-relaxed"
            variants={itemVariants}
          >
            {service.subtitle}
          </motion.p>

          <ul className="space-y-6">
            {service.points.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4 group/item"
                variants={itemVariants}
              >
                <span className="text-[var(--color-accent-orange)] mt-1.5 text-xl transition-transform group-hover/item:translate-x-1">
                  ━
                </span>
                <span className="text-[var(--color-text-secondary)] text-base md:text-lg lg:text-xl leading-relaxed group-hover/item:text-white transition-colors duration-300">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
