import type { ReactNode } from 'react'
import { adminContact } from '../config/site'
import { Icon } from './Icon'

interface AdminLinkProps {
  message?: string
  variant?: 'coral' | 'teal' | 'outline'
  children?: ReactNode
  className?: string
}

/**
 * Tombol "Tanya Admin". Memakai WhatsApp hanya bila VITE_WHATSAPP_NUMBER diisi;
 * jika tidak, fallback ke profil Instagram agar tidak ada nomor yang dikarang.
 */
export function AdminLink({
  message = 'Halo Santorini Swimming Pool, saya ingin menanyakan tarif dan jam operasional terbaru.',
  variant = 'coral',
  children = 'Tanya Admin',
  className = '',
}: AdminLinkProps) {
  const { href, viaWhatsapp } = adminContact(message)
  return (
    <a
      className={`btn btn-${variant} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={viaWhatsapp ? 'Buka WhatsApp admin' : 'Nomor WhatsApp belum dikonfirmasi — buka Instagram'}
    >
      <Icon name={viaWhatsapp ? 'chat' : 'instagram'} size={18} />
      {children}
    </a>
  )
}
