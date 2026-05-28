import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const HeroSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-28 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.4em] transition-colors duration-300 ${
              theme === "dark" ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Portfolio
          </p>
          <h1
            className={`mt-6 text-[clamp(4rem,14vw,8rem)] font-bold leading-[0.88] transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-slate-950"
            }`}
          >
            Maaz Khokhar
          </h1>
          <div
            className={`mt-8 h-px w-full ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <p
              className={`max-w-2xl text-lg leading-8 transition-colors duration-300 ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I build practical products and clean interfaces, then turn them
              into systems that feel simple to use.
            </p>

            <div className="space-y-3">
              <a
                href="#tech"
                className={`group flex items-center justify-between border-b pb-3 text-sm font-medium transition-colors ${theme === "dark" ? "border-slate-800 text-slate-300 hover:text-white" : "border-slate-200 text-slate-600 hover:text-slate-950"}`}
              >
                <span>Read projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#reviews"
                className={`group flex items-center justify-between border-b pb-3 text-sm font-medium transition-colors ${theme === "dark" ? "border-slate-800 text-slate-300 hover:text-white" : "border-slate-200 text-slate-600 hover:text-slate-950"}`}
              >
                <span>Leave a review</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:khokharmaaz@gmail.com"
                className={`group flex items-center justify-between border-b pb-3 text-sm font-medium transition-colors ${theme === "dark" ? "border-slate-800 text-slate-300 hover:text-white" : "border-slate-200 text-slate-600 hover:text-slate-950"}`}
              >
                <span>Contact</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div
            className={`mt-16 flex flex-wrap gap-6 text-sm transition-colors duration-300 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
          >
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> khokharmaaz@gmail.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> (214) 732-2569
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Dallas, TX
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
