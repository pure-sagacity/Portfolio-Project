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
  loc?: number | string;
  gif?: string; // Added optional GIF prop (takes a link or file path)
}

export function ProjectCard({
  title,
  description,
  technologies,
  href,
  accent,
  loc,
  gif,
}: ProjectCardProps) {
  const color = accent ?? randomAccent();
  const styles = accentColors[color];

  const accentColors_map: Record<AccentColor, string> = {
    orange: "rgba(249, 115, 22, 0.5)",
    green: "rgba(34, 197, 94, 0.5)",
    red: "rgba(239, 68, 68, 0.5)",
    blue: "rgba(59, 130, 246, 0.5)",
    purple: "rgba(168, 85, 247, 0.5)",
    pink: "rgba(236, 72, 153, 0.5)",
    cyan: "rgba(34, 211, 238, 0.5)",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`
        group relative overflow-hidden
        rounded-xl border border-zinc-800
        bg-black p-6
        transition-all duration-300
        h-full flex flex-col
        ${styles.border}
      `}
      style={{
        borderLeft: `4px solid ${accentColors_map[color]}`,
      }}
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

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3
            className={`
              text-xl font-semibold
              text-zinc-100
              transition-colors
              flex-1 line-clamp-1
              ${styles.text}
            `}
          >
            {title}
          </h3>

          <div className="flex items-center gap-2 shrink-0">
            {loc && (
              <span
                className="
                  font-mono text-xs 
                  px-2 py-1 rounded
                  border border-zinc-800 bg-zinc-900/50 text-zinc-400
                  transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300 whitespace-nowrap
                "
              >
                {loc} LOC
              </span>
            )}

            <ArrowUpRight
              className="
                size-5 text-zinc-600
                transition-all duration-200
                group-hover:text-zinc-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-zinc-500">
          {description}
        </p>

        {/* Optional GIF Section */}
        {gif && (
          <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
            <img
              src={gif}
              alt={`${title} preview demo`}
              className="
                h-full w-full object-cover opacity-60
                transition-all duration-500 ease-out
                group-hover:scale-[1.02] group-hover:opacity-100
              "
              loading="lazy"
            />
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border border-zinc-800
                bg-zinc-950
                px-3 py-1
                text-xs text-zinc-400
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
