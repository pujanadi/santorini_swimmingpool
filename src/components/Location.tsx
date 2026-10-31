import { site } from '../config/site'
import { Icon } from './Icon'

export function Location() {
  return (
    <section className="container section location" id="lokasi">
      <div className="location-copy">
        <h2 className="section-title">
          Temukan kami
          <br />
          di Ibun.
        </h2>
        <p>{site.location.full}</p>
        <p className="note">
          {site.openingHours
            ? `Jam operasional: ${site.openingHours}`
            : 'Jam operasional belum terverifikasi. Konfirmasi ke admin sebelum datang.'}
        </p>
        <a className="btn btn-teal" href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="pin" size={18} /> Buka Google Maps
        </a>
        <a className="btn btn-outline" href={site.instagram.url} target="_blank" rel="noopener noreferrer">
          <Icon name="instagram" size={18} /> Hubungi via Instagram
        </a>
      </div>

      <div className="map-card" role="img" aria-label="Peta skematik: Santorini Swimming Pool di Mekarwangi, Ibun">
        <svg viewBox="0 0 520 300" preserveAspectRatio="xMidYMid slice">
          <rect width="520" height="300" fill="#f1ecdc" />
          <path d="M0 210 C120 180 180 250 320 220 S470 200 520 230" stroke="#fff" strokeWidth="14" fill="none" />
          <path d="M170 0 C190 90 150 160 210 300" stroke="#fff" strokeWidth="12" fill="none" />
          <path d="M60 60 C150 80 220 40 330 70 S460 40 520 60" stroke="#e5decb" strokeWidth="6" fill="none" />
          <path d="M360 300 C340 230 400 170 380 110 S420 40 440 0" stroke="#bfe0e0" strokeWidth="10" fill="none" />
          {[[60, 120], [110, 240], [430, 190], [470, 90]].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <rect x={x - 2} y={y} width="4" height="12" fill="#7a5a3a" />
              <circle cx={x} cy={y - 4} r="11" fill="#6bb56b" />
            </g>
          ))}
          <g transform="translate(262 120)">
            <path d="M0 62 C-30 28 -26 0 0 0 S26 28 0 62Z" fill="#0f6b6f" />
            <circle cx="0" cy="20" r="9" fill="#fbf8ef" />
          </g>
          <text x="262" y="205" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f6b6f">SANTORINI</text>
          <text x="262" y="223" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f6b6f">SWIMMING POOL</text>
          <text x="262" y="239" textAnchor="middle" fontSize="11" fill="#5d6b6a">Mekarwangi, Ibun</text>
          <text x="262" y="24" textAnchor="middle" fontSize="11" fill="#5d6b6a">↑ Ibun</text>
        </svg>
        <span className="map-credit">Ilustrasi lokasi, bukan peta akurat</span>
      </div>
    </section>
  )
}
