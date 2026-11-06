"use client";

import { useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ExampleSection from "@/components/example-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import SiteFooter from "@/components/site-footer";
import { siteLinks } from "@/lib/site";

const AnimatedBackground = () => {
  const controls = useAnimation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) { controls.stop(); return; }
    controls.start({
      backgroundPosition: ["0px 0px", "-200px -200px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
    return () => controls.stop();
  }, [controls, reducedMotion]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: "100px 100px",
      }}
      animate={controls}
    />
  );
};

export default function Component() {


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">

        {/* Site Header */}
        <SiteHeader />

        <main>         

          {/* Hero Section */}
          <HeroSection />

          {/* Example Section */}
          <ExampleSection />

          {/* Features Section */}
         <FeaturesSection />
          
          <section id="hackathons-section" className="px-6 py-16 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Build something together.</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-7">Alongside peer-led learning, Hoobit organizes student hackathons. Bring an idea, meet other builders, and make something you can share.</p>
            <a href={siteLinks.hackathons} className="inline-flex min-h-12 items-center rounded-lg border border-sky-400 px-6 py-3 font-medium text-sky-200 hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">See our hackathon work</a>
          </section>

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <CTASection />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
