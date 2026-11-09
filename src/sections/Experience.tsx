import Reveal from "../components/Reveal";

const experiences = [
  {
    period: "2022 — 2026",
    role: "Software Engineer",
    company: "OpenJaw Technologies",
    description:
      "Developed and maintained frontend experiences for travel technology products using React, JavaScript and Redux. Collaborated with cross-functional teams to deliver responsive, accessible and user-focused solutions.",
    highlights: [
      "Built and improved reusable UI components",
      "Contributed to accessibility, testing and code quality",
      "Worked closely with product, UX and QA teams",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Regional Content Analyst",
    company: "TikTok · Accenture",
    description:
      "Supported regional content operations, combining analytical work, quality standards and project coordination in a fast-paced international environment.",
    highlights: [
      "Supported regional content quality and operational processes",
      "Collaborated with stakeholders across teams",
    ],
  },
  {
    period: "2019 — 2021",
    role: "QA Policy & Compliance Agent",
    company: "Facebook · Accenture",
    description:
      "Worked across Trust & Safety operations, reviewing quality and policy compliance across mobile and web platforms.",
    highlights: [
      "Supported quality assurance and process improvements",
      "Acted as a point of contact and supported team training",
    ],
  },

  {
    period: "2015 — 2018",
    role: "Store Manager | Team Coordinator",
    company: "Poulet Bonne Femme",
    description:
      "Managed daily business operations and team performance, combining people leadership, financial oversight and operational planning to support business objectives.",
    highlights: [
      "Led recruitment, training, scheduling and performance management",
      "Oversaw budgets, operational efficiency and service quality",
      "Managed customer satisfaction and day-to-day business operations",
    ],
  },
  {
    period: "2009 — 2014",
    role: "Financial Analyst → Senior Financial Analyst",
    company: "Chorus Call Brasil",
    description:
      "Progressed from Financial Analyst to Senior Financial Analyst, supporting financial reporting, forecasting and business operations through data analysis and financial systems.",
    highlights: [
      "Prepared financial reports, forecasts and Excel-based analysis",
      "Worked with AS/400 financial systems and transaction reporting",
      "Supported cash flow, revenue recognition and financial planning",
      "Contributed to workflow improvements and cross-functional processes",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden border-t border-zinc-800"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-[550px] h-[550px] bg-emerald-400/[0.06] rounded-full blur-[150px] -top-40 -right-60" />

        <div className="absolute w-[450px] h-[450px] bg-lime-400/[0.04] rounded-full blur-[140px] bottom-0 -left-52" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
        linear-gradient(#a3e635 1px, transparent 1px),
        linear-gradient(90deg, #a3e635 1px, transparent 1px)
      `,
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-lime-400 text-sm font-medium tracking-widest uppercase mb-4">
            Technology · Business · Operations
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience
            <span className="text-zinc-500"> & growth.</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-12">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.1}>
              <div className="grid md:grid-cols-[180px_1fr] gap-5 md:gap-12">
                <p className="text-sm text-lime-400 tracking-wide pt-1">
                  {experience.period}
                </p>

                <div className="border-l border-emerald-400/20 pl-7 pb-2 relative group">
                  <div className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-lime-400/50 via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.6)]" />

                  <h3 className="text-xl font-semibold text-zinc-100">
                    {experience.role}
                  </h3>

                  <p className="text-zinc-500 mt-1">{experience.company}</p>

                  <p className="text-zinc-400 leading-relaxed mt-5 max-w-2xl">
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-zinc-500"
                      >
                        <span className="text-lime-400">↗</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
