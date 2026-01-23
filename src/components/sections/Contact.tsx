import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "003e2fbf-5830-4c65-a4fc-00bae8115f3f",
          subject: `New inquiry from ${values.name}`,
          from_name: values.name,
          ...values,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="relative bg-[var(--color-bg-primary)] py-12 lg:py-16"
      id="contact"
    >
      <div className="w-full pl-0 pr-6 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          {/* Sticky Title Column */}
          <div className="w-full lg:w-fit lg:min-w-[200px]">
            <div className="lg:sticky lg:top-24 h-fit">
              <SectionTitle title="CONTACT" align="left" size="sidebar" />
              <div className="mt-6 hidden lg:flex flex-col items-start gap-4">
                <div className="w-px h-12 bg-[var(--color-steel-dark)]/30" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-24 items-center">
            <motion.div
              className="flex flex-col items-start text-left w-full max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl text-[var(--color-text-primary)] mb-12 leading-tight tracking-tight">
                LET'S BUILD <br />
                <span className="text-[var(--color-accent-orange)]">
                  SOMETHING TOGETHER
                </span>
              </h3>

              <p className="text-[var(--color-text-secondary)] text-xl md:text-3xl leading-relaxed font-light mb-16 max-w-5xl">
                Ready to elevate your ecommerce operations? Get in touch with
                our team to discuss how ES can help optimize your fulfillment,
                warehousing, and digital presence.
              </p>

              <div className="w-full pt-16 border-t border-[var(--color-steel-dark)]/10">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-12"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="font-mono text-sm uppercase tracking-[0.5em] text-[var(--color-accent-orange)] pl-0">
                              Name
                            </FormLabel>
                            <FormControl>
                              <input
                                placeholder="John Doe"
                                {...field}
                                className="w-full bg-transparent border-0 border-b-2 border-[var(--color-steel-dark)]/20 rounded-none px-0 h-16 text-2xl md:text-3xl focus-visible:ring-0 focus-visible:border-[var(--color-accent-orange)] transition-all duration-300 placeholder:text-[var(--color-steel-mid)]"
                              />
                            </FormControl>
                            <FormMessage className="text-sm italic" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="font-mono text-sm uppercase tracking-[0.5em] text-[var(--color-accent-orange)] pl-0">
                              Email
                            </FormLabel>
                            <FormControl>
                              <input
                                placeholder="john@company.com"
                                {...field}
                                className="w-full bg-transparent border-0 border-b-2 border-[var(--color-steel-dark)]/20 rounded-none px-0 h-16 text-2xl md:text-3xl focus-visible:ring-0 focus-visible:border-[var(--color-accent-orange)] transition-all duration-300 placeholder:text-[var(--color-steel-mid)]"
                              />
                            </FormControl>
                            <FormMessage className="text-sm italic" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="font-mono text-sm uppercase tracking-[0.5em] text-[var(--color-accent-orange)] pl-0">
                            Company
                          </FormLabel>
                          <FormControl>
                            <input
                              placeholder="Acme Inc."
                              {...field}
                              className="w-full bg-transparent border-0 border-b-2 border-[var(--color-steel-dark)]/20 rounded-none px-0 h-16 text-2xl md:text-3xl focus-visible:ring-0 focus-visible:border-[var(--color-accent-orange)] transition-all duration-300 placeholder:text-[var(--color-steel-mid)]"
                            />
                          </FormControl>
                          <FormMessage className="text-sm italic" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="font-mono text-sm uppercase tracking-[0.5em] text-[var(--color-accent-orange)] pl-0">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="bg-transparent border-0 border-b-2 border-[var(--color-steel-dark)]/20 rounded-none px-0 min-h-[160px] text-2xl md:text-3xl resize-none focus-visible:ring-0 focus-visible:border-[var(--color-accent-orange)] transition-all duration-300 placeholder:text-[var(--color-steel-mid)]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-sm italic" />
                        </FormItem>
                      )}
                    />
                    <div className="pt-8 flex flex-col items-center md:items-start gap-6">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-24 h-20 bg-[var(--color-accent-orange)] hover:bg-[#ff8a33] text-white font-display tracking-[0.2em] text-2xl rounded-2xl transition-all duration-300 transform hover:scale-[1.05] shadow-2xl shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                      </Button>

                      {submitStatus === "success" && (
                        <p className="text-green-500 text-lg font-medium">
                          Thank you! Your message has been sent successfully.
                        </p>
                      )}

                      {submitStatus === "error" && (
                        <p className="text-red-500 text-lg font-medium">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
