import { useEffect, useRef, useState } from 'react'
import { gallery } from '../data/content'
import { site } from '../config/site'
import { Icon } from './Icon'
import { Scene } from './Scene'

export function Gallery() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const active = gallery.find((g) => g.id === activeId) ?? null
  const hasPlaceholders = gallery.some((g) => !g.src)

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (active && !dlg.open) dlg.showModal()
    if (!active && dlg.open) dlg.close()
  }, [active])

  return (
    <section className="container section" id="galeri">
      <div className="gallery-head">
        <h2 className="section-title small">Intip suasananya</h2>
        <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="ig-link">
          @{site.instagram.handle} <Icon name="instagram" size={20} />
        </a>
      </div>

      <ul className="gallery-grid">
        {gallery.map((g) => (
          <li key={g.id}>
            <button type="button" className="gallery-item" onClick={() => setActiveId(g.id)} aria-label={`Perbesar: ${g.title}`}>
              {g.src ? <img src={g.src} alt={g.title} loading="lazy" /> : <Scene variant={g.scene} label={g.title} />}
            </button>
          </li>
        ))}
      </ul>
      {hasPlaceholders && (
        <p className="note">
          <Icon name="camera" size={16} /> Visual ilustrasi. Ganti dengan foto resmi di data/content.ts.
        </p>
      )}

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setActiveId(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setActiveId(null)
        }}
        aria-label={active ? active.title : 'Galeri'}
      >
        {active && (
          <figure>
            <div className="lightbox-media">
              {active.src ? <img src={active.src} alt={active.title} /> : <Scene variant={active.scene} label={active.title} />}
            </div>
            <figcaption>{active.title}</figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-close" onClick={() => setActiveId(null)} aria-label="Tutup">
          <Icon name="close" />
        </button>
      </dialog>
    </section>
  )
}
