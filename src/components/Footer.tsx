import { site } from '../config/site'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">SANTORINI SWIMMING POOL</p>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="footer-ig">
            <Icon name="instagram" size={20} /> @{site.instagram.handle}
          </a>
        </div>
        <p className="footer-note">
          Konsep desain · Foto ilustrasi · Informasi operasional perlu dikonfirmasi.
        </p>
      </div>
    </footer>
  )
}
