import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/portfolioData";

export function ProjectsSection({ onSelectProject }) {
  return (
    <section id="projects" className="mt-20 scroll-mt-32">
      <SectionHeading kicker=" ~/built-this" title="Project Highlights" icon={<Sparkles className="w-4 h-4" />} />
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p, idx) => (
          <Card
            key={p.title}
            onClick={() => onSelectProject(p)}
            className="technical-card relative overflow-hidden glass p-0 cursor-pointer border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group"
          >
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/[0.03]">
              <span className="text-[10px] font-mono tracking-[0.3em] text-primary/60 uppercase">
                Project // 00{idx + 1}
              </span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary/40 transition-colors" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <div className="relative h-14 w-14 flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-2xl group-hover:border-primary/50 transition-colors">
                    <p.icon className="text-white group-hover:text-primary transition-colors h-7 w-7" />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                  {p.year}
                </span>
              </div>

              <h3 className="text-2xl font-serif text-white/90 group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed font-light">
                {p.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.03] flex items-center justify-between">
                <div className="flex gap-2">
                  {p.tags?.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest text-white/30">{tag}</span>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>

            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Card>
        ))}
      </div>
    </section>
  );
}