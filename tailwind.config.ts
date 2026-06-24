import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        canvas:             '#000000',
        'surface-card':     '#111111',
        'surface-elevated': '#1A1A1A',
        'surface-soft':     '#222222',
        carbon:             '#0A0A0A',
        // Text
        'text-primary': '#FFFFFF',
        'text-body':    '#E5E5E5',
        'text-strong':  '#FFFFFF',
        'text-muted':   '#888888',
        // Borders
        hairline: '#2A2A2A',
        // Brand
        'hw-orange': '#FF6B00',
        'hw-red':    '#E2001A',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      spacing: {
        section: '96px',
        xxl:     '64px',
      },
      letterSpacing: {
        machined: '1.5px',
        wide:     '0.5px',
      },
    },
  },
  plugins: [],
}

export default config
