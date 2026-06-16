import type { Metadata, Viewport } from 'next'
import { PROPERTY_INFO } from '@/lib/constants'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#001F3F',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rumahakbar.vercel.app'),
  title: `${PROPERTY_INFO.name} | ${PROPERTY_INFO.tagline}`,
  description: PROPERTY_INFO.description,
  keywords: [
    'Guest House',
    'Rumah Akbar',
    'Taliwang',
    'Sumbawa',
    'Private Family Stay',
    'Pantai Balad',
    'Penginapan',
    'Booking',
  ],
  authors: [{ name: 'Rumah Akbar Team' }],
  creator: 'Rumah Akbar',
  publisher: 'Rumah Akbar',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: PROPERTY_INFO.name,
    title: `${PROPERTY_INFO.name} | ${PROPERTY_INFO.tagline}`,
    description: PROPERTY_INFO.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: PROPERTY_INFO.name,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PROPERTY_INFO.name,
    description: PROPERTY_INFO.description,
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: PROPERTY_INFO.name,
              description: PROPERTY_INFO.description,
              url: process.env.NEXT_PUBLIC_SITE_URL,
              telephone: PROPERTY_INFO.whatsapp,
              image: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Pantai Balad',
                addressLocality: 'Taliwang',
                addressRegion: 'NTB',
                postalCode: '',
                addressCountry: 'ID',
              },
              priceRange: `IDR${PROPERTY_INFO.startingPrice}`,
              amenityFeature: [
                { '@type': 'Feature', name: 'WiFi Gratis' },
                { '@type': 'Feature', name: 'Parkir Gratis' },
                { '@type': 'Feature', name: 'Dapur Lengkap' },
                { '@type': 'Feature', name: 'AC' },
              ],
              potentialAction: {
                '@type': 'ReserveAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `https://wa.me/${PROPERTY_INFO.whatsapp}`,
                },
              },
            }),
          }}
        />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
