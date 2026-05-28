import { Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface AthleticSectionProps {
  isOutOfCollege?: boolean;
}

const EntrepreneurshipSection: React.FC<AthleticSectionProps> = ({
  isOutOfCollege = false,
}) => {
  const { theme } = useTheme();

  const startups = [
    {
      name: "EcoTech Solutions",
      role: "Co-Founder & CTO • 2023-Present",
      highlight: "$2M raised",
      note: "Renewable energy storage work.",
    },
    {
      name: "StudySync",
      role: "Founder • 2022-2023",
      highlight: "10K+ users",
      note: "EdTech platform acquired by a publisher.",
    },
    {
      name: "DevTools Pro",
      role: "Co-Founder • 2021-2022",
      highlight: "$500K ARR",
      note: "Developer productivity suite before exit.",
    },
  ];

  const advisory = [
    {
      title: "Angel Investor",
      meta: "15+ investments",
      note: "AI and sustainability startups.",
    },
    {
      title: "Startup Mentor",
      meta: "50+ startups",
      note: "Y Combinator, Techstars, 500 Startups.",
    },
    {
      title: "Innovation Consultant",
      meta: "20+ enterprises",
      note: "Digital transformation and workshops.",
    },
  ];

  return (
    <>
      {isOutOfCollege && (
        <section id="entrepreneurship" className="scroll-mt-24">
          <div className="mb-8 flex items-center gap-3">
            <Zap
              className={`h-7 w-7 transition-colors duration-300 ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
            />
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
              >
                Entrepreneurship
              </p>
              <h2
                className={`mt-2 text-3xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Ventures & advisory
              </h2>
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h3
                className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Founded startups
              </h3>
              <div className="mt-8 space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
                {startups.map((startup) => (
                  <div key={startup.name} className="relative">
                    <span
                      className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${theme === "dark" ? "bg-indigo-400" : "bg-indigo-600"}`}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h4
                        className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
                      >
                        {startup.name}
                      </h4>
                      <span
                        className={`text-xs uppercase tracking-[0.28em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
                      >
                        {startup.highlight}
                      </span>
                    </div>
                    <p
                      className={`mt-2 text-sm font-medium ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
                    >
                      {startup.role}
                    </p>
                    <p
                      className={`mt-3 max-w-2xl text-base leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {startup.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3
                className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Advisory & investment
              </h3>
              <div className="mt-8 space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
                {advisory.map((item) => (
                  <div key={item.title} className="relative">
                    <span
                      className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${theme === "dark" ? "bg-cyan-400" : "bg-cyan-600"}`}
                    />
                    <p
                      className={`text-sm font-semibold ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
                    >
                      {item.meta}
                    </p>
                    <h4
                      className={`mt-1 text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`mt-3 max-w-2xl text-base leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EntrepreneurshipSection;
