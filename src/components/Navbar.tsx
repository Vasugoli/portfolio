import React from "react";

export interface NavbarProps {
	logoRef: React.RefObject<HTMLSpanElement>;
	linksRef: React.RefObject<HTMLDivElement>;
	shellRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({ logoRef, linksRef, shellRef }) => (
	<header
		ref={shellRef}
		className='pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center'>
		<nav className='pointer-events-auto mt-4 flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2 shadow-[0_0_40px_rgba(15,23,42,0.95)] backdrop-blur-xl md:px-6'>
			<span
				ref={logoRef}
				className='text-sm font-semibold tracking-[0.35em] text-cyber-cyan md:text-base'>
				VASU GOLI
			</span>
			<div
				ref={linksRef}
				className='hidden items-center gap-6 text-[11px] font-mono text-slate-300 md:flex'>
				<a href='#about' className='transition hover:text-cyber-cyan'>
					ABOUT
				</a>
				<a
					href='#skills'
					className='transition hover:text-cyber-indigo'>
					SKILLS
				</a>
				<a
					href='#projects'
					className='transition hover:text-cyber-indigo'>
					PROJECTS
				</a>
				<a href='#contact' className='transition hover:text-slate-50'>
					CONTACT
				</a>
			</div>
		</nav>
	</header>
);

export default Navbar;
