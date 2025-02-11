"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";

function ExampleSection() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 sm:py-20 md:py-32" id="example-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
          {/* Left-side graphic: Hidden on small screens */}
          <motion.div
            className="hidden md:block bg-slate-800 p-6 md:p-6 shadow-4xl backdrop-blur bg-transparent bg-slate-200 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_105_589)">
                <path fillRule="evenodd" clipRule="evenodd" d="M100 24.8588L66.6667 0V66.6665H0L24.8588 99.9999L2.91409e-06 133.333H66.6667V66.6667H133.333V0L100 24.8588ZM175.141 100L200 66.6668H133.333L133.333 133.333H66.6667L66.6667 200L100 175.141L133.333 200L133.333 133.333L200 133.333L175.141 100Z" fill="url(#paint0_linear_105_589)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_105_589" x1="27.5" y1="29" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD9A0" />
                  <stop offset="1" stopColor="#FFF5F1" />
                </linearGradient>
                <clipPath id="clip0_105_589">
                  <rect width="200" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>

          {/* Right-side content */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 md:mb-6">
              Learn from peers who share your passions.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8 max-w-md">
              We’re a nonprofit run by teenagers with a mission to help other teens explore their passions—completely for free. Our peer-led learning model connects students to share and teach each other in subjects they love, from coding and art to music and more.
            </p>
            <Button 
              onClick={() => scrollToSection("features-section")} 
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors mx-auto"
            >
              Browse hobbies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;
