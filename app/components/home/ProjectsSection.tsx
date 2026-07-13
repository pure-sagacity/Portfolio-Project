import { motion } from "framer-motion";
import { projects } from "./data";

export default function ProjectsSection() {
  return (
    <motion.section
      className="relative z-10 box-border px-8 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
            Selected projects
          </div>
          <h2 className="mt-4 text-3xl font-light text-zinc-100">
            Systems, tools, and experiments built with care.
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6"
        >
          {projects.slice(0, 1).map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="group grid gap-6 rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6 transition-colors hover:border-zinc-700 md:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    Featured
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-light text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-900 bg-zinc-900/30 px-3 py-1 text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-600">
                  <span>{project.year}</span>
                  <span>{project.status}</span>
                </div>
                <p className="mt-4 text-sm text-zinc-500">
                  {project.highlight}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-zinc-400">
                  <span className="h-2 w-2 rounded-full bg-zinc-500" />
                  View project
                </div>
              </div>
            </motion.a>
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 transition-colors hover:border-zinc-700"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-600">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-4 text-2xl font-light text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-900 bg-zinc-900/30 px-3 py-1 text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-zinc-600">
                  {project.highlight}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
