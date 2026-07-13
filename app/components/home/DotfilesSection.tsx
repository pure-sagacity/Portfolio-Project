import { motion } from "framer-motion";
import { dotfilesData } from "./data";

export default function DotfilesSection() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Dotfiles
          </p>
          <h2 className="mt-4 text-3xl font-light text-zinc-100">
            Declarative environments for NixOS and macOS Darwin.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {dotfilesData.map((dotfile) => (
              <motion.a
                key={dotfile.title}
                href={dotfile.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="block rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 transition-colors hover:border-zinc-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-light text-zinc-100">
                      {dotfile.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {dotfile.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    Nix
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dotfile.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-900 bg-zinc-900/40 px-3 py-1 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Setup
            </p>
            <p className="mt-4 text-2xl font-light text-zinc-100">Nix-first</p>
            <p className="mt-3 text-sm text-zinc-500">
              Shared modules, consistent tooling, and predictable environments
              across hardware.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span>Keyboard</span>
                <span className="text-zinc-200">HE68 Lite</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span>Laptop</span>
                <span className="text-zinc-200">M1 MacBook Pro</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Terminal</span>
                <span className="text-zinc-200">Ghostty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
