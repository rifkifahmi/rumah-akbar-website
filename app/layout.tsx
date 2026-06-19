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
 metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.rumahakbar.com'
),
  title:
'Rumah Akbar Guest House | Villa Privat Dekat Pantai Balad Taliwang',
 description:
'Rumah Akbar Guest House adalah villa privat dekat Pantai Balad Taliwang, Sumbawa Barat. Cocok untuk keluarga hingga 4 tamu dengan 2 kamar tidur, dapur lengkap, WiFi gratis, dan halaman luas.',
 keywords: [
'guest house taliwang',
'villa taliwang',
'penginapan taliwang',
'penginapan sumbawa barat',
'villa pantai balad',
'rumah akbar guest house',
'guest house sumbawa',
'penginapan dekat pantai balad',
'villa keluarga taliwang',
'penginapan ntb',
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
    url: 'https://www.rumahakbar.com',
    siteName: PROPERTY_INFO.name,
   title:
'Rumah Akbar Guest House | Villa Privat Dekat Pantai Balad Taliwang',
    description:
'Rumah Akbar Guest House adalah villa privat dekat Pantai Balad Taliwang, Sumbawa Barat. Cocok untuk keluarga hingga 4 tamu dengan 2 kamar tidur, dapur lengkap, WiFi gratis, dan halaman luas.',
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
  title:
    'Rumah Akbar Guest House | Villa Privat Dekat Pantai Balad Taliwang',
  description:
    'Villa privat dekat Pantai Balad Taliwang, cocok untuk keluarga hingga 4 tamu.',
  images: ['/og-image.jpg'],
},
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.rumahakbar.com',
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
              description:
  'Rumah Akbar Guest House adalah villa privat dekat Pantai Balad Taliwang, Sumbawa Barat. Cocok untuk keluarga hingga 4 tamu dengan 2 kamar tidur, dapur lengkap, WiFi gratis, dan halaman luas.',
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
              aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '5',
  reviewCount: '9',
},

geo: {
  '@type': 'GeoCoordinates',
  latitude: '-8.764123',
  longitude: '116.794408',
},

sameAs: [
  'https://maps.app.goo.gl/71U1utDetDFoosc76',
  'https://www.airbnb.co.id/rooms/1638853659702945196',
  'https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html',
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
