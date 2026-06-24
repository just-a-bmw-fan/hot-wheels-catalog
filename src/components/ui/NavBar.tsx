'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'CATALOG',  href: '/catalog'  },
  { label: 'SERIES',   href: '/series'   },
  { label: 'TREASURE', href: '/treasure' },
  { label: 'ABOUT',    href: '/about'    },
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav
      className="w-full bg-canvas border-b border-hairline sticky top-0 z-50"
      style={{ height: '64px' }}
      aria-label="Primary navigation"
    >
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-inter text-text-primary font-bold text-sm tracking-machined uppercase hover:text-hw-orange transition-colors duration-200"
        >
          Hot Wheels
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    'font-inter text-sm font-normal tracking-wide uppercase transition-colors duration-200',
                    'relative pb-1',
                    isActive
                      ? 'text-hw-orange after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-hw-orange after:content-[\'\']'
                      : 'text-text-muted hover:text-text-primary',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
