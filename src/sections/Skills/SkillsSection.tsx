import React from "react";
import { Badge } from "../../components/ui/Badge";
import { ProfileCodeCard, type ProfileStage } from "../About/ProfileCodeCard";
import SkillCard from "./SkillCard";

import { useSectionReveal } from "../../hooks/useSectionReveal";
import { ScrambleHeading } from "../../common/ScrambleHeading";

export interface Skill {
	category: string;
	items: string[];
	icon?: string;
}

const skills: Skill[] = [
	{
		category: "Frontend",
		items: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind CSS",
			"HTML5",
			"CSS3",
		],
		icon: "⚛️",
	},
	{
		category: "Backend",
		items: ["Node.js", "Flask", "REST APIs", "MongoDB", "Express"],
		icon: "🔧",
	},
	{
		category: "Animation",
		items: ["GSAP", "Framer Motion", "CSS Animations", "ScrollTrigger"],
		icon: "✨",
	},
	{
		category: "Tools & Others",
		items: ["Git", "Vite", "npm", "Figma", "VS Code","Neovim","Linux"],
		icon: "🛠️",
	},
];

const SkillsSection: React.FC = () => {
	const stage: ProfileStage = "skills";
	const sectionRef = useSectionReveal({ y: 60, duration: 0.9 });

	return (
		<section
			id='skills'
			ref={sectionRef}
			className='relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16'>
			<div className='space-y-6'>
				<Badge variant='outline'>Skills</Badge>

				<ScrambleHeading
					as='h2'
					text='Tools of the trade.'
					className='text-2xl font-semibold text-slate-50 md:text-3xl'
				/>

				<p className='mt-3 max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-300'>
					A curated set of technologies I use to bring ideas to life,
					from interactive UIs to smooth animations and robust backend
					systems.
				</p>

				<div className='grid gap-4 sm:grid-cols-2'>
					{skills.map((skill, index) => (
						<SkillCard
							key={skill.category}
							skill={skill}
							data-index={index}
						/>
					))}
				</div>
			</div>

			<div className='md:sticky md:top-28'>
				<ProfileCodeCard stage={stage} />
			</div>
		</section>
	);
};

export default SkillsSection;
