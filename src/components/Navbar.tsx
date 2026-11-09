import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 relative w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div
        className="absolute top-0 left-0 h-[2px] w-full origin-left bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.5)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold tracking-tight text-white"
        >
          FM<span className="text-lime-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm transition-colors duration-300 group ${
                activeSection === link.href.slice(1)
                  ? "text-lime-400"
                  : "text-zinc-400 hover:text-lime-400"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-lime-400 transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="mailto:fabio_madeira@outlook.com"
          className="hidden md:inline-flex items-center gap-2 border border-zinc-700 px-5 py-2.5 rounded-full text-sm text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300"
        >
          Let's talk <span>↗</span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 text-zinc-300 hover:text-lime-400 transition-colors"
        >
          <span
            className={`w-5 h-px bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-5 h-px bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-px bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-zinc-800/80" : "max-h-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-400 hover:text-lime-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:fabio_madeira@outlook.com"
            className="inline-flex items-center gap-2 text-sm text-lime-400"
          >
            Let's talk ↗
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
