import { useEffect, useRef } from 'react'

export default function HeroCarousel({ slides, activeIndex, onSelect, duration = 18000 }) {
  const timerRef = useRef(null)

  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      onSelect((activeIndex + 1) % slides.length)
    }, duration)
    return () => clearTimeout(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, slides.length, duration])

  const active = slides[activeIndex]
  const others = slides
    .map((s, i) => ({ ...s, i }))
    .filter((s) => s.i !== activeIndex)

  return (
    <div className="hero-carousel">
      <div className="loader-track">
        <div
          key={activeIndex}
          className="loader-fill"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>

      <div className="carousel-strip">
        <button
          type="button"
          className="carousel-main"
          onClick={() => onSelect((activeIndex + 1) % slides.length)}
          aria-label="Show next slide"
        >
          <img src={active.thumb || active.image} alt="" loading="lazy" />
        </button>

        <p className="carousel-caption">{active.caption}</p>

        <div className="carousel-thumbs">
          {others.map((s) => (
            <button
              key={s.i}
              type="button"
              className="carousel-thumb"
              onClick={() => onSelect(s.i)}
              aria-label={`Show slide: ${s.caption}`}
            >
              <img src={s.thumb || s.image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
