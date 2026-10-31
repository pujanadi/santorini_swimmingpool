import { site } from '../config/site'
import { Icon, type IconName } from './Icon'

interface Item {
  icon: IconName
  title: string
  text: string
}

export function QuickInfo() {
  const items: Item[] = [
    { icon: 'pin', title: 'Lokasi', text: site.location.short },
    { icon: 'ticket', title: 'Harga tiket', text: 'Cek tarif terbaru' },
    {
      icon: 'clock',
      title: 'Jam operasional',
      text: site.openingHours ?? 'Konfirmasi sebelum datang',
    },
  ]
  return (
    <section className="container quick" aria-label="Informasi singkat">
      <ul className="quick-list">
        {items.map((it) => (
          <li key={it.title}>
            <span className="quick-icon">
              <Icon name={it.icon} size={26} />
            </span>
            <div>
              <strong>{it.title}</strong>
              <span>{it.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
