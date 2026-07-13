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
  SiSqlite,
} from "@icons-pack/react-simple-icons";

export type ProjectCategory = "Systems" | "Tools" | "Research" | "Apps";

export interface Project {
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

export interface TechStack {
  title: string;
  description: string;
  items: TechStackItem[];
  runtime?: string;
}

export interface TechStackItem {
  name: string;
  icon?: JSX.Element;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon: JSX.Element;
  language: string;
  experience: string;
  focus: string;
  color: string;
}

export const projects: Project[] = [
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

export const techStacks: TechStack[] = [
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

export const skillsData: SkillCategory[] = [
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

export const dotfilesData = [
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

export const links = [
  {
    text: "GitHub",
    link: "https://github.com/pure-sagacity",
    icon: <SiGithub className="h-5 w-5" />,
  },
  {
    text: "LinkedIn",
    link: "https://linkedin.com/in/idle-river",
    icon: <img src="/linkedin.png" alt="LinkedIn" className="h-5 w-5" />,
  },
  {
    text: "Discord",
    link: "https://discord.com/users/702233841657708675",
    icon: <SiDiscord className="h-5 w-5" />,
  },
];

export const footerLinks = [
  { label: "Website", href: "https://maariz.org" },
  { label: "Ko-fi", href: "https://ko-fi.com/idle_river" },
  { label: "GitHub", href: "https://github.com/pure-sagacity" },
  { label: "LinkedIn", href: "https://linkedin.com/in/idle-river" },
  { label: "Discord", href: "https://discord.com/users/702233841657708675" },
  { label: "Email", href: "mailto:khokharmaaz@gmail.com" },
];
