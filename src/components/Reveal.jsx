import useReveal from '../hooks/useReveal.js'

export default function Reveal({ children, as: Tag = 'div', className = '', style, stagger = false }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${stagger ? 'stagger' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}