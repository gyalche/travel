import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Trust Stats Component
 * Design: Modern Luxury Expedition
 * Features: Animated counters, premium layout, trust-building statistics
 */

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { number: 500, label: 'Successful Summits', suffix: '+' },
  { number: 20, label: 'Years Experience', suffix: '+' },
  { number: 98, label: 'Success Rate', suffix: '%' },
  { number: 1000, label: 'Happy Climbers', suffix: '+' },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display text-[#1e3a4c]">
      {count}
      <span className="text-[#b8860b]">{suffix}</span>
    </div>
  );
}

export default function TrustStats() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#faf8f5] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-heading text-[#b8860b] uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Trusted by Hundreds of Climbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. We have guided climbers to the world's most iconic peaks with an exceptional safety record and premium service.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#1e3a4c]/10 to-[#b8860b]/10 rounded-lg flex items-center justify-center">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
              </div>
              <p className="font-heading text-gray-700 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-[#1e3a4c] text-white font-heading rounded-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(30, 58, 76, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
