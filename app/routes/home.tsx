import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Route } from "./+types/home";
import {
  SiGithub,
  SiDiscord,
  SiRust,
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLinux,
  SiDocker,
  SiNixos,
  SiGnubash,
  SiSqlite,
} from "@icons-pack/react-simple-icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maaz Khokhar" },
    { name: "description", content: "Portfolio of Maaz Khokhar" },
  ];
}

type ProjectCategory = "Systems" | "Tools" | "Research" | "Apps";

interface Project {
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  href: string;
  gif?: string;
  status: string;
  year: string;
  highlight: string;
}

interface TechStack {
  title: string;
  description: string;
  items: TechStackItem[];
  runtime?: string;
}

interface TechStackItem {
  name: string;
  icon?: JSX.Element;
}

interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

interface SkillItem {
  name: string;
  icon: JSX.Element;
  language: string;
  experience: string;
  focus: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Onyx",
    summary:
      "Local-first terminal platform for secure secrets, audit trails, and opinionated workflows.",
    category: "Tools",
    stack: ["Rust", "Bun", "TypeScript", "Axum"],
    href: "https://github.com/pure-sagacity/Onyx",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    status: "Active development",
    year: "2025",
    highlight: "Event-driven CLI engine",
  },
  {
    title: "AetherGuard",
    summary:
      "Overlay network layer with declarative tunnel rules and policy-driven routing.",
    category: "Systems",
    stack: ["Rust", "WireGuard", "NixOS", "Tokio"],
    href: "https://github.com/example/aetherguard",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    status: "Production stable",
    year: "2024",
    highlight: "WireGuard control plane",
  },
  {
    title: "Silicate",
    summary:
      "Minimalist password manager with local encryption, zero cloud dependency.",
    category: "Tools",
    stack: ["Rust", "Argon2", "ChaCha20"],
    href: "https://github.com/pure-sagacity/silicate",
    status: "Feature complete",
    year: "2023",
    highlight: "Native encryption primitives",
  },
  {
    title: "TS Interpreter",
    summary:
      "Interpreter project exploring parsing, scanning, and runtime execution models.",
    category: "Research",
    stack: ["TypeScript", "Rust", "AST"],
    href: "https://github.com/example/interpreter",
    gif: "https://media.giphy.com/media/3o6ZsX2F4b7dPSzEHu/giphy.gif",
    status: "Research pipeline",
    year: "2023",
    highlight: "Parser and AST tooling",
  },
  {
    title: "Nocturne Dashboard",
    summary:
      "Operator-facing dashboard for monitoring services, alerts, and telemetry.",
    category: "Apps",
    stack: ["React", "TypeScript", "PostgreSQL"],
    href: "https://github.com/example/nocturne",
    gif: "https://media.giphy.com/media/26u4nJPf0JtQPdStq/giphy.gif",
    status: "Private build",
    year: "2025",
    highlight: "Realtime observability UI",
  },
  {
    title: "Atlas Node",
    summary:
      "Distributed worker orchestration with queue routing and workload policies.",
    category: "Systems",
    stack: ["Go", "NATS", "Docker"],
    href: "https://github.com/example/atlas-node",
    status: "Prototype",
    year: "2024",
    highlight: "Workload scheduler",
  },
];

const techStacks: TechStack[] = [
  {
    title: "CLI",
    description: "Tooling focused on speed, reliability, and ergonomics.",
    items: [
      { name: "Rust", icon: <SiRust className="h-4 w-4 text-zinc-200" /> },
      { name: "Tokio", icon: <SiRust className="h-4 w-4 text-zinc-200" /> },
      { name: "SQLite", icon: <SiSqlite className="h-4 w-4 text-zinc-200" /> },
      { name: "Go", icon: <SiGo className="h-4 w-4 text-zinc-200" /> },
    ],
  },
  {
    title: "Frontend",
    description:
      "UI systems with fast iteration and clean component architecture.",
    items: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind" },
      { name: "ShadCN" },
      { name: "Bun" },
    ],
    runtime: "Bun",
  },
  {
    title: "Full stack",
    description: "Product work built end-to-end with typed APIs and auth.",
    items: [
      { name: "TypeScript" },
      { name: "Elysia" },
      { name: "PostgreSQL" },
      { name: "Better Auth" },
      { name: "Bun" },
    ],
    runtime: "Bun",
  },
];

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core languages used to build systems and product surfaces.",
    items: [
      {
        name: "Rust",
        icon: <SiRust className="h-4 w-4 text-zinc-200" />,
        language: "Rust",
        experience: "3+ years",
        focus: "Systems, async services, CLI tooling",
        color: "bg-white/5",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-4 w-4 text-zinc-200" />,
        language: "TypeScript",
        experience: "4 years",
        focus: "Typed apps, tooling, frontend systems",
        color: "bg-white/5",
      },
      {
        name: "Go",
        icon: <SiGo className="h-4 w-4 text-zinc-200" />,
        language: "Go",
        experience: "2 years",
        focus: "Services, concurrency, networking",
        color: "bg-white/5",
      },
    ],
  },
  {
    title: "Backend",
    description: "Frameworks and infrastructure powering APIs and services.",
    items: [
      {
        name: "Axum",
        icon: <SiRust className="h-4 w-4 text-zinc-200" />,
        language: "Rust",
        experience: "2 years",
        focus: "API routing, middleware, services",
        color: "bg-white/5",
      },
      {
        name: "Tokio",
        icon: <SiRust className="h-4 w-4 text-zinc-200" />,
        language: "Rust",
        experience: "2 years",
        focus: "Async runtimes, task orchestration",
        color: "bg-white/5",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="h-4 w-4 text-zinc-200" />,
        language: "SQL",
        experience: "3 years",
        focus: "Schemas, performance, indexing",
        color: "bg-white/5",
      },
    ],
  },
  {
    title: "Frontend",
    description: "Product UX, component systems, and design engineering.",
    items: [
      {
        name: "React",
        icon: <SiReact className="h-4 w-4 text-zinc-200" />,
        language: "TypeScript",
        experience: "4 years",
        focus: "Component systems, state, UI architecture",
        color: "bg-white/5",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-4 w-4 text-zinc-200" />,
        language: "TypeScript",
        experience: "2 years",
        focus: "SSR, routing, edge deployment",
        color: "bg-white/5",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="h-4 w-4 text-zinc-200" />,
        language: "CSS",
        experience: "4 years",
        focus: "Design systems, utility styling",
        color: "bg-white/5",
      },
    ],
  },
  {
    title: "Infrastructure",
    description: "Deployment, environments, and runtime operations.",
    items: [
      {
        name: "Linux",
        icon: <SiLinux className="h-4 w-4 text-zinc-200" />,
        language: "Shell",
        experience: "5 years",
        focus: "Systems operations, debugging",
        color: "bg-white/5",
      },
      {
        name: "Docker",
        icon: <SiDocker className="h-4 w-4 text-zinc-200" />,
        language: "Shell",
        experience: "3 years",
        focus: "Containers, local environments",
        color: "bg-white/5",
      },
      {
        name: "NixOS",
        icon: <SiNixos className="h-4 w-4 text-zinc-200" />,
        language: "Nix",
        experience: "2 years",
        focus: "Declarative environments",
        color: "bg-white/5",
      },
    ],
  },
];

const dotfilesData = [
  {
    title: "NixOS Dotfiles",
    description:
      "Declarative system configuration for servers and workstations with reproducible builds.",
    href: "https://github.com/example/nixos-dotfiles",
    tags: ["Nix", "NixOS", "Home Manager"],
  },
  {
    title: "macOS Darwin Dotfiles",
    description:
      "Darwin-flake setup for macOS, bundling packages, shells, and dev tooling.",
    href: "https://github.com/example/darwin-dotfiles",
    tags: ["Nix", "Darwin", "zsh"],
  },
];

const links = [
  {
    text: "GitHub",
    link: "https://github.com/pure-sagacity",
    icon: <SiGithub className="h-5 w-5" />,
  },
  {
    text: "LinkedIn",
    link: "https://linkedin.com/in/idle-river",
    icon: (
      <img src="../../assets/linkedin.png" alt="LinkedIn" className="h-5 w-5" />
    ),
  },
  {
    text: "Discord",
    link: "http://discord.com/users/702233841657708675",
    icon: <SiDiscord className="h-5 w-5" />,
  },
];

const footerLinks = [
  { label: "Website", href: "https://your-site.com" },
  { label: "Ko-fi", href: "https://ko-fi.com/your-handle" },
  { label: "GitHub", href: "https://github.com/pure-sagacity" },
  { label: "LinkedIn", href: "https://linkedin.com/in/idle-river" },
  { label: "Discord", href: "http://discord.com/users/702233841657708675" },
  { label: "Email", href: "mailto:hello@yourdomain.com" },
];

export default function Home() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(
    skillsData[0].title,
  );
  const [activeTechStack, setActiveTechStack] = useState(techStacks[0].title);

  return (
    <main className="relative bg-[#0d0d0d] text-white selection:bg-zinc-800">
      {/* Background Underlays */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-10%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.01] blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center px-8 z-10 box-border">
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

      {/* Projects Section */}
      <motion.section
        className="relative z-10 px-8 py-10 box-border"
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

      {/* Tech Stack Section */}
      <motion.section
        className="relative z-10 px-8 py-10 box-border"
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

      {/* Skills Section */}
      <motion.section
        className="relative z-10 px-8 py-10 box-border"
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
                I reach for Rust because it pairs memory safety with speed,
                keeps intent explicit, and reads clean once the patterns click.
                With the ecosystem of libraries, complex problems become
                straightforward.
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
                        <div className="text-sm text-zinc-500">
                          {skill.focus}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Dotfiles Section */}
      <motion.section
        className="relative z-10 px-8 py-10 box-border"
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
              <p className="mt-4 text-2xl font-light text-zinc-100">
                Nix-first
              </p>
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

      {/* Footer */}
      <footer className="relative z-10 px-8 py-12">
        <div className="mx-auto w-full max-w-6xl border-t border-zinc-900 pt-8">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Connect
              </p>
              <p className="mt-4 text-lg text-zinc-300">
                Let’s build something precise and resilient.
              </p>
              <p className="mt-2 text-sm text-zinc-500">Location: Update me</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                    Open
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
