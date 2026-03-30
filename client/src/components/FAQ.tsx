import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Component
 * Design: Modern Luxury Expedition
 * Features: Accordion animations, premium styling
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is the best time to climb Himalayan peaks?',
    answer: 'The best climbing seasons are typically spring (April-May) and autumn (September-October) when weather conditions are most stable and visibility is excellent. Each peak has specific optimal windows.',
  },
  {
    question: 'Do I need prior mountaineering experience?',
    answer: 'While some peaks require advanced experience, we offer expeditions for various skill levels. Our team provides pre-expedition training and support to prepare you adequately.',
  },
  {
    question: 'What is included in the expedition package?',
    answer: 'Our packages include expert guides, high-quality equipment, accommodation, meals, permits, and comprehensive insurance. Specific inclusions vary by expedition.',
  },
  {
    question: 'How do you ensure safety on the mountain?',
    answer: 'We maintain strict safety protocols, conduct regular weather monitoring, provide emergency medical support, and maintain low guide-to-climber ratios. All guides are certified mountaineers.',
  },
  {
    question: 'What is the success rate for your expeditions?',
    answer: 'Our overall success rate is 98%, with specific rates varying by peak difficulty. We prioritize safety over summits and will turn back if conditions are unsafe.',
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
            Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our Himalayan expeditions and climbing experiences.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#e8e4df] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Question */}
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 bg-white hover:bg-[#faf8f5] transition-colors flex items-center justify-between text-left"
                whileHover={{ paddingLeft: 24 }}
              >
                <h3 className="font-heading text-lg text-[#1a1a1a] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#b8860b]" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gradient-to-b from-white to-[#faf8f5] border-t border-[#e8e4df] text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-gray-600 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <motion.button
            className="px-8 py-4 bg-[#1e3a4c] text-white font-heading rounded-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(30, 58, 76, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
