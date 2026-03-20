/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAP = (
  callback: (scope: HTMLDivElement) => void
) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      callback(el)
    }, el)

    return () => ctx.revert()
  }, []) 

  return ref
}