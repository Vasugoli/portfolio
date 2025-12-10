import React, { useLayoutEffect, useRef } from "react";
import { Card } from "../../components/ui/Card";
import type { Skill } from "./SkillsSection";
import { gsap, ScrollTrigger } from "../../utils/gsapSetup";

export interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Card
      ref={cardRef as any}
      className="group transition-all duration-300 hover:border-cyber-cyan/50"
    >
      <div className="mb-3 flex items-center gap-2">
        {skill.icon && <span className="text-xl">{skill.icon}</span>}
        <h3 className="text-base font-semibold text-slate-50">
          {skill.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-md bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300 transition-colors group-hover:bg-slate-800/80 group-hover:text-cyber-cyan"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
