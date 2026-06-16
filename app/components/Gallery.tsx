'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Rumah Akbar Guest House',
    src: '/images/gallery/01-hero-house.png.png'
  },
  {
    id: 2,
    title: 'Eksterior Rumah',
    src: '/images/gallery/02-eksterior-rumah-akbar-cover.png'
  },
  {
    id: 3,
    title: 'Halaman dan Parkir',
    src: '/images/gallery/03-halaman-dan-parkir.png'
  },
  {
    id: 4,
    title: 'Ruang Keluarga',
    src: '/images/gallery/04-living-room-main.png'
  },
  {
    id: 5,
    title: 'Area Makan',
    src: '/images/gallery/05-dining-area.png'
  },
  {
    id: 6,
    title: 'Dapur',
    src: '/images/gallery/06-kitchen.png'
  },
  {
    id: 7,
    title: 'Area Dapur',
    src: '/images/gallery/07-kitchen-appliances.png'
  },
  {
    id: 8,
    title: 'Kamar Tidur Utama',
    src: '/images/gallery/08-bedroom-master.png'
  },
  {
    id: 9,
    title: 'Kamar Tidur Twin',
    src: '/images/gallery/09-bedroom-twin.png'
  },
  {
    id: 10,
    title: 'Kamar Mandi',
    src: '/images/gallery/10-bathroom.png'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null)

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
          <h2 className="text-4xl font-bold text-primary mb-4">Galeri Foto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat keindahan dan kenyamanan Rumah Akbar Guest House melalui galeri foto kami
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
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Placeholder gradient */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-start p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-center text-gray-600">
            💡 <strong>Catatan:</strong> Ganti gambar placeholder di folder <code className="bg-gray-100 px-2 py-1 rounded">/public/images/gallery/</code> dengan foto actual properti Anda.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
           <div className="relative rounded-lg overflow-hidden aspect-video">
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
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
