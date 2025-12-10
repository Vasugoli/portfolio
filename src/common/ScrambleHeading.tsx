import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsapSetup";

interface Props {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean; // if false, it will re-run when scrolling back up
}

export const ScrambleHeading: React.FC<Props> = ({
  text,
  as = "h2",
  className,
  once = true,
}) => {
  const HeadingTag = as as any;
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const scramble = (newText: string) => {
      const length = newText.length;
      let frame = 0;
      const totalFrames = 20;

      // ensure something is there initially
      el.textContent = newText;

      const update = () => {
        frame++;

        const output = newText
          .split("")
          .map((letter, i) => {
            if (frame < i * 1.5) {
              // keep space so width stays stable
              return letter ? " " : "";
            }
            if (frame > totalFrames) {
              return letter;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        el.textContent = output;

        if (frame >= totalFrames + length * 0.5) {
          el.textContent = newText;
          gsap.ticker.remove(update);
        }
      };

      gsap.ticker.add(update);
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once,
        onEnter: () => {
          scramble(text);
        },
        onEnterBack: () => {
          if (!once) scramble(text);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [text, once]);

  return (
    <HeadingTag ref={ref} className={className}>
      {text}
    </HeadingTag>
  );
};
