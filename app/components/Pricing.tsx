'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRICING } from '@/lib/constants'
import { formatCurrency, generateWhatsAppUrl } from '@/lib/utils'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Harga Terjangkau</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai paket harga yang fleksibel sesuai kebutuhan Anda
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === 1
                  ? 'ring-2 ring-accent transform scale-105 shadow-2xl'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-2 text-sm font-bold rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <div className={`p-8 ${index === 1 ? 'bg-primary text-white' : 'bg-white'}`}>
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-primary'}`}>
                  {plan.duration}
                </h3>

                {/* Capacity */}
                <p className={`text-sm mb-6 ${index === 1 ? 'text-gray-200' : 'text-gray-600'}`}>
                  {plan.capacity}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${index === 1 ? 'text-accent' : 'text-primary'}`}>
                    {formatCurrency(plan.price)}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        size={20}
                        className={index === 1 ? 'text-accent' : 'text-accent'}
                      />
                      <span className={index === 1 ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    index === 1
                      ? 'bg-accent text-primary hover:bg-accent/90'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            💡 Harga termasuk: WiFi gratis, parkir gratis, dapur lengkap, AC, dan semua fasilitas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
