import useParallax from '../hooks/useParallax.js'

export default function ParallaxImage({ image, strength = 18 }) {
  const [ref, offset] = useParallax(strength)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div
        className="parallax-layer"
        style={{ backgroundImage: `url('${image}')`, transform: `translateY(${offset}px)` }}
      />
    </div>
  )
}