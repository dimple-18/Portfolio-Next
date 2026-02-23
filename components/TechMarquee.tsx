"use client";

import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiGithub,
  SiPostman,
} from "react-icons/si";

type Tech = { name: string; Icon: IconType; tone: string };

const techStack: Tech[] = [
  { name: "Tailwind", Icon: SiTailwindcss, tone: "cyan" },
  { name: "Framer Motion", Icon: SiFramer, tone: "purple" },
  { name: "GitHub", Icon: SiGithub, tone: "slate" },
  { name: "REST APIs", Icon: SiPostman, tone: "amber" },
  { name: "MongoDB", Icon: SiMongodb, tone: "green" },
  { name: "React", Icon: SiReact, tone: "blue" },
  { name: "Next.js", Icon: SiNextdotjs, tone: "mono" },
  { name: "Node.js", Icon: SiNodedotjs, tone: "lime" },
  { name: "Express", Icon: SiExpress, tone: "zinc" },
  { name: "Firebase", Icon: SiFirebase, tone: "orange" },
];

export default function TechMarquee({
  reverse = false,
  duration = 18,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  const items = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`tech-marquee-track ${reverse ? "is-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((t, idx) => (
          <div key={`${t.name}-${idx}`} className={`tech-pill tone-${t.tone}`}>
            <t.Icon className="tech-ico" />
            <span className="tech-name">{t.name}</span>
            <span className="tech-shine" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}