import useReveal from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'on' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
