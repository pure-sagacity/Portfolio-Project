import { GraduationCap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface AcademicSTEMHighlightsProps {
  isOutOfCollege?: boolean;
}

const AcademicSTEMHighlights: React.FC<AcademicSTEMHighlightsProps> = ({
  isOutOfCollege = false,
}) => {
  const { theme } = useTheme();

  return (
    <section id="highlights" className="scroll-mt-24">
      <div className="mb-8 flex items-center gap-3">
        <GraduationCap
          className={`h-7 w-7 transition-colors duration-300 ${
            theme === "dark" ? "text-indigo-300" : "text-indigo-600"
          }`}
        />
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
          >
            Highlights
          </p>
          <h2
            className={`mt-2 text-3xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Academic & STEM
          </h2>
        </div>
      </div>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3
            className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Academic path
          </h3>
          <div className="mt-8 space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
            {(isOutOfCollege
              ? [
                  {
                    label: "Master of Science in Computer Science",
                    meta: "Stanford University • 3.9 GPA",
                    note: "AI & Machine Learning",
                  },
                  {
                    label: "Bachelor of Science in Engineering",
                    meta: "MIT • Summa Cum Laude • 3.95 GPA",
                    note: "Computer Science & Mathematics",
                  },
                ]
              : [
                  {
                    label: "Focused on hands-on building",
                    meta: "Practical work first",
                    note: "Applications, products, and clean interfaces",
                  },
                  {
                    label: "Continual technical growth",
                    meta: "Current stack",
                    note: "React, TypeScript, Firebase, Tailwind",
                  },
                ]
            ).map((item) => (
              <div key={item.label} className="relative">
                <span
                  className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${theme === "dark" ? "bg-indigo-300" : "bg-indigo-600"}`}
                />
                <p
                  className={`text-sm font-semibold ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
                >
                  {item.meta}
                </p>
                <h4
                  className={`mt-1 text-lg font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {item.label}
                </h4>
                <p
                  className={`mt-1 text-sm leading-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            STEM snapshot
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["5+", "Freelance applications"],
              ["100%", "On-time delivery"],
              ["React", "Primary UI stack"],
              ["TypeScript", "Typed frontend work"],
            ].map(([value, label]) => (
              <div
                key={label}
                className={`border-b pb-4 ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
              >
                <p
                  className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  {value}
                </p>
                <p
                  className={`mt-1 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Web apps", "Mobile apps", "Client delivery", "Modern UI"].map(
              (tag) => (
                <span
                  key={tag}
                  className={`border-b px-0 py-1 text-xs font-semibold ${theme === "dark" ? "border-slate-700 text-slate-300" : "border-slate-300 text-slate-600"}`}
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSTEMHighlights;
