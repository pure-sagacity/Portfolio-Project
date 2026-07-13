import { motion } from "framer-motion";
import { links } from "./data";

export default function HeroSection() {
  return (
    <section className="relative z-10 box-border flex min-h-screen items-center px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-4xl font-sans italic">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Software engineer · Systems builder
          </div>
          <h1 className="text-6xl font-extralight tracking-tight text-zinc-100 sm:text-8xl">
            Maaz Khokhar
          </h1>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-emerald-300/80 to-transparent" />
          <p className="mt-6 text-2xl font-light leading-relaxed text-zinc-400 sm:text-3xl">
            I design and build resilient software, from low-level systems to
            refined product experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-emerald-300/60 hover:text-zinc-100"
              >
                {link.icon}
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
