import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";

const Contact = () => {
  const email = "fabio_madeira@outlook.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error("Could not copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-zinc-800 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <p className="text-lime-400 text-sm font-medium tracking-widest uppercase mb-6">
            Get in touch
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Introduction */}
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Have an idea?
              <span className="block text-zinc-500">Let's make it happen.</span>
            </h2>

            <p className="text-zinc-400 leading-relaxed mt-7 max-w-md">
              I'm always open to discussing new opportunities, interesting
              projects and ways to build meaningful digital experiences
              together.
            </p>
          </Reveal>

          {/* Contact card */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="border border-zinc-800 bg-zinc-900/50 rounded-2xl p-7 md:p-9"
            >
              <p className="text-zinc-500 text-sm mb-3">Have a conversation</p>

              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 text-lg md:text-xl font-semibold text-zinc-100 hover:text-lime-400 transition-colors duration-300"
              >
                {copied ? "Email copied!" : "Copy my email"}

                <span className="text-lime-400 transition-transform duration-300 group-hover:translate-y-[-2px]">
                  {copied ? "✓" : "↗"}
                </span>
              </button>

              <div className="border-t border-zinc-800 my-8" />

              <p className="text-zinc-500 text-sm mb-5">Find me online</p>

              <div className="flex flex-wrap gap-5">
                <a
                  href="https://github.com/fabiocmad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 hover:text-lime-400 transition-colors"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/fabio-madeira-81b437145/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 hover:text-lime-400 transition-colors"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://www.instagram.com/growinsight/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 hover:text-lime-400 transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 mt-28 pt-7 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-600">
          <p>Designed & built with care.</p>
          <p>© {new Date().getFullYear()} · All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
