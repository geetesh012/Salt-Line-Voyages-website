import useCountUp from '../hooks/useCountUp.js'

export default function CountUp({ target, format, duration, className }) {
  const [ref, display] = useCountUp(target, { duration, format })
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}