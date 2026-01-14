import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "What industries does ES specialize in?",
    answer:
      "ES specializes in niche ecommerce sectors including high-precision and commodity industrial parts, premium technical products and much more. Our solutions are designed for complexity and scale of a variety of industry sectors.",
  },
  {
    question:
      "How does your order picking and packing process differ from others?",
    answer:
      "Ecommerce Solutions has refined our pick-pack-ship operation to handle loose, dense, non-labeled products with efficiency. Most 3PL companies require individual product or pack labeling which adds cost to products and lowers margins. We’re built natively to handle goods of all sizes, whether labeled or non- labeled. ",
  },
  {
    question: "What is the onboarding timeline for new partners?",
    answer:
      "Typically, we can fully integrate a new partner within 30–60 days. This includes warehouse setup, system integrations (ERP/Storefront), and team training.",
  },
];

export function Faq() {
  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="faq"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="FAQ" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* FAQ Content area */}
          <div className="w-full lg:flex-1 flex flex-col items-center">
            <motion.div
              className="w-full max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-12"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-[var(--color-steel-dark)]/20 rounded-[2rem] bg-[var(--color-bg-secondary)] overflow-hidden transition-all duration-300 hover:border-[var(--color-accent-orange)]/40 h-fit"
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between px-10 py-6 md:px-12 md:py-8 text-left font-display text-lg md:text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-accent-orange)] transition-colors uppercase tracking-widest group">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-text-secondary)] text-base md:text-xl leading-relaxed font-light px-10 pb-6 md:px-12 md:pb-8">
                      <div className="pt-6 border-t border-[var(--color-steel-dark)]/10">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
