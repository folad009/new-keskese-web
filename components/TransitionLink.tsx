'use client'

import Link from 'next/link'
import { MouseEvent, ReactNode } from 'react'
import { usePageTransition } from './TransitionProvider'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export default function TransitionLink({ href, children, className }: Props) {
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