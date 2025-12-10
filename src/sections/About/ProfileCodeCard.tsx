import React, { useLayoutEffect, useRef } from "react";
import { Card } from "../../components/ui/Card";
import DecryptedText from "../../components/DecryptedText";
import { gsap } from "../../utils/gsapSetup";

export type ProfileStage = "intro" | "skills" | "projects" | "contact";

export interface ProfileCodeCardProps {
  stage: ProfileStage;
}

const stageLabel: Record<ProfileStage, string> = {
  intro: "intro.ts",
  skills: "skills.ts",
  projects: "projects.ts",
  contact: "contact.ts",
};

export const ProfileCodeCard: React.FC<ProfileCodeCardProps> = ({ stage }) => {
  const showSkills =
    stage === "skills" || stage === "projects" || stage === "contact";
  const showProjects = stage === "projects" || stage === "contact";
  const showContact = stage === "contact";

  const cardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 14, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stage]);

  return (
    <Card
      ref={cardRef as any}
      className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 p-0 shadow-[0_22px_70px_rgba(15,23,42,0.9)]"
    >
      {/* Top editor bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] font-medium text-slate-200">
          {stageLabel[stage]}
        </span>
        <span className="text-[10px] text-slate-500">profile.ts</span>
      </div>

      {/* Code area */}
      <div className="px-4 py-3 font-mono text-[11px] leading-relaxed text-slate-200">
        <pre className="overflow-x-auto">
          <code>
            <span className="text-pink-400">import</span>{" "}
            <span className="text-sky-300">type</span>{" "}
            <span className="text-emerald-300">Developer</span>{" "}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-amber-200">'./types'</span>
            {"\n"}
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-sky-300">vasu</span>{" "}
            <span className="text-slate-500">: Developer = {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-300">name</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-200">'Vasu Goli'</span>
            <span className="text-slate-500">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-300">role</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-200">
              'Frontend Engineer · Motion &amp; TypeScript'
            </span>
            <span className="text-slate-500">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-300">location</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-200">'India'</span>
            <span className="text-slate-500">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-300">stack</span>
            <span className="text-slate-500">: </span>
            <span className="text-sky-300">[</span>
            <span className="text-amber-200">'React'</span>
            <span className="text-slate-500">, </span>
            <span className="text-amber-200">'TypeScript'</span>
            <span className="text-slate-500">, </span>
            <span className="text-amber-200">'Tailwind'</span>
            <span className="text-slate-500">, </span>
            <span className="text-amber-200">'Vite'</span>
            <span className="text-sky-300">]</span>
            <span className="text-slate-500">,</span>
            {"\n"}
            {showSkills && (
              <>
                {"  "}
                <span className="text-emerald-300">skills</span>
                <span className="text-slate-500">: </span>
                <span className="text-sky-300">[</span>
                <span className="text-amber-200">'Frontend'</span>
                <span className="text-slate-500">, </span>
                <span className="text-amber-200">'Backend'</span>
                <span className="text-slate-500">, </span>
                <span className="text-amber-200">'Animation'</span>
                <span className="text-sky-300">]</span>
                <span className="text-slate-500">,</span>
                {"\n"}
              </>
            )}
            {showProjects && (
              <>
                {"  "}
                <span className="text-emerald-300">projects</span>
                <span className="text-slate-500">: </span>
                <span className="text-sky-300">[</span>
                <span className="text-amber-200">'StudyHub'</span>
                <span className="text-slate-500">, </span>
                <span className="text-amber-200">
                  'CampusFinds'
                </span>
                <span className="text-slate-500">, </span>
                <span className="text-amber-200">'ClassTrack'</span>
                <span className="text-sky-300">]</span>
                <span className="text-slate-500">,</span>
                {"\n"}
              </>
            )}
            {showContact && (
              <>
                {"  "}
                <span className="text-emerald-300">contact</span>
                <span className="text-slate-500">: {"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-emerald-300">email</span>
                <span className="text-slate-500">: </span>
                <span className="text-amber-200">'golivasu7@gmail.com'</span>
                <span className="text-slate-500">,</span>
                {"\n"}
                {"    "}
                <span className="text-emerald-300">github</span>
                <span className="text-slate-500">: </span>
                <span className="text-amber-200">
                  'https://github.com/Vasugoli'
                </span>
                <span className="text-slate-500">,</span>
                {"\n"}
                {"    "}
                <span className="text-emerald-300">linkedin</span>
                <span className="text-slate-500">: </span>
                <span className="text-amber-200">
                  'https://www.linkedin.com/in/goli-vasu-7769bb2b9/'
                </span>
                {"\n"}
                {"  "}
                <span className="text-slate-500">{"}"}</span>
                <span className="text-slate-500">,</span>
                {"\n"}
              </>
            )}
            <span className="text-slate-500">{"}"}</span>
            {"\n"}
            <DecryptedText
              text="export default vasu"
              className="text-pink-400"
            />
          </code>
        </pre>
      </div>
    </Card>
  );
};
