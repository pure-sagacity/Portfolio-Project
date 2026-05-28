import { Briefcase } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface TechSectionProps {
  isOutOfCollege?: boolean;
}

const TechSection: React.FC<TechSectionProps> = ({
  isOutOfCollege = false,
}) => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Local School Attendance App",
      href: "https://ialfm-attendance.netlify.app",
      role: "Lead Developer • 2025",
      summary:
        "Daily-use system that streamlined attendance tracking and reduced admin friction.",
      highlight: "Production live",
    },
    {
      title: "I-Dazzle E-Commerce Platform",
      href: "https://i-dazzle.netlify.app",
      role: "Technical Lead • 2025",
      summary:
        "Direct-to-consumer storefront with secure checkout and inventory flow.",
      highlight: "Custom commerce build",
    },
    ...(isOutOfCollege
      ? [
          {
            title: "Sun-Scope",
            href: "#",
            role: "Full-Stack Engineer • 2025",
            summary:
              "IoT energy project focused on lower consumption across commercial spaces.",
            highlight: "35% reduction",
          },
        ]
      : []),
  ];

  const skills = {
    Languages: ["Python", "JavaScript", "TypeScript"],
    Frontend: ["React", "Tailwind", "Responsive UI"],
    Tools: ["Firebase", "Docker", "React Native"],
  };

  return (
    <section id="tech" className="scroll-mt-24">
      <div className="mb-8 flex items-center gap-3">
        <Briefcase
          className={`h-7 w-7 transition-colors duration-300 ${
            theme === "dark" ? "text-indigo-300" : "text-indigo-600"
          }`}
        />
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
          >
            Projects
          </p>
          <h2
            className={`mt-2 text-3xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Technology & innovation
          </h2>
        </div>
      </div>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">
              <span
                className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${index % 2 === 0 ? "bg-indigo-400" : "bg-emerald-400"}`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                {project.href === "#" ? (
                  <h3
                    className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
                  >
                    {project.title}
                  </h3>
                ) : (
                  <a
                    href={project.href}
                    className={`text-2xl font-semibold transition-colors hover:text-indigo-600 ${theme === "dark" ? "text-white hover:text-indigo-300" : "text-slate-950"}`}
                  >
                    {project.title}
                  </a>
                )}
                <span
                  className={`text-xs uppercase tracking-[0.28em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
                >
                  {project.highlight}
                </span>
              </div>
              <p
                className={`mt-2 text-sm font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                {project.role}
              </p>
              <p
                className={`mt-4 max-w-2xl text-base leading-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
              >
                {project.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          {Object.entries(skills).map(([group, items], index) => (
            <div
              key={group}
              className={`border-b pb-6 ${index === 0 ? "pt-0" : ""} ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
            >
              <p
                className={`text-sm font-semibold ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
              >
                {group}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p
            className={`max-w-sm text-sm leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            I keep the surface simple: a few tools, a small set of patterns, and
            work that stays readable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
