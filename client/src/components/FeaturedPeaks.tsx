import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Compass, Mountain } from 'lucide-react';
import { Link } from 'wouter';
import { featuredPeaksCount, peaks } from '@/data/peaks';

export default function FeaturedPeaks() {
  const [showAll, setShowAll] = useState(false);
  const visiblePeaks = showAll ? peaks : peaks.slice(0, featuredPeaksCount);

  return (
    <section className="bg-[linear-gradient(180deg,#f7f3ed_0%,#fffaf4_42%,#ffffff_100%)] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-heading text-[#b8860b] uppercase tracking-widest mb-4">
            Himalayan Peaks
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Trekking peaks designed for travelers who want more than a standard lodge trek
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most requested Himalayan departures, from first 6,000-meter objectives to more technical climbs in the Khumbu and Annapurna regions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visiblePeaks.map((peak, index) => (
            <motion.div
              key={peak.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/peaks/${peak.slug}`}
                className="group block h-full overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white shadow-[0_22px_60px_rgba(31,41,55,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(31,41,55,0.12)]"
              >
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    <div
                      className="absolute inset-x-5 top-5 z-10 inline-flex w-fit rounded-full px-3 py-1 text-[0.7rem] font-heading uppercase tracking-[0.24em] text-white backdrop-blur-md"
                      style={{ backgroundColor: `${peak.accent}cc` }}
                    >
                      {peak.region}
                    </div>
                  <img
                    src={peak.heroImage}
                    alt={peak.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09131b] via-[#09131b]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-display text-3xl text-white">{peak.name}</p>
                      <p className="mt-2 text-sm text-white/72">{peak.summary}</p>
                    </div>
                  </div>

                  <div className="flex h-[calc(100%-18rem)] flex-col p-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-[#f6f1ea] p-3">
                        <Mountain size={16} className="mb-2 text-[#173042]" />
                        <p className="text-[0.65rem] font-heading uppercase tracking-[0.2em] text-[#7f7260]">Height</p>
                        <p className="mt-1 text-sm font-heading text-[#173042]">{peak.height}</p>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1ea] p-3">
                        <Compass size={16} className="mb-2 text-[#173042]" />
                        <p className="text-[0.65rem] font-heading uppercase tracking-[0.2em] text-[#7f7260]">Level</p>
                        <p className="mt-1 text-sm font-heading text-[#173042]">{peak.difficulty}</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-[1.5rem] border border-[#eee3d3] bg-[#fffaf4] p-4">
                      <p className="text-[0.68rem] font-heading uppercase tracking-[0.24em] text-[#9d7f4a]">Best Season</p>
                      <p className="mt-2 text-sm leading-6 text-[#475569]">{peak.season}</p>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="inline-flex items-center gap-2 font-heading text-sm text-[#173042]">
                        Open peak details
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {peaks.length > featuredPeaksCount && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-[#173042]/12 bg-white px-6 py-3 font-heading text-[#173042] shadow-[0_12px_30px_rgba(31,41,55,0.08)] transition hover:-translate-y-0.5"
            >
              {showAll ? 'Show Less Peaks' : `See More Peaks (${peaks.length - featuredPeaksCount})`}
              <ChevronDown
                size={16}
                className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
