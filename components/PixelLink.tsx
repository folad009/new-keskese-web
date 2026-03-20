'use client'

import Link from 'next/link'
import { usePageTransition } from './TransitionProvider'
import { MouseEvent, ReactNode } from 'react'

type PixelLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export default function PixelLink({
  href,
  children,
  className
}: PixelLinkProps) {
  const { transitionTo } = usePageTransition()

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) return

    e.preventDefault()
    await transitionTo(href)
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
