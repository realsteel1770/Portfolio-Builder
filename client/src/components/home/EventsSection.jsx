import { ArrowUpRight, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SPRINTS } from "@/data/portfolioData";

export function EventsSection({ onSelectProject }) {
  return (
    <section id="Events" className="mt-32 scroll-mt-32">
      <SectionHeading kicker="~/Contributions" title="Events & Sprints" icon={<Trophy className="w-4 h-4" />} />
      <div className="grid md:grid-cols-1 gap-8">
        {SPRINTS.map((s, idx) => (
          <Card
            key={idx}
            onClick={() => onSelectProject(s)}
            className="glass border-white/5 bg-white/[0.02] p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.04] transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-xs text-primary/70 font-mono font-bold uppercase">{s.company}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-400">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className="text-xs font-mono text-gray-500">{s.year}</span>
                <div className="flex gap-2 mt-4 md:mt-0">
                  {s.tags.map(t => (
                    <Badge key={t} variant="secondary" className="bg-white/5 border-white/10 text-[10px] uppercase font-mono">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-[10px] font-mono text-primary uppercase tracking-widest">
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}