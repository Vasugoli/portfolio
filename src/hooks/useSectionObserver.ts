// src/hooks/useSectionObserver.ts
import { useLayoutEffect } from "react";
import { Observer, gsap } from "../utils/gsapSetup";

const SECTION_IDS = [
  "hero",     // root in HeroSvgPortrait
  "about",
  "skills",
  "projects",
  "contact",
];

export function useSectionObserver(enabled = true) {
  useLayoutEffect(() => {
    if (!enabled) return;

    let currentIndex = 0;
    let isAnimating = false;

    const scrollToSection = (index: number) => {
      const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, index));
      const id = SECTION_IDS[clamped];
      const el = document.getElementById(id);
      if (!el) return;

      isAnimating = true;
      currentIndex = clamped;

      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: el, autoKill: true },
        ease: "power2.out",
        onComplete: () => {
          setTimeout(() => {
            isAnimating = false;
          }, 200);
        },
      });
    };

    const observer = Observer.create({
      target: window,
      type: "wheel,touch",
      wheelSpeed: 1,
      tolerance: 15,
      preventDefault: false,
      onUp: () => {
        if (isAnimating) return;
        scrollToSection(currentIndex - 1);
      },
      onDown: () => {
        if (isAnimating) return;
        scrollToSection(currentIndex + 1);
      },
    });

    return () => {
      observer.kill();
    };
  }, [enabled]);
}
