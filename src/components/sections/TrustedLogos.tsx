import { motion } from "framer-motion";

export function TrustedLogos() {
  const brands = ["SHOPIFY", "BUSINESS CENTRAL", "AVALARA", "CELIGO"];

  return (
    <section className="bg-[var(--color-bg-primary)] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[12px] md:text-[14px] tracking-[0.6em] text-[var(--color-steel-mid)] font-mono uppercase mb-16 md:mb-24 opacity-60">
            Trusted By Businesses Worldwide
          </span>

          {/* Brand Logos Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 md:gap-x-16 lg:gap-x-24 px-6 opacity-30">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-display text-xl md:text-2xl lg:text-3xl tracking-[0.2em] font-bold text-white hover:opacity-100 transition-opacity duration-500 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
