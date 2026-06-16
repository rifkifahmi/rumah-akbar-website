'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ as FAQ_DATA } from '@/lib/constants'

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Pertanyaan Umum</h2>
          <p className="text-gray-600">
            Jawaban untuk pertanyaan yang sering diajukan oleh calon tamu
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-colors"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-light transition-colors"
              >
                {/* Question */}
                <span className="font-semibold text-primary text-left">
                  {item.question}
                </span>

                {/* Icon */}
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} className="text-accent" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openId === item.id ? 'auto' : 0,
                  opacity: openId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-light border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Masih ada pertanyaan?</h3>
          <p className="mb-6">Hubungi kami melalui WhatsApp untuk bantuan lebih lanjut</p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Saya%20punya%20pertanyaan%20tentang%20Rumah%20Akbar`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            💬 Chat Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  )
}
