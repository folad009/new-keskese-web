"use client";

import gsap from "gsap";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import AwardsSlider from "./AwardsSlider";
import { useGSAP } from "../lib/useGSAP";

const clientLogos = [
  { name: "AB InBev", src: "/assets/images/clients/abinbev-logo-keskese.png" },
  { name: "Bacardi", src: "/assets/images/clients/bacardi-logo-keskese.png" },
  { name: "Chi", src: "/assets/images/clients/chi-logo-keskese.png" },
  { name: "Google", src: "/assets/images/clients/google-logo-keskese.png" },
  { name: "33 Export", src: "/assets/images/clients/keskese-client-33-xport.png" },
  { name: "Nigerian Breweries", src: "/assets/images/clients/keskese-client-NB.png" },
  { name: "Nigerian Bottling Company", src: "/assets/images/clients/keskese-client-NSA.png" },
  { name: "BAT", src: "/assets/images/clients/keskese-client-bat.png" },
  { name: "Breezer", src: "/assets/images/clients/keskese-client-breezer.png" },
  { name: "Cadbury", src: "/assets/images/clients/keskese-client-cadbury.png" },
  { name: "Cway", src: "/assets/images/clients/keskese-client-cway.png" },
  { name: "Huawei", src: "/assets/images/clients/keskese-client-hauwei.png" },
  { name: "La Casera", src: "/assets/images/clients/keskese-client-lacasera.png" },
  { name: "Lafarge", src: "/assets/images/clients/keskese-client-lafarge.png" },
  { name: "Lumos", src: "/assets/images/clients/keskese-client-lumos.png" },
  { name: "MoMo", src: "/assets/images/clients/keskese-client-momo.png" },
  { name: "OLX", src: "/assets/images/clients/keskese-client-olx.png" },
  { name: "Samsung", src: "/assets/images/clients/keskese-client-samsung.png" },
  { name: "Sun King", src: "/assets/images/clients/keskese-client-sun-king.png" },
  { name: "Suzuki", src: "/assets/images/clients/keskese-client-suzuki.png" },
  { name: "Ecobank", src: "/assets/images/clients/keskese-logo-ecobank.png" },
  { name: "MTN", src: "/assets/images/clients/mtn-logo-keskese.png" },
  { name: "UAC Foods", src: "/assets/images/clients/uacfood-logo-keskese.png" },
  { name: "Unilever", src: "/assets/images/clients/uniliver-logo-keskese.png" },
];

const ITEMS_PER_PAGE = 6;

export default function Clients() {
  const [currentPage, setCurrentPage] = useState(0);
  const logoGridRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(clientLogos.length / ITEMS_PER_PAGE);
  const visibleLogos = clientLogos.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const ref = useGSAP((scope) => {
    const panel = scope.querySelector(".client-logo-panel");

    if (!panel) {
      return;
    }

    gsap.from(panel, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });
  });

  useEffect(() => {
    const grid = logoGridRef.current;

    if (!grid) {
      return;
    }

    const logoCards = grid.querySelectorAll(".client-logo-card");
    const logoImages = grid.querySelectorAll(".client-logo-image");

    if (logoCards.length === 0 || logoImages.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoCards,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
        }
      );

      gsap.to(logoImages, {
        y: -6,
        duration: 1.8,
        ease: "sine.inOut",
        stagger: {
          each: 0.08,
          from: "random",
        },
        repeat: -1,
        yoyo: true,
      });
    }, grid);

    return () => ctx.revert();
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((page) => (page === 0 ? totalPages - 1 : page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => (page === totalPages - 1 ? 0 : page + 1));
  };

  return (
    <section ref={ref} className="px-2 py-1">
      <div className="mb-2 grid gap-2 lg:grid-cols-2">
        <div className="flex min-h-[24rem] flex-col justify-between rounded-[20px] bg-[#B31F6C] p-6 sm:p-10 lg:min-h-130 lg:p-16">
          <div className="flex items-center gap-3 text-white font-semibold">
            <span className="h-3 w-3 rounded-full bg-white" />
            OUR CLIENTS
          </div>

          <h2 className="mt-10 text-2xl font-extrabold leading-tight text-white sm:mt-14 sm:text-3xl lg:mt-20 lg:text-4xl">
            10 YEARS. OVER 5,000 CLIENTS ACROSS NIGERIA
          </h2>

          <button className="mt-10 w-fit rounded-full bg-[#D45C96] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 sm:mt-16 sm:px-8 sm:py-4">
            LET’S PARTNER UP
          </button>
        </div>

        <div className="client-logo-panel flex min-h-[24rem] flex-col justify-between rounded-[20px] bg-[#F2F2F2] p-4 sm:p-8 lg:min-h-130 lg:p-12">
          <div
            ref={logoGridRef}
            className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6"
          >
            {visibleLogos.map((logo) => (
              <div
                key={logo.name}
                className="client-logo-card flex min-h-28 items-center justify-center p-4 sm:min-h-32 sm:p-5 lg:min-h-36"
              >
                <div className="client-logo-image relative h-14 w-full sm:h-16 lg:h-30">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 18vw"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to client logo page ${index + 1}`}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentPage === index
                      ? "w-8 bg-[#B31F6C]"
                      : "w-2.5 bg-[#07123A]/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous client logos"
                onClick={goToPreviousPage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#07123A] shadow-[0_12px_24px_rgba(7,18,58,0.08)]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next client logos"
                onClick={goToNextPage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B31F6C] text-white shadow-[0_12px_24px_rgba(179,31,108,0.2)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-2 lg:grid-cols-3">
        <div className="flex min-h-[18rem] flex-col justify-between rounded-[20px] bg-[#4F4D4C] p-6 sm:p-10 lg:col-span-2 lg:min-h-105 lg:p-16">
          <div className="flex items-center gap-3 font-bold uppercase text-[#E5E5E5]">
            <span className="h-3 w-3 rounded-full bg-[#E5E5E5]" />
            awards
          </div>

          <div>
            <h3 className="text-4xl font-extrabold leading-tight text-[#E5E5E5] sm:text-5xl lg:text-6xl">
              BETA SQUAD
            </h3>
          </div>
        </div>

        <AwardsSlider />
      </div>
    </section>
  );
}
