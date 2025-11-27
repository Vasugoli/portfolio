import React from "react";
import { Badge } from "../../components/ui/Badge";
import { ProfileCodeCard, type ProfileStage } from "../About/ProfileCodeCard";
import SkillCard from "./SkillCard";

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
		category: "Animation",
		items: ["GSAP", "Framer Motion", "CSS Animations", "ScrollTrigger"],
		icon: "✨",
	},
	{
		category: "Backend",
		items: ["Node.js", "Flask", "REST APIs", "MongoDB", "Express"],
		icon: "🔧",
	},
	{
		category: "Tools & Others",
		items: ["Git", "Vite", "Webpack", "npm", "Figma", "VS Code"],
		icon: "🛠️",
	},
];

const SkillsSection: React.FC = () => {
	const stage: ProfileStage = "skills";

	return (
		<section
			id='skills'
			className='relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16'>
			<div className='space-y-6'>
				<Badge variant='outline'>Skills</Badge>
				<h2 className='text-2xl font-semibold text-slate-50 md:text-3xl'>
					Tools of the trade.
				</h2>
				<p className='text-sm text-slate-300 md:text-base'>
					A curated set of technologies I use to bring ideas to life,
					from interactive UIs to smooth animations and robust backend
					systems.
				</p>
				<div className='grid gap-4 sm:grid-cols-2'>
					{skills.map((skill) => (
						<SkillCard key={skill.category} skill={skill} />
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
