import React from "react";
import { Card } from "../../components/ui/Card";
import DecryptedText from "../../components/DecryptedText";

export type ProfileStage = "intro" | "skills" | "projects" | "contact";

export interface ProfileCodeCardProps {
	stage: ProfileStage;
}

export const ProfileCodeCard: React.FC<ProfileCodeCardProps> = ({ stage }) => {
	const showSkills =
		stage === "skills" || stage === "projects" || stage === "contact";
	const showProjects = stage === "projects" || stage === "contact";
	const showContact = stage === "contact";

	return (
		<Card className='font-mono text-xs leading-relaxed text-slate-300'>
			<div className='mb-3 text-[10px] uppercase tracking-[0.28em] text-cyber-cyan'>
				profile.ts
			</div>
			<pre className='overflow-x-auto text-[11px] leading-[1.6]'>
				<code>
					<span className='text-cyan-400'>const</span>{" "}
					<span className='text-sky-300'>vasu</span>{" "}
					<span className='text-slate-400'>= {"{"}</span>
					{"\n"}
					{"  "}
					<span className='text-emerald-300'>name</span>
					<span className='text-slate-400'>: </span>
					<span className='text-amber-200'>"Vasu Goli"</span>
					<span className='text-slate-400'>,</span>
					{"\n"}
					{"  "}
					<span className='text-emerald-300'>role</span>
					<span className='text-slate-400'>: </span>
					<span className='text-amber-200'>
						"Frontend Engineer · Motion &amp; TypeScript"
					</span>
					<span className='text-slate-400'>,</span>
					{"\n"}
					{"  "}
					<span className='text-emerald-300'>location</span>
					<span className='text-slate-400'>: </span>
					<span className='text-amber-200'>"India"</span>
					<span className='text-slate-400'>,</span>
					{"\n"}
					{"  "}
					<span className='text-emerald-300'>stack</span>
					<span className='text-slate-400'>: </span>
					<span className='text-sky-300'>[</span>
					<span className='text-amber-200'>"React"</span>
					<span className='text-slate-400'>, </span>
					<span className='text-amber-200'>"TypeScript"</span>
					<span className='text-slate-400'>, </span>
					<span className='text-amber-200'>"Tailwind"</span>
					<span className='text-slate-400'>, </span>
					<span className='text-amber-200'>"GSAP"</span>
					<span className='text-sky-300'>]</span>
					<span className='text-slate-400'>,</span>
					{"\n"}
					{showSkills && (
						<>
							{"  "}
							<span className='text-emerald-300'>skills</span>
							<span className='text-slate-400'>: </span>
							<span className='text-sky-300'>[</span>
							<span className='text-amber-200'>"Frontend"</span>
							<span className='text-slate-400'>, </span>
							<span className='text-amber-200'>"Animation"</span>
							<span className='text-slate-400'>, </span>
							<span className='text-amber-200'>"Backend"</span>
							<span className='text-sky-300'>]</span>
							<span className='text-slate-400'>,</span>
							{"\n"}
						</>
					)}
					{showProjects && (
						<>
							{"  "}
							<span className='text-emerald-300'>projects</span>
							<span className='text-slate-400'>: </span>
							<span className='text-sky-300'>[</span>
							<span className='text-amber-200'>
								"AI Risk Suite"
							</span>
							<span className='text-slate-400'>, </span>
							<span className='text-amber-200'>
								"Campus Lost &amp; Found"
							</span>
							<span className='text-slate-400'>, </span>
							<span className='text-amber-200'>
								"Food Bridge"
							</span>
							<span className='text-sky-300'>]</span>
							<span className='text-slate-400'>,</span>
							{"\n"}
						</>
					)}
					{showContact && (
						<>
							{"  "}
							<span className='text-emerald-300'>contact</span>
							<span className='text-slate-400'>: {"{"}</span>
							{"\n"}
							{"    "}
							<span className='text-emerald-300'>email</span>
							<span className='text-slate-400'>: </span>
							<span className='text-amber-200'>
								"you@example.com"
							</span>
							<span className='text-slate-400'>,</span>
							{"\n"}
							{"    "}
							<span className='text-emerald-300'>github</span>
							<span className='text-slate-400'>: </span>
							<span className='text-amber-200'>
								"https://github.com/Vasugoli"
							</span>
							<span className='text-slate-400'>,</span>
							{"\n"}
							{"    "}
							<span className='text-emerald-300'>linkedin</span>
							<span className='text-slate-400'>: </span>
							<span className='text-amber-200'>
								"https://linkedin.com"
							</span>
							{"\n"}
							{"  "}
							<span className='text-slate-400'>{"}"}</span>
							<span className='text-slate-400'>,</span>
							{"\n"}
						</>
					)}
					<span className='text-slate-400'>{"}"}</span>
					{"\n"}
					<DecryptedText
						text='export default vasu'
						className='text-cyber-cyan'
					/>
				</code>
			</pre>
		</Card>
	);
};
