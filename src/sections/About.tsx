
import Reveal from '../components/Reveal'

const About = () => {
  return (
    <section id="about" className="border-t border-zinc-800 relative">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <Reveal>
          <p className="text-lime-400 text-sm font-medium tracking-widest uppercase mb-4">
            About me
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Technology is more than writing code.
              <span className="text-zinc-500">
                {" "}It's about solving problems.
              </span>
            </h2>
          </Reveal>

          <div className="space-y-5 text-zinc-400 leading-relaxed">

            <Reveal delay={0.2}>
              <p>
                My professional journey combines software engineering,
                technology operations and project delivery.
                Over the years, I've developed an appreciation for
                both the technical and human sides of building digital products.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p>
                Most recently, I worked as a Software Engineer at OpenJaw
                Technologies, contributing to frontend development using
                React, JavaScript and Redux, with a focus on usability,
                accessibility and maintainable code.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p>
                My previous experience in quality assurance, operations
                and cross-functional collaboration has shaped how I
                approach problems: understanding the bigger picture,
                communicating clearly and delivering practical solutions.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p>
                I'm continuously learning and exploring new technologies,
                particularly full-stack development and AI-powered products.
              </p>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
