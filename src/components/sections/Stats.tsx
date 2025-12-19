import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/content";

export function Stats() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] border-t border-[var(--color-steel-dark)]/20 pt-24 md:pt-32 pb-48 md:pb-64 lg:pb-80 overflow-hidden"
      id="stats"
    >
      <div className="w-full flex justify-center px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-16 md:gap-x-16 lg:gap-x-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex items-center gap-12 md:gap-16 lg:gap-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-20 md:h-32 pb-8">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="font-display text-5xl md:text-6xl lg:text-8xl text-white tracking-tighter leading-none"
                    duration={2.5}
                  />
                </div>
                <span className="text-[10px] md:text-xs tracking-[0.4em] font-mono text-[var(--color-accent-orange)] uppercase block mt-12 md:mt-16 text-center whitespace-nowrap">
                  {stat.label}
                </span>
              </div>

              {/* Thin Vertical Divider - Visible on desktop between items */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block h-20 md:h-32 w-px bg-gradient-to-b from-transparent via-[var(--color-steel-mid)]/40 to-transparent self-center" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
