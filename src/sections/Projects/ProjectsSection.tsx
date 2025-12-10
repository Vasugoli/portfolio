import React from "react";
import ProjectCard, { type Project } from "./ProjectCard";
import { Badge } from "../../components/ui/Badge";
import { ProfileCodeCard, type ProfileStage } from "../About/ProfileCodeCard";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { ScrambleHeading } from "../../common/ScrambleHeading";

const projects: Project[] = [
	{
		name: "StudyHub",
		description:
			"Collaborative learning platform that empowers students to manage tasks, share notes, and join study groups, with an integrated leaderboard system.",
		tech: ["React", "TypeScript", "Flask", "MongoDB", "Tailwind"],
		repo: "https://github.com/Vasugoli/studyHub",
	},
	{
		name: "CampusFinds",
		description:
			"Platform for students to post, track, and recover lost items on campus with a clean UI and simple flows.",
		tech: ["React", "TypeScript", "Flask", "MongoDB", "Tailwind"],
		repo: "https://github.com/Vasugoli/campusFinds",
	},
	{
		name: "ClassTrack",
		description:
			"Full-stack web application that automates attendance tracking with geolocation verification and Code Verification.",
		tech: ["React", "TypeScript", "Tailwind", "REST APIs", "MongoDB"],
		repo: "https://github.com/Vasugoli/classTrack",
	},
];

const ProjectsSection: React.FC = () => {
	const stage: ProfileStage = "projects";
	const sectionRef = useSectionReveal({ y: 50, duration: 0.9 });

	return (
		<section
			id='projects'
			ref={sectionRef}
			className='relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16'>
			<div className='space-y-6'>
				<Badge variant='outline'>Projects</Badge>

				<ScrambleHeading
					as='h2'
					text='Selected work.'
					className='text-2xl font-semibold text-slate-50 md:text-3xl'
				/>

				<p className='mt-3 max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-300'>
					A few projects that show how I approach problems, design
					systems, and build interfaces with motion, clarity, and type
					safety.
				</p>

				<div className='grid gap-4 md:grid-cols-2'>
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
			</div>

			<div className='md:sticky md:top-28'>
				<ProfileCodeCard stage={stage} />
			</div>
		</section>
	);
};

export default ProjectsSection;
