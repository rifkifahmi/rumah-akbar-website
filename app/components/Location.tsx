'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { PROPERTY_INFO } from '@/lib/constants'

const MAPS_EMBED_ID = 'SeKHCyZgUu57UzAo6'

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Lokasi & Kontak</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan kami dengan mudah di lokasi yang strategis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="text-3xl text-accent">📍</div>
              <div>
                <h3 className="font-semibold text-primary text-lg mb-1">Alamat</h3>
                <p className="text-gray-600">{PROPERTY_INFO.location}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="font-semibold text-primary text-lg mb-1">WhatsApp</h3>
                <a
                  href={`https://wa.me/${PROPERTY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-semibold"
                >
                  {PROPERTY_INFO.whatsapp}
                </a>
              </div>
            </div>

            {/* Get Directions */}
            <a
              href={`https://maps.app.goo.gl/${MAPS_EMBED_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <MapPin size={20} />
              Dapatkan Petunjuk Arah
            </a>

            {/* Opening Hours */}
            <div className="bg-light rounded-lg p-6 border-l-4 border-accent">
              <h3 className="font-semibold text-primary mb-3">Jam Operasional</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Check-in: 14:00 - 22:00</li>
                <li>Check-out: 12:00 (maksimal 13:00)</li>
                <li>Flexible check-in/out (hubungi via WhatsApp)</li>
              </ul>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-2xl h-96 lg:h-full min-h-96"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5234567890!2d117.3!3d-8.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de5a0a1234567%3A0x1234567890abcdef!2sRumah%20Akbar%20Guest%20House!5e0!3m2!1sen!2sid!4v1623456789012`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Map Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 p-6 bg-light rounded-lg border-2 border-dashed border-gray-300"
        >
          <p className="text-center text-gray-600">
            💡 <strong>Catatan:</strong> Update koordinat Google Maps di env file dengan lokasi actual Anda untuk hasil maksimal.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
