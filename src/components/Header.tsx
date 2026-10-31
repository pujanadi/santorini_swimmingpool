import { useState } from 'react'
import { AdminLink } from './AdminLink'
import { Icon } from './Icon'

const links = [
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#tiket', label: 'Tiket' },
  { href: '#lokasi', label: 'Lokasi' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Santorini Swimming Pool, ke atas">
          <span className="brand-main">SANTORINI</span>
          <span className="brand-sub">SWIMMING POOL</span>
        </a>

        <nav id="main-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <AdminLink className="nav-cta" />
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
