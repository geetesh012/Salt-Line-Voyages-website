const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Renders every slide as a stacked, absolutely-positioned layer and
 * crossfades opacity based on which one is active. Only the active slide
 * actually mounts a <video> element — with four video slides, playing all
 * of them at once regardless of visibility would waste bandwidth/CPU for
 * no visual benefit, since the hidden ones are fully transparent anyway.
 * Inactive slides show their poster image; when a slide becomes active its
 * video mounts and starts playing almost immediately.
 */
export default function HeroBackground({ slides, activeIndex }) {
  return (
    <div className="hero-media" aria-hidden="true">
      {slides.map((slide, i) => {
        const isActive = i === activeIndex
        const useVideo = isActive && Boolean(slide.video) && !prefersReducedMotion
        return (
          <div key={i} className={`hero-media-layer${isActive ? ' is-active' : ''}`}>
            {useVideo ? (
              <video
                src={slide.video}
                poster={slide.image}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <img src={slide.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            )}
          </div>
        )
      })}
      <div className="hero-media-overlay" />
    </div>
  )
}
