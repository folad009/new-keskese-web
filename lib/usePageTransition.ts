"use client";

import gsap from "gsap";

export const pageExit = async () => {
  const el = document.querySelector("#page");

  if (!el) return Promise.resolve();

  return new Promise<void>((resolve) => {
    gsap.to(el, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: resolve,
    });
  });
};
