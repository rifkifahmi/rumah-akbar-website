'use client'

import { motion } from 'framer-motion'
import { generateWhatsAppUrl } from '@/lib/utils'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Harga Fleksibel
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan terbaik untuk keluarga yang ingin menikmati rumah privat
            dekat Pantai Balad dengan harga yang dapat disesuaikan.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary text-white shadow-2xl"
        >
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full" />

          <div className="relative z-10 p-8 md:p-14">

            {/* Badge */}
            <div className="inline-block bg-accent text-primary font-bold px-4 py-2 rounded-full mb-8">
              Rumah Privat untuk Keluarga
            </div>

            {/* Price */}
            <div className="text-center mb-10">
              <p className="text-gray-300 mb-2">
                Mulai dari
              </p>

              <h3 className="text-5xl md:text-7xl font-bold text-accent">
                Rp650.000
              </h3>

              <p className="text-gray-300 mt-2">
                per malam
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🏠</div>
                <p className="font-semibold">
                  Seluruh Rumah
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <p className="font-semibold">
                  Hingga 4 Tamu
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold">
                  Bisa Nego Harga
                </p>
              </div>

            </div>

            {/* Promo Box */}
            <div className="bg-white text-gray-700 rounded-2xl p-6 mb-8">

              <h4 className="font-bold text-primary text-lg mb-3">
                💡 Dapatkan Penawaran Terbaik
              </h4>

              <p className="mb-4">
                Harga dapat berbeda tergantung:
              </p>

              <ul className="space-y-2">
                <li>✓ Tanggal menginap</li>
                <li>✓ Lama menginap</li>
                <li>✓ Promo Airbnb & Booking.com</li>
                <li>✓ Jumlah tamu</li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                Hubungi kami untuk mengecek promo yang sedang tersedia.
              </p>

            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-accent text-primary font-bold rounded-xl text-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                📱 Tanya Harga Terbaik
              </a>

              <p className="text-gray-300 text-sm mt-4">
                Respon cepat melalui WhatsApp
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
