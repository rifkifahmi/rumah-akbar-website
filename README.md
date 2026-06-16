# 🏠 Rumah Akbar Guest House - Professional Website

Website profesional untuk Rumah Akbar Guest House yang dibangun dengan teknologi modern dan siap untuk menghasilkan booking langsung.

## ✨ Fitur

- ✅ **Hero Section** dengan animasi menarik
- ✅ **Galeri Foto** dengan lightbox
- ✅ **Fasilitas Lengkap** dengan ikon
- ✅ **Pricing Dinamis** dengan berbagai paket
- ✅ **Video Testimoni YouTube** terintegrasi
- ✅ **FAQ Accordion** interaktif
- ✅ **Google Maps** lokasi terpadu
- ✅ **Floating WhatsApp Button** untuk booking
- ✅ **SEO Lokal** dengan Schema.org LodgingBusiness
- ✅ **Open Graph** untuk social media sharing
- ✅ **Mobile First** design responsif
- ✅ **Framer Motion** animasi smooth
- ✅ **Tailwind CSS** styling modern

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Next.js metadata API, Schema.org JSON-LD

## 📋 Struktur Folder

```
rumah-akbar-nextjs/
├── app/
│   ├── components/          # Komponen React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Gallery.tsx
│   │   ├── Facilities.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Location.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── layout.tsx           # Root layout dengan SEO
│   ├── page.tsx             # Halaman utama
│   └── globals.css          # Global styles
├── lib/
│   ├── constants.ts         # Data properti, fasilitas, pricing, dll
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
│   ├── og-image.jpg        # OG image untuk social media
│   └── images/
│       └── gallery/        # Foto galeri (ganti dengan foto real)
├── .env.local              # Environment variables
├── .env.example            # Template environment
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### 1. Clone atau Download Project

```bash
git clone <repository-url>
cd rumah-akbar-nextjs
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Setup Environment Variables

Copy `.env.example` ke `.env.local`:

```bash
cp .env.example .env.local
```

Update nilai di `.env.local` dengan data Anda.

### 4. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🎨 Customization

### Update Informasi Properti

Edit `/lib/constants.ts`:

```typescript
export const PROPERTY_INFO = {
  name: 'Rumah Akbar Guest House',
  tagline: 'Private Family Stay di Pantai Balad, Taliwang',
  description: '...',
  location: '...',
  whatsapp: '+6287784786101',
  startingPrice: 650000,
}
```

### Update Fasilitas

Di `/lib/constants.ts`, ubah array `FACILITIES`:

```typescript
export const FACILITIES = [
  {
    id: 1,
    icon: '🛏️',
    name: 'Nama Fasilitas',
    description: 'Deskripsi fasilitas',
  },
  // ... tambah lebih banyak
]
```

### Update Harga

Di `/lib/constants.ts`, ubah array `PRICING`:

```typescript
export const PRICING = [
  {
    id: 1,
    duration: 'Per Malam',
    price: 650000,
    capacity: 'Hingga 4 orang',
    features: ['Feature 1', 'Feature 2'],
  },
  // ... tambah paket lain
]
```

### Update Warna Tema

Di `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#001F3F',    // Navy - ubah sesuai keinginan
      accent: '#D4AF37',     // Gold - ubah sesuai keinginan
      light: '#F8F9FA',      // Light gray
    },
  },
},
```

### Tambah Foto Galeri

1. Buat folder `/public/images/gallery`
2. Upload foto ke folder tersebut
3. Update array `GALLERY_IMAGES` di `/app/components/Gallery.tsx`

### Update Video YouTube

Di `app/components/Testimonials.tsx`, ubah `YOUTUBE_VIDEO_ID`:

```typescript
const YOUTUBE_VIDEO_ID = 'YOUR_VIDEO_ID' // Ganti dengan ID video Anda
```

### Update Google Maps

Di `app/components/Location.tsx`, ubah `MAPS_EMBED_ID`:

```typescript
const MAPS_EMBED_ID = 'YOUR_MAPS_ID' // Dapatkan dari Google Maps
```

## 📱 SEO & Open Graph

Website sudah dilengkapi dengan:

- ✅ **Meta Tags** untuk SEO
- ✅ **Open Graph** untuk social media preview
- ✅ **Twitter Card** untuk Twitter sharing
- ✅ **Schema.org JSON-LD** untuk rich snippets
- ✅ **Sitemap support**
- ✅ **Robots meta tags**

Update OG image di `/public/og-image.jpg` (1200x630px).

## 🚀 Deployment ke Vercel

### 1. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/rumah-akbar.git
git push -u origin main
```

### 2. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import repository GitHub
4. Add environment variables (dari `.env.local`)
5. Click "Deploy"

**URL Anda**: `https://rumah-akbar.vercel.app` (atau custom domain)

### 3. Setup Custom Domain (Optional)

1. Beli domain (GoDaddy, Namecheap, etc.)
2. Di Vercel → Settings → Domains
3. Tambah domain custom
4. Update DNS records sesuai instruksi Vercel

## 📊 Performance

Website sudah dioptimalkan untuk:

- ⚡ **Fast Load Time** (<2 detik)
- 📱 **Mobile Responsive** (Mobile First Design)
- ♿ **Accessibility** (A11y compliant)
- 🔍 **SEO Friendly** (Schema.org, Open Graph)
- 🎨 **Smooth Animations** (Framer Motion)

## 🔒 Security

Website memiliki headers keamanan:

- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

## 📞 Support WhatsApp Integration

Website terhubung langsung ke WhatsApp:

- Floating WhatsApp Button di sudut kanan bawah
- CTA buttons di setiap section
- Auto-formatted message dengan WhatsApp Business API

Format URL:
```
https://wa.me/[PHONE_NUMBER]?text=[MESSAGE]
```

## 🎯 Next Steps

1. ✅ Setup website di localhost
2. ✅ Customize content dengan data real
3. ✅ Upload foto galeri
4. ✅ Update video YouTube & Google Maps
5. ✅ Test responsive design
6. ✅ Deploy ke Vercel
7. ✅ Setup custom domain
8. ✅ Monitor dengan Google Analytics (optional)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📝 License

Private project untuk Rumah Akbar Guest House.

---

**Build with ❤️ using Next.js 15**

Untuk pertanyaan atau support, hubungi tim development Anda.
