import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Expert Route Guidance',
    role: 'Find the right peak for your experience and goals',
    content:
      'We help you choose the right climb based on altitude, technical level, trip duration, and the kind of mountain experience you want in Nepal.',
  },
  {
    name: 'Thoughtful Trip Planning',
    role: 'Preparation built around acclimatization and timing',
    content:
      'Every itinerary is planned with attention to acclimatization, route pacing, seasonal conditions, and the practical details that make a Himalayan trip run smoothly.',
  },
  {
    name: 'Reliable Local Support',
    role: 'Clear communication from enquiry to summit day',
    content:
      'From your first enquiry to your final day in the mountains, we focus on responsive communication, organized logistics, and dependable support on the ground.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#9d7f4a]">What Matters Most</p>
          <h2 className="mt-5 font-display text-4xl text-[#102433] md:text-6xl">
            Why trekkers and climbers choose us for Himalayan peak journeys in Nepal.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#64748b]">
            We focus on the things experienced travelers care about most: the right route, honest preparation, and dependable support from first enquiry to summit day.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className={`rounded-[2rem] border border-[#eadfce] p-8 shadow-[0_20px_60px_rgba(31,41,55,0.06)] ${
                index === 0 ? 'bg-[#173042] text-white' : 'bg-[#fbf7f1] text-[#102433]'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, ratingIndex) => (
                    <Star
                      key={ratingIndex}
                      className={`h-4 w-4 ${index === 0 ? 'fill-[#ddb04d] text-[#ddb04d]' : 'fill-[#b8860b] text-[#b8860b]'}`}
                    />
                  ))}
                </div>
                <Quote className={index === 0 ? 'text-white/30' : 'text-[#173042]/20'} size={28} />
              </div>
              <p className={`text-lg leading-8 ${index === 0 ? 'text-white/82' : 'text-[#475569]'}`}>
                {testimonial.content}
              </p>
              <div className={`mt-8 border-t pt-6 ${index === 0 ? 'border-white/12' : 'border-[#eadfce]'}`}>
                <p className="font-heading text-base">{testimonial.name}</p>
                <p className={`mt-1 text-sm ${index === 0 ? 'text-white/56' : 'text-[#64748b]'}`}>{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
