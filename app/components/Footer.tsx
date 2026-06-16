'use client'

import { motion } from 'framer-motion'
import { PROPERTY_INFO } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4">{PROPERTY_INFO.name}</h3>
            <p className="text-gray-400 text-sm">
              Private family stay di lokasi strategis dengan fasilitas lengkap dan harga terjangkau.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Harga
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`https://wa.me/${PROPERTY_INFO.whatsapp}`}
                  className="hover:text-white transition-colors"
                >
                  📱 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.app.goo.gl/SeKHCyZgUu57UzAo6`}
                  className="hover:text-white transition-colors"
                >
                  📍 Lokasi
                </a>
              </li>
              <li>
                <span>{PROPERTY_INFO.location}</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Dapatkan update terbaru melalui:</p>
              <div className="flex gap-3">
                <a href="#" className="text-accent hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-accent hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <p>© {currentYear} {PROPERTY_INFO.name}</p>
            </div>
            <div className="text-center">
              <p>
                Dibangun dengan ❤️ menggunakan{' '}
                <span className="text-accent font-semibold">Next.js 15</span>
              </p>
            </div>
            <div className="text-right">
              <div className="flex justify-end gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
