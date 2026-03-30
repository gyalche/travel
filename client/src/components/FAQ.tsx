import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What level of experience do your peaks require?',
    answer:
      'Not every trip is built for the same guest. Some departures suit strong trekkers entering their first summit objective, while others are better for climbers who already know how they handle altitude, fixed lines, and longer summit days.',
  },
  {
    question: 'How do you handle acclimatization and safety decisions?',
    answer:
      'The route is designed around gradual altitude exposure, recovery windows, and real-time judgment from the guide team. If conditions or energy levels do not support a safe push, the mountain decision comes before the itinerary promise.',
  },
  {
    question: 'Can you customize a private trip?',
    answer:
      'Yes. Private departures can be tuned for pace, comfort level, group ability, extra recovery nights, photography focus, or a more technical support profile.',
  },
  {
    question: 'What is usually included in your trips?',
    answer:
      'Core inclusions typically cover guiding, route logistics, permits, accommodation planning, on-trip meals, and support coordination. The detail page for each peak is the right place to define the exact scope of a departure.',
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#fffaf4] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#9d7f4a]">FAQ</p>
            <h2 className="mt-5 font-display text-4xl text-[#102433] md:text-6xl">Questions people ask before committing to a serious Nepal departure.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#64748b]">
              This section is kept tighter and cleaner now. It should help serious guests understand the operator quickly instead of forcing them through a generic accordion wall.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="overflow-hidden rounded-[1.75rem] border border-[#eadfce] bg-white shadow-[0_16px_45px_rgba(31,41,55,0.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <span className="font-heading text-lg text-[#102433]">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 rounded-full bg-[#f6f1ea] p-2 text-[#b8860b]"
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#f0e7db] px-6 py-6 text-sm leading-7 text-[#64748b]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
