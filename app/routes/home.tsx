import { motion } from "framer-motion";
import type { Route } from "./+types/home";
import { ProjectCard } from "~/ProjectCard";
import type { AccentColor } from "~/../common";
import { SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maaz Khokhar" },
    { name: "description", content: "Portfolio of Maaz Khokhar" },
  ];
}

const projects: Array<{
  title: string;
  description: string;
  technologies: string[];
  href: string;
  accent?: AccentColor;
}> = [
  {
    title: "AetherGuard",
    description:
      "A secure networking tool built around WireGuard and modern infrastructure.",
    technologies: ["Rust", "WireGuard", "NixOS"],
    href: "https://github.com/example/aetherguard",
    accent: "orange",
  },
  {
    title: "TS Interpreter",
    description:
      "A TypeScript interpreter with a custom lexer, parser, and AST.",
    technologies: ["TypeScript", "Rust", "AST"],
    href: "https://github.com/example/interpreter",
    accent: "green",
  },
];

const links: Array<{
  text: string;
  link: string;
  icon: React.ReactNode;
}> = [
  {
    text: "GitHub",
    link: "https://github.com/pure_sagacity",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0d0d] text-white selection:bg-zinc-800">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-x-0 top-[65vh] h-[35rem] bg-gradient-to-b from-transparent via-[#0d0d0d]/80 to-[#0d0d0d]" />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center px-8">
        <motion.div
          className="mx-auto w-full max-w-5xl select-none font-sans italic tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={textVariants}
            className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-600"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Software engineer · Systems builder
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="mb-2 text-6xl font-extralight tracking-tight text-zinc-100 sm:text-8xl md:text-9xl"
          >
            Maaz Khokhar
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="max-w-4xl text-5xl font-thin leading-tight text-zinc-500 sm:text-7xl"
          >
            Building reliable software
            <br />
            from the systems up.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-12 flex flex-wrap gap-3"
          >
            {links.map((link) => (
              <a
                key={link.text}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-300"
              >
                {link.icon}
                {link.text}
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-zinc-700"
          >
            <span>Scroll</span>

            <motion.span
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ↓
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="relative mx-auto max-w-6xl px-8 pb-32"
      >
        <div className="mb-12 flex items-center gap-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-600">
            Projects
          </h2>

          <div className="h-px flex-1 bg-zinc-800/50" />
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={sectionVariants}
              className="relative w-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
