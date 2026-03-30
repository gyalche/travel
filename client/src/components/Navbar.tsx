import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Mountain, Phone, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Peaks', href: '#peaks' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClassName = isScrolled
    ? 'border-white/70 bg-[#f7f3ed]/88 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl'
    : 'border-transparent bg-transparent shadow-none backdrop-blur-none';

  const linkClassName = isScrolled
    ? 'text-[#173042] hover:text-[#b8860b]'
    : 'text-white/88 hover:text-white';

  const secondaryCtaClassName = isScrolled
    ? 'border-[#173042]/14 bg-white text-[#173042] hover:border-[#173042]/25 hover:bg-white'
    : 'border-white/20 bg-white/10 text-white hover:bg-white/16';

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${navClassName}`}
      >
        <a href="#home" className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-br from-[#173042] to-[#b8860b] shadow-lg shadow-[#173042]/20'
                : 'border border-white/20 bg-white/10 backdrop-blur-md'
            }`}
          >
            <Mountain size={20} />
          </div>
          <div className="hidden sm:block">
            <p className={`font-heading text-[0.7rem] uppercase tracking-[0.34em] ${isScrolled ? 'text-[#9f7b2d]' : 'text-white/60'}`}>
              Nepal Expeditions
            </p>
            <p className={`font-display text-lg leading-none ${isScrolled ? 'text-[#102433]' : 'text-white'}`}>
              Himalayan Trekking Peaks
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-heading text-sm transition-colors duration-200 ${linkClassName}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#faq"
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-heading transition-all ${secondaryCtaClassName}`}
          >
            <Phone size={15} />
            Plan With Us
          </a>
          <a
            href="#peaks"
            className="inline-flex items-center gap-2 rounded-full bg-[#b8860b] px-5 py-2.5 text-sm font-heading text-white shadow-[0_18px_45px_rgba(184,134,11,0.35)] transition-transform hover:-translate-y-0.5"
          >
            View Peaks
            <ArrowRight size={15} />
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
            isScrolled ? 'bg-white text-[#173042]' : 'border border-white/15 bg-white/10 text-white backdrop-blur-md'
          }`}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-[#d9d1c6] bg-[#f7f3ed] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.18)] lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 font-heading text-[#173042] transition hover:bg-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="#faq"
                className="rounded-2xl border border-[#173042]/12 bg-white px-4 py-3 text-center font-heading text-[#173042]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan With Us
              </a>
              <a
                href="#peaks"
                className="rounded-2xl bg-[#173042] px-4 py-3 text-center font-heading text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Peaks
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
