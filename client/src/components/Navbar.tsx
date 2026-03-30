import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, Mountain, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Peaks', href: '#peaks' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const whatsappLink = 'https://wa.me/18453263377';

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.11 17.22c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.04-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.25s.96 2.62 1.09 2.8c.13.18 1.88 2.87 4.55 4.02.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.81-1.26.22-.62.22-1.15.16-1.26-.07-.11-.24-.18-.51-.31Z" />
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.54.73 4.99 2.12 7.1L3.1 28.9l5.94-1.95A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.64c-2.04 0-4.03-.55-5.76-1.6l-.41-.24-3.52 1.16 1.15-3.43-.27-.43A10.56 10.56 0 0 1 5.36 16c0-5.87 4.77-10.64 10.64-10.64 2.84 0 5.5 1.11 7.5 3.12A10.53 10.53 0 0 1 26.64 16c0 5.87-4.77 10.64-10.64 10.64Z" />
    </svg>
  );
}

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
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${secondaryCtaClassName}`}
            aria-label="Open WhatsApp chat"
          >
            <WhatsAppIcon className="h-5 w-5" />
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
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-[#173042]/12 bg-white px-4 py-3 text-[#173042]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Open WhatsApp chat"
              >
                <WhatsAppIcon className="h-5 w-5" />
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
