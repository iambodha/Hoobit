import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Bhuvana",
      role: "Student at Nelson Mandel School, Berlin, Germany",
      quote:
        "My teacher is very experienced and can handle students with memory loss. The lessons not only are precise and cover all the targeted material within the time frame but also leave room for time to revise..."
    },
    {
      name: "Arjun",
      role: "Student at Charles Dickens, Berlin, Germany",
      quote: "I always found scratch to be a bit boring, but when I started hoobit, I found it to be very interesting and fun. I also like how the teacher explains everything in a way that is easy to understand."
    },
    {
      name: "Nuriah",
      role: "Student at Nelson Mandel School, Berlin, Germany",
      quote: "The lessons are very easy to follow, and I enjoy how they are structured. What stands out to me the most is the way the course first focuses on the core mathematical concepts and logical reasoning behind the topics, before diving into how to translate these ideas into code. This approach has proven to be incredibly effective (for me personally, at least) in not only understand the material but also apply it in a meaningful way."
    },
    {
      name: "Shruuti",
      role: "Student at Pawar Public School, Mumbai, India",
      quote: "I have tried several python tutorial on youtube before, but the peer based experienced gave me insights that I never had before."
    },
    {
      name: "Miah",
      role: "Student at Nelson Mandel School, Berlin, Germany",
      quote: "I’ve always been interested in coding, but due to hoobit, I realised how much I enjoy it and want to continue with it. The lessons are very interesting and fun. The people are nice and kind, especially the teacher."
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
                  className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors mx-auto max-w-md flex flex-col justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-slate-300 mb-4 text-center">"{testimonial.quote}"</p>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-white text-center">{testimonial.name}</p>
                    <p className="text-slate-400 text-center">{testimonial.role}</p>
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