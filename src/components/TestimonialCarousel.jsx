import { useState } from 'react'

export default function TestimonialCarousel({ reviews }) {
  const [index, setIndex] = useState(0)
  const review = reviews[index]

  function prev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  }
  function next() {
    setIndex((i) => (i + 1) % reviews.length)
  }

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-stack">
        <div className="testimonial-ghost testimonial-ghost--2" aria-hidden="true"></div>
        <div className="testimonial-ghost testimonial-ghost--1" aria-hidden="true"></div>
        <div className="testimonial-card">
          <span className="testimonial-kicker">Citation</span>
          <p className="testimonial-quote">&ldquo;{review.quote}&rdquo;</p>
          <div className="testimonial-person">
            <div className="testimonial-avatar">{review.initial}</div>
            <div>
              <div className="testimonial-name">{review.name}</div>
              <div className="testimonial-role">{review.role}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-nav">
        <button type="button" className="testimonial-arrow" onClick={prev} aria-label="Previous review">
          ‹
        </button>
        <div className="testimonial-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" className="testimonial-arrow" onClick={next} aria-label="Next review">
          ›
        </button>
      </div>
    </div>
  )
}
