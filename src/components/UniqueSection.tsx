import { Award, Briefcase, Users, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const UniqueSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="unique" className="scroll-mt-24">
      <div className="mb-8 flex items-center gap-3">
        <Zap
          className={`h-7 w-7 transition-colors duration-300 ${
            theme === "dark" ? "text-indigo-300" : "text-indigo-600"
          }`}
        />
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
          >
            Distinctives
          </p>
          <h2
            className={`mt-2 text-3xl font-bold transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            What makes me unique
          </h2>
        </div>
      </div>
      <div className="space-y-10">
        <p
          className={`max-w-3xl text-lg leading-8 transition-colors duration-300 ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          I connect engineering, leadership, and entrepreneurship into work that
          is useful, clean, and measurable.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Award,
              title: "Innovation",
              text: "Ideas turned into usable products.",
            },
            {
              icon: Users,
              title: "Teamwork",
              text: "Built to collaborate and communicate.",
            },
            {
              icon: Briefcase,
              title: "Execution",
              text: "Focused on results, not just output.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="space-y-4">
              <div
                className={`inline-flex h-12 w-12 items-center justify-center border-b ${theme === "dark" ? "border-slate-700 text-indigo-300" : "border-slate-300 text-indigo-600"}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
