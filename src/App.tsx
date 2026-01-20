import { Link } from "react-router-dom";
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
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { TransportSpacer } from "@/components/ui/TransportSpacer";

// Assets for spacers
import truckImg from "./assets/truck.png";
import shipImg from "./assets/cargo-ship.png";
import planeImg from "./assets/plane.png";

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

        {/* Horizontal scroll services */}
        <Services />

        <TransportSpacer image={truckImg} alt="Truck" flip />

        {/* Facilities with parallax */}
        <Facilities />

        <TransportSpacer
          image={shipImg}
          alt="Cargo Ship"
          flip
          isSailing
          width="w-16"
        />

        {/* Partnership structure */}
        <Partnership />

        <TransportSpacer
          image={planeImg}
          alt="Cargo Plane"
          isFlying
          flip
          width="w-20"
        />

        {/* About us */}
        <About />

        <TransportSpacer image={truckImg} alt="Truck" flip />

        {/* FAQ section */}
        <Faq />

        {/* Contact form */}
        <Contact />

        {/* Stats counter section */}
        <Stats />

        {/* Brand authority marquee */}
        <TrustedLogos />
      </main>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-[var(--color-steel-dark)]/30 text-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl text-white">E</span>
                <div className="flex flex-col text-[10px] tracking-wider text-white">
                  <span>HUMAN POWERED</span>
                  <span>AI ENHANCED</span>
                  <span className="text-[var(--color-accent-orange)]">
                    ECOMMERCE
                  </span>
                </div>
              </div>
              <p className="text-white text-sm max-w-xs">
                Ecommerce Solutions (ES) provides world-class logistics,
                warehousing, and digital strategies for modern brands.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h4 className="font-display text-lg tracking-widest text-white">
                CONTACT
              </h4>
              <div className="flex flex-col gap-4 text-sm text-white">
                <p className="flex items-center gap-3">
                  <span className="text-[var(--color-accent-orange)]">E:</span>
                  <a
                    href="mailto:info@nolaES.com"
                    className="hover:text-white transition-colors"
                  >
                    info@nolaES.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[var(--color-accent-orange)]">P:</span>
                  <a
                    href="tel:+15047369477"
                    className="hover:text-white transition-colors"
                  >
                    +1 (504) 736-9477
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[var(--color-accent-orange)]">L:</span>
                  <span>New Orleans, Louisiana</span>
                </p>
              </div>
            </div>

            {/* Social & Legal */}
            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="flex items-center gap-6">
                {/* <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Instagram
                </a> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-[var(--color-steel-dark)]/20">
            {/* Copyright */}
            <p className="text-white text-xs">
              &copy; {new Date().getFullYear()} ES - Ecommerce Solutions. All
              rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs text-white">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
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
