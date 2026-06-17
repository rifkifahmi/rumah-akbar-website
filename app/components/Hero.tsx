'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { generateWhatsAppUrl } from '@/lib/utils'
import Image from 'next/image'

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('gallery')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-20 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/gallery/02-eksterior-rumah-akbar-cover.png.png"
        alt="Rumah Akbar Guest House"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-accent font-semibold tracking-[4px] uppercase text-sm">
            Private Family Stay
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Rumah Akbar Guest House
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-3"
        >
          Villa Privat Dekat Pantai Balad untuk Keluarga & Wisatawan
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mb-6"
        >
          Pantai Balad, Taliwang, Sumbawa Barat, NTB
        </motion.p>

        {/* Trust Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            ⭐ Dipercaya oleh tamu Google Maps, Airbnb & Booking.com
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            📱 Pesan via WhatsApp
          </a>

          <a
            href="https://www.airbnb.co.id/rooms/1638853659702945196"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            🏠 Airbnb
          </a>

          <a
            href="https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            🏨 Booking.com
          </a>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-200 mb-10"
        >
          <span>🏖️ ±50 Meter ke Pantai Balad</span>
          <span>🛏️ 2 Kamar Tidur</span>
          <span>🚿 2 Kamar Mandi</span>
          <span>👨‍👩‍👧‍👦 Hingga 4 Tamu</span>
          <span>📶 WiFi Gratis</span>
        </motion.div>

        {/* Price Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="inline-block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-10 py-6">
            <p className="text-gray-300 text-sm mb-1">
              Mulai dari
            </p>

            <h2 className="text-5xl font-bold text-accent">
              Rp650.000
            </h2>

            <p className="text-gray-300 mt-2">
              per malam • hingga 4 tamu
            </p>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-30"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
