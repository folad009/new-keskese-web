"use client";

import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { useGSAP } from "../lib/useGSAP";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 28rem, 24rem"
      onError={() => setImageSrc("/assets/images/keskese-logo.png")}
    />
  );
}

const projects = [
  {
    title: "MTN 5G",
    image: "/assets/images/featured-projects/keskese-mtn-g.jpg",
    stats: [
      { value: "550", label: "INFLUENCERS" },
      { value: "1,500", label: "ACTIVATIONS" },
      { value: "30", label: "COUNTRIES" },
    ],
  },
  {
    title: "CADBURY SALES CONFERENCE",
    image: "/assets/images/featured-projects/cadbury-sales-conference.jpg",
    stats: [
      { value: "500", label: "INFLUENCERS" },
      { value: "1,500", label: "ACTIVATIONS" },
      { value: "15", label: "COUNTRIES" },
    ],
  },
  {
    title: "MTN CUSTOMER ENGAGEMENT DAY",
    image: "/assets/images/featured-projects/mtn-customer-engagement-day.jpg",
    stats: [
      { value: "#1", label: "IN 15 COUNTRIES" },
      { value: "1,500", label: "INFLUENCERS" },
      { value: "2,000", label: "ACTIVATIONS" },
    ],
  },
  {
    title: "MTN LIKE A CHILD AGAIN",
    image: "/assets/images/featured-projects/like-a-child-again.jpg",
    stats: [
      { value: "720", label: "INFLUENCERS" },
      { value: "2,100", label: "ACTIVATIONS" },
      { value: "28", label: "COUNTRIES" },
    ],
  },
  {
    title: "MTN PULSE",
    image: "/assets/images/featured-projects/mtn-pulse.jpg",
    stats: [
      { value: "900", label: "INFLUENCERS" },
      { value: "3,200", label: "ACTIVATIONS" },
      { value: "35", label: "COUNTRIES" },
    ],
  },
  {
    title: "SUZUKI DZIRE LAUNCH",
    image: "/assets/images/featured-projects/suzuki-dzire-launch.jpg",
    stats: [
      { value: "1,200", label: "INFLUENCERS" },
      { value: "4,100", label: "ACTIVATIONS" },
      { value: "42", label: "COUNTRIES" },
    ],
  },
];

export default function FeaturedProjects() {
  const ref = useGSAP((scope) => {
    const track = scope.querySelector(".projects-track") as HTMLElement;
    const cards = gsap.utils.toArray<HTMLElement>(".project-card", scope);

    if (!track || cards.length === 0) {
      return;
    }

    const isDesktop = window.innerWidth >= 1024;
    const scrollDistance = track.scrollWidth - scope.clientWidth;

    if (isDesktop && scrollDistance > 0) {
      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          snap: cards.length > 1
            ? {
                snapTo: 1 / (cards.length - 1),
                duration: { min: 0.2, max: 0.6 },
                ease: "power1.inOut",
              }
            : undefined,
        },
      });
    }

    /* entrance animation */
    gsap.from(cards, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      stagger: 0.2,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });

    /* arrow micro motion */
    const arrow = scope.querySelector(".projects-arrow");

    if (arrow) {
      gsap.to(arrow, {
        y: 10,
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <section ref={ref} className="relative px-2 py-2 overflow-hidden">
      {/* HEADER */}
      <div className="mb-2 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-4 lg:gap-6">
        <div className="projects-arrow hidden h-20 w-20 shrink-0 items-center justify-center self-start rounded-full bg-[#B31F6C] text-white sm:flex sm:h-24 sm:w-24 lg:h-32 lg:w-32">
          <ArrowDown height={20} />
        </div>

        <div className="flex-1 rounded-[28px] bg-[#D45C96] px-6 py-6 text-center sm:px-8 sm:py-8 lg:rounded-[40px] lg:px-16 lg:py-10">
          <h2 className="text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-4xl lg:text-5xl">
            FEATURED PROJECTS
          </h2>

          <p className="mt-2 text-sm tracking-wide text-white/80 capitalize sm:text-base lg:text-xl">
           Experiential Marketing with Tangible Results
          </p>
        </div>
      </div>

      {/* HORIZONTAL TRACK */}
      <div className="projects-track flex gap-2 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card flex min-w-[82vw] max-w-[82vw] snap-start flex-col overflow-hidden rounded-3xl bg-[#F2F2F2] sm:min-w-md sm:max-w-md lg:min-w-95 lg:max-w-95"
          >
            <div className="relative h-56 sm:h-72 lg:h-80">
              <FeaturedProjectImage
                src={project.image}
                alt={`${project.title} featured project`}
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
              <h3 className="mb-8 text-xl font-extrabold tracking-tight text-[#B31F6C] sm:text-2xl md:text-3xl lg:mb-10">
                {project.title}
              </h3>

              <div className="grid grid-cols-3 gap-3 text-[#07123A] sm:gap-4 lg:gap-6">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-bold sm:text-2xl md:text-3xl">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[10px] font-semibold tracking-wide opacity-70 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
