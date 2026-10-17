// HeroSection.js
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { siteLinks } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="hero-section" aria-labelledby="hero-title"><BackgroundBeamsWithCollision>
      <div className="mt-0 flex flex-col justify-center gap-4">
        <h1 id="hero-title" className="text-4xl relative w-[92%] max-w-6xl mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
          Discover your{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative text-fuchsia-300 py-0">
              <span className="">new passion</span>
            </div>
          </div>
          {" "}for free
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-[90%] max-w-xl mx-auto py-2">
          <a
            href="#example-section"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-5 text-sm font-medium text-white backdrop-blur-3xl">
              Learn More
            </span>
          </a>
          <a
            href={siteLinks.learners}
            className="inline-flex h-12 font-semibold animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Sign Up
          </a>
        </div>
      </div>
    </BackgroundBeamsWithCollision></section>
  );
}