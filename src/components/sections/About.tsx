import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/images";

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
        className="w-8 h-8"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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

export function About() {
  return (
    <section
      className="relative py-24 overflow-hidden w-full flex flex-col items-center"
      id="about"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-bg-tertiary)_0%,transparent_50%)]" />

      {/* Decorative image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img
          src={images.forklift}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-bg-secondary)]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <SectionTitle title="ABOUT US" />

        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mt-20 flex flex-col items-center">
          {/* Intro centered */}
          <motion.div
            className="flex flex-col items-center text-center mb-32 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs tracking-[0.4em] text-[var(--color-accent-orange)] mb-4 uppercase">
              The ECS Philosophy
            </span>

            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-tight tracking-tight max-w-5xl mx-auto">
              HUMAN POWERED{" "}
              <span className="text-[var(--color-accent-orange)]">
                AI ENHANCED
              </span>
            </h3>

            <p className="text-[var(--color-text-secondary)] text-lg md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
              ECS combines 21+ years of logistics expertise with cutting-edge AI
              technology to deliver unparalleled ecommerce fulfillment services.
              Our approach blends human intuition with machine precision to
              create scalable solutions.
            </p>
          </motion.div>

          {/* Feature cards - Centered grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>

          {/* Bottom stats bar - Centered and robust */}
          <motion.div
            className="mt-40 pt-20 border-t border-[var(--color-steel-dark)]/30 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 max-w-6xl mx-auto">
              {[
                { label: "Years Experience", value: "21+" },
                { label: "Partner Brands", value: "50+" },
                { label: "Daily Shipments", value: "6K+" },
                { label: "Satisfaction", value: "99%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center flex flex-col items-center"
                >
                  <div className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--color-accent-orange)] tracking-[0.3em] font-mono uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof features)[number];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative w-full h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full p-10 lg:p-12 bg-[var(--color-bg-primary)] border border-[var(--color-steel-dark)]/20 transition-all duration-500 group-hover:border-[var(--color-accent-orange)]/50 group-hover:bg-[var(--color-bg-primary)]/40 backdrop-blur-sm min-h-[400px] flex flex-col items-center text-center">
        {/* Number */}
        <span className="absolute top-8 right-8 font-mono text-xs text-[var(--color-steel-dark)] group-hover:text-[var(--color-accent-orange)] transition-colors tracking-widest">
          {feature.number}
        </span>

        {/* Icon */}
        <div
          className="w-20 h-20 flex items-center justify-center mb-10 text-[var(--color-accent-orange)] bg-[var(--color-accent-orange)]/5 rounded-full border border-[var(--color-accent-orange)]/10 transition-transform duration-500 group-hover:scale-110"
          style={{ transform: "translateZ(40px)" }}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h4
          className="font-display text-2xl lg:text-3xl text-white mb-6 tracking-wide"
          style={{ transform: "translateZ(25px)" }}
        >
          {feature.title.toUpperCase()}
        </h4>

        {/* Description */}
        <p
          className="text-[var(--color-text-secondary)] leading-relaxed text-base font-light"
          style={{ transform: "translateZ(15px)" }}
        >
          {feature.description}
        </p>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[var(--color-accent-orange)]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[var(--color-accent-orange)]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,var(--color-accent-orange)_0%,transparent_70%)] opacity-[0.03]" />
      </div>
    </motion.div>
  );
}
