import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/ui/NavBar'
import { HStripe } from '@/components/ui/HStripe'
import { AnimatePresenceWrapper } from '@/components/ui/AnimatePresenceWrapper'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hot Wheels Catalog',
  description: 'The definitive Hot Wheels die-cast collector catalog.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas text-text-primary min-h-screen flex flex-col font-inter">
        <NavBar />
        <HStripe />
        <AnimatePresenceWrapper>
          {children}
        </AnimatePresenceWrapper>
      </body>
    </html>
  )
}
