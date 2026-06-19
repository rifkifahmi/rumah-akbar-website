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

        {/* Price Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-primary text-white text-center py-4">
            <p className="text-lg font-semibold">
              Mulai Dari
            </p>
          </div>

          <div className="p-8 text-center">

            <div className="text-5xl font-bold text-accent mb-6">
              Rp650.000
            </div>

            <ul className="space-y-3 text-gray-700 text-left max-w-md mx-auto">
              <li>✓ Rumah privat hingga 4 tamu</li>
              <li>✓ 2 kamar tidur ber-AC</li>
              <li>✓ 2 kamar mandi</li>
              <li>✓ Dapur lengkap</li>
              <li>✓ WiFi gratis</li>
              <li>✓ Parkir gratis</li>
            </ul>

            <div className="mt-8 bg-light rounded-xl p-4 text-left">
              <p className="font-semibold text-primary mb-2">
                💡 Harga dapat berbeda tergantung:
              </p>

              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Tanggal menginap</li>
                <li>• Lama menginap</li>
                <li>• Promo Airbnb & Booking.com</li>
              </ul>
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition"
            >
              📱 Tanya Harga Terbaik
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
