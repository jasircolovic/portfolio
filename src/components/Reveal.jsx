import { motion } from 'framer-motion'

// Scroll-triggered reveal. Animates once when it enters the viewport.
export default function Reveal({ children, className = '', delay = 0, as = 'div', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}
