'use client'

import { motion } from 'framer-motion'

interface HStripeProps {
  className?: string
}

export function HStripe({ className = '' }: HStripeProps) {
  return (
    <motion.div
      className={`h-[4px] w-full ${className}`}
      style={{
        background: 'linear-gradient(90deg, #FF6B00 0%, #FFFFFF 50%, #E2001A 100%)',
        transformOrigin: 'left',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
