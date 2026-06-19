'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { generateWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
const scrollToNext = () => {
document.getElementById('gallery')?.scrollIntoView({
behavior: 'smooth',
})
}

return ( <section
   id="home"
   className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden text-white pt-12 pb-8"
 >
{/* Background */} <Image
     src="/images/gallery/02-eksterior-rumah-akbar-cover.png.png"
     alt="Rumah Akbar Guest House"
     fill
     priority
     className="object-cover"
   />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20 md:pt-0">

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-accent uppercase tracking-[5px] text-sm font-semibold mb-4"
    >
      Private Family Stay
    </motion.p>

    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-[2.2rem] md:text-6xl font-bold mb-4"
    >
      Rumah Akbar Guest House
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl text-gray-200 mb-4"
    >
      Villa Privat Dekat Pantai Balad Taliwang untuk Keluarga & Wisatawan
    </motion.p>

    {/* Location */}
   

    {/* Trust Badge */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center mb-6"
    >
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
        ⭐ Rating 5.0 dari Tamu
      </div>
    </motion.div>

    {/* Price Card */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="inline-block mb-6"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4">
        <p className="text-gray-300 text-sm mb-1">
          Mulai dari
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-accent">
          Rp650.000
        </h2>

      <p className="text-gray-300 mt-1 text-sm">
          per malam • hingga 4 tamu
        </p>
      </div>
    </motion.div>

    {/* Info Booking */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-sm text-gray-300 mb-4"
    >
      Tersedia pemesanan langsung, Airbnb, dan Booking.com
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mb-4"
    >
      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-auto px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
      >
        📱 Tanya Ketersediaan
      </a>
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
    className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
  >
    <ChevronDown size={32} />
  </motion.button>
</section>

)
}
