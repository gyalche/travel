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
    number: 38,
    label: 'Peak departures shaped each year',
    suffix: '+',
    detail: 'Small, intentional schedules instead of overstuffed calendars.',
    icon: <Mountain size={18} />,
  },
  {
    number: 16,
    label: 'Years building Himalaya itineraries',
    suffix: '+',
    detail: 'Route design grounded in weather, pacing, and local support.',
    icon: <TimerReset size={18} />,
  },
  {
    number: 97,
    label: 'Guests who return or refer friends',
    suffix: '%',
    detail: 'The experience is what keeps the reputation strong.',
    icon: <HeartHandshake size={18} />,
  },
  {
    number: 4,
    label: 'Clients max per lead guide on hard sections',
    suffix: ':1',
    detail: 'Cleaner support ratios where the mountain gets serious.',
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
            <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#9d7f4a]">Measured Confidence</p>
            <h2 className="mt-5 font-display text-4xl text-[#102433] md:text-6xl">
              The homepage should feel like a real mountain operator, not a brochure template.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b6471]">
              We rebuilt the flow around trust, route clarity, and visual atmosphere so the homepage reads like a premium Nepal brand with actual field experience behind it.
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
