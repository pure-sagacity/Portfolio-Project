import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiRust } from "@icons-pack/react-simple-icons";
import { skillsData } from "./data";

export default function SkillsSection() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(
    skillsData[0].title,
  );

  return (
    <motion.section
      className="relative z-10 box-border px-8 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              Expertise
            </p>
            <h2 className="mt-4 text-3xl font-light text-zinc-100">
              Focused craft across systems, frontend, and infra.
            </h2>
          </div>
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Favorite Language
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60">
                <SiRust className="h-5 w-5 text-zinc-200" />
              </div>
              <h3 className="text-2xl font-light text-zinc-100">Rust</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              I reach for Rust because it pairs memory safety with speed, keeps
              intent explicit, and reads clean once the patterns click. With the
              ecosystem of libraries, complex problems become straightforward.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {skillsData.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveSkillCategory(category.title)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                activeSkillCategory === category.title
                  ? "border-zinc-500/60 bg-zinc-900 text-zinc-100"
                  : "border-zinc-900/80 bg-zinc-950/60 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {skillsData
            .filter((category) => category.title === activeSkillCategory)
            .map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="border-t border-zinc-900/70"
              >
                <div className="grid gap-4 text-[11px] uppercase tracking-[0.3em] text-zinc-600 sm:grid-cols-[1fr_120px_1fr_1.4fr]">
                  <div className="py-4">Skill</div>
                  <div className="py-4">Experience</div>
                  <div className="py-4">Language</div>
                  <div className="py-4">Focus</div>
                </div>
                <div className="divide-y divide-zinc-900/70">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="grid items-center gap-4 py-4 sm:grid-cols-[1fr_120px_1fr_1.4fr]"
                      whileHover={{ x: 6 }}
                    >
                      <div className="flex items-center gap-3 text-zinc-200">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </div>
                      <div className="text-sm text-zinc-400">
                        {skill.experience}
                      </div>
                      <div className="text-sm text-zinc-500">
                        {skill.language}
                      </div>
                      <div className="text-sm text-zinc-500">{skill.focus}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
