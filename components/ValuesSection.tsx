"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ValuesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Images animation
      gsap.from(".cap-image", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Statement row
      gsap.from(".cap-statement", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Cards stagger animation
      gsap.from(".cap-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cap-grid",
          start: "top 85%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-2 py-2">

      {/* TOP IMAGE ROW */}
      <div className="grid lg:grid-cols-3 gap-2 mb-2">

        <div className="cap-image overflow-hidden rounded-[20px] min-h-[14rem] sm:min-h-[20rem] lg:col-span-2 lg:min-h-95">
          <div
            className="w-full h-full bg-gray-300"
            style={{
              backgroundImage:
                'url("/assets/images/keskese-abt-img-2.jpg")',
              backgroundSize: 'cover'
            }}
          />
        </div>

        <div className="cap-image overflow-hidden rounded-[20px] min-h-[14rem] sm:min-h-[20rem] lg:min-h-95">
          <div
            className="w-full h-full bg-gray-300"
            style={{
              backgroundImage:
                'url("/assets/images/keskese-abt-img-1.jpg")',
              backgroundSize: 'cover'
            }}
          />
        </div>

      </div>

      {/* STATEMENT ROW */}
      <div className="cap-statement mb-2 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">

        <div className="flex h-20 w-20 shrink-0 items-center justify-center self-start rounded-full bg-[#B31F6C] text-white sm:h-24 sm:w-24 lg:h-35 lg:w-35">
          <ArrowDown height={20} />
        </div>

        <div className="flex-1 rounded-[20px] bg-[#D45C96] p-5 text-center md:p-8">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            OUR CAPABILITIES
          </h2>
        </div>

      </div>

      {/* VALUES GRID */}
      <div className="grid md:grid-cols-3 gap-2 cap-grid">

        {/* Card 1 */}
        <div className="cap-card flex min-h-[16rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-6 sm:p-8 lg:min-h-80 lg:p-12">
          <h2 className="flex items-center gap-3 text-[#07123A] font-extrabold">
            <span className="w-3 h-3 bg-[#07123A] rounded-full" />
            BRAND ACTIVATIONS
          </h2>

          <p className="mt-6 leading-relaxed text-[#07123A] sm:mt-8 lg:mt-10">
            We look beyond the opportunity, audience, and objectives to
            understand your brand positioning, company culture, and broader
            marketing strategy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="cap-card flex min-h-[16rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-6 sm:p-8 lg:min-h-80 lg:p-12">
          <h2 className="flex items-center gap-3 text-[#07123A] font-extrabold">
            <span className="w-3 h-3 bg-[#07123A] rounded-full" />
            EVENT EXPERIENCES
          </h2>

          <p className="mt-6 leading-relaxed text-[#07123A] sm:mt-8 lg:mt-10">
            We transform creative concepts into reality through detailed
            planning, the right assets, and precise execution.
          </p>
        </div>

        {/* Card 3 */}
        <div className="cap-card flex min-h-[16rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-6 sm:p-8 lg:min-h-80 lg:p-12">
          <h2 className="flex items-center gap-3 text-[#07123A] font-extrabold">
            <span className="w-3 h-3 bg-[#07123A] rounded-full" />
            BRAND EXHIBITION
          </h2>

          <p className="mt-6 leading-relaxed text-[#07123A] sm:mt-8 lg:mt-10">
            Bring your brand to life through immersive exhibitions.
            We craft visually stunning displays that capture attention.
          </p>
        </div>

      </div>

    </section>
  );
}
