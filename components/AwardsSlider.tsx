'use client'

import { useGSAP } from '../lib/useGSAP'
import gsap from 'gsap'

const slides = [
  {
    title: 'Campaign Impact',
    accent: 'from-[#B31F6C] via-[#D45C96] to-[#F4D6E5]'
  },
  {
    title: 'Audience Reach',
    accent: 'from-[#07123A] via-[#4E73DF] to-[#9AB4FF]'
  },
  {
    title: 'Brand Recall',
    accent: 'from-[#4F4D4C] via-[#74706F] to-[#D9D9D9]'
  },
  {
    title: 'Market Growth',
    accent: 'from-[#5B7F10] via-[#A4C639] to-[#D9F266]'
  }
]

export default function AwardsSlider() {
  const ref = useGSAP((scope) => {
    const items = scope.querySelectorAll('.client-slide')

    if (items.length === 0) {
      return
    }

    gsap.set(items, { opacity: 0 })
    gsap.set(items[0], { opacity: 1 })

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2.5
    })

    items.forEach((slide, i) => {
      if (i === 0) return

      tl.to(items, {
        opacity: 1,
        duration: 0.9,
        ease: 'power2.inOut'
      })

      .to(slide, {
        opacity: 1,
        duration: 0.9,
        ease: 'power2.inOut'
      })
    })

  })

  return (
    <div
      ref={ref}
      className="client-panel relative bg-black rounded-[20px] overflow-hidden min-h-105"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`client-slide absolute inset-0 flex h-full w-full flex-col justify-between bg-linear-to-br ${slide.accent} p-10 text-white`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em]">
            Awarded Results
          </span>
          <div>
            <p className="max-w-40 text-3xl font-extrabold leading-tight">
              {slide.title}
            </p>
            <p className="mt-3 max-w-56 text-sm font-medium text-white/85">
              Strategy, activations, and measurable performance in one moving showcase.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
