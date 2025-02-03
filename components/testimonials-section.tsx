import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const x = useMotionValue(0);
  const containerWidth = useRef(0);

  // Reset auto-play timeout
  const resetAutoPlayTimeout = () => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }

    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 60000); // 1 minute
  };

  // Automatic sliding effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, testimonials.length]);

  // Measure container and set up drag constraints
  useEffect(() => {
    if (carouselRef.current) {
      containerWidth.current = carouselRef.current.offsetWidth;
    }
  }, []);

  // Handle drag end to determine next slide
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent, 
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    // Stop auto-play
    setIsAutoPlaying(false);

    // Calculate drag threshold (1/4 of container width)
    const dragThreshold = containerWidth.current / 4;

    // Determine direction based on drag distance and velocity
    if (info.offset.x < -dragThreshold || info.velocity.x < -500) {
      // Drag left - go to next slide
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > dragThreshold || info.velocity.x > 500) {
      // Drag right - go to previous slide
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    // Reset auto-play timeout
    resetAutoPlayTimeout();
  };

  return (
    <section id="testimonials-section" className="py-16 text-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">What Students Say</h2>
        <div ref={carouselRef} className="relative overflow-hidden">
          <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            animate={{ 
              x: -currentIndex * (carouselRef.current?.offsetWidth || 0)
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-full px-4 flex-shrink-0"
                style={{ width: '100%' }}
              >
                <div 
                  className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors mx-auto max-w-md flex flex-col justify-center items-center"
                >
                  <p className="text-slate-300 mb-4 text-center">"{testimonial.quote}"</p>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-white text-center">{testimonial.name}</p>
                    <p className="text-slate-400 text-center">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-sky-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}