import { Eye } from "lucide-react";
import {
  privacyPolicies,
  type PrivacyPolicy,
} from "../constants/privacyPolicy";
import { useTheme } from "../contexts/ThemeContext";

interface Props {
  onShowPolicy: (policy: PrivacyPolicy) => void;
}

const PrivacyPolicySection: React.FC<Props> = ({ onShowPolicy }) => {
  const { theme } = useTheme();

  return (
    <section className="scroll-mt-24">
      <div className="space-y-8 border-t border-slate-200 pt-8 dark:border-slate-800">
        {privacyPolicies.map((policy) => (
          <div
            key={policy.appName}
            className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <h3
                className={`text-2xl font-semibold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-950"}`}
              >
                {policy.appName}
              </h3>
              <p
                className={`mt-2 max-w-2xl text-base leading-7 transition-colors duration-300 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                View the policy text for this project.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onShowPolicy(policy)}
              className="inline-flex items-center gap-2 border-b border-indigo-500 px-0 py-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-white"
            >
              <Eye className="w-4 h-4" />
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
