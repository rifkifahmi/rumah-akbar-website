'use client'

import { motion } from 'framer-motion'

export default function TrustIndicators() {
  const ratings = [
    {
      platform: 'Google Maps',
      score: '5,0/5',
      reviews: '9 Ulasan'
    },
    {
      platform: 'Airbnb',
      score: '5,0/5',
      reviews: '2 Ulasan'
    },
    {
      platform: 'Booking.com',
      score: '9,0/10',
      reviews: '3 Ulasan'
    }
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Dipercaya oleh Tamu
          </h2>

          <p className="text-gray-600">
            Penilaian asli dari berbagai platform pemesanan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ratings.map((item, index) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">⭐</div>

              <h3 className="text-xl font-bold text-primary mb-2">
                {item.platform}
              </h3>

              <p className="text-3xl font-bold text-accent mb-2">
                {item.score}
              </p>

              <p className="text-gray-600">
                {item.reviews}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
