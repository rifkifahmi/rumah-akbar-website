'use client'

import { motion } from 'framer-motion'

const FACILITIES = [
  {
    icon: '🛏️',
    name: '2 Kamar Tidur',
    description: 'Nyaman untuk keluarga hingga 4 tamu',
  },
  {
    icon: '🚿',
    name: '2 Kamar Mandi',
    description: 'Bersih dan nyaman digunakan selama menginap',
  },
  {
    icon: '❄️',
    name: 'AC',
    description: 'Kamar sejuk dan nyaman untuk beristirahat',
  },
  {
    icon: '📶',
    name: 'WiFi Gratis',
    description: 'Internet tersedia di seluruh area rumah',
  },
  {
    icon: '🍳',
    name: 'Dapur Lengkap',
    description: 'Kompor, rice cooker, blender, kulkas dan perlengkapan masak',
  },
  {
    icon: '💼',
    name: 'Area Kerja',
    description: 'Nyaman untuk bekerja selama menginap',
  },
  {
    icon: '🌴',
    name: 'Hammock & Halaman',
    description: 'Area santai dengan suasana asri dan rindang',
  },
  {
    icon: '🚗',
    name: 'Parkir Gratis',
    description: 'Area parkir luas dan aman di dalam properti',
  },
]

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
          <h2 className="text-4xl font-bold text-primary mb-4">
            Fasilitas Lengkap
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Semua kebutuhan untuk liburan keluarga yang nyaman telah tersedia
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="bg-light rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">
                {facility.icon}
              </div>

              <h3 className="text-lg font-bold text-primary mb-2">
                {facility.name}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
