import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { accentColors, type AccentColor } from "~/../common";

const accents = Object.keys(accentColors) as AccentColor[];

function randomAccent(): AccentColor {
  return accents[Math.floor(Math.random() * accents.length)];
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  accent?: AccentColor;
}

export function ProjectCard({
  title,
  description,
  technologies,
  href,
  accent,
}: ProjectCardProps) {
  const color = accent ?? randomAccent();
  const styles = accentColors[color];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`
        group relative block h-full w-full overflow-hidden
        rounded-xl border border-zinc-800
        bg-black p-5 sm:p-6
        transition-all duration-300
        ${styles.border}
      `}
    >
      {/* subtle accent background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-300
          ${styles.glow}
          group-hover:opacity-100
        `}
      />

      {/* subtle top highlight */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-px bg-gradient-to-r
          from-transparent via-zinc-700 to-transparent
          opacity-0 transition-opacity
          group-hover:opacity-100
        "
      />

      {/* Internal layout wrapper */}
      <div className="relative z-10 flex h-full flex-col justify-between gap-4">
        <div>
          <div className="mb-2 flex items-start justify-between gap-2">
            {/* 💡 Fluid text sizing for the title */}
            <h3
              className={`
                text-base font-semibold tracking-tight
                sm:text-lg md:text-xl
                transition-colors line-clamp-1
                ${styles.text}
              `}
            >
              {title}
            </h3>

            {/* 💡 Scale icon down slightly on compact viewports */}
            <ArrowUpRight
              className="
                size-4 shrink-0 text-zinc-600 sm:size-5
                transition-all duration-200
                group-hover:text-zinc-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </div>

          {/* 💡 Responsive body text sizes + line-clamp safeguard for longer text */}
          <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm line-clamp-3 md:line-clamp-4">
            {description}
          </p>
        </div>

        {/* 💡 Compact tags padding & layout gap handling */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-zinc-800
                bg-zinc-950
                px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs
                text-zinc-400
                transition-colors
                group-hover:border-zinc-700
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
