'use client'

import { motion } from 'framer-motion'

export default function BookingOptions() {
const options = [
{
icon: '📱',
title: 'Reservasi Langsung',
description: 'Hubungi host langsung untuk cek ketersediaan dan informasi terbaru.',
button: 'Chat WhatsApp',
link: 'https://wa.me/6287784786101'
},
{
icon: '🏠',
title: 'Airbnb',
description: 'Pesan melalui Airbnb dan nikmati promo yang tersedia.',
button: 'Buka Airbnb',
link: 'https://www.airbnb.co.id/rooms/1638853659702945196'
},
{
icon: '🏨',
title: 'Booking.com',
description: 'Pesan melalui Booking.com dengan berbagai promo dan kemudahan pembayaran.',
button: 'Buka Booking',
link: 'https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html'
}
]

return ( <section className="py-20 bg-white"> <div className="max-w-6xl mx-auto px-4">

```
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Pilih Cara Pemesanan
      </h2>

      <p className="text-gray-600">
        Gunakan platform yang paling nyaman untuk Anda
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {options.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-light rounded-xl shadow-lg p-8 text-center"
        >
          <div className="text-5xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-bold text-primary mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 mb-6">
            {item.description}
          </p>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            {item.button}
          </a>
        </motion.div>
      ))}
    </div>

  </div>
</section>
```

)
}
