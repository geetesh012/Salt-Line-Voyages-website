import { useState } from 'react'
import { IMAGES } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'

const initialForm = {
  name: '',
  email: '',
  voyage: 'Dawn Kayak & Snorkel',
  party: 2,
  dates: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend is wired up yet — this is where you'd POST to your
    // reservations system or an email service (e.g. Formspree, Resend).
    console.log('Inquiry submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <section
        className="hero hero-sub"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9,14,12,0.35) 0%, rgba(9,14,12,0.85) 100%), url('${IMAGES.heroCoast}')`
        }}
      >
        <Reveal className="hero-inner">
          <span className="eyebrow">Contact &amp; Reservations</span>
          <h1>Begin your voyage.</h1>
        </Reveal>
      </section>

      <section className="contact-intro">
        <Reveal className="wrap" as="div">
          <p>
            Departures are limited and tides don't negotiate — the earlier you reach
            out, the more likely we can build the exact voyage you're picturing.
          </p>
        </Reveal>
      </section>

      <section id="contact">
        <Reveal className="contact-split" as="div">
          {/* Media side — quote + quick-tap contact tiles, echoing the nav's
              split-panel language so Home → Contact feels like one system. */}
          <div
            className="contact-media"
            style={{ backgroundImage: `url('${IMAGES.sailSunset}')` }}
          >
            <p className="media-quote">
              "The coast is patient. We'd rather not keep you waiting."
            </p>

            <div className="contact-tiles">
              <a className="contact-tile" href="tel:+13605550142">
                <span className="label">Call</span>
                <span className="value">+1 (360) 555-0142</span>
              </a>
              <a className="contact-tile" href="mailto:voyages@saltlinevoyages.com">
                <span className="label">Email</span>
                <span className="value">voyages@saltlinevoyages.com</span>
              </a>
              <div className="contact-tile">
                <span className="label">Office Hours</span>
                <span className="value">Tue–Sat, 8am–5pm PT</span>
              </div>
              <div className="contact-tile">
                <span className="label">Departs From</span>
                <span className="value">Harbor Marina, PNW Coast</span>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-panel">
            <span className="eyebrow">Reservations &amp; Inquiries</span>
            <h2>Tell us about the trip you're picturing.</h2>
            <p className="lede">
              A few details help us match you to the right voyage — and the right
              departure — before we ever pick up the phone.
            </p>

            <form id="inquiryForm" onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required value={form.name} onChange={handleChange} disabled={submitted} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={handleChange} disabled={submitted} />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="voyage">Preferred Voyage</label>
                  <select id="voyage" value={form.voyage} onChange={handleChange} disabled={submitted}>
                    <option>Dawn Kayak &amp; Snorkel</option>
                    <option>Sunset Sail</option>
                    <option>Three-Day Island Passage</option>
                    <option>Private Charter</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="party">Party Size</label>
                  <input id="party" type="number" min="1" max="6" value={form.party} onChange={handleChange} disabled={submitted} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="dates">Preferred Dates</label>
                <input id="dates" type="text" placeholder="e.g. mid-September, flexible" value={form.dates} onChange={handleChange} disabled={submitted} />
              </div>

              <div className="field">
                <label htmlFor="message">Tell us about your trip</label>
                <textarea id="message" rows="4" placeholder="First time on this coast? Celebrating something? Let us know." value={form.message} onChange={handleChange} disabled={submitted}></textarea>
              </div>

              <div className="form-foot">
                <button type="submit" className="btn solid" disabled={submitted}>
                  {submitted ? 'Inquiry Sent' : 'Send Inquiry'}
                </button>
                {!submitted && (
                  <span className="response-note">We reply within one tide cycle — usually a few hours.</span>
                )}
              </div>

              {submitted && (
                <p className="form-note show">
                  Thank you, {form.name.split(' ')[0] || 'friend'} — we'll be in touch shortly to confirm the details.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </section>
    </>
  )
}
