'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'

export function AnimatePresenceWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex-1"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
