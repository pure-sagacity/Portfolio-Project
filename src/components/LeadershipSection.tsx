import { Users } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface LeadershipSectionProps {
  isOutOfCollege?: boolean;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  isOutOfCollege = false,
}) => {
  const { theme } = useTheme();

  const leadershipItems = [
    {
      title: "NJHS Inductee",
      meta: "National Junior Honor Society • 2024",
      note: "Academic excellence, leadership, and service.",
    },
    {
      title: '"Fabulous Falcon" Award',
      meta: "Forestwood Middle School • 2024",
      note: "Recognition for school-community contribution.",
    },
    {
      title: "Peer Learning Mentor",
      meta: "Forestwood Middle School • 2023-2024",
      note: "Mentored 50+ students in computer science fundamentals.",
    },
  ];

  const serviceItems = isOutOfCollege
    ? [
        {
          title: "Code for Good Volunteer",
          meta: "2020-Present • 500+ hours",
          note: "Built digital solutions for 10+ nonprofits.",
        },
      ]
    : [];

  return (
    <section id="leadership" className="scroll-mt-24">
      <div className="mb-8 flex items-center gap-3">
        <Users
          className={`h-7 w-7 transition-colors duration-300 ${
            theme === "dark" ? "text-indigo-300" : "text-indigo-600"
          }`}
        />
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
          >
            Leadership
          </p>
          <h2
            className={`mt-2 text-3xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Leadership & service
          </h2>
        </div>
      </div>
      <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <h3
            className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Roles
          </h3>
          <div className="mt-8 space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
            {leadershipItems.map((item, index) => (
              <div key={item.title} className="relative">
                <span
                  className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${index === 0 ? "bg-indigo-400" : index === 1 ? "bg-cyan-400" : "bg-emerald-400"}`}
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
                  className={`mt-3 max-w-xl text-base leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
        {serviceItems.length > 0 && (
          <div>
            <h3
              className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Service
            </h3>
            <div className="mt-8 space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
              {serviceItems.map((item) => (
                <div key={item.title} className="relative">
                  <span
                    className={`absolute -left-[1.625rem] top-2 h-3 w-3 rounded-full ${theme === "dark" ? "bg-cyan-400" : "bg-cyan-600"}`}
                  />
                  <h4
                    className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`mt-1 text-sm font-medium ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`}
                  >
                    {item.meta}
                  </p>
                  <p
                    className={`mt-3 max-w-xl text-base leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipSection;
