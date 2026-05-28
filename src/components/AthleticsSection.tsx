import { Trophy } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface AthleticSectionProps {
  isOutOfCollege?: boolean;
}

const AthleticSection: React.FC<AthleticSectionProps> = ({
  isOutOfCollege = false,
}) => {
  const { theme } = useTheme();

  const sections = [
    {
      title: "Competitive Programming",
      items: [
        ["Top 20", "ACM ICPC World Finals"],
        ["Qualifier", "Google Code Jam Round 3"],
        ["Top 100", "Facebook Hacker Cup"],
      ],
    },
    {
      title: "Hackathons",
      items: [
        ["1st", "TechCrunch Disrupt"],
        ["Winner", "MIT HackMIT"],
        ["2nd", "Stanford TreeHacks"],
      ],
    },
    {
      title: "Athletic Achievements",
      items: [
        ["Captain", "Varsity Tennis"],
        ["Sub 3:30", "Marathon finisher"],
        ["Advanced", "Rock climbing"],
      ],
    },
  ];

  return (
    <>
      {isOutOfCollege && (
        <section id="athletics" className="scroll-mt-24">
          <div className="mb-8 flex items-center gap-3">
            <Trophy
              className={`h-7 w-7 transition-colors duration-300 ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
            />
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
              >
                Competitions
              </p>
              <h2
                className={`mt-2 text-3xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Athletics & competitions
              </h2>
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div key={section.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-3 w-3 rounded-full ${index === 0 ? "bg-indigo-400" : index === 1 ? "bg-cyan-400" : "bg-emerald-400"}`}
                  />
                  <h3
                    className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
                  >
                    {section.title}
                  </h3>
                </div>
                <div
                  className={`border-l pl-6 ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
                >
                  {section.items.map(([value, label]) => (
                    <div key={label} className="relative pb-8 last:pb-0">
                      <span
                        className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${theme === "dark" ? "bg-slate-400" : "bg-slate-500"}`}
                      />
                      <p
                        className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
                      >
                        {value}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default AthleticSection;
