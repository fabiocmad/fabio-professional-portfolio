
const Navbar = () => {
  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <a href="#" className="text-xl font-bold tracking-tight text-white">
          FM<span className="text-lime-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#about" className="hover:text-lime-400 transition">About</a>
          <a href="#skills" className="hover:text-lime-400 transition">Skills</a>
          <a href="#projects" className="hover:text-lime-400 transition">Projects</a>
          <a href="#experience" className="hover:text-lime-400 transition">Experience</a>
        </div>

        <a
          href="mailto:fabio_madeira@outlook.com"
          className="border border-zinc-700 px-4 py-2 rounded-full text-sm text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition"
        >
          Let's talk ↗
        </a>

      </div>
    </nav>
  )
}

export default Navbar
