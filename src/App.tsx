import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { BackToTop } from "@/components/layout/BackToTop";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Facilities } from "@/components/sections/Facilities";
import { Partnership } from "@/components/sections/Partnership";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { TrustedLogos } from "@/components/sections/TrustedLogos";

import { SectionSpacer } from "@/components/ui/SectionSpacer";

function App() {
  return (
    <SmoothScroll>
      {/* Grain overlay for industrial texture */}
      <GrainOverlay />

      {/* Sticky header */}
      <Header />

      {/* Main content */}
      <main>
        {/* Hero with cinematic scroll */}
        <Hero />

        {/* Stats counter section */}
        <Stats />

        {/* Cinematic spacer for industrial division */}
        <SectionSpacer />

        {/* Brand authority marquee */}
        <TrustedLogos />

        {/* Cinematic spacer for industrial division */}
        <SectionSpacer />

        {/* Horizontal scroll services */}
        <Services />

        {/* Facilities with parallax */}
        <Facilities />

        {/* Partnership structure */}
        <Partnership />

        {/* About us */}
        <About />

        {/* Contact form */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[var(--color-bg-primary)] border-t border-[var(--color-steel-dark)]/30">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl text-white">E</span>
              <div className="flex flex-col text-[9px] tracking-wider text-[var(--color-steel-light)]">
                <span>HUMAN POWERED</span>
                <span>AI ENHANCED</span>
                <span className="text-[var(--color-accent-orange)]">
                  ECOMMERCE
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-[var(--color-text-muted)] text-sm">
              &copy; {new Date().getFullYear()} ECS - Ecommerce Solutions. All
              rights reserved.
            </p>

            {/* Social links placeholder */}
            <div className="flex items-center gap-4">
              <span className="text-[var(--color-steel-light)] text-sm hover:text-white transition-colors cursor-pointer">
                LinkedIn
              </span>
              <span className="text-[var(--color-steel-dark)]">|</span>
              <span className="text-[var(--color-steel-light)] text-sm hover:text-white transition-colors cursor-pointer">
                Twitter
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <BackToTop />
    </SmoothScroll>
  );
}

export default App;
