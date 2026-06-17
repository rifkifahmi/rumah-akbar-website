'use client'

import { motion } from 'framer-motion'

export default function GuestReviews() {
const reviews = [
{
name: 'Eleri',
source: 'Airbnb',
rating: '⭐⭐⭐⭐⭐',
text: 'Kami menikmati masa inap yang menyenangkan. Vila modern, bersih, dekat pantai, dan tuan rumah sangat responsif. Sangat direkomendasikan.',
},
{
name: 'Martin',
source: 'Airbnb',
rating: '⭐⭐⭐⭐⭐',
text: 'Tempat dan lokasi yang menyenangkan. Saya pasti merekomendasikannya.',
},
{
name: 'Google Maps',
source: '9 Ulasan',
rating: '⭐⭐⭐⭐⭐',
text: 'Guest House Rumah Akbar memiliki rating sempurna 5.0 dari para tamu yang pernah menginap.',
},
]

return ( <section className="py-20 bg-light"> <div className="max-w-6xl mx-auto px-4 sm:px-6">

```
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Apa Kata Tamu Kami?
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Pengalaman nyata dari tamu yang pernah menginap di Rumah Akbar Guest House
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="text-xl mb-3">
            {review.rating}
          </div>

          <p className="text-gray-700 italic mb-4">
            "{review.text}"
          </p>

          <div>
            <p className="font-bold text-primary">
              {review.name}
            </p>

            <p className="text-sm text-gray-500">
              {review.source}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>
)
}
