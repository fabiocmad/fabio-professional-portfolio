
import { motion, useReducedMotion } from 'motion/react'

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[140px] -top-40 -right-40 animate-pulse" />
        <div className="absolute w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] bottom-0 left-0" />
      </div>

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(#a3e635 1px, transparent 1px),
            linear-gradient(90deg, #a3e635 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28 md:py-40">

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635]" />

          <p className="text-sm text-zinc-400 tracking-wide">
            SOFTWARE ENGINEER · PRODUCT MINDED
          </p>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl"
        >
          Building digital experiences through
          <span className="text-lime-400"> technology</span>,
          <span className="text-zinc-500"> design</span> and
          <span className="text-zinc-500"> collaboration.</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg text-zinc-400 leading-relaxed max-w-2xl mt-8"
        >
          I'm Fabio, a software engineer with a background in
          frontend development, UX and project delivery.
          I enjoy turning complex ideas into useful,
          accessible and intuitive digital products.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#projects"
            className="bg-lime-400 text-black px-6 py-3 rounded-full font-medium shadow-[0_0_25px_rgba(163,230,53,0.15)] hover:bg-lime-300 hover:shadow-[0_0_35px_rgba(163,230,53,0.35)] hover:-translate-y-1 transition-all duration-300"
          >
            Explore my work ↗
          </a>

          <a
            href="#about"
            className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:border-lime-400/50 hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300"
          >
            More about me
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
