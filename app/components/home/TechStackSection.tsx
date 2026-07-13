import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { techStacks } from "./data";

export default function TechStackSection() {
  const [activeTechStack, setActiveTechStack] = useState(techStacks[0].title);

  return (
    <motion.section
      className="relative z-10 box-border px-8 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Stack focus
          </p>
          <div className="flex flex-wrap gap-2">
            {techStacks.map((stack) => (
              <motion.button
                key={stack.title}
                onClick={() => setActiveTechStack(stack.title)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                  activeTechStack === stack.title
                    ? "border-zinc-500/60 bg-zinc-900 text-zinc-100"
                    : "border-zinc-900/80 bg-zinc-950/60 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                }`}
                whileHover={{ y: -2 }}
              >
                {stack.title}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {techStacks
            .filter((stack) => stack.title === activeTechStack)
            .map((stack) => (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="grid gap-8 lg:grid-cols-[1fr_1.4fr]"
              >
                <div>
                  <h3 className="text-3xl font-light text-zinc-100">
                    {stack.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                    {stack.description}
                  </p>
                  {stack.runtime ? (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                      Runtime: {stack.runtime}
                    </div>
                  ) : null}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stack.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-950/40 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon ? (
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/70">
                            {item.icon}
                          </span>
                        ) : null}
                        <span className="text-sm text-zinc-200">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                        Core
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
