# 🚀 QUICK START GUIDE - Rumah Akbar Website

**⏱️ Waktu setup: 10 menit | Deploy: 5 menit**

## 1️⃣ Setup Awal (5 menit)

### A. Install Node.js (Jika belum)

Download dari [nodejs.org](https://nodejs.org) → Versi LTS

Verifikasi:
```bash
node --version
npm --version
```

### B. Setup Project

```bash
# 1. Navigate ke folder project
cd rumah-akbar-nextjs

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

✅ Buka [http://localhost:3000](http://localhost:3000) di browser

## 2️⃣ Customize Content (5 menit)

### A. Update Property Information

File: `lib/constants.ts`

```typescript
export const PROPERTY_INFO = {
  name: 'Rumah Akbar Guest House',
  tagline: 'Private Family Stay di Pantai Balad, Taliwang',
  description: '...',
  location: '...',
  whatsapp: '+6287784786101', // Ganti dengan nomor Anda
  startingPrice: 650000,
}
```

### B. Update WhatsApp Number

File: `.env.local`

```
NEXT_PUBLIC_WHATSAPP_NUMBER=6287784786101  # Ganti dengan nomor Anda
```

### C. Update YouTube Video

File: `.env.local`

```
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=oer8AAAzWjw  # Ganti dengan ID video Anda
```

## 3️⃣ Deploy ke Vercel (5 menit)

### Step A: Push ke GitHub

```bash
git init
git add .
git commit -m "Initial: Rumah Akbar website"
git branch -M main

# Ganti dengan username GitHub Anda
git remote add origin https://github.com/USERNAME/rumah-akbar.git
git push -u origin main
```

### Step B: Deploy

1. Buka [vercel.com](https://vercel.com)
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Add New" → "Project"
4. Import repository `rumah-akbar`
5. Paste environment variables (dari `.env.local`)
6. Click "Deploy"

✅ Website live di: `https://rumah-akbar.vercel.app`

## 🎯 Sekarang Apa?

### Prioritas Tinggi

- [ ] Replace foto galeri dengan foto actual
- [ ] Update harga jika berbeda
- [ ] Update nomor WhatsApp
- [ ] Test di mobile (responsive check)

### Prioritas Medium

- [ ] Setup custom domain (rumahakbar.com)
- [ ] Update Google Maps location
- [ ] Add Google Analytics tracking
- [ ] Update testimonial

### Prioritas Rendah

- [ ] Setup email notifications
- [ ] Add blog section
- [ ] A/B testing untuk CTA button

## 📝 File Penting untuk Customize

| File | Untuk | Priority |
|------|-------|----------|
| `lib/constants.ts` | Info properti, harga, FAQ | ⭐⭐⭐ |
| `.env.local` | WhatsApp, YouTube, Maps | ⭐⭐⭐ |
| `app/components/Gallery.tsx` | Foto galeri | ⭐⭐ |
| `tailwind.config.ts` | Warna tema | ⭐⭐ |
| `app/components/Testimonials.tsx` | Video YouTube | ⭐⭐ |
| `app/components/Location.tsx` | Google Maps | ⭐⭐ |

## 🐛 Common Issues

### WhatsApp button tidak work

**Solusi:**
```
NEXT_PUBLIC_WHATSAPP_NUMBER=6287784786101
```
⚠️ Format: tanpa spasi atau karakter khusus

### Website tidak update setelah deploy

```bash
git add .
git commit -m "Update content"
git push
# Vercel auto-deploy dalam 1-2 menit
```

### Build error di Vercel

```bash
# Test build locally
npm run build

# Jika ada error, fix dan push ulang
npm run dev  # untuk debug
```

## 📚 Documentation Files

- **README.md** - Overview & features
- **DEPLOYMENT_GUIDE.md** - Detailed deployment steps
- **GETTING_STARTED.md** - This file

## 🎨 Customization Guide

```bash
# Setiap update:

# 1. Edit file yang dibutuhkan
# (misal: lib/constants.ts untuk update harga)

# 2. Test locally
npm run dev
# Kunjungi http://localhost:3000

# 3. Commit & push
git add .
git commit -m "Update harga dan fasilitas"
git push

# 4. Vercel auto-deploy (tunggu 1-2 menit)
# ✅ Website updated!
```

## ☑️ Pre-Deploy Checklist

Sebelum live production:

- [ ] Semua link WhatsApp working
- [ ] Video YouTube loading
- [ ] Google Maps visible
- [ ] Foto galeri muncul sempurna
- [ ] Mobile responsive OK
- [ ] Warna sesuai brand

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)

## 💡 Tips

✅ Backup `.env.local` di tempat aman
✅ Keep `package-lock.json` di git
✅ Update dependencies setiap bulan
✅ Monitor analytics di Vercel dashboard
✅ Respond WhatsApp bookings quickly!

---

## 🎯 Target Booking

Untuk maximize conversion:

1. **Fast Response** - Reply WhatsApp dalam < 1 jam
2. **Clear Communication** - Jelaskan fasilitas dengan detail
3. **Flexible Pricing** - Offer paket sesuai budget tamu
4. **Social Proof** - Add real testimonials & review regularly

---

**🎉 Anda siap! Website profesional Anda sudah live!**

Untuk support atau questions, refer ke documentation files.

Good luck with Rumah Akbar! 🏠✨
