'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PROPERTY_INFO } from '@/lib/constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Fasilitas', href: '#facilities' },
    { label: 'Harga', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Lokasi', href: '#location' },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    return (
  <header className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold">
              RA
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">{PROPERTY_INFO.name}</h1>
              <p className="text-xs text-gray-500">{PROPERTY_INFO.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-0 text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
