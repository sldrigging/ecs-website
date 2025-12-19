import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

const contactInfo = {
  email: "info@ecommercesolutions.com",
  phone: "+1 (555) 123-4567",
  location: "New Orleans, Louisiana",
};

export function Contact() {
  return (
    <section
      className="relative py-24 overflow-hidden w-full flex flex-col items-center"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

      {/* Background image on right */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-15 pointer-events-none hidden lg:block">
        <img
          src={images.containers}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <SectionTitle title="CONTACT" />

        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mt-20 flex flex-col items-center">
          {/* Main invitation centered */}
          <motion.div
            className="flex flex-col items-center text-center mb-24 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
              LET'S BUILD{" "}
              <span className="text-[var(--color-accent-orange)]">
                SOMETHING TOGETHER
              </span>
            </h3>

            <p className="text-[var(--color-text-secondary)] text-md md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
              Ready to elevate your ecommerce operations? Get in touch with our
              team to discuss how ECS can help optimize your fulfillment,
              warehousing, and digital presence.
            </p>
          </motion.div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left side - Info */}
            <motion.div
              className="flex flex-col justify-center space-y-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4">
                <h4 className="font-display text-2xl text-white tracking-wider uppercase">
                  Contact Information
                </h4>
                <div className="w-12 h-1 bg-[var(--color-accent-orange)]" />
              </div>

              {/* Contact methods */}
              <div className="space-y-8">
                <ContactMethod
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-6 h-6"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  label="Email"
                  value={contactInfo.email}
                />
                <ContactMethod
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-6 h-6"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  label="Phone"
                  value={contactInfo.phone}
                />
                <ContactMethod
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-6 h-6"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  label="Location"
                  value={contactInfo.location}
                />
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-steel-dark)]/30 p-10 lg:p-12 rounded-lg shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent-orange)]/10 to-transparent pointer-events-none" />
                <h4 className="font-display text-2xl text-white mb-10 tracking-widest">
                  SEND A MESSAGE
                </h4>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-steel-dark)] to-transparent" />
    </section>
  );
}

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactMethod({ icon, label, value }: ContactMethodProps) {
  return (
    <motion.div
      className="flex items-center gap-4 group cursor-pointer"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-surface)] border border-[var(--color-steel-dark)]/30 text-[var(--color-accent-orange)] group-hover:border-[var(--color-accent-orange)]/50 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-[var(--color-steel-light)] mb-1 tracking-wider uppercase">
          {label}
        </p>
        <p className="text-white group-hover:text-[var(--color-accent-orange)] transition-colors">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <FormInput
        name="company"
        label="Company"
        value={formData.company}
        onChange={handleChange}
      />
      <FormTextarea
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <MagneticButton type="submit">
        <span>Send Message</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5 ml-2"
        >
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="12 5 19 12 12 19"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </MagneticButton>
    </form>
  );
}

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function FormInput({
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={cn(
          "absolute left-0 transition-all duration-300 pointer-events-none",
          isFocused || value
            ? "-top-6 text-xs text-[var(--color-accent-orange)]"
            : "top-3 text-[var(--color-text-secondary)]"
        )}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full bg-transparent border-b-2 py-3 text-white outline-none transition-all duration-300",
          isFocused || value
            ? "border-[var(--color-accent-orange)]"
            : "border-[var(--color-steel-dark)]"
        )}
      />
    </div>
  );
}

interface FormTextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

function FormTextarea({
  name,
  label,
  value,
  onChange,
  required,
}: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={cn(
          "absolute left-0 transition-all duration-300 pointer-events-none",
          isFocused || value
            ? "-top-6 text-xs text-[var(--color-accent-orange)]"
            : "top-3 text-[var(--color-text-secondary)]"
        )}
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={4}
        className={cn(
          "w-full bg-transparent border-b-2 py-3 text-white outline-none transition-all duration-300 resize-none",
          isFocused || value
            ? "border-[var(--color-accent-orange)]"
            : "border-[var(--color-steel-dark)]"
        )}
      />
    </div>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
}

function MagneticButton({ children, type = "button" }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className="relative group mt-4 px-8 py-4 bg-[var(--color-accent-orange)] text-[var(--color-bg-primary)] font-semibold text-base overflow-hidden flex items-center justify-center"
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-[var(--color-accent-yellow)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      {/* Content */}
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
}
