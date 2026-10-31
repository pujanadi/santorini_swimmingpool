# Santorini Swimming Pool — Website

Mockup website responsif untuk **Santorini Swimming Pool** (Mekarwangi, Ibun, Kabupaten Bandung).
Dibangun dengan **React 19 + TypeScript + Vite**, tanpa library UI tambahan.

> Status: konsep desain. Visual yang tampil adalah **ilustrasi SVG**, bukan foto resmi.
> Informasi bisnis yang belum terverifikasi ditandai "perlu konfirmasi" di antarmuka.

## Menjalankan

Prasyarat: Node.js 20+ dan npm.

```bash
npm install
npm run dev        # server pengembangan (http://localhost:5173)
npm run build      # type-check + build produksi ke folder dist/
npm run preview    # pratinjau hasil build
npm run lint       # oxlint
```

Untuk menayangkan di server, arahkan web server (mis. nginx) ke folder `dist/` setelah `npm run build`.

## Konfigurasi

| Apa | Di mana |
| --- | --- |
| Nomor WhatsApp admin | `.env` → `VITE_WHATSAPP_NUMBER` (lihat `.env.example`) |
| Jam operasional, tautan Instagram/Maps | `src/config/site.ts` |
| Harga tiket, fasilitas, galeri, FAQ | `src/data/content.ts` |

- **WhatsApp:** selama `VITE_WHATSAPP_NUMBER` kosong, tombol "Tanya Admin" otomatis mengarah ke Instagram. Tidak ada nomor yang dikarang. Isi format internasional tanpa `+`, lalu build ulang.
- **Harga:** set `price` pada `ticketTiers` (angka Rupiah). Selama `null`, tampil "Tanya harga terbaru" + lencana "Perlu konfirmasi".
- **Jam operasional:** set `openingHours` di `site.ts`. Selama `null`, tampil "Konfirmasi sebelum datang".
- **Foto asli:** taruh gambar di `public/gallery/` lalu isi `src` pada item `gallery` (mis. `"/gallery/kolam.jpg"`). Item tanpa `src` memakai ilustrasi.
- **Fasilitas terverifikasi:** ubah `facilitiesVerified` menjadi `true` setelah daftar dikonfirmasi agar catatan hilang.

## Struktur

```
src/
  components/   Header, Hero, QuickInfo, Highlights, Facilities, Pricing,
                Gallery (lightbox), Location, Faq, Footer, Scene (ilustrasi), AdminLink
  config/site.ts   data situs & helper WhatsApp
  data/content.ts  konten yang dapat diubah
  index.css        gaya (mobile-first, breakpoint 760px)
```

Aksesibilitas: tautan lewati-konten, landmark semantik, `<details>` untuk FAQ, `<dialog>` untuk lightbox, fokus terlihat, dan dukungan `prefers-reduced-motion`.

## Yang terverifikasi vs asumsi

**Terverifikasi:** akun Instagram `@santorini.swimming` ada dengan nama "Santorini Swimming Pool" (https://www.instagram.com/santorini.swimming/).

**Berasal dari brief/mockup, perlu dikonfirmasi pemilik:**

1. Lokasi: Mekarwangi, Kecamatan Ibun, Kabupaten Bandung. Tombol Google Maps memakai pencarian nama, **bukan koordinat pasti**; sematkan titik resmi bila ada.
2. Fasilitas: kantin, mushola, area parkir.
3. Wahana: kolam keluarga, wahana air anak, pemandangan pegunungan.
4. Struktur tiket: tarif "hari biasa" dan "akhir pekan & libur", **tanpa nominal**.
5. Jam operasional: belum ada.
6. Nomor WhatsApp admin: belum ada.
7. Ketentuan tiket anak, aturan berenang, dan informasi rombongan: belum ada; FAQ hanya mengarahkan ke admin.
8. Semua foto/gambar adalah ilustrasi buatan, bukan dokumentasi tempat.
9. Isi profil Instagram (bio, postingan, kontak) belum dapat dibaca saat audit, jadi tidak dipakai.

## Catatan

- Peta di bagian lokasi adalah ilustrasi skematik, bukan peta akurat.
- Belum diuji secara visual di browser nyata pada sesi pembuatan (navigasi ke localhost diblokir oleh kebijakan alat). Build produksi, type-check, dan lint lolos. Mohon cek tampilan desktop dan mobile.
