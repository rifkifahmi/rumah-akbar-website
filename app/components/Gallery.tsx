'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { generateWhatsAppUrl } from '@/lib/utils'

const GALLERY_IMAGES = [
  {
    id: 2,
    title: 'Eksterior Rumah',
    src: '/images/gallery/02-eksterior-rumah-akbar-cover.png.png',
  },
  {
    id: 4,
    title: 'Ruang Keluarga',
    src: '/images/gallery/04-living-room-main.png',
  },
  {
    id: 8,
    title: 'Kamar Tidur Utama',
    src: '/images/gallery/08-bedroom-master.png',
  },
  {
    id: 9,
    title: 'Kamar Tidur Twin',
    src: '/images/gallery/09-bedroom-twin.png',
  },
  {
    id: 10,
    title: 'Kamar Mandi',
    src: '/images/gallery/10-bathroom.png.png',
  },
  {
    id: 5,
    title: 'Area Makan',
    src: '/images/gallery/05-dining-area.png',
  },
  {
    id: 6,
    title: 'Dapur',
    src: '/images/gallery/06-kitchen.png',
  },
  {
    id: 7,
    title: 'Area Dapur',
    src: '/images/gallery/07-kitchen-appliances.png',
  },
  {
    id: 3,
    title: 'Halaman dan Parkir',
    src: '/images/gallery/03-halaman-dan-parkir.png.png',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] =
    useState<(typeof GALLERY_IMAGES)[0] | null>(null)

  return (
    <section id="gallery" className="py-20 bg-light">
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
            Galeri Foto
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat keindahan dan kenyamanan Rumah Akbar Guest House
            melalui galeri foto kami
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 0
                  ? 'sm:col-span-2 sm:row-span-2 h-[560px]'
                  : 'h-64'
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 100vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-lg drop-shadow-lg">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Tertarik Menginap di Rumah Akbar?
          </h3>

          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk mengecek ketersediaan tanggal,
            harga terbaru, dan promo menginap.
          </p>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition"
          >
            📱 Tanya Ketersediaan
          </a>
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selectedImage.title}
            </p>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
