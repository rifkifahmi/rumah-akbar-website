# 🚀 Deployment Guide - Vercel

Panduan lengkap untuk deploy Rumah Akbar Website ke Vercel (hosting gratis dengan domain gratis).

## Prerequisites

- Account GitHub (gratis: github.com)
- Account Vercel (gratis: vercel.com)
- Node.js 18+ (sudah terinstall jika sudah setup project)

## Step 1: Persiapan Project

### A. Buat Repository GitHub

1. Buka [github.com](https://github.com)
2. Login atau buat account baru
3. Click "New repository"
4. Nama: `rumah-akbar` (atau nama pilihan Anda)
5. Description: "Rumah Akbar Guest House Website"
6. Pilih "Public" atau "Private"
7. **JANGAN** pilih "Initialize with README"
8. Click "Create repository"

### B. Push Project ke GitHub

Buka terminal di folder project:

```bash
# Initialize git (jika belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit: Rumah Akbar website with Next.js 15"

# Tambah remote
git remote add origin https://github.com/YOUR_USERNAME/rumah-akbar.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy ke Vercel

### A. Connect Vercel dengan GitHub

1. Buka [vercel.com](https://vercel.com)
2. Click "Sign Up" → Pilih "Continue with GitHub"
3. Authorize Vercel untuk akses GitHub
4. Vercel akan redirect ke dashboard

### B. Import Project

1. Di dashboard Vercel, click "Add New..." → "Project"
2. Click "Import Git Repository"
3. Cari repository `rumah-akbar` Anda
4. Click "Import"

### C. Configure Project

Di halaman konfigurasi:

**Project Name**: `rumah-akbar` (atau sesuai pilihan)

**Framework Preset**: Next.js (auto-detected)

**Environment Variables**:
Tambahkan dari `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=6287784786101
NEXT_PUBLIC_WHATSAPP_MESSAGE=Halo%20Rumah%20Akbar%2C%20saya%20ingin%20booking...
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_ID=SeKHCyZgUu57UzAo6
NEXT_PUBLIC_SITE_URL=https://rumahakbar.vercel.app
NEXT_PUBLIC_SITE_NAME=Rumah Akbar Guest House
NEXT_PUBLIC_DESCRIPTION=Private Family Stay di Pantai Balad, Taliwang
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=oer8AAAzWjw
```

### D. Deploy

Click "Deploy"

⏳ Tunggu 2-5 menit hingga build selesai.

✅ Selesai! Website sudah live di `https://rumahakbar.vercel.app`

## Step 3: Setup Custom Domain (Optional tapi Recommended)

### A. Beli Domain

Pilih salah satu registrar:
- [Namecheap.com](https://www.namecheap.com) - Murah
- [GoDaddy.com](https://www.godaddy.com) - Populer
- [Niagahoster.com](https://www.niagahoster.com) - Indonesia

Contoh domain untuk properti: `rumahakbar.com`, `rumahakbarstaywithus.com`

### B. Connect ke Vercel

1. Di Vercel dashboard, buka project
2. Click "Settings" → "Domains"
3. Di "Production Domains", click "Add"
4. Masukkan domain Anda (misal: `rumahakbar.com`)
5. Click "Add"

Vercel akan memberikan instructions untuk update DNS:

6. Login ke registrar domain Anda (misal Namecheap)
7. Edit DNS settings untuk domain
8. Sesuaikan dengan instruksi Vercel:
   - Ubah nameserver ke nameserver Vercel, ATAU
   - Tambahkan CNAME records sesuai petunjuk

⏳ Tunggu 24-48 jam untuk propagasi DNS complete

✅ Website tersedia di `https://rumahakbar.com` (jika sudah selesai)

## Step 4: Configure & Monitor

### A. Environment Variables Production

Jika perlu update env vars di production:

1. Di Vercel → Settings → Environment Variables
2. Tambah atau update variables
3. Click "Save"
4. Redeploy project untuk apply changes

### A. Analytics & Monitoring

Vercel sudah provide:
- Web Analytics (free)
- Performance monitoring
- Real-time logs

Akses di: Vercel Dashboard → Project → Analytics

### B. Google Search Console (Optional)

Untuk SEO better:

1. Buka [google.com/webmasters](https://www.google.com/webmasters)
2. Click "Add Property"
3. Masukkan domain Anda
4. Verify dengan DNS record (sesuai instruksi Google)
5. Submit sitemap: `https://rumahakbar.com/sitemap.xml`

## Step 5: Update & Maintenance

### A. Setiap kali update content:

```bash
# 1. Edit file (misal lib/constants.ts)
# 2. Commit
git add .
git commit -m "Update: tambah foto baru ke gallery"

# 3. Push ke GitHub
git push

# 4. Vercel auto-rebuild & redeploy
# ✅ Selesai - site sudah updated
```

### B. Update Environment Variables:

1. Edit `.env.local` locally
2. Commit dan push ke GitHub
3. Di Vercel dashboard, update env vars sesuai
4. Redeploy

## Troubleshooting

### Build Error

**Masalah**: Build gagal di Vercel

**Solusi**:
```bash
# Test build locally dulu
npm run build

# Jika ada error, fix dan push ulang
git push
```

### Domain tidak terhubung

**Masalah**: Domain menunjuk ke hosting lain

**Solusi**:
1. Clear DNS cache: `ipconfig /flushdns` (Windows) atau `sudo dscacheutil -flushcache` (Mac)
2. Tunggu 48 jam untuk propagasi lengkap
3. Check DNS dengan: `nslookup rumahakbar.com`

### WhatsApp button tidak work

**Masalah**: Link WhatsApp error

**Solusi**:
1. Check env variable `NEXT_PUBLIC_WHATSAPP_NUMBER` sudah set
2. Format harus: `6287784786101` (tanpa +)
3. Redeploy di Vercel

## Performance Tips

### A. Optimasi Foto

Before deploy, optimasi foto gallery:

```bash
# Menggunakan TinyPNG online
# 1. Buka tinypng.com
# 2. Upload foto
# 3. Download hasil compressed
# 4. Ganti file di /public/images/gallery/
```

### B. Enable Caching

Vercel sudah handle caching otomatis. Untuk maximum performance:

1. Gunakan `.webp` format untuk images
2. Compress dengan tools online
3. Keep images < 500KB

### C. Monitor Score

```bash
# PageSpeed Insights
https://pagespeed.web.dev

# Lighthouse (di Chrome DevTools)
# F12 → Lighthouse → Generate report
```

Target: 90+ score di semua metrics

## Backup & Version Control

### A. Regular Backups

Karena menggunakan GitHub, project sudah ter-backup otomatis.

Untuk backup content (database, files):
- Simpan copy local di folder backup
- Use Google Drive atau cloud storage lain

### B. Version History

Di GitHub:
1. Klik "Commits"
2. Lihat history perubahan
3. Click commit untuk lihat perubahan detail
4. Bisa revert ke versi lama jika perlu

## Next: Advanced Setup (Optional)

### A. Email Notifications

Setup email ketika ada booking via WhatsApp:
- Integrasi dengan Zapier (zapier.com)
- Create Zap: WhatsApp → Email notification

### B. Analytics Tracking

Add Google Analytics:
1. Buka [google.com/analytics](https://analytics.google.com)
2. Create property untuk website
3. Copy tracking ID
4. Add ke `layout.tsx`

### C. Blog/CMS (Future)

Jika ingin add blog:
- Setup dengan Sanity.io (CMS gratis)
- Atau Contentful
- Atau markdown-based blog

---

## Summary

✅ Website live di Vercel  
✅ Custom domain (optional)  
✅ Auto-deploy setiap git push  
✅ Free HTTPS/SSL  
✅ Global CDN untuk fast loading  
✅ Unlimited bandwidth  

🎉 **Selesai! Website Anda sudah professional dan siap generating bookings!**

---

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Email support atau chat support Vercel tersedia
