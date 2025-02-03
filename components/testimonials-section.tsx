import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Reset auto-play timeout
  const resetAutoPlayTimeout = () => {
    // Clear any existing timeout
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    // Set a new timeout to return to auto-play after 1 minute
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 60000); // 1 minute
  };

  // Auto-play logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, testimonials.length]);

  // Navigate to previous slide
  const goToPrevious = () => {
    // Stop auto-play
    setIsAutoPlaying(false);

    // Navigate to previous slide
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

    // Reset auto-play timeout
    resetAutoPlayTimeout();
  };

  // Navigate to next slide
  const goToNext = () => {
    // Stop auto-play
    setIsAutoPlaying(false);

    // Navigate to next slide
    setCurrentIndex((prev) => 
      (prev + 1) % testimonials.length
    );

    // Reset auto-play timeout
    resetAutoPlayTimeout();
  };

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    // Stop auto-play
    setIsAutoPlaying(false);

    // Go to specific slide
    setCurrentIndex(index);

    // Reset auto-play timeout
    resetAutoPlayTimeout();
  };

  return (
    <section className="py-16 text-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">What Students Say</h2>
        
        <div 
          ref={containerRef}
          className="relative overflow-hidden max-w-xl mx-auto"
        >
          <div 
            className="relative w-full overflow-hidden"
            style={{ height: 'auto' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="w-full px-4"
              >
                <div className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors mx-auto max-w-md flex flex-col justify-center items-center">
                  <p className="text-slate-300 mb-4 text-center">"{testimonials[currentIndex].quote}"</p>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-white text-center">{testimonials[currentIndex].name}</p>
                    <p className="text-slate-400 text-center">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Container */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            {/* Previous Button */}
            <button 
              onClick={goToPrevious}
              className="bg-slate-600 hover:bg-slate-500 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-sky-500" />
            </button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-sky-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={goToNext}
              className="bg-slate-600 hover:bg-slate-500 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-sky-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}