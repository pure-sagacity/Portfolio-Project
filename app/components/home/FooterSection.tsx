import { footerLinks } from "./data";

export default function FooterSection() {
  return (
    <footer className="relative z-10 px-8 py-12">
      <div className="mx-auto w-full max-w-6xl border-t border-zinc-900 pt-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              Connect
            </p>
            <p className="mt-4 text-lg text-zinc-300">
              Let’s build something precise and resilient.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Location: Lewisville, TX
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
              >
                <span>{link.label}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  Open
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
