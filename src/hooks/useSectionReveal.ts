import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsapSetup";

export function useSectionReveal(options?: {
  y?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: options?.y ?? 40,
        duration: options?.duration ?? 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [options?.y, options?.duration]);

  return ref;
}
