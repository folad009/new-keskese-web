"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const curtainText = sectionRef.current?.querySelectorAll(".curtain-text");

      if (!curtainText?.length) {
        return;
      }

      gsap.fromTo(
        curtainText,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-2 pt-24 md:pt-28">
      {/* TOP GRID */}
      <div className="grid lg:grid-cols-2 gap-2 mb-2">
        {/* LEFT LIGHT PANEL */}
        <div className="flex min-h-[24rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-6 sm:p-10 lg:min-h-130 lg:p-16">
          {/* Small Label */}
          <h2 className="flex items-center gap-3 text-[#72706f] font-semibold">
            <span className="w-3 h-3 bg-[#72706f] rounded-full" />
            WHO WE ARE
          </h2>

          {/* Curtain Heading */}
          <div className="mt-10 space-y-2 text-2xl font-extrabold leading-[0.95] tracking-tight text-[#72706f] sm:mt-16 md:text-3xl lg:mt-24 lg:text-4xl">
            <div className="overflow-hidden">
              <h2 className="curtain-text">WE CREATE EXPERIENCES</h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="curtain-text">THAT CONNECT PEOPLE</h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="curtain-text">WITH BRANDS</h2>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div className="overflow-hidden rounded-[20px] min-h-[18rem] lg:min-h-130">
          <div
            className="w-full h-full bg-gray-300"
            style={{
              backgroundImage:
                'url("/assets/images/about-keskese-background.jpg")',
              backgroundSize: 'cover'
            }}
          />
        </div>
      </div>

      {/* BOTTOM PANEL */}
      <div className="flex min-h-[20rem] flex-col justify-between rounded-[20px] bg-[#b31f6c] p-6 sm:p-10 lg:min-h-105 lg:p-16">
        {/* Small Label */}
        <h2 className="flex items-center gap-3 text-white font-semibold">
          <span className="w-3 h-3 bg-white rounded-full" />
          OUR GOAL
        </h2>

        {/* Curtain Text */}
        <div className="mt-10 space-y-2 text-3xl font-extrabold leading-[0.95] tracking-tight text-white sm:mt-16 sm:text-5xl md:text-6xl lg:mt-24 lg:text-7xl">
          <div className="overflow-hidden">
            <h1 className="curtain-text">WE CREATE MEMORABLE</h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="curtain-text">EXPERIENTIAL CAMPAIGNS</h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="curtain-text">& BRAND ACTIVATIONS</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
