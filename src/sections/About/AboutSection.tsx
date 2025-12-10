import React from "react";
import { ProfileCodeCard, type ProfileStage } from "./ProfileCodeCard";
import { Badge } from "../../components/ui/Badge";
import DecryptedText from "../../components/DecryptedText";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { ScrambleHeading } from '../../common/ScrambleHeading';

const AboutSection: React.FC = () => {
  const stage: ProfileStage = "intro";
  const sectionRef = useSectionReveal({ y: 50, duration: 0.9 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 pt-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16"
    >
      <div className="space-y-6">
        <Badge variant="outline">Intro</Badge>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
          <ScrambleHeading text="Crafting interfaces that feel alive."  />
        </h2>
        <p className="mt-6 max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-300">
          I&apos;m <span className="text-cyber-cyan">Vasu Goli</span>, a
          full-stack engineer who loves combining{" "}
          <span className="text-cyber-indigo">motion</span>,{" "}
          <span className="text-cyber-cyan">type safety</span>, and{" "}
          <span className="text-cyber-indigo">clean systems</span> to build
          immersive, reliable interfaces.
        </p>
        <p className="mt-3 max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-400">
          My work usually lives at the intersection of{" "}
          <span className="text-slate-100">
            React, TypeScript, Tailwind CSS, and Vite
          </span>
          . I enjoy building scroll experiences, micro-interactions, and tools
          that make complex systems feel simple and intuitive.
        </p>
      </div>
      <div className="md:sticky md:top-28">
        <ProfileCodeCard stage={stage} />
      </div>
    </section>
  );
};

export default AboutSection;
