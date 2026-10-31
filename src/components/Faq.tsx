import { faqs } from '../data/content'
import { Icon } from './Icon'

export function Faq() {
  return (
    <section className="container section faq" id="info">
      <h2 className="section-title">
        Sebelum
        <br />
        berkunjung
      </h2>
      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.id}>
            <summary>
              {f.question}
              <Icon name="chevron" size={20} />
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
