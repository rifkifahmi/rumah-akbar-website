'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
const reasons = [
{
icon: '🏖️',
title: 'Dekat Pantai Balad',
description: 'Lokasi strategis untuk menikmati keindahan Pantai Balad dan sekitarnya.',
},
{
icon: '👨‍👩‍👧‍👦',
title: 'Cocok untuk Keluarga',
description: 'Rumah privat yang nyaman untuk keluarga maupun rombongan kecil.',
},
{
icon: '🛏️',
title: 'Fasilitas Lengkap',
description: '2 kamar tidur, 2 kamar mandi, dapur lengkap, AC, TV, dan WiFi.',
},
{
icon: '🌳',
title: 'Suasana Nyaman',
description: 'Halaman luas dan rindang untuk bersantai bersama keluarga.',
},
]

return ( <section className="py-20 bg-white"> <div className="max-w-6xl mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-16"
> <h2 className="text-4xl font-bold text-primary mb-4">
Mengapa Memilih Rumah Akbar Guest House? </h2>

```
      <p className="text-gray-600 max-w-2xl mx-auto">
        Kenyamanan, privasi, dan lokasi strategis untuk pengalaman menginap yang menyenangkan.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reasons.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-light rounded-lg p-6 shadow-md text-center"
        >
          <div className="text-5xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold text-primary mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

)
}
