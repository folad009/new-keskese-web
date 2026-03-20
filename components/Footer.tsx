'use client'

import { useGSAP } from '../lib/useGSAP'
import gsap from 'gsap'

export default function Footer() {
  const ref = useGSAP((el) => {
    const cards = el.querySelectorAll('.footer-card')
    const strip = el.querySelector('.footer-strip')

    gsap.from(cards, {
      y: 120,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    })

    if (strip) {
      gsap.from(strip, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      })
    }
  })

  return (
    <footer
      ref={ref}
      className="mt-0.5 px-1 pb-2"
    >
      {/* Top Row */}
      <div className="grid lg:grid-cols-3 gap-2 mb-2 px-1">
        
        {/* Left Blue Card */}
        <div className="footer-card flex min-h-[16rem] items-center justify-center rounded-[20px] bg-[#D45C96] p-6 sm:p-10 lg:min-h-105 lg:p-16">
          {/* Replace with your 3D image */}
          <div className="h-24 w-24 rounded-2xl bg-white/20 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
        </div>

        {/* Right Light Card */}
        <div className="footer-card flex min-h-[16rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-6 sm:p-8 lg:col-span-2 lg:min-h-105">
          
          <h2 className="text-2xl font-bold leading-tight text-[#07123A] sm:text-3xl lg:text-5xl">
            FRESHLY SERVED, PURE EXPERIENTIAL MARKETING GOODNESS. ZERO SNOOZE.
          </h2>

          <p className="mt-8 text-xs lowercase text-[#07123A] sm:mt-12 sm:text-sm">
            BY SUBSCRIBING TO THE NEWSLETTER YOU AGREE TO THE{' '}
            <span className="underline cursor-pointer">
              COOKIE POLICY
            </span>{' '}
            AND{' '}
            <span className="underline cursor-pointer">
              PRIVACY POLICY
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Lime Strip */}
      <div className="footer-strip flex flex-col items-start justify-between gap-4 rounded-[20px] bg-[#B31F6C] px-5 py-4 sm:px-6 md:flex-row md:items-center md:gap-6">
        
        {/* Left Social */}
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-white sm:gap-4">
          <a className="hover:opacity-70 transition">INSTAGRAM</a>
          <a className="hover:opacity-70 transition">LINKEDIN</a>
          <a className="hover:opacity-70 transition">TIKTOK</a>
        </div>

        {/* Right Legal */}
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-white sm:gap-4">
          <a className="hover:opacity-70 transition">PRIVACY POLICY</a>
          <a className="hover:opacity-70 transition">COOKIE POLICY</a>
          <span>© 2026 - KESKESE LIMITED</span>
        </div>
      </div>
    </footer>
  )
}
