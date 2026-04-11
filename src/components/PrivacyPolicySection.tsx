import { Eye, ShieldCheck } from "lucide-react";
import { privacyPolicies, type PrivacyPolicy } from "../constants/privacyPolicy";
import { useTheme } from "../contexts/ThemeContext";

interface Props {
    onShowPolicy: (policy: PrivacyPolicy) => void;
}

const PrivacyPolicySection: React.FC<Props> = ({ onShowPolicy }) => {
    const { theme } = useTheme();

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <ShieldCheck
                    className={`h-8 w-8 transition-colors duration-300 ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                        }`}
                />
                <div>
                    <h2
                        className={`text-3xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-800"
                            }`}
                    >
                        Privacy Policy
                    </h2>
                    <p
                        className={`mt-1 text-sm transition-colors duration-300 ${theme === "dark" ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        Select an app to view the policy text shown for that project.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {privacyPolicies.map((policy) => (
                    <div
                        key={policy.appName}
                        className={`flex items-center justify-between gap-4 rounded-2xl p-6 shadow-lg transition-all duration-300 ${theme === "dark" ? "bg-slate-800" : "bg-white"
                            }`}
                    >
                        <div>
                            <h3
                                className={`text-lg font-semibold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-800"
                                    }`}
                            >
                                {policy.appName}
                            </h3>
                            <p
                                className={`mt-1 text-sm transition-colors duration-300 ${theme === "dark" ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Privacy policy text is available in a modal.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => onShowPolicy(policy)}
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                        >
                            <Eye className="h-4 w-4" />
                            Show
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrivacyPolicySection;