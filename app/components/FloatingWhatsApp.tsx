'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { generateWhatsAppUrl } from '@/lib/utils'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={generateWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors" />
      <MessageCircle size={28} className="relative z-10" />
      
      {/* Pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border-2 border-white/50"
      />
    </motion.a>
  )
}
