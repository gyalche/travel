import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Mountain, Phone } from 'lucide-react';

const footerPeaks = [
  'Everest Base Camp + Island Peak',
  'Mera Peak Expedition',
  'Lobuche East Climb',
  'Pisang Peak Journey',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#08131b] text-white">
      <div className="border-b border-white/8">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.28em] text-[#ddb04d]">Final Call</p>
              <h2 className="mt-5 font-display text-4xl md:text-6xl">
                Build a homepage that makes the brand feel worth the flight to Nepal.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                The footer now closes the page like a premium travel brand instead of defaulting to a basic website template. Contact, route access, and brand tone stay consistent all the way down.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <p className="font-heading text-xs uppercase tracking-[0.24em] text-[#ddb04d]">Quick Contact</p>
              <div className="mt-5 space-y-4 text-sm text-white/74">
                <a href="tel:+977-9800000000" className="flex items-center gap-3 transition hover:text-white">
                  <Phone size={16} className="text-[#ddb04d]" />
                  +977 9800 000 000
                </a>
                <a href="mailto:hello@himalayantrekkingpeaks.com" className="flex items-center gap-3 transition hover:text-white">
                  <Mail size={16} className="text-[#ddb04d]" />
                  hello@himalayantrekkingpeaks.com
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#ddb04d]" />
                  Kathmandu, Nepal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#173042] to-[#b8860b] text-white">
                <Mountain size={20} />
              </div>
              <div>
                <p className="font-heading text-[0.7rem] uppercase tracking-[0.3em] text-white/40">Nepal Expeditions</p>
                <p className="font-display text-2xl text-white">Himalayan Peaks</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              Trekking peaks and high-altitude departures with cleaner design, clearer logistics, and a stronger sense of place.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm uppercase tracking-[0.24em] text-white/42">Peak Collection</p>
            <div className="mt-5 space-y-3 text-sm text-white/68">
              {footerPeaks.map((peak) => (
                <a key={peak} href="#peaks" className="block transition hover:text-white">
                  {peak}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading text-sm uppercase tracking-[0.24em] text-white/42">Follow</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/72 transition hover:bg-white/12 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Himalayan Peaks. All rights reserved.</p>
          <p>Crafted for modern Himalayan departures.</p>
        </motion.div>
      </div>
    </footer>
  );
}
