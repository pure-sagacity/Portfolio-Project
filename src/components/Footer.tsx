import { Mail, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Props {
  isOutOfCollege?: boolean;
}

const Footer: React.FC<Props> = ({ isOutOfCollege }) => {
  const { theme } = useTheme();

  return (
    <section className="mb-16">
      <div className={`rounded-2xl shadow-xl text-white p-12 text-center transition-all duration-300 ${theme === 'dark'
        ? 'bg-linear-to-r from-indigo-700 to-purple-700'
        : 'bg-linear-to-r from-indigo-600 to-purple-600'
        }`}>
        <h2 className="mb-6 text-4xl font-bold">Let's Connect</h2>
        <p className="mb-8 text-xl opacity-90">
          Ready to collaborate on something amazing? I'm always excited to
          discuss new opportunities and innovative projects.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:khokharmaaz@gmail.com"
            className="flex items-center gap-2 px-6 py-3 transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          {isOutOfCollege && (
            <a
              href="https://linkedin.com/MyLinkedinProfile"
              className="flex items-center gap-2 px-6 py-3 transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          )}
          <a
            href="https://github.com/coolestcoder655"
            className="flex items-center gap-2 px-6 py-3 transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="/privacy"
            className="flex items-center gap-2 px-6 py-3 transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;