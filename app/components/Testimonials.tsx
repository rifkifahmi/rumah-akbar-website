'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

const YOUTUBE_VIDEO_ID = 'oer8AAAzWjw'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Testimoni Tamu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman nyata dari tamu-tamu kami yang telah menginap
          </p>
        </motion.div>

        {/* Video + Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Rumah Akbar Guest House Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Reviews */}
          <div className="space-y-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-light rounded-lg p-6 border-l-4 border-accent hover:shadow-lg transition-shadow"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ⭐
                      </span>
                    ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Ingin menambahkan testimoni Anda?</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Saya%20ingin%20meninggalkan%20testimoni%20tentang%20menginap%20di%20Rumah%20Akbar`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            📱 Hubungi Kami via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
