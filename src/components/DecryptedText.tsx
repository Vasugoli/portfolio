// src/components/DecryptedText.tsx
import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsapSetup";

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number; // extra delay after enter, if needed
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
    let frame = 0;
    const totalFrames = 25;
    let animationStarted = false;

    const runDecrypt = () => {
      if (animationStarted) return;
      animationStarted = true;

      const target = text;
      const length = target.length;

      gsap.ticker.add(function update() {
        frame++;

        const output = target
          .split("")
          .map((letter, i) => {
            // small per-character delay
            const progress = frame - i * 1.2;
            if (progress <= 0) return "";
            if (progress >= totalFrames) return letter;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        el.textContent = output;

        if (frame >= totalFrames + length * 1.2) {
          el.textContent = target;
          gsap.ticker.remove(update);
        }
      });
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%", // when heading / text is near viewport
        once: true,       // only animate first time
        onEnter: () => {
          if (delay > 0) {
            gsap.delayedCall(delay, runDecrypt);
          } else {
            runDecrypt();
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [text, delay]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
};

export default DecryptedText;
