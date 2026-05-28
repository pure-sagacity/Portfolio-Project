import { Github, Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-8">
      <div
        className={`flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
      >
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}
          >
            Contact
          </p>
          <h2
            className={`mt-2 text-3xl font-bold ${theme === "dark" ? "text-white" : "text-slate-950"}`}
          >
            Let’s connect
          </h2>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium">
          <a
            href="mailto:khokharmaaz@gmail.com"
            className={`inline-flex items-center gap-2 transition-colors ${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-950"}`}
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://github.com/pure-sagacity"
            className={`inline-flex items-center gap-2 transition-colors ${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-950"}`}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="/privacy"
            className={`inline-flex items-center gap-2 transition-colors ${theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-950"}`}
          >
            Privacy Policy
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
