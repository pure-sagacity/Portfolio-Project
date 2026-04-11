import { X } from "lucide-react";
import type { PrivacyPolicy } from "../constants/privacyPolicy";
import { useTheme } from "../contexts/ThemeContext";

interface Props {
    policy: PrivacyPolicy | null;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<Props> = ({ policy, onClose }) => {
    const { theme } = useTheme();

    if (!policy) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div
                className={`w-full max-w-2xl rounded-2xl shadow-2xl ${theme === "dark" ? "bg-slate-800" : "bg-white"
                    }`}
            >
                <div className="flex items-center justify-between gap-4 border-b border-slate-200/10 p-6">
                    <div>
                        <p
                            className={`text-sm font-medium uppercase tracking-[0.2em] ${theme === "dark" ? "text-slate-400" : "text-slate-500"
                                }`}
                        >
                            Privacy Policy
                        </p>
                        <h3
                            className={`mt-2 text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-slate-800"
                                }`}
                        >
                            {policy.appName}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className={`rounded-full p-2 transition-colors ${theme === "dark"
                                ? "text-slate-400 hover:bg-slate-700 hover:text-white"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                        aria-label="Close privacy policy modal"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="max-h-[70vh] overflow-y-auto p-6">
                    <p
                        className={`whitespace-pre-line text-base leading-7 ${theme === "dark" ? "text-slate-200" : "text-slate-700"
                            }`}
                    >
                        {policy.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;