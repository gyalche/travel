import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Activity, Compass, Shield, Stars } from 'lucide-react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield size={22} />,
    title: 'Safety-first itinerary design',
    description: 'Every climb is structured around acclimatization, mountain conditions, and practical decision-making rather than rushed summit promises.',
  },
  {
    icon: <Compass size={22} />,
    title: 'Routes with real character',
    description: 'Our departures focus on iconic approaches, rewarding summit lines, and mountain days that feel memorable beyond the summit photo.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Pacing built for altitude',
    description: 'Trek days, rest windows, and summit movement are paced to help trekkers and climbers perform well as the route gains height.',
  },
  {
    icon: <Stars size={22} />,
    title: 'Professional service without losing expedition spirit',
    description: 'Clear communication, organized logistics, and thoughtful support give the journey polish while keeping the mountain experience authentic.',
  },
];

const framework = [
  'Pre-departure planning and equipment guidance',
  'Local teams with route knowledge and mountain judgment',
  'Acclimatization schedules shaped around altitude gain',
  'Private departures and custom pacing available on request',
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0d1a22] py-20 text-white md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#ddb04d]">Why Us</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">
              A strong Himalayan trip is built long before the summit push begins.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              The best departures are not only about reaching the top. They are about route choice, planning quality, acclimatization, guide support, and the confidence guests feel throughout the journey.
            </p>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/6">
              <img
                src="https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Himalayan route view"
                className="h-72 w-full object-cover"
              />
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                {framework.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/76">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 inline-flex rounded-full bg-[#ddb04d]/14 p-3 text-[#f0ca7a]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl text-white">{feature.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/68">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
