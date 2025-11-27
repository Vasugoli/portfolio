import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSvgPortrait from "./sections/Hero/HeroSvgPortrait";
import LifeLine from "./components/LifeLine";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import ContactSection from "./sections/Contact/ContactSection";

const App: React.FC = () => {
	const navLogoRef = useRef<HTMLSpanElement | null>(null);
	const navLinksRef = useRef<HTMLDivElement | null>(null);
	const navShellRef = useRef<HTMLElement | null>(null);

	return (
		<div className='min-h-screen bg-radial-space text-slate-50'>
			<Navbar
				logoRef={navLogoRef}
				linksRef={navLinksRef}
				shellRef={navShellRef}
			/>
			<main className='relative'>
				<LifeLine />
				<HeroSvgPortrait
					navLogoRef={navLogoRef}
					navLinksRef={navLinksRef}
					navShellRef={navShellRef}
				/>
				<div className='relative mx-auto max-w-6xl px-4 md:px-6'>
					<AboutSection />
					<SkillsSection />
					<ProjectsSection />
					<ContactSection />
				</div>
			</main>
		</div>
	);
};

export default App;
