import { motion, useReducedMotion } from "motion/react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-glow absolute w-[600px] h-[600px] rounded-full -top-40 right-0" />

        <div className="absolute w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[120px] bottom-0 left-0" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/60" />
      </div>

      {/* Technical grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(#a3e635 1px, transparent 1px),
            linear-gradient(90deg, #a3e635 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-40">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635]" />

          <p className="text-sm text-zinc-400 tracking-[0.2em]">
            TECHNOLOGY · BUSINESS · PRODUCT DELIVERY
          </p>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-5xl"
        >
          Connecting
          <span className="text-lime-400"> technology</span>,
          <span className="text-zinc-500"> business</span> and
          <span className="text-zinc-500"> better experiences.</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg text-zinc-400 leading-relaxed max-w-2xl mt-8"
        >
          I'm Fabio, a technology professional with experience in frontend
          engineering, financial analysis, business operations and project
          delivery. I enjoy connecting technical knowledge with business
          understanding to solve problems, improve processes and build
          meaningful digital experiences.
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
  );
};

export default Hero;
