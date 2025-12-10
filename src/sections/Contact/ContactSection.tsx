import React, { useState } from "react";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { GithubIcon } from "../../icons/GithubIcon";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { XIcon} from "../../icons/X";
import { ProfileCodeCard, type ProfileStage } from "../About/ProfileCodeCard";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { ScrambleHeading } from "../../common/ScrambleHeading";

const ContactSection: React.FC = () => {
	const stage: ProfileStage = "contact";
	const sectionRef = useSectionReveal({ y: 60, duration: 0.9 });

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendMail = () => {
		const mailto = `mailto:vasugoli205@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
			name
		)}&body=${encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\n\n${message}`
		)}`;

		window.location.href = mailto;
	};

	return (
		<section
			id='contact'
			ref={sectionRef}
			className='relative z-10 mx-auto flex max-w-6xl flex-col gap-10 pb-32 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-20'>
			{/* LEFT SIDE */}
			<div className='space-y-7'>
				<Badge variant='outline'>Contact</Badge>

				<ScrambleHeading
					as='h2'
					text="Let's build something."
					className='text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl'
				/>

				<p className='max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]'>
					Want to collaborate, hire me, or discuss a project idea?
					Drop me a message — I usually reply within a few hours.
				</p>

				{/* CONTACT FORM */}
				<div className='mt-4 space-y-4 rounded-2xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.35)]'>
					<div className='space-y-1'>
						<label className='text-xs uppercase text-slate-400 tracking-wide'>
							Your Name
						</label>
						<input
							type='text'
							className='w-full rounded-lg bg-slate-800/60 px-3 py-2 text-sm text-slate-100 outline-none border border-slate-700 focus:border-cyber-cyan/50 transition'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='John Doe'
						/>
					</div>

					<div className='space-y-1'>
						<label className='text-xs uppercase text-slate-400 tracking-wide'>
							Email
						</label>
						<input
							type='email'
							className='w-full rounded-lg bg-slate-800/60 px-3 py-2 text-sm text-slate-100 outline-none border border-slate-700 focus:border-cyber-indigo/50 transition'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='you@example.com'
						/>
					</div>

					<div className='space-y-1'>
						<label className='text-xs uppercase text-slate-400 tracking-wide'>
							Message
						</label>
						<textarea
							className='h-28 w-full rounded-lg bg-slate-800/60 px-3 py-2 text-sm text-slate-100 outline-none border border-slate-700 focus:border-cyber-cyan/50 transition resize-none'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder='Tell me about your project...'></textarea>
					</div>

					<Button
						onClick={sendMail}
						className='mt-2 w-full rounded-lg bg-cyber-cyan/20 text-cyber-cyan hover:bg-cyber-cyan/30'>
						Send Message
					</Button>
				</div>

				{/* SOCIAL LINKS */}
				<div className='flex flex-wrap gap-3 pt-2'>
					<Button
						asChild
						className='border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-cyber-indigo/50 hover:bg-slate-900'>
						<a
							href='https://github.com/Vasugoli'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2'>
							<GithubIcon className='h-4 w-4' />
							<span>GitHub</span>
						</a>
					</Button>

					<Button
						asChild
						className='border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-cyber-cyan/50 hover:bg-slate-900'>
						<a
							href='https://www.linkedin.com/in/goli-vasu-7769bb2b9/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2'>
							<LinkedinIcon className='h-4 w-4' />
							<span>LinkedIn</span>
						</a>
					</Button>
          <Button
						asChild
						className='border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-cyber-cyan/50 hover:bg-slate-900'>
						<a
							href='https://x.com/vasu00658'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2'>
							<XIcon className='h-4 w-4' />
							<span>X-Twitter</span>
						</a>
					</Button>
				</div>
			</div>

			{/* RIGHT SIDE — PROFILE CARD */}
			<div className='md:sticky md:top-28'>
				<ProfileCodeCard stage={stage} />
			</div>
		</section>
	);
};

export default ContactSection;
