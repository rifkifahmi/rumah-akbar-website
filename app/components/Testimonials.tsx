'use client'

import { motion } from 'framer-motion'

const YOUTUBE_VIDEO_ID = 'oer8AAAzWjw'

export default function Testimonials() {
const reasons = [
{
icon: '🏖️',
title: 'Dekat Pantai Balad',
description:
'Lokasi strategis untuk menikmati keindahan Pantai Balad dan sekitarnya.',
},
{
icon: '👨‍👩‍👧‍👦',
title: 'Cocok untuk Keluarga',
description:
'Rumah privat yang nyaman untuk keluarga maupun rombongan kecil.',
},
{
icon: '🛏️',
title: 'Fasilitas Lengkap',
description:
'2 kamar tidur, 2 kamar mandi, dapur lengkap, AC, TV, dan WiFi.',
},
{
icon: '🌳',
title: 'Suasana Nyaman',
description:
'Halaman luas dan rindang untuk bersantai bersama keluarga.',
},
]

return ( <section id="testimonials" className="py-20 bg-white"> <div className="max-w-6xl mx-auto px-4 sm:px-6">
{/* Header */}
<motion.div
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-center mb-12"
> <h2 className="text-4xl font-bold text-primary mb-4">
Mengapa Memilih Rumah Akbar Guest House? </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Kenyamanan, privasi, dan lokasi strategis untuk pengalaman
        menginap yang menyenangkan.
      </p>
    </motion.div>

    {/* Video */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mb-16"
    >
      <p className="text-center text-gray-600 mb-4">
        Lihat langsung suasana Rumah Akbar Guest House melalui video berikut
      </p>

      <div className="rounded-lg overflow-hidden shadow-2xl">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="Rumah Akbar Guest House"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </motion.div>

    {/* Reasons */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reasons.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-light rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-all duration-300"
        >
          <div className="text-5xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold text-primary mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 text-center"
    >
      <a
        href="https://wa.me/6287784786101"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        📱Tanya Ketersediaan Sekarang
      </a>
    </motion.div>
  </div>
</section>
)
}
