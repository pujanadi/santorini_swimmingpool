/**
 * Konfigurasi utama situs. Semua nilai yang belum terverifikasi ditandai `null`
 * dan akan ditampilkan sebagai "perlu dikonfirmasi" di antarmuka.
 */

const rawWhatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '') as string
const whatsappDigits = rawWhatsapp.replace(/\D/g, '')

export const site = {
  name: 'Santorini Swimming Pool',
  tagline: 'Berenang, bermain, menikmati alam.',
  instagram: {
    handle: 'santorini.swimming',
    url: 'https://www.instagram.com/santorini.swimming/',
  },
  /** Kosong sampai nomor resmi diisi lewat VITE_WHATSAPP_NUMBER. */
  whatsappNumber: whatsappDigits.length >= 8 ? whatsappDigits : null,
  location: {
    short: 'Mekarwangi, Ibun',
    full: 'Mekarwangi, Kecamatan Ibun, Kabupaten Bandung',
    region: 'Ibun · Kabupaten Bandung',
    // Pencarian Google Maps berdasarkan nama & wilayah. Koordinat pasti belum diverifikasi.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Santorini+Swimming+Pool+Mekarwangi+Ibun+Kabupaten+Bandung',
  },
  /** Jam operasional belum terverifikasi. Isi string (mis. "Setiap hari 08.00–17.00") bila sudah pasti. */
  openingHours: null as string | null,
} as const

export function whatsappUrl(message: string): string | null {
  if (!site.whatsappNumber) return null
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Tautan "Tanya Admin": WhatsApp bila nomor tersedia, jika tidak fallback ke Instagram. */
export function adminContact(message: string): { href: string; viaWhatsapp: boolean } {
  const wa = whatsappUrl(message)
  return wa
    ? { href: wa, viaWhatsapp: true }
    : { href: site.instagram.url, viaWhatsapp: false }
}
