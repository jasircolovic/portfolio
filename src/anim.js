// Shared Framer Motion variants
const ease = [0.2, 0.8, 0.2, 1]

export const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } },
}

export const staggerContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

export const fadeUpItem = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
