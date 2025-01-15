import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Brandon",
      role: "Student at JFK, Berlin, Germany",
      quote:
        "The teacher is very experienced and can handle students with memory loss. The lessons not only are precise and cover all the targeted material within the time frame but also leave room for time to revise..."
    },
    {
      name: "ill add name later",
      role: "Student at , Boston, USA",
      quote: "Amazing idk, they still sending this one"
    },
    {
      name: "ill add name later",
      role: "idk school, Mumbai, India",
      quote: "they'll send this later"
    }
  ];

  return (
    <section id="testimonials-section" className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">What Students Say</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-4"
              >
                <motion.div
                  className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors mx-auto max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-600 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-600 px-3 py-1 rounded text-white"
            onClick={() => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="h-8 w-8 text-sky-500" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 px-3 py-1 rounded text-white"
            onClick={() => setCurrentIndex((i) => (i + 1) % testimonials.length)}
          >
            <ChevronRight className="h-8 w-8 text-sky-500" />
          </button>
        </div>
      </div>
    </section>
  );
}