"use client";
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reducedMotion = useReducedMotion();
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
      quote: "The lessons are very easy to follow, and I enjoy how they are structured. What stands out to me the most is the way the course first focuses on the core mathematical concepts and logical reasoning behind the topics, before diving into how to translate these ideas into code. This approach has proven to be incredibly effective (for me personally, at least) in not only understand the material but also apply it in a meaningful way."
    },
    {
      name: "Shruuti",
      role: "Student at Pawar Public School, Mumbai, India",
      quote: "I have tried several python tutorial on youtube before, but the peer based experienced gave me insights that I never had before."
    },
    {
      name: "Miah",
      role: "Student at Nelson Mandel School, Berlin, Germany",
      quote: "I've always been interested in coding, but due to hoobit, I realised how much I enjoy it and want to continue with it. The lessons are very interesting and fun. The people are nice and kind, especially the teacher."
    }
  ];
  const move = (step: number) => setCurrentIndex(index => (index + step + testimonials.length) % testimonials.length);
  return (
    <section className="py-16 text-center relative overflow-hidden" id="testimonials-section" aria-labelledby="student-voices-title">
      <div className="container mx-auto px-4">
        <h2 id="student-voices-title" className="text-3xl font-bold text-white mb-8">What students say</h2>
        <div className="mx-auto max-w-xl" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote key={currentIndex} initial={{opacity: reducedMotion ? 1 : 0}} animate={{opacity:1}} exit={{opacity:reducedMotion ? 1 : 0}} transition={{duration:reducedMotion ? 0 : 0.15}} className="bg-slate-800 rounded-lg p-6 text-slate-200">
              <p className="mb-5 leading-relaxed">“{testimonials[currentIndex].quote}”</p>
              <footer><p className="font-semibold text-white">{testimonials[currentIndex].name}</p><p className="mt-1 text-sm text-slate-300">{testimonials[currentIndex].role}</p></footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button onClick={()=>move(-1)} aria-label="Previous student quote" className="flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"><ChevronLeft aria-hidden="true" /></button>
          {testimonials.map((_,index)=><button key={index} onClick={()=>setCurrentIndex(index)} aria-label={`Show student quote ${index+1}`} aria-pressed={index===currentIndex} className={`flex h-11 w-11 items-center justify-center rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${index===currentIndex?'bg-slate-200 text-slate-950':'text-slate-300 hover:bg-slate-700'}`}>{index+1}</button>)}
          <button onClick={()=>move(1)} aria-label="Next student quote" className="flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
