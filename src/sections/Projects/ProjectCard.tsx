import React, { useLayoutEffect, useRef } from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { GithubIcon } from "../../icons/GithubIcon";
import { gsap, ScrollTrigger } from "../../utils/gsapSetup";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
}

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Card
      ref={cardRef as any}
      className="group flex h-full flex-col justify-between border-slate-800/70 bg-slate-900/60 transition hover:-translate-y-1 hover:border-cyber-cyan/40 hover:shadow-neon-cyan"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            {project.name}
          </h3>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-slate-50"
              aria-label={`${project.name} source code`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="text-xs text-slate-400 md:text-sm">
          {project.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t} variant="outline" className="text-[10px]">
            {t}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
