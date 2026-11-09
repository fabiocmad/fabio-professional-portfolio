import Reveal from "../components/Reveal";

const strengths = [
  {
    number: "01",
    title: "Technology & engineering",
    description:
      "Building digital solutions with frontend engineering, technical problem-solving, accessibility and a focus on quality.",
  },
  {
    number: "02",
    title: "Business & operations",
    description:
      "Understanding financial performance, business processes, operational challenges and opportunities for improvement.",
  },
  {
    number: "03",
    title: "Product & delivery",
    description:
      "Connecting people, technology and business goals to turn ideas into practical solutions and meaningful outcomes.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-zinc-800"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-emerald-400/[0.07] rounded-full blur-[150px] -top-48 -left-64" />

        <div className="absolute w-[400px] h-[400px] bg-lime-400/[0.04] rounded-full blur-[140px] top-1/2 -right-48" />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/[0.10] via-transparent to-transparent" />
      </div>

      {/* Subtle technical texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
      linear-gradient(#a3e635 1px, transparent 1px),
      linear-gradient(90deg, #a3e635 1px, transparent 1px)
    `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 30% 40%, black 0%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-28">
        <Reveal>
          <p className="text-lime-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            About me
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              More than technology.
              <span className="block text-zinc-500 mt-2">
                A broader perspective on solving problems.
              </span>
            </h2>
          </Reveal>

          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <Reveal delay={0.2}>
              <p>
                I'm Fabio, a technology professional with experience across
                frontend engineering, financial analysis and business
                operations. I enjoy understanding how things work, identifying
                opportunities for improvement and turning complex challenges
                into practical solutions.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p>
                Most recently, I worked at OpenJaw Technologies, developing
                frontend experiences with React, JavaScript and Redux. My work
                involved building interfaces, improving usability and
                accessibility, and collaborating with cross-functional teams.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p>
                Before moving into technology, I developed experience in
                financial analysis and business management. These roles gave me
                a strong understanding of business operations, financial
                processes, team leadership and decision-making.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p>
                Today, I bring these experiences together with a product-minded
                approach: understanding the bigger picture, connecting business
                needs with technical possibilities and helping deliver solutions
                that create value.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Professional strengths */}
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          {strengths.map((strength, index) => (
            <Reveal key={strength.number} delay={0.2 + index * 0.1}>
              <div className="h-full relative overflow-hidden border border-zinc-800/80 bg-zinc-900/30 rounded-xl p-7 group hover:border-lime-400/40 hover:bg-zinc-900/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-0 h-px bg-lime-400 group-hover:w-full transition-all duration-500" />

                <span className="text-xs text-lime-400 tracking-widest">
                  {strength.number}
                </span>

                <h3 className="text-lg font-semibold text-zinc-100 mt-5 mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  {strength.title}
                </h3>

                <p className="text-sm text-zinc-500 leading-relaxed">
                  {strength.description}
                </p>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-lime-400/[0.03] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
