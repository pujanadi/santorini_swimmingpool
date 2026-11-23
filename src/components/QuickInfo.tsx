import { site } from '../config/site'
import { Icon, type IconName } from './Icon'

interface Item {
  icon: IconName
  title: string
  text: string
  link: string
}

export function QuickInfo() {
  const items: Item[] = [
    { icon: 'pin', title: 'Lokasi', text: site.location.short, link: '#lokasi' },
    { icon: 'ticket', title: 'Harga tiket', text: 'Dewasa: Rp. 15.000 - Anak: Rp. 10.000', link: '#tiket' },
    {
      icon: 'clock',
      title: 'Jam operasional',
      text: site.openingHours ?? '10.00 - 17.30 WIB',
      link: '',
    },
  ]
  return (
    <section className="container quick" aria-label="Informasi singkat">
      <ul className="quick-list">
        {items.map((it) => (
          <li key={it.title}>
            <a href={it.link}>
              <span className="quick-icon">
                <Icon name={it.icon} size={26}/>
              </span>
              <div>
                <strong>{it.title}</strong>
                <span>{it.text}</span>
              </div>
            </a>
          </li>
          ))}
      </ul>
    </section>
  )
}
