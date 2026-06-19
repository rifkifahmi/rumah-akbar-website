'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustIndicators() {
 const ratings = [
  {
    platform: 'Google Maps',
    score: '5,0/5',
    reviews: '9 Ulasan',
    logo: '/images/Logos/googlemaps.png',
    url: 'https://maps.app.goo.gl/71U1utDetDFoosc76'
  },
  {
    platform: 'Airbnb',
    score: '5,0/5',
    reviews: '2 Ulasan',
    logo: '/images/Logos/airbnb.png',
    url: 'https://www.airbnb.co.id/rooms/1638853659702945196'
  },
  {
    platform: 'Booking.com',
    score: '9,0/10',
    reviews: '3 Ulasan',
    logo: '/images/Logos/bookingdotcom.png',
    url: 'https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ratings.map((item, index) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
             <div className="flex justify-center mb-5">
  <Image
    src={item.logo}
    alt={item.platform}
    width={80}
height={80}
className="object-contain h-16 w-auto"
  />
</div>

              <h3 className="text-xl font-bold text-primary mb-2">
                {item.platform}
              </h3>

              <p className="text-3xl font-bold text-accent mb-2">
                {item.score}
              </p>
<div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
  ✓ Rating Terverifikasi
</div>
            

<a
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
>
  Lihat Ulasan Asli
</a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
