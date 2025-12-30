import { motion, type Variants } from "framer-motion";
import { services } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";

export function Services() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-24 lg:py-32"
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
          <div className="w-full lg:flex-1 flex flex-col gap-16 md:gap-24 lg:gap-32">
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

function ServicePanel({ service }: ServicePanelProps) {
  // Mapping service IDs to "Masterpiece Grade" Unsplash images
  const imageMap: Record<string, string> = {
    websites: images.website,
    integration: images.integration_local,
    advertising: images.analytics,
    socialMedia: images.socialMedia,
    pressReleases: images.team, // Placeholder - user will replace
    amazonWalmart: images.logistics, // Placeholder - user will replace
    blastEmail: images.shipping, // Placeholder - user will replace
    infographics: images.production,
    videoProduction: images.forklift, // Placeholder - user will replace
    productPhotography: images.containers, // Placeholder - user will replace
    brandDevelopment: images.logistics, // Placeholder - user will replace
    marketingPlans: images.warehouse1, // Placeholder - user will replace
    warehousingService: images.shipping_local, // Placeholder - user will replace
    pickPackShip: images.packing, // Placeholder - user will replace
    inventoryManagement: images.assembly, // Placeholder - user will replace
    supplyChain: images.logistics, // Placeholder - user will replace
    packaging: images.containers, // Placeholder - user will replace
    productionService: images.production, // Placeholder - user will replace
    customerService: images.team, // Placeholder - user will replace
    accounting: images.analytics, // Placeholder - user will replace
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

  // Landscape diagrams get widescreen treatment
  const isLandscape = [
    "integration",
    "advertising",
    "socialMedia",
    "pressReleases",
    "amazonWalmart",
    "blastEmail",
    "videoProduction",
    "productPhotography",
    "brandDevelopment",
    "marketingPlans",
    "warehousingService",
    "pickPackShip",
    "inventoryManagement",
    "supplyChain",
    "packaging",
    "productionService",
    "customerService",
    "accounting",
  ].includes(service.id);

  const imageReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      clipPath: "inset(20% 0 20% 0)",
    },
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-24 items-center">
        {/* Visual Element */}
        <div className="order-1 md:order-2">
          <motion.div
            className={`relative w-full mx-auto xl:ml-0 xl:mr-auto group overflow-hidden rounded-3xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] ${
              isLandscape
                ? "aspect-video max-w-[600px]"
                : "aspect-[4/3] md:aspect-square max-w-[500px]"
            }`}
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
              {/* Main Image */}
              <img
                src={imagePath}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <div className="w-full max-w-xl mx-auto flex flex-col items-start text-left">
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

            {/* Conditional: Bullet points OR second image */}
            {service.points.length > 0 ? (
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
            ) : (
              /* Dual-image layout: Second image where bullets would be */
              <motion.div
                className="relative aspect-video w-full max-w-[500px] overflow-hidden rounded-3xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
                variants={itemVariants}
              >
                <img
                  src={secondImagePath}
                  alt={`${service.title} detail`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
