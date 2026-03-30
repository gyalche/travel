import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Mountain, ShieldCheck, TimerReset } from 'lucide-react';

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  detail: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    number: 8,
    label: 'Signature climbs in the collection',
    detail: 'A focused lineup across Khumbu, Annapurna, and Langtang instead of an overloaded catalog.',
    icon: <Mountain size={18} />,
  },
  {
    number: 4,
    label: 'Flagship departures featured on the homepage',
    detail: 'Start with the strongest routes, then expand into the full peak collection when ready.',
    icon: <TimerReset size={18} />,
  },
  {
    number: 3,
    label: 'Core Himalayan regions represented',
    detail: 'Khumbu for iconic scale, Annapurna for route variety, and Langtang for shorter summit windows.',
    icon: <HeartHandshake size={18} />,
  },
  {
    number: 6,
    label: 'High-altitude objectives above six thousand meters',
    suffix: ',000m+',
    detail: 'A collection built for trekkers and climbers stepping into genuine expedition terrain.',
    icon: <ShieldCheck size={18} />,
  },
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
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 45;
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="font-display text-5xl leading-none text-[#102433] md:text-6xl">
      {count}
      <span className="text-[#b8860b]">{suffix}</span>
    </div>
  );
}

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ed] py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(184,134,11,0.12),transparent_58%)]" />
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#9d7f4a]">At A Glance</p>
            <h2 className="mt-5 font-display text-4xl text-[#102433] md:text-6xl">
              Himalayan climbing trips presented with the clarity serious travelers need before they enquire.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b6471]">
              This collection is built around real trekking peaks, clear route fit, and practical trip structure so guests can understand the offer quickly and move toward planning with confidence.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-[2rem] border border-[#eadfce] bg-white p-6 shadow-[0_18px_55px_rgba(31,41,55,0.06)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 inline-flex rounded-full bg-[#102433]/6 p-3 text-[#102433]">
                  {stat.icon}
                </div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <p className="mt-4 font-heading text-base text-[#102433]">{stat.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#64748b]">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
