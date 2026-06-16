# 🏠 RUMAH AKBAR GUEST HOUSE - WEBSITE SETUP

Selamat! Anda memiliki complete professional website ready to deploy.

## 📦 Apa yang Anda Dapatkan?

✅ **Complete Next.js 15 Application** dengan:
- TypeScript full
- Tailwind CSS design system
- Framer Motion animations
- Responsive mobile-first
- SEO optimized
- Production ready

✅ **9 Components** siap pakai:
1. Header dengan navigation
2. Hero section dengan CTA
3. Gallery dengan lightbox
4. Facilities showcase
5. Dynamic pricing cards
6. YouTube testimonials
7. FAQ accordion
8. Google Maps location
9. Floating WhatsApp button
10. Professional footer

✅ **SEO & Meta Tags**:
- Open Graph untuk social sharing
- Schema.org JSON-LD (LodgingBusiness)
- Meta descriptions
- Robots & sitemaps ready

✅ **Warna Tema Professional**:
- Primary: Navy (#001F3F)
- Accent: Gold (#D4AF37)
- Light: Clean Gray (#F8F9FA)

## 🚀 3-Step Deploy (Total 10 menit)

### Step 1: Install & Run Locally (3 menit)

```bash
cd rumah-akbar-nextjs
npm install
npm run dev
```

Buka: http://localhost:3000

### Step 2: Customize Data (2 menit)

Update 2 file:

**A. lib/constants.ts** - Data properti & harga
```typescript
export const PROPERTY_INFO = {
  whatsapp: '+6287784786101', // ✏️ Update nomor Anda
  startingPrice: 650000,        // ✏️ Update harga
}
```

**B. .env.local** - API & integration
```
NEXT_PUBLIC_WHATSAPP_NUMBER=6287784786101
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=oer8AAAzWjw
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_ID=SeKHCyZgUu57UzAo6
```

### Step 3: Deploy ke Vercel (5 menit)

```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Rumah Akbar website"
git remote add origin https://github.com/YOUR_USERNAME/rumah-akbar.git
git push -u origin main

# 2. Deploy
# Buka: vercel.com
# Connect GitHub → Import project → Deploy
```

✅ Website live di: https://rumah-akbar.vercel.app

## 📂 File Structure

```
rumah-akbar-nextjs/
├── app/
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Gallery.tsx       # Photo gallery
│   │   ├── Facilities.tsx    # Fasilitas
│   │   ├── Pricing.tsx       # Harga
│   │   ├── Testimonials.tsx  # YouTube video
│   │   ├── FAQ.tsx           # FAQ accordion
│   │   ├── Location.tsx      # Google Maps
│   │   ├── Footer.tsx        # Footer
│   │   └── FloatingWhatsApp.tsx
│   ├── layout.tsx            # Root layout + SEO
│   ├── page.tsx              # Main page
│   └── globals.css           # Global styles
├── lib/
│   ├── constants.ts          # 📝 Edit: Property info, pricing, facilities
│   └── utils.ts              # Utility functions
├── public/
│   ├── manifest.json         # PWA manifest
│   └── images/               # 📸 Add photos here
├── .env.local                # 📝 Edit: Environment variables
├── package.json              # Dependencies
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind colors & theme
├── tsconfig.json             # TypeScript config
├── README.md                 # Full documentation
├── DEPLOYMENT_GUIDE.md       # Vercel deployment
└── GETTING_STARTED.md        # Quick start
```

## ✏️ Customization Checklist

### Priority 1 (HARUS)
- [ ] Update WhatsApp number di `.env.local` & `constants.ts`
- [ ] Update harga di `lib/constants.ts`
- [ ] Update YouTube video ID di `.env.local`
- [ ] Update Google Maps di `.env.local`

### Priority 2 (PENTING)
- [ ] Replace foto galeri di `/public/images/gallery/`
- [ ] Update FAQ answers di `constants.ts`
- [ ] Update testimonial names/text di `constants.ts`
- [ ] Customize warna tema di `tailwind.config.ts`

### Priority 3 (OPTIONAL)
- [ ] Setup Google Analytics
- [ ] Add email notifications
- [ ] Setup custom domain

## 🎨 Color Theme (Airbnb Style)

Sudah siap pakai. Jika ingin ganti:

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#001F3F',    // Navy → ubah sesuai brand
  accent: '#D4AF37',     // Gold → ubah sesuai brand
  light: '#F8F9FA',      // Light gray
}
```

## 📸 Add Photo Gallery

1. Buat folder: `/public/images/gallery/`
2. Upload foto dengan format:
   - `room-1.jpg`
   - `room-2.jpg`
   - `kitchen.jpg`
   - dst

3. Update di `app/components/Gallery.tsx`:
```typescript
const GALLERY_IMAGES = [
  { id: 1, title: 'Kamar Tidur', category: 'bedroom' },
  // ... tambah lebih banyak
]
```

## 🎥 Add YouTube Video

1. Get video ID dari URL:
   - URL: `https://youtube.com/watch?v=**oer8AAAzWjw**`
   - ID: `oer8AAAzWjw`

2. Update di `.env.local`:
```
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=oer8AAAzWjw
```

## 🗺️ Add Google Maps

1. Buka: https://maps.google.com
2. Cari properti Anda
3. Click "Share" → "Embed map"
4. Copy embed code
5. Update di `app/components/Location.tsx`

## ☎️ WhatsApp Integration

Sudah built-in! Otomatis:
- Floating button di corner kanan
- CTA buttons di setiap section
- Auto-formatted message

Format: `https://wa.me/6287784786101?text=Halo`

## 🔍 SEO Ready

✅ Meta tags untuk Google
✅ Open Graph untuk Facebook/Instagram
✅ Twitter Card untuk Twitter
✅ Schema.org JSON-LD
✅ Mobile friendly
✅ Fast loading
✅ Structured data

## 📊 Performance

Target metrics:
- **Lighthouse Score**: 90+
- **Page Load**: < 2 detik
- **Mobile Responsive**: 100%

Vercel auto-optimize semua ini!

## 🚀 Deploy Commands

```bash
# Development
npm run dev

# Build production
npm run build

# Start production
npm start

# Lint code
npm run lint
```

## 📞 Support Files

1. **README.md** - Full documentation
2. **DEPLOYMENT_GUIDE.md** - Vercel step-by-step
3. **GETTING_STARTED.md** - Quick setup

## 🎯 Next: Generate Bookings!

Website sudah ready. Sekarang:

1. ✅ Deploy ke Vercel
2. ✅ Share link di social media
3. ✅ Respond WhatsApp quickly
4. ✅ Add real testimonials
5. ✅ Monitor analytics

## 💡 Pro Tips

✅ Backup `.env.local` di cloud storage
✅ Test responsive di mobile sebelum deploy
✅ Add Google Analytics untuk track visitors
✅ Update harga setiap musim tinggi/rendah
✅ Collect & add guest testimonials regularly

---

## 🎉 READY?

```bash
npm install
npm run dev
# Kunjungi http://localhost:3000
```

Website Anda sudah professional dan production-ready!

---

**Built with ❤️ using Next.js 15 + TypeScript + Tailwind CSS + Framer Motion**

Untuk questions, check README.md atau DEPLOYMENT_GUIDE.md
