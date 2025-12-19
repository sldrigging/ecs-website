import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Counter } from "@/components/ui/Counter";
import { images } from "@/data/images";

const partnershipData = {
  title: "Load Sharing",
  subtitle: "Cost Savings For Our Clients",
  description:
    "Our partnership model distributes fixed costs across multiple clients, creating significant savings while maintaining premium service levels.",
  charts: [
    {
      label: "Rent & Utilities",
      percentage: 77,
      color: "var(--color-accent-orange)",
    },
    {
      label: "Admin Salaries",
      percentage: 70,
      color: "var(--color-accent-yellow)",
    },
    {
      label: "Equipment Costs",
      percentage: 65,
      color: "var(--color-accent-cyan)",
    },
  ],
};

export function Partnership() {
  return (
    <section
      className="relative min-h-screen py-32 overflow-hidden w-full flex flex-col items-center"
      id="partnership"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={images.logistics}
          alt="Logistics background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/95 to-[var(--color-bg-primary)]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <SectionTitle title="PARTNERSHIP STRUCTURE" />

        <div className="w-full max-w-6xl px-8 md:px-16 mt-20">
          <div className="flex flex-col gap-20 md:gap-28 items-center w-full">
            {/* Top: Text content centered */}
            <motion.div
              className="text-center max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block font-mono text-xs tracking-[0.4em] text-[var(--color-accent-orange)] mb-6 uppercase">
                Optimized Logistics
              </span>

              <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-[0.95] tracking-[0.02em]">
                {partnershipData.title.toUpperCase()}
              </h3>

              <p className="text-xl md:text-3xl text-[var(--color-accent-yellow)] mb-10 font-light tracking-wide">
                {partnershipData.subtitle}
              </p>

              <div className="max-w-3xl mx-auto">
                <p className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed">
                  {partnershipData.description}
                </p>
              </div>
            </motion.div>

            {/* Bottom: Charts and Summary centered */}
            <div className="max-w-5xl w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left: Highlight box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-10 lg:p-12 bg-[var(--color-bg-surface)] backdrop-blur-md border border-[var(--color-steel-dark)]/30 rounded-lg h-full flex flex-col justify-center"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-[var(--color-accent-orange)]" />
                  <h4 className="text-white font-display text-2xl mb-8 tracking-wider uppercase text-center">
                    Unified Methodology
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed text-center">
                    All fixed cost categories are calculated using the same
                    efficient methodology across our entire partner network,
                    ensuring transparency and maximum savings.
                  </p>
                </motion.div>

                {/* Right: Charts */}
                <motion.div
                  className="space-y-10 py-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {partnershipData.charts.map((chart, index) => (
                    <ChartBar key={chart.label} data={chart} index={index} />
                  ))}
                </motion.div>
              </div>

              {/* Summary stat centered */}
              <motion.div
                className="pt-20 mt-20 border-t border-[var(--color-steel-dark)]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-8xl md:text-[10rem] text-[var(--color-accent-orange)] drop-shadow-2xl">
                      <Counter end={70} suffix="%" duration={2} />
                    </span>
                  </div>
                  <div className="max-w-xs text-center md:text-left">
                    <span className="text-[var(--color-accent-yellow)] text-2xl md:text-3xl font-mono tracking-tighter uppercase leading-tight inline-block">
                      Average Cost Savings For Our Partners
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ChartBarProps {
  data: { label: string; percentage: number; color: string };
  index: number;
}

function ChartBar({ data, index }: ChartBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-3">
        <span className="text-white font-medium">{data.label}</span>
        <span className="font-mono text-[var(--color-accent-orange)]">
          {isInView ? (
            <Counter end={data.percentage} suffix="%" duration={1.5} />
          ) : (
            "0%"
          )}
        </span>
      </div>

      <div className="relative h-3 bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: data.color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${data.percentage}%` } : {}}
          transition={{
            duration: 1.2,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        {/* Shine effect */}
        <motion.div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "200%" } : {}}
          transition={{ duration: 1.5, delay: 0.5 + index * 0.15 }}
        />
      </div>
    </div>
  );
}
