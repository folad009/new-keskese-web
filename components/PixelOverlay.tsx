'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export interface PixelOverlayOptions {
  rows?: number
  columns?: number
}

export class PixelOverlayController {
  cells: HTMLDivElement[] = []
  rows = 10
  columns = 10
  container: HTMLDivElement | null = null

  init(container: HTMLDivElement, rows: number, columns: number) {
    this.container = container
    this.rows = rows
    this.columns = columns

    container.innerHTML = ''
    this.cells = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const cell = document.createElement('div')
        cell.className = 'pixel-cell'
        container.appendChild(cell)
        this.cells.push(cell)
      }
    }
  }

  show(config: gsap.TweenVars = {}) {
    return new Promise<void>((resolve) => {
      if (!this.container || this.cells.length === 0) {
        resolve()
        return
      }

      gsap.killTweensOf(this.cells)
      gsap.set(this.container, { opacity: 1 })

      gsap.fromTo(
        this.cells,
        { scale: 0, opacity: 0 },
        {
          scale: 1.03,
          opacity: 1,
          duration: 0.35,
          stagger: {
            grid: [this.rows, this.columns],
            from: 'center',
            each: 0.02
          },
          ease: 'power1.in',
          ...config,
          onComplete: resolve
        }
      )
    })
  }

  hide(config: gsap.TweenVars = {}) {
    return new Promise<void>((resolve) => {
      if (!this.container || this.cells.length === 0) {
        resolve()
        return
      }

      gsap.killTweensOf(this.cells)
      gsap.to(this.cells, {
        scale: 0,
        opacity: 0,
        duration: 0.35,
        stagger: {
          grid: [this.rows, this.columns],
          from: 'center',
          each: 0.02
        },
        ease: 'power1.out',
        ...config,
        onComplete: () => {
          gsap.set(this.container, { opacity: 0 })
          resolve()
        }
      })
    })
  }
}

export default function PixelOverlay({
  controller,
  rows = 9,
  columns = 17
}: {
  controller: PixelOverlayController
  rows?: number
  columns?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    controller.init(ref.current, rows, columns)
    gsap.set(ref.current, { opacity: 0 })
  }, [columns, controller, rows])

  return (
    <div
      ref={ref}
      className="pixel-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns},1fr)`,
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  )
}
