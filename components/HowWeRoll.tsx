"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "../lib/useGSAP";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";

const steps = [
  {
    title: "BRIEFING",
    text: `In order to deliver your needs, we understand your brand,
    the campaign goals, and your specific requirements. 
    This is also when we discuss budget and expectations.`,
  },
  {
    title: "STRATEGY",
    text: `We craft the campaign roadmap, identify the right
    creators, platforms, and messaging to maximize impact.`,
  },
  {
    title: "ACTIVATION",
    text: `Influencers launch the campaign across multiple
    platforms while we monitor performance and optimize.`,
  },
  {
    title: "ANALYTICS",
    text: `After the campaign wraps, we analyze results,
    extract insights and refine future campaign strategy.`,
  },
];

export default function HowWeRoll() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const ref = useGSAP((scope) => {
    const cards = scope.querySelectorAll(".roll-card");

    gsap.from(cards, {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });
  });

  const changeStep = (index: number) => {
    const content = contentRef.current;
    const currentIndex = activeRef.current;

    if (index === currentIndex || !content) return;

    activeRef.current = index;

    const tl = gsap.timeline();

    tl.to(content, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
    })

      .add(() => setActive(index))

      .fromTo(
        content,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        },
      );
  };

  const nextStep = () => {
    if (activeRef.current < steps.length - 1) {
      changeStep(activeRef.current + 1);
    }
  };

  const prevStep = () => {
    if (activeRef.current > 0) {
      changeStep(activeRef.current - 1);
    }
  };

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeRef.current < steps.length - 1) {
        changeStep(activeRef.current + 1);
      }

      if (e.key === "ArrowLeft" && activeRef.current > 0) {
        changeStep(activeRef.current - 1);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section ref={ref} className="px-2 py-2">
      {/* TOP ROW */}
      <div className="grid lg:grid-cols-3 gap-2 mb-2">
        <div className="roll-card bg-[#D45C96] rounded-[20px] p-3 flex items-center justify-center min-h-87.5">
          <div className="w-40 h-40 bg-white/40 rounded-full" />
        </div>

        <div className="roll-card bg-[#4F4D4C] rounded-[20px] p-16 flex flex-col col-span-2 justify-between min-h-87.5">
          <h2 className="text-white text-5xl font-bold leading-tight">
            THIS IS HOW WE ROLL
          </h2>

          <p className="text-white/80 font-semibold text-xl  mt-10">
            Check out our game paln for delivering results
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="flex items-center gap-2 mb-2">
        <div className="roll-card flex-1 bg-[#F2F2F2] rounded-full px-12 py-5 relative">
          <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-0.5 bg-[#07123A]/20" />

          <div className="relative flex justify-between">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => changeStep(i)}
                className={`timeline-dot w-4 h-4 rounded-full transition-all
                ${active === i ? "bg-[#B31F6C] scale-125" : "bg-[#07123A]/40"}`}
              />
            ))}
          </div>
        </div>

        <div className="roll-card bg-[#B31F6C] rounded-[40px] px-12 py-3 flex gap-10 items-center text-white text-2xl font-bold">
          <button
            onClick={prevStep}
            className="transition-transform hover:scale-125 disabled:opacity-30"
            disabled={active === 0}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextStep}
            className="transition-transform hover:scale-125 disabled:opacity-30"
            disabled={active === steps.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="roll-card roll-content bg-[#F2F2F2] rounded-[20px] p-16 min-h-75 max-w-270"
      >
        <h3 className="text-[#07123A] text-xl font-bold mb-8 items-center flex gap-3">
          <CircleCheck /> {steps[active].title}
        </h3>

        <p className="text-[#07123A] text-2xl leading-relaxed max-w-3xl">
          {steps[active].text}
        </p>
      </div>
    </section>
  );
}
