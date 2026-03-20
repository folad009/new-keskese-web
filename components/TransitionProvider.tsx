'use client'

import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import PixelOverlay, { PixelOverlayController } from './PixelOverlay'

type TransitionContextType = {
    transitionTo: (href: string) => Promise<void>
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function TransitionProvider({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [overlay] = useState(() => new PixelOverlayController())

  const transitionTo = async (href: string) => {
    await overlay.show()
    router.push(href)

    requestAnimationFrame(() => {
      void overlay.hide()
    })
  }

  return (
    <TransitionContext.Provider value={{transitionTo}}>
      {children}
      <PixelOverlay controller={overlay} />
    </TransitionContext.Provider>
  )
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('TransitionProvider missing')
  return ctx
}
