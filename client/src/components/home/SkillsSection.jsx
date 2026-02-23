import { Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/portfolioData";

export function SkillsSection() {
  return (
    <section id="skills" className="mt-32 scroll-mt-32">
      <SectionHeading kicker="TOOLKIT" title="Technical Skills" icon={<Brain className="h-4 w-4" />} />
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((s) => (
          <Card
            key={s.label}
            className="folder-card glass p-6 border-white/10 bg-white/5 transition-transform hover:-translate-y-2"
          >
            <h4 className="text-lg font-bold text-primary">{s.label}</h4>
            <p className="text-sm text-gray-400 mt-2">{s.detail}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}