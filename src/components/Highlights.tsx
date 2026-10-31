import { highlights } from '../data/content'
import { Scene } from './Scene'

export function Highlights() {
  return (
    <section className="container section" id="fasilitas-utama">
      <h2 className="section-title centered">Satu tempat, banyak cerita.</h2>
      <div className="highlight-grid">
        {highlights.map((h) => (
          <figure key={h.id} className="highlight-card">
            <Scene variant={h.scene} label={`Ilustrasi ${h.title}`} />
            <figcaption>{h.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
