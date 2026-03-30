import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Compass, Mountain, ShieldCheck, Stars } from 'lucide-react';

interface HeroSlide {
  location: string;
  summit: string;
  copy: string;
  image: string;
  eyebrow: string;
  cta: string;
}

const slides: HeroSlide[] = [
  {
    location: 'Khumbu, Nepal',
    summit: 'Everest region departures built for trekkers who want altitude with polish.',
    copy: 'Small groups, serious mountain logistics, and routes that still feel cinematic at first light.',
    image:
      'https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1800',
    eyebrow: 'Spring 2026 departures',
    cta: 'Explore Everest Region',
  },
  {
    location: 'Annapurna frontier',
    summit: 'Big Himalayan landscapes, cleaner pacing, and camps chosen for the view as much as the climb.',
    copy: 'We design each itinerary around acclimatization, weather windows, and the kind of detail premium travelers notice.',
    image:
      'https://images.pexels.com/photos/29466873/pexels-photo-29466873.jpeg?auto=compress&cs=tinysrgb&w=1800',
    eyebrow: 'Curated trekking peaks',
    cta: 'Discover Annapurna Routes',
  },
  {
    location: 'Sacred mountain routes',
    summit: 'The hero shot should feel earned. So should the journey that gets you there.',
    copy: 'From permit handling to lead guides, the experience is structured like an expedition and presented like a luxury escape.',
    image:
      'https://images.pexels.com/photos/30462129/pexels-photo-30462129.jpeg?auto=compress&cs=tinysrgb&w=1800',
    eyebrow: 'Editorial mountain journeys',
    cta: 'Plan a Private Departure',
  },
];

const galleryCards = [
  {
    title: 'Dawn ridgelines',
    subtitle: 'Early starts, clear air, wide horizons.',
    image:
      'https://images.pexels.com/photos/29466873/pexels-photo-29466873.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Higher camps',
    subtitle: 'Sharper terrain and tighter support.',
    image:
      'https://images.pexels.com/photos/30462129/pexels-photo-30462129.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Remote approach trails',
    subtitle: 'Big days without package-tour energy.',
    image:
      'https://images.pexels.com/photos/14335289/pexels-photo-14335289.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];
  const handleSlideChange = (direction: 'prev' | 'next') => {
    setCurrentSlide((prev) =>
      direction === 'next'
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#08131b] text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          className="absolute inset-0"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,134,11,0.28),transparent_28%),linear-gradient(115deg,rgba(4,12,18,0.9)_15%,rgba(4,12,18,0.55)_46%,rgba(4,12,18,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,12,18,0.88),rgba(4,12,18,0.22)_38%,rgba(4,12,18,0.56))]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 md:px-6 md:py-32">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_420px]">
          <div className="max-w-3xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/14 bg-black/18 px-4 py-2 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ddb04d]" />
                <span className="font-heading text-[0.68rem] uppercase tracking-[0.32em] text-white/82">
                  Booking for 2026 now open
                </span>
              </div>

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#b8860b]" />
                <span className="font-heading text-xs uppercase tracking-[0.32em] text-white/85">
                  {activeSlide.eyebrow}
                </span>
              </div>

              <p className="mb-4 font-heading text-sm uppercase tracking-[0.34em] text-[#ddb04d]">
                {activeSlide.location}
              </p>

              <h1 className="max-w-4xl text-5xl leading-[0.95] text-white md:text-7xl lg:text-[5.4rem]">
                {activeSlide.summit}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
                {activeSlide.copy}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#peaks"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b8860b] px-7 py-4 font-heading text-white shadow-[0_24px_55px_rgba(184,134,11,0.38)] transition-transform hover:-translate-y-0.5"
                >
                  {activeSlide.cta}
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#why-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 font-heading text-white backdrop-blur-md transition hover:bg-white/16"
                >
                  See Why Travelers Choose Us
                </a>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                  <Mountain className="mb-3 text-[#ddb04d]" size={20} />
                  <p className="font-heading text-2xl text-white">6,000m+</p>
                  <p className="mt-1 text-sm text-white/66">Trekking-peak itineraries with real expedition pacing.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                  <ShieldCheck className="mb-3 text-[#ddb04d]" size={20} />
                  <p className="font-heading text-2xl text-white">1:4</p>
                  <p className="mt-1 text-sm text-white/66">Guide-to-climber support on demanding sections.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                  <Compass className="mb-3 text-[#ddb04d]" size={20} />
                  <p className="font-heading text-2xl text-white">Custom</p>
                  <p className="mt-1 text-sm text-white/66">Flexible acclimatization and route planning around conditions.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSlideChange('prev')}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/18 text-white backdrop-blur-md transition hover:bg-white/14"
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleSlideChange('next')}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-black/18 text-white backdrop-blur-md transition hover:bg-white/14"
                  aria-label="Next slide"
                >
                  <ArrowRight size={18} />
                </button>
                <div className="flex flex-wrap gap-3">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.location}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full border px-4 py-2 text-left transition ${
                        index === currentSlide
                          ? 'border-white/22 bg-white/16 text-white'
                          : 'border-white/10 bg-black/16 text-white/72 hover:bg-white/10'
                      }`}
                      aria-label={`Show slide ${index + 1}`}
                    >
                      <span className="font-heading text-[0.68rem] uppercase tracking-[0.24em]">
                        {slide.location}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-4 shadow-[0_28px_80px_rgba(4,12,18,0.4)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between px-2">
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/58">Featured Departures</p>
                  <p className="mt-1 font-display text-2xl text-white">Carousel highlights</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ddb04d]/14 px-3 py-1 text-xs font-heading uppercase tracking-[0.24em] text-[#f0ca7a]">
                  <Stars size={14} />
                  Live
                </div>
              </div>

              <div className="space-y-3">
                {galleryCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102433]/70"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12 }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08131b]/90 via-[#08131b]/8 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="font-display text-2xl text-white">{card.title}</p>
                        <p className="mt-1 text-sm text-white/68">{card.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
