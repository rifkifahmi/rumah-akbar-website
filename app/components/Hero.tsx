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
   className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
 > <Image
     src="/images/gallery/02-eksterior-rumah-akbar-cover.png.png"
     alt="Rumah Akbar Guest House"
     fill
     priority
     className="object-cover"
   />

```
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-accent uppercase tracking-[5px] text-sm font-semibold mb-4"
    >
      Private Family Stay
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-bold mb-4"
    >
      Rumah Akbar Guest House
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl text-gray-200 mb-4"
    >
      Villa Privat Dekat Pantai Balad untuk Keluarga & Wisatawan
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-gray-300 mb-8"
    >
      Pantai Balad, Taliwang, Sumbawa Barat, NTB
    </motion.p>

    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
     ⭐ Rating 5.0 dari tamu Google, Airbnb & Booking
    </div>

    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-8 py-6 inline-block mb-8">
      <p className="text-gray-300 text-sm">
        Mulai dari
      </p>

    <h2 className="text-3xl md:text-4xl font-bold text-accent"
        Rp650.000
      </h2>

      <p className="text-gray-300 mt-2">
        per malam • hingga 4 tamu
      </p>
    </div>

    <div className="mb-6">
      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-auto px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
      >
        📱 Tanya Ketersediaan
      </a>
    </div>

    <p className="text-sm text-gray-300">
      Tersedia pemesanan langsung, Airbnb, dan Booking.com
    </p>

  </div>

  <motion.button
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    onClick={scrollToNext}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
  >
    <ChevronDown size={32} />
  </motion.button>
</section>
)
}
