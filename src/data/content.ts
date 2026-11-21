import type { SceneVariant } from '../components/Scene'

export interface Highlight {
  id: string
  title: string
  scene: SceneVariant
  url: string
}

export interface Facility {
  id: string
  label: string
  icon: 'utensils' | 'mosque' | 'car'
}

export interface TicketTier {
  id: string
  name: string
  icon: 'calendar'
  accent: 'teal' | 'coral'
  /** Harga dalam Rupiah. `null` = belum terverifikasi, tampil "Tanya harga terbaru". */
  price: number | null
  note: string
}

export interface GalleryItem {
  id: string
  title: string
  scene: SceneVariant
  /** Opsional: path foto asli (mis. "/gallery/kolam.jpg" di folder public). Jika ada, menggantikan ilustrasi. */
  src?: string
  url: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const highlights: Highlight[] = [
  { id: 'family', title: 'Kolam keluarga', scene: 'family', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_adult_pool.png' },
  { id: 'kids', title: 'Wahana anak', scene: 'kids', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_big_bucket_3.png' },
  { id: 'view', title: 'Panorama pegunungan', scene: 'mountain', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_canteen_2.jpg' },
]

export const facilities: Facility[] = [
  { id: 'canteen', label: 'Kantin', icon: 'utensils' },
  { id: 'prayer', label: 'Mushola', icon: 'mosque' },
  { id: 'parking', label: 'Area parkir', icon: 'car' },
]

/** Fasilitas di atas berasal dari konsep desain dan belum diverifikasi langsung. */
export const facilitiesVerified = false

export const ticketTiers: TicketTier[] = [
  {
    id: 'weekday',
    name: 'Hari biasa',
    icon: 'calendar',
    accent: 'teal',
    price: null,
    note: 'Dewasa Rp. 15.000 - Anak Rp. 10.000',
  },
  {
    id: 'weekend',
    name: 'Akhir pekan & libur',
    icon: 'calendar',
    accent: 'coral',
    price: null,
    note: 'Dewasa Rp. 20.000 - Anak Rp. 15.000',
  },
]

export const gallery: GalleryItem[] = [
  { id: 'g1', title: 'Kolam bersama keluarga', scene: 'family', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_main_pool.png' },
  { id: 'g2', title: 'Wahana air anak', scene: 'kids', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_canteen.png' },
  { id: 'g3', title: 'Pemandangan sekitar', scene: 'mountain', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_big_bucket_3.jpg' },
  { id: 'g4', title: 'Bermain di kolam', scene: 'splash', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_playground.png' },
  { id: 'g5', title: 'Jalur kolam renang', scene: 'lanes', url: 'https://pujanadi.ddns.net/assets/images/sanswi/santorini_fish_pond.png' },
]

export const faqs: FaqItem[] = [
  {
    id: 'kids',
    question: 'Ketentuan tiket anak',
    answer:
      'Ketentuan usia atau tinggi badan untuk tiket anak belum terverifikasi. Silakan tanyakan ke admin sebelum berkunjung.',
  },
  {
    id: 'rules',
    question: 'Aturan berenang',
    answer:
      'Aturan berenang (pakaian renang, pengawasan anak, barang bawaan) belum terverifikasi. Konfirmasi ke admin untuk aturan terbaru.',
  },
  {
    id: 'group',
    question: 'Informasi rombongan',
    answer:
      'Tarif dan ketentuan rombongan belum terverifikasi. Hubungi admin untuk menanyakan kuota, jadwal, dan harga rombongan.',
  },
]

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}
