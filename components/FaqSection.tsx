'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  'WHAT MAKES ARCH. DIFFERENT FROM OTHER INFLUENCER AGENCIES?',
  'IS THERE A MINIMUM BUDGET TO RUN A CAMPAIGN?',
  'DO YOU MANAGE EXCLUSIVE INFLUENCERS?',
  'WHICH MARKETS DO YOU COVER?',
  'WHAT PLATFORMS DO YOU USE FOR CAMPAIGNS?',
  'HOW DO YOU CHOOSE INFLUENCERS FOR MY CAMPAIGN?',
  'WHAT IS THE PRICING STRUCTURE FOR YOUR SERVICES?',
  'HOW TO GET STARTED WITH A CAMPAIGN?',
  'WHAT IS THE CAMPAIGN PROCESS AND TIMELINE?',
  'HOW DO YOU MEASURE CAMPAIGN SUCCESS?',
]

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(2)

  return (
    <section className="px-2 py-12 sm:px-4 md:px-6 md:py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT STICKY PANEL */}
        <div className="h-fit lg:sticky lg:top-32">

          <div className="flex min-h-[14rem] flex-col justify-between rounded-[28px] bg-linear-to-br from-[#f53f9d] to-[#B31F6C] p-6 sm:p-8 md:min-h-105 md:rounded-[40px] md:p-16">

            <h3 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              FAQ
            </h3>

            <p className="text-white/90 font-normal  leading-snug capitalize">
              Find an answer to your questions
            </p>

          </div>

        </div>

        {/* FAQ LIST */}
        <div className="lg:col-span-2 space-y-6">

          {faqs.map((question, index) => {
            const isOpen = active === index

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[24px] bg-[#F2F2F2] md:rounded-full"
              >

                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >

                  {/* Question */}
                  <span className="px-5 py-5 text-base font-semibold text-[#07123A] sm:px-8 sm:py-6 sm:text-lg md:px-10 md:py-7">
                    {question}
                  </span>

                  {/* Right highlight area */}
                  <span
                    className={`flex h-full w-16 items-center justify-center self-stretch transition-colors duration-300 sm:w-20 md:w-27.5 ${
                      isOpen
                        ? 'text-3xl'
                        : 'bg-transparent'
                    }`}
                  >
                    <ChevronDown
                      className={`text-[#07123A] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>

                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[#07123A] sm:px-8 md:px-10 md:pb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    We design influencer campaigns tailored to your brand,
                    audience and performance goals.
                  </div>
                )}
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
