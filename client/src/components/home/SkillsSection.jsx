import { Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/portfolioData";

export function SkillsSection() {
  return (
    <section id="skills" className="mt-32 scroll-mt-32">
      <SectionHeading 
        kicker="TOOLKIT" 
        title="Technical Skills" 
        icon={<Brain className="h-4 w-4" />} 
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((s, idx) => (
          <Card
            key={s.label}
            className="group relative overflow-hidden glass border-white/5 bg-white/[0.02] p-0 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.04]"
          >
            {/* Technical Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.03]">
              <span className="text-[9px] font-mono tracking-widest text-primary/50 uppercase">
                Skill_Node // 0{idx + 1}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {s.label}
              </h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed font-light">
                {s.detail}
              </p>
            </div>

            {/* Decorative Corner (Optional subtle touch) */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />
          </Card>
        ))}
      </div>
    </section>
  );
}