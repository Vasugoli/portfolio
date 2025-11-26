
import React from 'react'
import { ProfileCodeCard, type ProfileStage } from './ProfileCodeCard'
import { Badge } from '../../components/ui/Badge'
import DecryptedText from '../../components/DecryptedText'

const AboutSection: React.FC = () => {
  const stage: ProfileStage = 'intro'

  return (
    <section
      id="about"
      className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 pt-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16"
    >
      <div className="space-y-6">
        <Badge variant="outline">Intro</Badge>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          <DecryptedText text="Crafting interfaces that feel alive." />
        </h2>
        <p className="text-sm text-slate-300 md:text-base">
          I&apos;m <span className="text-cyber-cyan">Vasu Goli</span>, a
          frontend engineer who loves combining{' '}
          <span className="text-cyber-indigo">motion</span>,{' '}
          <span className="text-cyber-cyan">type safety</span>, and{' '}
          <span className="text-cyber-indigo">clean systems</span> to build
          immersive, reliable interfaces.
        </p>
        <p className="text-sm text-slate-400 md:text-[15px]">
          My work usually lives at the intersection of{' '}
          <span className="text-slate-100">
            React, TypeScript, Tailwind CSS, and GSAP
          </span>
          . I enjoy building scroll experiences, micro-interactions, and tools
          that make complex systems feel simple and intuitive.
        </p>
      </div>
      <div className="md:sticky md:top-28">
        <ProfileCodeCard stage={stage} />
      </div>
    </section>
  )
}

export default AboutSection
