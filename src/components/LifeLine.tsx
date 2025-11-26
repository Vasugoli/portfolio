
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initLifeLineAnimation } from '../animations/lifeLineAnimation'

gsap.registerPlugin(ScrollTrigger)

const LifeLine: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    const ctx = gsap.context(() => {
      const path = svgRef.current?.querySelector('path')
      if (!path) return
      initLifeLineAnimation({
        path,
        container: containerRef.current as HTMLDivElement,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 flex justify-center"
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        className="h-full w-px"
        viewBox="0 0 10 100"
        preserveAspectRatio="none"
      >
        <path
          d="M5 0 C 2 10, 8 20, 5 30 C 2 40, 8 60, 5 70 C 2 80, 8 90, 5 100"
          stroke="#22d3ee"
          strokeWidth="0.6"
          fill="none"
          strokeLinecap="round"
          opacity={0.45}
        />
      </svg>
    </div>
  )
}

export default LifeLine
