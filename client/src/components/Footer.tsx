import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component
 * Design: Modern Luxury Expedition
 * Features: Premium footer layout, contact info, social links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-[#f5f1ed]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a4c] to-[#b8860b] rounded-lg flex items-center justify-center">
                <span className="text-white font-display text-lg">▲</span>
              </div>
              <span className="font-display text-xl text-[#b8860b]">Himalayan Peaks</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium expeditions to the world's most iconic Himalayan trekking peaks. Expert-led, safety-first, unforgettable experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg mb-6 text-white">Expeditions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Mount Everest', 'Kanchenjunga', 'Makalu', 'Cho Oyu'].map((peak) => (
                <li key={peak}>
                  <a href="#" className="hover:text-[#b8860b] transition-colors">
                    {peak}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About Us', 'Safety', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#b8860b] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b8860b]" />
                <a href="tel:+977-1-1234567" className="hover:text-[#b8860b] transition-colors">
                  +977-1-1234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b8860b]" />
                <a href="mailto:info@himalayapeaks.com" className="hover:text-[#b8860b] transition-colors">
                  info@himalayapeaks.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b8860b] mt-1 flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent mb-12" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Himalayan Peaks. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                className="p-2 rounded-full bg-[#2d3a47] hover:bg-[#b8860b] text-[#f5f1ed] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Newsletter Banner */}
      <motion.div
        className="bg-gradient-to-r from-[#1e3a4c] to-[#2d5a6f] py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-200 mb-6">
              Subscribe to our newsletter for expedition updates, climbing tips, and exclusive offers.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-[#b8860b]"
              />
              <motion.button
                className="px-8 py-3 bg-[#b8860b] text-white font-heading rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
