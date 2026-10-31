import { formatRupiah, ticketTiers } from '../data/content'
import { AdminLink } from './AdminLink'
import { Icon } from './Icon'

export function Pricing() {
  return (
    <section className="container section pricing" id="tiket">
      <div className="pricing-intro">
        <h2 className="section-title">
          Siapkan hari
          <br />
          serumu.
        </h2>
      </div>

      <div className="tier-grid">
        {ticketTiers.map((t) => (
          <article key={t.id} className={`tier tier-${t.accent}`}>
            <span className="tier-icon">
              <Icon name={t.icon} size={30} />
            </span>
            <h3>{t.name}</h3>
            <p className="tier-price">
              {t.price !== null ? formatRupiah(t.price) : t.note}
            </p>
            {t.price === null && <span className="badge">Perlu konfirmasi</span>}
          </article>
        ))}
      </div>

      <aside className="pricing-cta">
        <AdminLink variant="teal" message="Halo Santorini Swimming Pool, saya ingin konfirmasi tarif tiket dan jam buka sebelum berkunjung." />
        <p>Konfirmasi tarif dan jam buka sebelum berkunjung.</p>
      </aside>
    </section>
  )
}
