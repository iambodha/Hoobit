import React from "react";
import { Button } from "./ui/button";
import { siteLinks } from "@/lib/site";

function CTASection() {
  return (
    <section id="cta-section" className="py-20 sm:py-32 mb-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Ready to explore your passions?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
        Join Hoobit to explore a new interest, learn with other students, or share a subject you enjoy. Our learner and mentor forms open in Google Forms.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild
          className="bg-sky-700 hover:bg-sky-600 text-white font-semibold h-12 px-8 rounded-lg transition-colors"
        >
          <a href={siteLinks.learners}>Start exploring your passions</a>
        </Button>

        <Button asChild
          variant="outline" 
          className="text-black border-slate-600 hover:bg-slate-200 h-12 px-8 rounded-lg transition-colors"
          >
          <a href={siteLinks.mentors}>Become a mentor</a>
        </Button>

        </div>
      </div>
    </section>
  );
}

export default CTASection;
