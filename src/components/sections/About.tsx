import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";
import { aboutItems } from "@/data/content";

const features = [
  {
    id: "innovation",
    number: "01",
    title: "Innovation Driven",
    description:
      "Leveraging cutting-edge AI and automation technology to optimize every aspect of your fulfillment operations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path
          d="M12 2L2 7l10 5|10-5|10-5zM2 17l10 5|10-5M2 12l10 5|10-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "partnership",
    number: "02",
    title: "Partnership Focused",
    description:
      "We build long-term relationships with our clients, growing together and adapting to your evolving needs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "logistics",
    number: "03",
    title: "Logistics Experts",
    description:
      "Over 21 years of experience in ecommerce fulfillment, warehousing, and supply chain management.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-10 h-10"
      >
        <path
          d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

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

export function About() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="about"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 xl:gap-40">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="ABOUT US" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-32 lg:pl-12 xl:pl-24">
            {/* New Sections: Our Story and Staff */}
            {aboutItems.map((item) => (
              <AboutItemPanel key={item.id} item={item} />
            ))}

            {/* Original "Human Powered / AI Enhanced" Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Text Pillar */}
              <div className="order-2 md:order-1 flex flex-col items-start text-left">
                <div className="w-full max-w-4xl mx-auto md:ml-0 md:mr-auto">
                  <h3 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-[1.1] tracking-tight uppercase">
                    HUMAN POWERED <br />
                    <span className="text-[var(--color-accent-orange)]">
                      AI ENHANCED
                    </span>
                  </h3>

                  <p className="text-2xl md:text-3xl text-[var(--color-accent-orange)] mb-12 font-light italic leading-snug opacity-90">
                    Fulfilling the future of ecommerce through expertise and
                    intelligence.
                  </p>

                  <p className="text-[var(--color-text-secondary)] text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    ES combines 21+ years of logistics expertise with
                    cutting-edge AI technology to deliver unparalleled
                    e-commerce fulfillment services. Our approach blends human
                    intuition with machine precision to create scalable
                    solutions.
                  </p>
                </div>
              </div>

              {/* Functional Sidebar Pillar (Feature Cards) */}
              <div className="order-1 md:order-2">
                <div className="flex flex-col gap-12">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      className="flex gap-6 items-start text-left group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                      <div className="w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-accent-orange)] bg-[var(--color-accent-orange)]/5 rounded-2xl border border-[var(--color-accent-orange)]/10 transition-all duration-300 group-hover:bg-[var(--color-accent-orange)]/10 group-hover:border-[var(--color-accent-orange)]/20 shadow-lg">
                        {feature.icon}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-display text-xl text-[var(--color-text-primary)] mb-2 tracking-wide uppercase transition-colors group-hover:text-[var(--color-accent-orange)]">
                          {feature.title}
                        </h4>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg font-light opacity-80 group-hover:opacity-100 transition-opacity max-w-xl">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content Below Grid */}
            <div className="w-full">
              {/* Stats within content column */}
              <div className="mt-4 w-full grid grid-cols-2 md:grid-cols-4 gap-12 pt-8 border-t border-[var(--color-steel-dark)]/20">
                {[
                  { label: "Years Experience", value: "21+" },
                  { label: "Partner Brands", value: "20+" },
                  { label: "Daily Shipments", value: "850+" },
                  { label: "Satisfaction", value: "97%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-start group"
                  >
                    <div className="font-display text-5xl text-[var(--color-text-primary)] mb-4 transition-transform group-hover:translate-x-1 duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--color-accent-orange)] tracking-[0.4em] font-mono uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component to render individual about items (Our Story, Staff)
interface AboutItemPanelProps {
  item: (typeof aboutItems)[number];
}

function AboutItemPanel({ item }: AboutItemPanelProps) {
  // Resolve image paths
  const imagePath = item.image
    ? (images as Record<string, string>)[item.image] || item.image
    : null;

  // Resolve collage images
  const collageImagePaths = item.collageImages
    ? item.collageImages.map(
        (key) => (images as Record<string, string>)[key] || key
      )
    : [];

  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {/* Title */}
      <motion.h3
        className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-12 leading-[1.1] tracking-tight uppercase"
        variants={textVariants}
      >
        {item.title}
      </motion.h3>

      {/* Content based on type */}
      {item.isCollage && collageImagePaths.length > 0 ? (
        /* Staff Collage Grid - 4x2 layout */
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collageImagePaths.map((imgPath, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f8f9fa] border border-[var(--color-steel-dark)]/10 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.08)] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <img
                src={imgPath}
                alt={`${item.title} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      ) : item.points?.length ? (
        /* Our Story - Bullet points with image */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Bullet Points */}
          <motion.ul className="space-y-6" variants={textVariants}>
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
          </motion.ul>

          {/* Image */}
          {imagePath && (
            <motion.div
              className="relative w-full max-w-[800px] overflow-hidden rounded-3xl border border-[var(--color-steel-dark)]/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group"
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
        </div>
      ) : null}
    </motion.div>
  );
}
