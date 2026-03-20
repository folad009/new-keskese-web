'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import TransitionLink from './TransitionLink'
import PixelLink from './PixelLink'
import Image from 'next/image'

const links = [
  { label: 'CASE STUDIES', href: '#projects' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'CAREERS', href: '#careers' },
  { label: 'UGC ↗', href: '#ugc' },
  { label: 'CONTACT', href: '/contact-us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-3 left-1/2 z-50 w-[calc(100%-1rem)] -translate-x-1/2 md:top-6 md:w-[98%]">

      <nav className="bg-[#ffeff7] rounded-[24px] px-4 py-3 shadow-lg md:rounded-[40px] md:px-10 md:py-6">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <PixelLink
            href="/"
            className="text-[#07123A] font-extrabold text-2xl tracking-tight"
          >
            <Image
              src="/assets/images/keskese-logo.png"
              alt="Keskese Limited"
              width={100}
              height={100}
              className="h-auto w-18 md:w-24"
            />
          </PixelLink>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B31F6C] text-white lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-10 text-black font-semibold text-sm tracking-wide">
            {links.map((link) => (
              <TransitionLink
                key={link.label}
                href={link.href}
                className="relative transition-opacity hover:opacity-70 [font-family:var(--font-matter)] font-extrabold"
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 grid gap-2 rounded-[20px] bg-white/75 p-3 lg:hidden">
            {links.map((link) => (
              <TransitionLink
                key={link.label}
                href={link.href}
                className="rounded-2xl bg-white px-4 py-3 text-sm font-extrabold tracking-wide text-[#07123A] [font-family:var(--font-matter)] transition-opacity hover:opacity-80"
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>
        )}

      </nav>

    </header>
  )
}
