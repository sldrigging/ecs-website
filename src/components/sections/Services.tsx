import { motion, type Variants } from "framer-motion";
import { services } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="services"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="SERVICES" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-12 md:gap-16 lg:gap-20">
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
  const isEven = index % 2 === 0;
  // Mapping service IDs to valid assets from images.ts
  const imageMap: Record<string, string> = {
    websites: images.website,
    integration: images.integration_local,
    advertising: images.analytics,
    socialMedia: images.socialMedia,
    pressReleases: images.pressReleases,
    amazonWalmart: images.amazonWalmart,
    blastEmail: images.email,
    infographics: images.infographics,
    videoProduction: images.videoProduction,
    productPhotography: images.prodPhotography,
    brandDevelopment: images.brands2,
    marketingPlans: images.marketingPlans,
    warehousingService: images.warehouseSpace1,
    pickPackShip: images.pickPackShip,
    inventoryManagement: images.inventoryManagement,
    supplyChain: images.supplyChain,
    packaging: images.packaging,
    productionService: images.production,
    customerService: images.customerService,
    accounting: images.analytics,
  };

  const imagePath = imageMap[service.id] || imageMap.ecommerce;

  // Second image for dual-image layouts (resolves from images object)
  const secondImagePath = service.secondImage
    ? (images as Record<string, string>)[service.secondImage] || imagePath
    : imagePath;

  // Variants for reliable reveal
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const isDualImage = service.points.length === 0 && service.secondImage;

  const imageReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      clipPath: "inset(10% 0 10% 0)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const bgHighlight = isEven
    ? "bg-white p-8 md:p-12 lg:p-16 rounded-3xl lg:rounded-r-none border border-[var(--color-steel-dark)]/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] -ml-4 md:-ml-8 lg:-ml-12 -mr-6 md:-mr-12 lg:-mr-16"
    : "py-12 md:py-16";

  return (
    <motion.div
      className={cn("service-panel transition-all duration-500", bgHighlight)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
      transition={{ staggerChildren: 0.15 }}
    >
      {isDualImage ? (
        <div className="flex flex-col gap-0">
          {/* Header Row (Title & Subtitle) - Only for Dual Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-24 items-end pb-12">
            {/* Title (Left) */}
            <div className="order-1 md:order-1">
              <div className="w-full max-w-xl mx-auto">
                <motion.h3
                  className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] leading-[1.1] tracking-tight"
                  variants={itemVariants}
                >
                  {service.title.toUpperCase()}
                </motion.h3>
              </div>
            </div>

            {/* Subtitle (Right) */}
            <div className="order-2 md:order-2">
              <div className="w-full max-w-[650px] mx-auto md:ml-0 md:mr-auto">
                <motion.p
                  className="text-2xl md:text-3xl text-[var(--color-accent-orange)] font-light italic leading-snug opacity-90 pb-2"
                  variants={itemVariants}
                >
                  {service.subtitle}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Image Row (Dual Images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-24 items-start">
            {/* Main Visual Column (Right) */}
            <div className="order-1 md:order-2">
              <motion.div
                className="relative w-full mx-auto md:ml-0 md:mr-auto group overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] max-w-[800px]"
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
                    alt={service.title}
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Secondary Visual Column (Left) */}
            <div className="order-2 md:order-1">
              <div className="w-full mx-auto flex flex-col items-center">
                <motion.div
                  className="relative w-full max-w-[800px] overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
                  variants={itemVariants}
                >
                  <img
                    src={secondImagePath}
                    alt={`${service.title} detail`}
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Original Standard Layout Refined */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-24 items-center">
          <div className={cn("order-2", isEven ? "md:order-2" : "md:order-1")}>
            <motion.div
              className={cn(
                "relative w-full group overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] max-w-[800px]",
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
                  alt={service.title}
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content Column */}
          <div
            className={cn(
              "order-1 flex flex-col justify-center",
              isEven ? "md:order-1" : "md:order-2"
            )}
          >
            <div
              className={cn(
                "w-full max-w-xl flex flex-col items-start text-left",
                isEven ? "mx-auto" : "md:ml-0 md:mr-auto"
              )}
            >
              <motion.h3
                className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight"
                variants={itemVariants}
              >
                {service.title.toUpperCase()}
              </motion.h3>

              <motion.p
                className="text-2xl md:text-3xl text-[var(--color-accent-orange)] mb-12 font-light italic leading-snug opacity-90"
                variants={itemVariants}
              >
                {service.subtitle}
              </motion.p>

              <ul className="space-y-8 w-full">
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-6 group/item"
                    variants={itemVariants}
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
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
