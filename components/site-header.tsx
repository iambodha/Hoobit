"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Search, Menu } from "lucide-react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0); // Start with 0 or a fallback value

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Set up event listener to update windowWidth on resize only after component mounts (client-side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);

      setWindowWidth(window.innerWidth); // Initialize windowWidth on mount
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isMobileView = windowWidth < 768; // You can adjust this value based on your design

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-none rounded-full py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("hero-section")}>Hoobit</h1>
        </div>

        {/* Only show the menu if it's not in mobile view */}
        {!isMobileView && (
          <div className="flex-1 justify-center space-x-8 hidden md:flex">
            <button onClick={() => scrollToSection("features-section")} className="text-slate-400 hover:text-white transition-colors">Features</button>
            <button onClick={() => scrollToSection("testimonials-section")} className="text-slate-400 hover:text-white transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection("cta-section")} className="text-slate-400 hover:text-white transition-colors">Get Started</button>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <Button
            onClick={() => window.location.href = "https://forms.gle/fRZ2urgo2VZH3gLh8"}
            variant="ghost" size="lg" className="px-6 py-3 text-slate-200 hover:text-slate-900 transition-colors">
            Sign Up
          </Button>

          {/* Only render the hamburger menu on mobile */}
          {!isMobileView && (
            <Button variant="ghost" size="icon" className="md:hidden text-slate-400 hover:text-slate-900 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
