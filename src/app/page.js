import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import ExperienceSection from "./components/experience-section";
import HeroSection from "./components/hero-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";
import { profile, projects, skills } from "./data/portfolio";
import SiteNavigation from "./site-navigation";

export default function HomePage() {
  return (
    <>
      <SiteNavigation profile={profile} />
      <main>
        <HeroSection profile={profile} />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <ContactSection profile={profile} />
      </main>
    </>
  );
}
