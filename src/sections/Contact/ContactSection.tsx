
import React from 'react'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { GithubIcon } from '../../icons/GithubIcon'
import { LinkedinIcon } from '../../icons/LinkedinIcon'
import { ProfileCodeCard, type ProfileStage } from '../About/ProfileCodeCard'

const ContactSection: React.FC = () => {
  const stage: ProfileStage = 'contact'

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-10 pb-24 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16"
    >
      <div className="space-y-6">
        <Badge variant="outline">Contact</Badge>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Let&apos;s build something.
        </h2>
        <p className="text-sm text-slate-300 md:text-base">
          Whether it&apos;s an experimental UI, a production-ready front-end, or
          a motion-heavy landing page, I&apos;m always up for building interfaces
          that feel alive and intentional.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-cyber-cyan/10 text-cyber-cyan hover:bg-cyber-cyan/20"
          >
            <a href="mailto:you@example.com">Email me</a>
          </Button>
          <Button
            asChild
            className="border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-cyber-indigo/50 hover:bg-slate-900"
          >
            <a
              href="https://github.com/Vasugoli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
          <Button
            asChild
            className="border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-cyber-cyan/50 hover:bg-slate-900"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
      <div className="md:sticky md:top-28">
        <ProfileCodeCard stage={stage} />
      </div>
    </section>
  )
}

export default ContactSection
