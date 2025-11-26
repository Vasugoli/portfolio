
import React from 'react'
import ProjectCard, { type Project } from './ProjectCard'
import { Badge } from '../../components/ui/Badge'
import { ProfileCodeCard, type ProfileStage } from '../About/ProfileCodeCard'

const projects: Project[] = [
  {
    name: 'AI Risk Detection Suite',
    description:
      'Web app that helps users evaluate AI-related risks, with model comparisons, result dashboards, and feedback loops.',
    tech: ['React', 'TypeScript', 'Flask', 'MongoDB', 'Tailwind'],
    repo: 'https://github.com/Vasugoli',
  },
  {
    name: 'Campus Lost & Found',
    description:
      'Platform for students to post, track, and recover lost items on campus with a clean UI and simple flows.',
    tech: ['React', 'TypeScript', 'Flask', 'MongoDB'],
    repo: 'https://github.com/Vasugoli',
  },
  {
    name: 'Food Bridge – Saving Food, Serving Lives',
    description:
      'Community project connecting food donors with distributors to minimize waste and feed people in need.',
    tech: ['React', 'TypeScript', 'Tailwind', 'REST APIs'],
    repo: 'https://github.com/Vasugoli',
  },
]

const ProjectsSection: React.FC = () => {
  const stage: ProfileStage = 'projects'

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16"
    >
      <div className="space-y-6">
        <Badge variant="outline">Projects</Badge>
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Selected work.
        </h2>
        <p className="text-sm text-slate-300 md:text-base">
          A few projects that show how I approach problems, design systems, and
          build interfaces with motion, clarity, and type safety.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
      <div className="md:sticky md:top-28">
        <ProfileCodeCard stage={stage} />
      </div>
    </section>
  )
}

export default ProjectsSection
