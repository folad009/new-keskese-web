"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayIcon } from "lucide-react";

import { useGSAP } from "../lib/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useGSAP((scope) => {
    const sub = scope.querySelector(".hero-sub");
    const visual = scope.querySelector(".hero-visual");
    const btn = scope.querySelector(".play-btn");
    const chars = scope.querySelectorAll(".hero-unit");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(chars, {
      y: 120,
      opacity: 0,
      duration: 0.9,
      stagger: 0.018,
    })
      .from(
        sub,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.45",
      )
      .from(
        visual,
        {
          x: 80,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.5",
      )
      .fromTo(
        btn,
        {
          scale: 0.6,
          opacity: 0,
          rotate: -6,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.25",
      );

    gsap.to(visual, {
      yPercent: -12,
      scale: 1.04,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section ref={ref} className="px-2 pb-2 pt-24 md:pt-28">
      <div className="grid gap-2 lg:grid-cols-2">
        <div className="flex min-h-[27rem] flex-col justify-between rounded-[28px] bg-[#B31F6C] p-5 sm:min-h-[34rem] sm:p-8 lg:min-h-162.5 lg:rounded-[40px] lg:p-20">
          <h1 className="hero-title max-w-[10ch] text-[2rem] font-extrabold uppercase leading-[0.95] tracking-normal text-[#F4D6E5] sm:max-w-none sm:text-5xl md:text-6xl lg:text-[65px]">
            <span className="hero-unit inline-block">welcome</span>{" "}
            <span className="hero-unit inline-block">to</span>{" "}
            <span className="hero-unit inline-block">the</span>{" "}
            <span className="hero-unit inline-block">home</span>{" "}
            <span className="hero-unit inline-block">of</span>{" "}
            <span className="hero-unit inline-block">experiential</span>{" "}
            <br className="hidden sm:block" />
            <span className="hero-unit inline-block">wizardry</span>
          </h1>

          <p className="hero-sub mt-6 max-w-sm text-sm font-semibold text-[#F4D6E5] sm:mt-12 sm:max-w-md sm:text-lg lg:text-xl">
            A truly Independent Experiential Marketing Agency based in Lagos,
            Nigeria, with nationwide and West African footprint
          </p>
        </div>

        <div className="relative flex min-h-[24rem] flex-col justify-between rounded-[28px] p-1 sm:min-h-[30rem] lg:min-h-162.5 lg:rounded-[40px]">
          <div className="hero-visual relative h-72 overflow-hidden rounded-[24px] bg-[#07123A] sm:h-[24rem] lg:h-95 lg:rounded-[30px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/video/kesekese-video-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="mt-4 hidden justify-end sm:mt-6 sm:flex">
            <button className="play-btn flex h-24 w-24 items-center justify-center rounded-full bg-[#E5E5E5] text-base font-bold text-[#07123A] transition-transform hover:scale-105 sm:h-32 sm:w-32 sm:text-lg lg:h-40 lg:w-40">
              <PlayIcon size={36} className="sm:hidden" />
              <PlayIcon size={44} className="hidden sm:block lg:hidden" />
              <PlayIcon size={50} className="hidden lg:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
