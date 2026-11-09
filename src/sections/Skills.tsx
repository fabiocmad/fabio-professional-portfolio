import { motion } from "motion/react";
import Reveal from "../components/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Professional experience building responsive, accessible and maintainable interfaces.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "HTML",
      "CSS / SCSS",
    ],
  },
  {
    number: "02",
    title: "Backend & Tools",
    description:
      "Developing full-stack capabilities through hands-on projects and continuous learning.",
    skills: ["Node.js", "REST APIs", "SQL", "Git", "Docker", "Vite"],
  },
  {
    number: "03",
    title: "UX & Accessibility",
    description:
      "Bringing user-centred thinking into technical implementation and digital experiences.",
    skills: ["Figma", "WCAG", "Responsive Design", "Usability", "NVDA"],
  },
  {
    number: "04",
    title: "Product & Delivery",
    description:
      "Professional experience collaborating across teams to deliver meaningful outcomes.",
    skills: ["Scrum", "Agile", "Jira", "Code Reviews", "Team Collaboration"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-t border-zinc-800"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-lime-400/[0.06] blur-[130px] -top-40 -right-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-emerald-400/[0.05] blur-[120px] bottom-0 -left-40" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
        linear-gradient(#a3e635 1px, transparent 1px),
        linear-gradient(90deg, #a3e635 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <p className="text-lime-400 text-sm font-medium tracking-widest uppercase mb-4">
            What I bring
          </p>

          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">
            Skills and expertise
            <span className="text-zinc-500"> across disciplines.</span>
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
            A combination of engineering knowledge, user-centred thinking and
            collaborative delivery experience.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(163, 230, 53, 0.5)" }}
                transition={{ duration: 0.25 }}
                className="h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lime-400 text-sm font-mono">
                    / {group.number}
                  </span>

                  <span className="text-zinc-600 group-hover:text-lime-400 transition">
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {group.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-7">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-zinc-300 bg-zinc-800 border border-zinc-700/70 px-3 py-2 rounded-full group-hover:border-lime-400/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
