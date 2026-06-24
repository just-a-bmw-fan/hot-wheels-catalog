import React from 'react'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: React.ReactNode
}

const BASE =
  'inline-flex items-center justify-center h-12 px-8 ' +
  'font-inter text-sm font-bold tracking-machined uppercase ' +
  'rounded-none border transition-colors duration-200 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-hw-orange'

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-canvas text-text-primary border-text-primary hover:bg-surface-card active:bg-surface-elevated',
  ghost:   'bg-transparent text-text-primary border-text-primary hover:bg-surface-soft active:bg-surface-card',
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={[BASE, VARIANTS[variant], className].join(' ')} {...props}>
      {children}
    </button>
  )
}
