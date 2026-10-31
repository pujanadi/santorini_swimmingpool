import { facilities, facilitiesVerified } from '../data/content'
import { Icon } from './Icon'

export function Facilities() {
  return (
    <section className="container facilities" id="fasilitas" aria-label="Fasilitas">
      <ul className="facility-list">
        {facilities.map((f) => (
          <li key={f.id}>
            <Icon name={f.icon} size={28} />
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
      {!facilitiesVerified && <p className="note">Fasilitas perlu dikonfirmasi.</p>}
    </section>
  )
}
