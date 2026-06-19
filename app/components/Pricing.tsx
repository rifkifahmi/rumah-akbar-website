'use client'

import { motion } from 'framer-motion'
import { generateWhatsAppUrl } from '@/lib/utils'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Harga Fleksibel
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Mulai dari Rp650.000 per malam untuk seluruh rumah privat.
            Harga dapat berbeda tergantung tanggal menginap dan promo yang tersedia.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Top Bar */}
          <div className="bg-primary text-white text-center py-5">
            <p className="text-xl font-bold">
              Mulai Dari
            </p>
          </div>

          <div className="p-8 md:p-12 text-center">

            {/* Price */}
            <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
              Rp650.000
            </div>

            <p className="text-gray-500 mb-5">
              per malam
            </p>

            {/* Badge */}
            <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              ✓ Rumah Privat untuk Keluarga
            </div>

            {/* Features */}
            <div className="max-w-md mx-auto text-left">
              <ul className="space-y-4 text-gray-700">
                <li>✓ Rumah privat hingga 4 tamu</li>
                <li>✓ 2 kamar tidur ber-AC</li>
                <li>✓ 2 kamar mandi</li>
                <li>✓ Dapur lengkap</li>
                <li>✓ WiFi gratis</li>
                <li>✓ Parkir gratis</li>
              </ul>
            </div>

            {/* Promo Box */}
            <div className="mt-10 bg-light rounded-xl p-6 text-left border border-gray-200">
              <h3 className="font-bold text-primary mb-3">
                💡 Dapatkan Harga Terbaik
              </h3>

              <p className="text-gray-600 mb-4">
                Harga dapat berbeda tergantung:
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• Tanggal menginap</li>
                <li>• Lama menginap</li>
                <li>• Promo Airbnb & Booking.com</li>
              </ul>

              <p className="mt-4 text-sm text-gray-500">
                Hubungi kami untuk mengecek promo dan penawaran terbaik yang tersedia.
              </p>
            </div>

            {/* CTA */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              📱 Tanya Harga Terbaik
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
