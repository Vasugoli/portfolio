import React, { useLayoutEffect, useRef } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { gsap, ScrollTrigger } from "../../utils/gsapSetup";
import portraitSvg from "../../assets/vasu-portrait.svg?raw";

export interface HeroSvgPortraitProps {
  navLogoRef: React.RefObject<HTMLSpanElement>;
  navLinksRef: React.RefObject<HTMLDivElement>;
  navShellRef: React.RefObject<HTMLElement>;
}

const HeroSvgPortrait: React.FC<HeroSvgPortraitProps> = ({ navShellRef }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const svgWrapperRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
  if (!heroRef.current || !navShellRef.current || !svgWrapperRef.current)
    return;

  const ctx = gsap.context(() => {
    const navShell = navShellRef.current;
    const wrapper = svgWrapperRef.current;
    const svgElement = wrapper?.querySelector("svg") as SVGSVGElement | null;
    const nameEl = nameRef.current;
    const subtitleEl = subtitleRef.current;
    const scrollEl = scrollRef.current;
    const frameEl = frameRef.current;

    if (!navShell || !svgElement || !nameEl || !subtitleEl) return;

    const drawableNodes = Array.from(
      svgElement.querySelectorAll("path")
    ).filter((p) => {
      const length = (p as SVGPathElement).getTotalLength();
      return length > 40;
    }) as SVGPathElement[];

    if (drawableNodes.length === 0) {
      console.warn("[HeroSvgPortrait] No drawable SVG elements found.");
      return;
    }

    drawableNodes.forEach((node) => {
      if (typeof node.getTotalLength !== "function") return;

      const length = node.getTotalLength();
      if (!Number.isFinite(length) || length === 0) return;

      gsap.set(node, {
        strokeDasharray: length,
        strokeDashoffset: length,
        stroke: "#22d3ee",
        strokeWidth: 2,
        fill: "none",
      });
    });

    gsap.set(nameEl, { opacity: 0, y: 20 });
    gsap.set(subtitleEl, { opacity: 0, y: 16 });
    if (scrollEl) gsap.set(scrollEl, { opacity: 1, y: 0 });
    if (frameEl) gsap.set(frameEl, { opacity: 1 });
    gsap.set(navShell, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=150%",   // ⬅ original scroll distance
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      drawableNodes,
      {
        strokeDashoffset: 0,
        ease: "none",
        stagger: 0.02,
      },
      0
    );

    tl.to(
      nameEl,
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      },
      0.4   // ⬅ original offsets
    );

    tl.to(
      subtitleEl,
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      },
      0.5
    );

    if (scrollEl) {
      tl.to(
        scrollEl,
        {
          opacity: 0,
          y: 20,
          ease: "power1.out",
        },
        0.75
      );
    }

    if (frameEl) {
      tl.to(
        frameEl,
        {
          opacity: 0,
          ease: "power1.out",
        },
        0.85
      );
    }

    tl.to(
      navShell,
      {
        opacity: 1,
        ease: "power2.out",
      },
      0.9
    );
  }, heroRef);

  return () => ctx.revert();
}, [navShellRef]);


  const handleScrollClick = () => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: "#about", autoKill: true },
      ease: "power2.out",
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex h-[100vh] items-center justify-center overflow-hidden px-4 pt-24 md:px-8"
    >
      <div
        ref={frameRef}
        className="pointer-events-none absolute inset-10 rounded-[2.5rem] border border-cyan-500/25 shadow-[0_0_80px_rgba(34,211,238,0.4)]"
      >
        <div className="absolute inset-0 rounded-[2.5rem] border border-slate-900/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div
          ref={svgWrapperRef}
          className="w-[260px] drop-shadow-[0_0_35px_rgba(56,189,248,0.55)] md:w-[320px]"
          dangerouslySetInnerHTML={{ __html: portraitSvg }}
        />

        <div className="text-center">
          <h1
            ref={nameRef}
            className="text-2xl font-semibold tracking-[0.45em] text-cyber-cyan md:text-3xl"
          >
            VASU GOLI
          </h1>
          <p
            ref={subtitleRef}
            className="mt-3 text-[11px] font-mono uppercase tracking-[0.35em] text-slate-400"
          >
            FRONTEND · MOTION · TYPE-SAFE
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-mono text-slate-400"
      >
        <button
          type="button"
          onClick={handleScrollClick}
          className="pointer-events-auto rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1"
        >
          SCROLL TO EXPLORE
        </button>
        <ArrowDownIcon className="h-5 w-5 animate-bounce text-cyber-cyan" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-cyber-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyber-indigo/25 blur-3xl" />
    </section>
  );
};

export default HeroSvgPortrait;
