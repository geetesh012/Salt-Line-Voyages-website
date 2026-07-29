import useReveal from '../hooks/useReveal.js'

export default function Reveal({ children, as: Tag = 'div', className = '', style }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
