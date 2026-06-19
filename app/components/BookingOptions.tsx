'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { generateWhatsAppUrl } from '@/lib/utils'

export default function BookingOptions() {
  const options = [
    {
      title: 'Pesan Langsung',
      subtitle: 'WhatsApp',
      icon: '📱',
      description:
        'Hubungi kami langsung untuk mengecek ketersediaan dan mendapatkan penawaran terbaik.',
      benefits: [
        'Bisa negosiasi harga',
        'Respon langsung pemilik',
        'Tanya ketersediaan terlebih dahulu',
      ],
      button: 'Chat WhatsApp',
      url: generateWhatsAppUrl(),
      featured: true,
    },
    {
      title: 'Airbnb',
      subtitle: 'Booking Aman',
      icon: '🏠',
      description:
        'Nikmati kemudahan pembayaran dan promo yang tersedia melalui Airbnb.',
      benefits: [
        'Promo Airbnb',
        'Pembayaran aman',
        'Cocok wisatawan internasional',
      ],
      button: 'Lihat Airbnb',
      url: 'https://www.airbnb.co.id/rooms/1638853659702945196',
      featured: false,
    },
    {
      title: 'Booking.com',
      subtitle: 'Booking Praktis',
      icon: '🏨',
      description:
        'Pesan dengan mudah melalui Booking.com dan nikmati promo yang tersedia.',
      benefits: [
        'Promo Booking.com',
        'Booking cepat',
        'Beragam metode pembayaran',
      ],
      button: 'Lihat Booking',
      url: 'https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html',
      featured: false,
    },
  ]

  return (
    <section id="booking-options" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Pilih Cara Booking yang Paling Nyaman
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Rumah Akbar Guest House tersedia untuk pemesanan langsung
            maupun melalui platform terpercaya.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                option.featured
                  ? 'bg-primary text-white border-primary scale-105'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="text-5xl mb-4">
                {option.icon}
              </div>

              <h3
                className={`text-2xl font-bold mb-2 ${
                  option.featured
                    ? 'text-white'
                    : 'text-primary'
                }`}
              >
                {option.title}
              </h3>

              <p
                className={`font-medium mb-4 ${
                  option.featured
                    ? 'text-accent'
                    : 'text-accent'
                }`}
              >
                {option.subtitle}
              </p>

              <p
                className={`mb-6 ${
                  option.featured
                    ? 'text-gray-200'
                    : 'text-gray-600'
                }`}
              >
                {option.description}
              </p>

              <ul className="space-y-3 mb-8">
                {option.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={
                      option.featured
                        ? 'text-gray-100'
                        : 'text-gray-700'
                    }
                  >
                    ✓ {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-xl font-bold transition ${
                  option.featured
                    ? 'bg-accent text-primary hover:bg-accent/90'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {option.button}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-light rounded-xl px-6 py-4">
            <p className="text-gray-700">
              💡 Ingin mendapatkan penawaran terbaik?
              Hubungi kami langsung melalui WhatsApp untuk mengecek promo dan ketersediaan terbaru.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
