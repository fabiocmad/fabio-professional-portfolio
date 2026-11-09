import { motion } from "motion/react";
import Reveal from "../components/Reveal";

const projects = [
  {
    number: "01",
    name: "MoneyMap",
    category: "PERSONAL FINANCE APPLICATION",
    description:
      "A personal finance dashboard designed to make tracking income, expenses and monthly balances simple and intuitive.",
    technologies: ["React", "TypeScript", "CSS"],
    status: "In development",
    type: "finance",
    link: "",
  },
  {
    number: "02",
    name: "Professional Portfolio",
    category: "PERSONAL PORTFOLIO",
    description:
      "A personal portfolio showcasing my experience in software engineering, UX and product-focused development.",
    technologies: ["React", "TypeScript", "Tailwind", "Motion"],
    status: "In development",
    type: "portfolio",
    link: "https://github.com/fabiocmad/fabio-professional-portfolio",
  },
  {
    number: "03",
    name: "PixelCraft",
    category: "WEB DESIGN CONCEPT",
    description:
      "A web design concept exploring how independent businesses can build a stronger online presence through modern, responsive and accessible websites.",
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Planned",
    type: "pixelcraft",
    link: "",
  },
];

const ProjectPreview = ({ type }: { type: string }) => {
  if (type === "finance") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-emerald-900/40 bg-[#071713] p-4 h-64 flex flex-col justify-between">
        {/* Background glow */}
        <div className="absolute -top-20 -right-10 w-48 h-48 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-400 flex items-center justify-center">
              <span className="text-[#071713] font-black text-sm">M</span>
            </div>
            <span className="text-white font-semibold tracking-tight">
              MoneyMap
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400">ALL ACCOUNTS</span>
          </div>
        </div>

        {/* Main dashboard */}
        <div className="relative grid grid-cols-[1.1fr_0.9fr] gap-4 mt-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-emerald-200/50">
              Total balance
            </p>

            <p className="text-3xl font-bold tracking-tight text-white mt-1">
              €4,512<span className="text-emerald-400">.00</span>
            </p>

            <div className="flex items-center gap-1 mt-2">
              <span className="text-emerald-400 text-xs">↗</span>
              <span className="text-[10px] text-emerald-400">
                Financial overview
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="rounded-lg bg-emerald-400/10 border border-emerald-400/10 p-2">
                <p className="text-[9px] text-emerald-200/50">Income</p>
                <p className="text-sm font-semibold text-emerald-400 mt-1">
                  €4,800
                </p>
              </div>

              <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2">
                <p className="text-[9px] text-zinc-500">Expenses</p>
                <p className="text-sm font-semibold text-white mt-1">€288</p>
              </div>
            </div>
          </div>

          {/* Spending chart */}
          <div className="rounded-xl bg-white/[0.035] border border-white/[0.06] p-3 flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-zinc-400">Cash flow</p>
              <p className="text-xs text-white font-semibold mt-1">
                Monthly activity
              </p>
            </div>

            <div className="h-20 flex items-end justify-between gap-1.5 px-1">
              {[35, 55, 42, 75, 50, 90, 65, 100, 58, 78, 48, 85].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{
                      height: `${height}%`,
                      opacity: 1,
                    }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.07,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      backgroundColor: "#34d399",
                      scaleY: 1.15,
                    }}
                    style={{ originY: 1 }}
                    className="flex-1 rounded-t-sm bg-emerald-400/30 cursor-pointer"
                  />
                ),
              )}
            </div>

            <div className="flex justify-between text-[9px] text-zinc-600">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
            </div>
          </div>
        </div>

        {/* Recent transactions */}
        <div className="relative border-t border-white/[0.08] pt-3 mt-3">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400">
              Recent transactions
            </p>
            <span className="text-[9px] text-emerald-400">View all ↗</span>
          </div>

          {/* Salary */}
          <motion.div
            whileHover={{
              x: 6,
              backgroundColor: "rgba(52,211,153,0.10)",
              scale: 1.01,
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between rounded-lg px-2 py-1 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-400/10 flex items-center justify-center text-xs">
                💳
              </div>
              <div>
                <p className="text-[10px] text-white">Salary</p>
                <p className="text-[9px] text-zinc-500">Income</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-400">
              +€4,000
            </span>
          </motion.div>

          {/* Groceries */}
          <motion.div
            whileHover={{
              x: 6,
              backgroundColor: "rgba(52,211,153,0.10)",
              scale: 1.01,
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between rounded-lg px-2 py-1 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-xs">
                🛒
              </div>
              <div>
                <p className="text-[10px] text-white">Groceries</p>
                <p className="text-[9px] text-zinc-500">Shopping</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-white">-€150</span>
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5 h-64 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute w-40 h-40 bg-lime-400/20 blur-3xl rounded-full -top-10 right-0" />
        <div className="relative">
          <p className="text-xs text-lime-400">SOFTWARE ENGINEER</p>
          <p className="text-2xl font-bold text-white mt-4">
            Building digital
            <br />
            experiences.
          </p>
        </div>
        <div className="relative flex gap-2">
          <span className="bg-lime-400 text-black text-xs px-3 py-2 rounded-full">
            Explore work ↗
          </span>
          <span className="border border-zinc-700 text-zinc-400 text-xs px-3 py-2 rounded-full">
            About me
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-[#f5f3ed] p-5 h-64 flex flex-col justify-between">
      {/* Agency navigation */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-black tracking-tight text-stone-900">
          pixelcraft<span className="text-orange-500">.</span>
        </span>
        <span className="text-[9px] tracking-widest text-stone-500">
          DIGITAL STUDIO
        </span>
      </div>

      {/* Website concept */}
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 items-center">
        <div>
          <p className="text-[9px] font-semibold tracking-widest text-orange-600 mb-2">
            WE BUILD YOUR ONLINE PRESENCE
          </p>

          <h3 className="text-2xl font-black leading-tight tracking-tight text-stone-900">
            Your business.
            <br />
            <span className="text-orange-500">Better online.</span>
          </h3>

          <p className="text-[10px] leading-relaxed text-stone-500 mt-2 max-w-[180px]">
            Modern websites designed to help local businesses grow.
          </p>

          <div className="inline-flex items-center gap-2 mt-3 bg-stone-900 text-white rounded-full px-3 py-2 text-[9px]">
            Explore our work <span className="text-orange-400">↗</span>
          </div>
        </div>

        {/* Website visual */}
        <div className="relative h-36 rounded-lg bg-white shadow-lg border border-stone-200 p-2 rotate-2">
          <div className="flex items-center gap-1 border-b border-stone-100 pb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="ml-2 h-1.5 w-12 bg-stone-100 rounded-full" />
          </div>

          <div className="mt-3 rounded-md bg-[#25221f] h-20 p-2 flex flex-col justify-end">
            <span className="text-[7px] tracking-widest text-orange-300">
              LOCAL BUSINESS
            </span>
            <p className="text-white font-bold text-xs mt-1">Make it yours.</p>
            <div className="w-10 h-1 bg-orange-400 rounded-full mt-2" />
          </div>

          <div className="flex gap-1.5 mt-2">
            <div className="h-3 flex-1 rounded-sm bg-stone-100" />
            <div className="h-3 flex-1 rounded-sm bg-orange-100" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="border-t border-stone-200 pt-3 flex items-center justify-between">
        <div>
          <p className="text-[8px] tracking-widest text-stone-400">
            WHAT WE DO
          </p>
          <p className="text-[10px] font-semibold text-stone-700 mt-1">
            Design · Development · Responsive
          </p>
        </div>

        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm">
          ↗
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-t border-zinc-800"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-[550px] h-[550px] rounded-full bg-emerald-400/[0.07] blur-[140px] top-20 -left-60" />

        <div className="absolute w-[450px] h-[450px] rounded-full bg-lime-400/[0.05] blur-[130px] bottom-0 -right-40" />

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

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950/40" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <p className="text-lime-400 text-sm font-medium tracking-widest uppercase mb-4">
            Selected work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Things I've been
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block ml-2 text-zinc-500"
            >
              building.
            </motion.span>
          </h2>

          <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
            A selection of personal projects and experiments exploring software
            engineering, design and technology.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.12}>
              <motion.article
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  borderColor: "rgba(163, 230, 53, 0.45)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="h-full bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 md:p-7 transition-colors duration-300"
              >
                <ProjectPreview type={project.type} />

                <div className="flex items-center justify-between mt-7 mb-5">
                  <span className="text-xs text-lime-400 font-mono tracking-wider">
                    / {project.number}
                  </span>

                  <span className="flex items-center gap-2 text-xs text-zinc-500">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "In development"
                          ? "bg-emerald-400"
                          : "bg-amber-400"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                <p className="text-[10px] font-semibold tracking-[0.18em] text-zinc-500 uppercase mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-zinc-400 leading-7 mt-3 max-w-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-zinc-800 px-3 py-1.5 rounded-full hover:border-lime-400/40 hover:text-lime-300 transition-colors duration-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm text-lime-400 hover:text-lime-300 transition"
                    >
                      View repository
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-600">
                      {project.type === "finance"
                        ? "Demo coming soon"
                        : "Concept in progress"}
                    </span>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
