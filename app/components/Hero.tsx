'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PROPERTY_INFO } from '@/lib/constants'
import { generateWhatsAppUrl } from '@/lib/utils'
import Image from 'next/image'

export default function Hero() {
const scrollToNext = () => {
document.getElementById('gallery')?.scrollIntoView({
behavior: 'smooth',
})
}

return ( <section
   id="home"
   className="min-h-screen pt-20 text-white flex items-center justify-center relative overflow-hidden"
 >
{/* Background Image */} <Image
     src="/images/gallery/02-eksterior-rumah-akbar-cover.png.png"
     alt="Rumah Akbar Guest House"
     fill
     priority
     className="object-cover"
   />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Background Blur Animation */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
    />

    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
    />
  </div>

  <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl sm:text-7xl font-bold mb-4"
    >
      {PROPERTY_INFO.name}
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-xl sm:text-2xl text-gray-200 mb-3"
    >
      {PROPERTY_INFO.tagline}
    </motion.p>

    {/* Location */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-300 mb-8"
    >
      {PROPERTY_INFO.location}
    </motion.p>

    {/* Ratings */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-3 mb-8"
    >
      <a
        href="https://maps.app.goo.gl/71U1utDetDFoosc76"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition"
      >
        ⭐ Google 5.0 (9 Ulasan)
      </a>

      <a
        href="https://www.airbnb.co.id/rooms/1638853659702945196"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition"
      >
        ⭐ Airbnb 5.0 (2 Ulasan)
      </a>

      <a
        href="https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition"
      >
        🏆 Booking 9.0 (3 Ulasan)
      </a>
    </motion.div>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors"
      >
        📱 Pesan Sekarang
      </a>

      <button
        onClick={scrollToNext}
        className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
      >
        📷 Lihat Galeri
      </button>
    </motion.div>

    {/* Price Box */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-10 inline-block"
    >
      <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-xl border border-white/20">
        <p className="text-gray-300 text-sm">
          Mulai dari
        </p>

        <p className="text-4xl font-bold text-accent">
          Rp650.000
        </p>

        <p className="text-gray-300 text-sm">
          per malam
        </p>
      </div>
    </motion.div>
  </div>

  {/* Scroll Down */}
  <motion.button
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    onClick={scrollToNext}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30"
  >
    <ChevronDown size={32} />
  </motion.button>
</section>
)
}
