import { useMemo, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NavBar } from "@/components/home/NavBar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ProjectDialog } from "@/components/home/ProjectDialog";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionIds = useMemo(() => ["top", "projects", "Events", "experience", "skills", "education"], []);
  const active = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen text-white bg-black selection:bg-primary/30">
      <NavBar active={active} />
      <main className="pt-40 max-w-5xl mx-auto px-4 pb-20">
        <HeroSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <EventsSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      </main>
      <ContactSection />
    </div>
  );
}