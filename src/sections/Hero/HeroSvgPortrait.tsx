
import React, { useLayoutEffect, useRef } from 'react'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface HeroSvgPortraitProps {
  navLogoRef: React.RefObject<HTMLSpanElement>
  navLinksRef: React.RefObject<HTMLDivElement>
  navShellRef: React.RefObject<HTMLElement>
}

const HeroSvgPortrait: React.FC<HeroSvgPortraitProps> = ({ navShellRef }) => {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!heroRef.current || !navShellRef.current || !svgRef.current) return

    const ctx = gsap.context(() => {
      const navShell = navShellRef.current
      const svgElement = svgRef.current
      const nameEl = nameRef.current
      const subtitleEl = subtitleRef.current
      const scrollEl = scrollRef.current
      const frameEl = frameRef.current

      if (!navShell || !svgElement || !nameEl || !subtitleEl) return

      const paths = Array.from(
        svgElement.querySelectorAll('path'),
      ) as SVGPathElement[]

      paths.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: 'none',
          stroke: '#22d3ee',
          strokeWidth: 2,
        })
      })

      gsap.set(nameEl, { opacity: 0, y: 20 })
      gsap.set(subtitleEl, { opacity: 0, y: 16 })
      if (scrollEl) gsap.set(scrollEl, { opacity: 1, y: 0 })
      if (frameEl) gsap.set(frameEl, { opacity: 1 })
      gsap.set(navShell, { opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
        },
      })

      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          ease: 'none',
          stagger: 0.02,
        },
        0,
      )

      tl.to(
        nameEl,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        },
        0.4,
      )

      tl.to(
        subtitleEl,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        },
        0.5,
      )

      if (scrollEl) {
        tl.to(
          scrollEl,
          {
            opacity: 0,
            y: 20,
            ease: 'power1.out',
          },
          0.75,
        )
      }

      if (frameEl) {
        tl.to(
          frameEl,
          {
            opacity: 0,
            ease: 'power1.out',
          },
          0.85,
        )
      }

      tl.to(
        navShell,
        {
          opacity: 1,
          ease: 'power2.out',
        },
        0.65,
      )
    }, heroRef)

    return () => ctx.revert()
  }, [navShellRef])

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen items-center justify-center overflow-hidden px-4 pt-24 md:px-8"
    >
      <div
        ref={frameRef}
        className="pointer-events-none absolute inset-10 rounded-[2.5rem] border border-cyan-500/25 shadow-[0_0_80px_rgba(34,211,238,0.4)]"
      >
        <div className="absolute inset-0 rounded-[2.5rem] border border-slate-900/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 200"
          preserveAspectRatio="xMidYMid meet"
          className="w-[260px] drop-shadow-[0_0_35px_rgba(56,189,248,0.55)] md:w-[320px]"
        >
          <g
            transform="translate(0,200) scale(0.1,-0.1)"
            stroke="none"
            fill="none"
          >
            <path d="M1370 1939 c-56 -4 -115 -17 -171 -37 -107 -37 -126 -47 -166 -85
-18 -17 -33 -27 -33 -23 0 4 -11 -6 -25 -22 -14 -17 -25 -39 -25 -51 0 -11 -8
-28 -19 -38 -31 -30 -61 -100 -61 -145 0 -24 -9 -63 -20 -87 -11 -24 -20 -47
-20 -52 0 -24 77 -164 134 -244 111 -155 163 -246 169 -297 4 -28 2 -50 -4
-53 -7 -5 -6 -11 1 -20 7 -8 9 -19 5 -24 -16 -26 56 -108 172 -195 29 -22 50
-43 47 -48 -3 -5 -2 -7 3 -6 4 1 25 -4 46 -11 35 -12 41 -11 77 13 62 41 176
164 201 219 l24 50 6 -31 c9 -46 -36 -306 -52 -297 -4 3 -11 0 -15 -6 -4 -8
-3 -9 4 -5 17 10 15 -6 -8 -59 l-20 -47 -48 53 c-26 29 -47 60 -47 70 0 9 -3
21 -7 25 -4 3 -5 -3 -3 -16 4 -21 3 -21 -14 -6 -22 20 -44 20 -81 1 -17 -9
-30 -11 -30 -5 0 5 8 10 18 10 14 0 15 2 2 10 -11 7 -25 -1 -56 -31 -22 -22
-44 -36 -48 -32 -4 4 -4 1 -1 -8 3 -9 -6 -26 -23 -42 -25 -24 -31 -26 -41 -13
-7 8 -9 21 -5 27 5 8 3 9 -6 4 -10 -6 -12 -4 -7 9 4 10 3 15 -3 11 -13 -8 -31
30 -24 52 5 15 4 15 -5 3 -22 -31 -73 137 -75 248 0 39 -1 72 -2 72 -1 0 -16
-24 -32 -54 -38 -66 -88 -106 -211 -168 -150 -75 -382 -178 -402 -178 -10 0
-27 -12 -38 -26 -30 -39 -81 -178 -81 -223 0 -22 -4 -43 -10 -46 -12 -8 -13
-85 -1 -85 5 0 11 21 15 48 14 115 26 161 54 223 26 58 43 82 62 84 3 1 22 9
44 18 21 9 42 17 47 17 5 0 9 4 9 9 0 5 12 12 27 16 27 6 119 45 155 65 10 6
22 10 28 10 6 0 20 9 31 19 11 10 40 24 65 31 24 7 44 16 44 19 0 4 15 14 33
23 46 23 127 90 128 108 0 8 7 -16 15 -54 14 -62 14 -70 -1 -86 -12 -14 -13
-20 -4 -26 7 -4 10 -3 6 3 -4 6 -1 16 7 22 11 9 15 3 20 -34 4 -25 11 -43 16
-40 11 7 31 -64 28 -102 -4 -60 3 -94 22 -110 11 -10 20 -27 20 -38 0 -11 7
-42 16 -70 8 -27 17 -59 19 -69 9 -43 27 -86 35 -86 5 0 3 19 -5 41 -21 59
-18 61 11 6 13 -26 29 -47 34 -47 6 0 3 11 -6 25 -8 13 -12 30 -8 36 4 7 3 9
-4 5 -6 -3 -13 3 -17 14 -3 11 -10 20 -15 20 -4 0 -7 13 -6 29 1 17 -1 28 -4
26 -4 -3 -12 12 -18 33 -6 20 -17 55 -24 77 -7 22 -13 45 -14 50 0 6 -6 30
-13 54 -13 46 -8 69 8 30 5 -13 30 -43 56 -66 26 -23 44 -36 41 -28 -2 7 2 16
10 19 17 7 54 -27 54 -51 0 -9 3 -14 6 -10 4 3 4 21 0 40 -5 29 -9 33 -36 31
-17 -1 -30 0 -30 2 0 18 69 96 90 100 14 3 37 9 52 14 23 7 32 3 62 -26 23
-23 33 -40 30 -52 -5 -13 -4 -14 4 -3 5 7 15 11 20 7 17 -10 2 -36 -19 -36
-10 0 -19 -3 -20 -7 -7 -65 -7 -83 -1 -87 4 -2 8 4 9 14 3 31 48 91 60 79 7
-7 4 -38 -12 -102 -23 -92 -43 -228 -26 -176 5 15 12 50 15 79 4 32 13 59 24
67 9 8 11 12 5 8 -8 -4 -13 0 -13 10 0 9 4 13 10 10 6 -3 7 1 4 10 -4 10 2 24
15 36 26 24 27 40 4 33 -15 -5 -15 -3 1 10 26 21 39 20 32 -1 -4 -16 -58 -243
-71 -300 -3 -13 -2 -23 3 -23 12 0 30 40 36 80 3 19 14 64 24 100 10 36 18 75
17 87 -1 12 2 20 6 18 4 -3 9 4 12 15 3 11 1 18 -4 14 -5 -3 -9 0 -10 8 0 7
-2 23 -3 35 -1 12 1 20 5 18 4 -3 9 10 12 28 10 67 38 214 50 261 l13 49 49
-43 c28 -24 49 -48 47 -53 -1 -4 1 -6 5 -4 13 7 144 -39 136 -47 -5 -4 -1 -7
7 -5 13 2 57 -14 112 -42 10 -5 27 -9 38 -9 11 0 20 -4 20 -10 0 -5 8 -10 19
-10 16 0 66 -17 146 -50 11 -5 37 -14 57 -21 20 -7 35 -16 32 -21 -3 -4 2 -5
10 -2 34 13 55 -16 85 -114 17 -53 32 -117 34 -142 6 -52 35 -140 47 -140 5 0
2 21 -6 48 -9 26 -19 70 -24 98 -13 82 -60 227 -81 248 -10 11 -38 25 -61 32
-89 24 -383 138 -405 156 -7 6 -13 8 -13 5 0 -3 -35 8 -77 24 -60 23 -88 41
-129 84 -29 29 -57 63 -64 74 -10 19 -8 21 18 21 37 0 72 37 72 75 0 16 11 59
24 95 14 36 35 99 47 140 16 52 33 85 56 107 18 18 35 48 39 67 3 20 12 40 20
47 18 15 18 39 1 39 -8 0 -24 11 -36 24 -13 14 -33 26 -45 28 -16 2 -26 18
-44 67 l-22 64 30 -6 c16 -4 30 -2 30 3 0 5 9 12 20 15 11 3 20 11 20 17 0 6
-6 6 -15 -2 -9 -7 -29 -13 -45 -12 -20 0 -35 -7 -45 -21 -8 -12 -15 -17 -15
-11 0 16 -80 104 -93 104 -7 -1 2 -13 19 -28 17 -15 46 -56 64 -92 18 -36 38
-69 44 -73 6 -5 -3 -7 -21 -4 -19 2 -33 -1 -34 -7 0 -6 -4 -2 -9 9 -7 15 -9
16 -9 4 -1 -9 -7 -22 -15 -28 -11 -10 -15 -8 -19 6 -3 15 -6 13 -15 -9 -7 -18
-19 -28 -32 -28 -17 0 -18 4 -10 24 9 25 6 64 -6 75 -4 3 -4 -7 -2 -22 6 -33
-13 -47 -37 -27 -8 7 -15 10 -15 6 0 -3 -16 0 -36 9 -65 27 -133 27 -189 0
l-50 -24 40 6 c22 3 45 10 52 15 7 6 17 8 24 6 25 -8 -63 -37 -179 -59 -123
-23 -155 -44 -39 -26 102 16 162 14 162 -3 0 -11 -10 -15 -35 -13 -19 0 -26
-1 -16 -4 15 -4 16 -7 5 -14 -9 -6 -4 -7 15 -3 20 5 27 3 22 -4 -3 -6 -1 -14
5 -18 8 -4 9 -3 5 4 -4 7 -3 12 2 12 4 0 14 -22 22 -49 9 -32 21 -54 36 -62
19 -10 21 -15 13 -32 -7 -12 -7 -17 -1 -13 5 3 16 -2 23 -11 12 -14 12 -16 -1
-8 -12 6 -12 5 -3 -5 28 -30 140 78 159 155 7 27 38 50 54 40 6 -4 21 -28 34
-54 14 -26 32 -54 42 -62 12 -9 8 2 -10 34 -19 32 -26 55 -22 71 4 16 2 24 -7
23 -42 -1 -47 3 -35 23 7 11 21 20 30 20 10 0 18 5 18 11 0 5 5 7 11 3 8 -4 8
-9 0 -17 -6 -6 -11 -15 -11 -20 0 -4 10 3 23 17 20 24 97 51 85 30 -3 -5 0
-15 8 -22 11 -10 14 -10 14 -1 0 7 13 1 28 -14 15 -15 34 -27 42 -27 10 0 10
-4 -2 -17 -9 -10 -18 -34 -22 -55 -4 -20 -19 -49 -35 -65 -28 -27 -71 -121
-71 -154 0 -8 -12 -44 -26 -79 -14 -35 -28 -82 -30 -104 -6 -49 -19 -66 -49
-66 -25 0 -41 -16 -77 -80 -27 -47 -93 -120 -108 -120 -4 0 -10 -3 -12 -7 -7
-16 -109 -95 -115 -89 -4 3 -2 6 4 6 15 0 23 39 10 47 -7 3 -9 2 -4 -2 9 -10
-21 -45 -38 -45 -15 0 -129 87 -198 151 -39 36 -51 54 -52 80 -2 19 -4 54 -6
79 -1 25 1 52 6 59 5 9 4 12 -2 8 -6 -4 -13 7 -17 26 -3 19 -17 44 -31 57 -33
31 -33 54 0 48 15 -3 30 1 37 9 10 12 14 11 24 -9 18 -32 17 -37 -8 -48 -13
-5 -17 -9 -10 -9 7 -1 10 -7 7 -13 -4 -7 2 -2 12 10 l19 24 32 -64 c40 -81 93
-140 124 -137 33 3 78 -20 116 -61 18 -19 31 -29 27 -22 -3 6 -1 12 5 12 7 0
5 6 -4 15 -8 8 -19 15 -25 15 -6 0 -11 4 -11 9 0 14 -73 45 -102 43 -22 -2
-34 6 -58 39 -35 49 -38 63 -10 54 11 -3 20 -2 20 3 0 6 -13 9 -29 8 -17 -1
-27 2 -24 7 3 5 2 12 -3 16 -14 9 -84 151 -84 168 0 10 -6 12 -21 8 -12 -4
-28 -8 -35 -9 -7 -1 -17 -6 -21 -10 -4 -5 9 -6 30 -3 40 6 51 -9 22 -33 -20
-16 -56 -6 -94 26 -29 25 -46 58 -18 37 19 -15 49 -24 42 -13 -3 6 -12 10 -19
10 -8 0 -21 10 -30 23 -10 14 -14 16 -10 5 4 -10 3 -18 0 -18 -10 0 -46 82
-46 106 0 29 37 74 61 74 34 0 116 -53 127 -82 6 -15 15 -28 22 -28 7 0 5 7
-5 17 -15 14 -15 17 -2 25 10 5 16 22 15 48 0 22 -4 37 -9 34 -5 -3 -9 0 -9 7
0 8 15 10 48 7 47 -5 93 -22 189 -69 87 -42 60 -3 -30 45 -68 35 -165 52 -199
34 -17 -8 -20 -32 -6 -53 4 -6 3 -16 -1 -23 -5 -9 -12 -7 -27 6 -11 10 -25 17
-31 15 -6 -2 -15 1 -19 8 -4 7 -3 9 4 5 6 -3 13 -2 16 3 4 5 -2 8 -11 6 -10
-1 -24 2 -30 7 -7 6 -29 7 -48 4 -35 -7 -65 -44 -65 -82 0 -30 -25 1 -63 80
l-37 74 20 63 c11 35 20 80 20 99 0 38 23 90 46 103 8 4 14 13 14 20 0 7 7 25
15 41 8 15 12 33 8 39 -3 5 -2 8 3 4 5 -3 31 14 58 39 27 24 52 41 56 39 5 -3
10 -1 12 5 5 16 110 51 133 44 11 -4 16 -3 12 2 -13 14 93 44 120 33 13 -5 22
-5 19 0 -7 11 86 2 98 -10 5 -5 15 -1 22 9 8 10 13 12 14 5 0 -7 7 -10 16 -6
10 4 14 1 12 -8 -1 -8 7 -28 18 -44 12 -17 26 -43 32 -60 7 -22 11 -24 11 -10
0 11 -10 40 -24 64 -14 23 -25 44 -25 45 0 1 9 2 21 3 14 1 19 -3 15 -12 -2
7 2 -19 10 -25 8 -7 14 -22 14 -34 1 -17 2 -18 11 -5 8 13 10 12 10 1 0 -8 3
-12 6 -8 3 3 2 12 -2 19 -5 7 -9 18 -11 23 -1 6 -4 20 -7 33 -4 20 -3 21 17
11 33 -17 67 -51 61 -60 -3 -5 0 -9 6 -9 7 0 21 -11 32 -25 11 -14 24 -22 30
-19 6 4 8 -2 3 -17 -5 -19 -4 -21 4 -9 9 12 11 13 11 1 0 -8 3 -12 6 -8 8 9
-15 49 -25 43 -11 -6 -36 23 -27 32 4 4 11 1 15 -6 7 -11 10 -11 14 0 4 12 7
11 16 -1 6 -8 11 -11 11 -7 0 4 15 -3 33 -16 17 -13 47 -30 65 -37 36 -14 39
-26 30 -111 -2 -18 -8 -25 -19 -22 -9 3 -20 0 -23 -6 -4 -6 0 -11 11 -11 17
-1 17 -2 -1 -15 -14 -11 -16 -15 -5 -15 8 0 27 19 43 41 25 36 28 47 23 92 -4
28 -12 55 -18 61 -9 8 -10 7 -4 -4 6 -12 5 -13 -6 -2 -7 6 -22 12 -33 12 -24
1 -61 26 -61 42 0 6 -9 12 -20 13 -30 3 -127 44 -147 62 -10 9 -32 16 -50 15
-17 0 -40 4 -51 9 -24 13 -89 16 -197 8z m180 -496 c0 -5 12 -9 26 -10 15 0
29 -5 33 -10 7 -10 29 -16 53 -15 14 1 16 -6 13 -31 -3 -18 -3 -26 1 -19 3 6
13 12 22 12 14 0 13 -2 -2 -13 -10 -7 -26 -36 -35 -63 -9 -27 -21 -48 -28 -47
-6 1 -19 -7 -28 -17 -14 -15 -15 -20 -4 -20 10 0 10 -3 -2 -16 -19 -18 -79
-30 -79 -15 0 6 6 11 12 11 7 0 -1 10 -18 22 -19 14 -38 40 -48 68 -17 46 -29
127 -18 115 3 -3 18 7 33 21 17 17 34 24 44 20 9 -3 13 -2 10 4 -3 6 -1 10 4
10 6 0 11 -3 11 -7z"/>
          </g>
        </svg>

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
        <div className="pointer-events-auto rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1">
          SCROLL TO EXPLORE
        </div>
        <ArrowDownIcon className="h-5 w-5 animate-bounce text-cyber-cyan" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-cyber-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyber-indigo/25 blur-3xl" />
    </section>
  )
}

export default HeroSvgPortrait
