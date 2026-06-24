import type { Variants } from 'framer-motion'

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const
export const EASE_IN_EXPO  = [0.55, 0, 1, 0.45] as const

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3, ease: EASE_IN_EXPO  } },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
  exit:    { opacity: 0, scale: 0.95, transition: { duration: 0.25, ease: EASE_IN_EXPO } },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 40  },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
  exit:    { opacity: 0, x: -40, transition: { duration: 0.3, ease: EASE_IN_EXPO  } },
}

export const pageTransition: Variants = {
  hidden:  { opacity: 0, y: 8  },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.3,  ease: EASE_IN_EXPO  } },
}
