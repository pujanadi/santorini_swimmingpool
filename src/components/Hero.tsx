import { site } from '../config/site'
import { Icon } from './Icon'
import { Scene } from './Scene'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-art" aria-hidden="false">
        <Scene variant="hero" label="Ilustrasi kolam renang keluarga dengan wahana air dan pegunungan" />
        <span className="hero-credit">
          <Icon name="camera" size={16} /> Ilustrasi suasana
        </span>
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{site.location.region}</p>
          <h1>
            Berenang, bermain,
            <br />
            menikmati alam.
          </h1>
          <p className="lead">
            Rencanakan waktu bersama keluarga di Santorini Swimming Pool.
          </p>
          <div className="hero-actions">
            <a className="btn btn-teal" href="#tiket">
              Rencanakan Kunjungan
            </a>
            <a className="btn btn-outline" href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="pin" size={18} /> Lihat Lokasi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
