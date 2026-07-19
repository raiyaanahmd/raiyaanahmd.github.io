import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { MissionLog } from "@/components/sections/mission-log";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <MissionLog />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
