import { motion } from 'framer-motion';
import { Shield, Users, Zap, Award } from 'lucide-react';

/**
 * Why Choose Us Component
 * Design: Modern Luxury Expedition
 * Features: Feature cards with icons, premium layout, trust-building content
 */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Safety First',
    description: 'Comprehensive safety protocols, experienced guides, and emergency medical support at every step of your expedition.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expert Guides',
    description: 'Our team includes certified mountaineers with decades of combined experience on Himalayan peaks.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Premium Logistics',
    description: 'High-quality equipment, comfortable base camps, and nutritious meals ensure your comfort at altitude.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Proven Track Record',
    description: 'Hundreds of successful summits and a 98% success rate demonstrate our expertise and dedication.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#faf8f5]">
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
            Our Commitment
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Why Climbers Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine world-class expertise with personalized service to create unforgettable Himalayan experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#1e3a4c]/10 to-[#b8860b]/10 rounded-lg flex items-center justify-center mb-6 text-[#1e3a4c]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl text-[#1a1a1a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with Image and Text */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493200513/Q63FqvVw86fu3XyA9Gpe4N/trust-section-climbers-SBwCcpDrZAXcLPyVnXxzag.webp"
              alt="Expert climbers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-6">
              Expedition Excellence
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every expedition is meticulously planned with attention to detail. From pre-climb training to post-expedition support, we ensure you have the best possible experience on the mountain.
            </p>
            <ul className="space-y-4 mb-8">
              {['Pre-expedition training programs', 'Acclimatization schedules', 'Real-time weather monitoring', 'Emergency evacuation insurance'].map((item) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-[#b8860b] rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="px-8 py-4 bg-[#1e3a4c] text-white font-heading rounded-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(30, 58, 76, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
