import type { Route } from "./+types/home";
import BackgroundUnderlays from "../components/home/BackgroundUnderlays";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import TechStackSection from "../components/home/TechStackSection";
import SkillsSection from "../components/home/SkillsSection";
import DotfilesSection from "../components/home/DotfilesSection";
import FooterSection from "../components/home/FooterSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maaz Khokhar" },
    { name: "description", content: "Portfolio of Maaz Khokhar" },
    { property: "og:title", content: "Maaz Khokhar" },
    { property: "og:description", content: "Portfolio of Maaz Khokhar" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://maariz.org" },
  ];
}

export default function Home() {
  return (
    <main className="relative bg-[#0d0d0d] text-white selection:bg-zinc-800">
      <BackgroundUnderlays />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <SkillsSection />
      <DotfilesSection />
      <FooterSection />
    </main>
  );
}
