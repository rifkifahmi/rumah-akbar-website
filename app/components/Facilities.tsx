'use client'

import { motion } from 'framer-motion'
import { FACILITIES } from '@/lib/constants'

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Fasilitas Lengkap</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk liburan yang sempurna sudah tersedia
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-light rounded-lg p-6 border-2 border-transparent hover:border-accent transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {facility.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-2">
                {facility.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {facility.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 h-1 w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-accent"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Layanan Tambahan Tersedia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      icon: '🚗',
      title: 'Bantuan Transportasi',
      description: 'Membantu tamu mendapatkan informasi transportasi lokal serta penyewaan motor dan mobil selama menginap.',
    },
    {
      icon: '🍽️',
      title: 'Rekomendasi Kuliner Lokal',
      description: 'Panduan tempat makan dan kuliner khas Taliwang yang wajib dicoba.',
    },
    {
      icon: '📍',
      title: 'Informasi Wisata Lokal',
      description: 'Rekomendasi pantai, tempat wisata, dan aktivitas menarik di sekitar Sumbawa Barat.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Ramah Keluarga',
      description: 'Lingkungan yang nyaman dan cocok untuk keluarga maupun rombongan.',
    },
    {
      icon: '🌴',
      title: 'Dekat Pantai Balad',
      description: 'Lokasi strategis untuk menikmati keindahan Pantai Balad dan sekitarnya.',
    },
  ].map((service) => (
    <div
      key={service.title}
      className="bg-white rounded-lg p-4 border border-gray-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{service.icon}</span>
        <h4 className="font-semibold text-primary">
          {service.title}
        </h4>
      </div>
      <p className="text-sm text-gray-600">
        {service.description}
      </p>
    </div>
  ))}
            </div>

        </motion.div>
      </div>
    </section>
  )
}
