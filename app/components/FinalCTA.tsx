'use client'

import { motion } from 'framer-motion'
import { generateWhatsAppUrl } from '@/lib/utils'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Siap Menginap di Pantai Balad?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-8"
        >
          Nikmati suasana tenang, lokasi dekat pantai,
          dan rumah privat yang nyaman untuk keluarga.
        </motion.p>

        <motion.a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg"
        >
          📱 Tanya Ketersediaan Sekarang
        </motion.a>

      </div>
    </section>
  )
}
