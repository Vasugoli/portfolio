
import React, { useEffect, useRef, useState } from 'react'

export interface DecryptedTextProps {
  text: string
  className?: string
  animateOnHover?: boolean
}

const CHARS = '#_X<>/|{}$%?*+-'

const randomChar = (): string =>
  CHARS[Math.floor(Math.random() * CHARS.length)] ?? '#'

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className,
  animateOnHover = false,
}) => {
  const [display, setDisplay] = useState<string>(text)
  const [hovered, setHovered] = useState<boolean>(false)
  const frameRef = useRef<number | null>(null)

  const runAnimation = (): void => {
    let frame = 0
    const maxFrames = 22
    const length = text.length

    const animate = () => {
      frame += 1
      const progress = Math.min(frame / maxFrames, 1)
      const reveal = Math.floor(progress * length)

      const chars = text
        .split('')
        .map((ch, i) => (i < reveal ? ch : randomChar()))
        .join('')

      setDisplay(chars)

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animate)
      }
    }

    frameRef.current = window.requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!animateOnHover) {
      runAnimation()
    }

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, animateOnHover])

  useEffect(() => {
    if (!animateOnHover || !hovered) return
    runAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered])

  return (
    <span
      className={className}
      onMouseEnter={animateOnHover ? () => setHovered(true) : undefined}
      onMouseLeave={animateOnHover ? () => setHovered(false) : undefined}
    >
      {display}
    </span>
  )
}

export default DecryptedText
