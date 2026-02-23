import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/data/portfolioData";

export function EducationSection() {
  return (
    <section id="education" className="mt-32 scroll-mt-32">
      <SectionHeading kicker="LEARNING" title="Education" icon={<GraduationCap className="w-4 h-4" />} />
      <div className="border-l border-white/10 pl-10 space-y-16 ml-4">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[54px] top-1 h-7 w-7 rounded-full bg-black border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
              <edu.icon className="h-3 w-3 text-primary" />
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <h3 className="text-2xl font-serif group-hover:text-primary transition-colors duration-300">
                {edu.institution}
              </h3>
              <span className="text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {edu.period}
              </span>
            </div>

            <div className="mt-1">
              <p className="text-primary font-bold uppercase tracking-wider text-xs">{edu.degree}</p>
              <p className="text-sm text-gray-400 mt-2 italic">{edu.detail}</p>
            </div>

            {edu.highlights && (
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.highlights.map((item, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-white/5 border-white/10 text-white/70 text-[10px] font-mono hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}