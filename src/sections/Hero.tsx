
const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 md:py-40">

      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-lime-400"></span>
        <p className="text-sm text-zinc-400 tracking-wide">
          SOFTWARE ENGINEER · PRODUCT MINDED
        </p>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl">
        Building digital experiences through
        <span className="text-lime-400"> technology</span>,
        <span className="text-zinc-500"> design</span> and
        <span className="text-zinc-500"> collaboration.</span>
      </h1>

      <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mt-8">
        I'm Fabio, a software engineer with a background in
        frontend development, UX and project delivery.
        I enjoy turning complex ideas into useful,
        accessible and intuitive digital products.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#projects"
          className="bg-lime-400 text-black px-6 py-3 rounded-full font-medium hover:bg-lime-300 transition"
        >
          Explore my work ↗
        </a>

        <a
          href="#about"
          className="border border-zinc-700 text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition"
        >
          More about me
        </a>
      </div>

    </section>
  )
}

export default Hero
