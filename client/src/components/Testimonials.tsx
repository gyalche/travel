import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Testimonials Component
 * Design: Modern Luxury Expedition
 * Features: Premium testimonial cards, star ratings, animated scroll
 */

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'James Mitchell',
    role: 'Everest Summiteer',
    content: 'An absolutely incredible experience. The guides were knowledgeable, the logistics were flawless, and the entire team made me feel safe and supported throughout the expedition.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
  },
  {
    name: 'Sarah Chen',
    role: 'Kanchenjunga Climber',
    content: 'I had always dreamed of climbing a major peak. This team turned that dream into reality with professionalism and care. Highly recommended for anyone serious about mountaineering.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Makalu Summiteer',
    content: 'The pre-expedition training and acclimatization schedule were perfectly designed. I felt prepared and confident at every stage. This is premium mountaineering at its finest.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
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
            Success Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            What Our Climbers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from climbers who have trusted us with their Himalayan dreams.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-8 bg-gradient-to-br from-white to-[#faf8f5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#e8e4df]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 fill-[#b8860b] text-[#b8860b]" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#e8e4df]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-heading text-[#1a1a1a] font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
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
            Read More Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
