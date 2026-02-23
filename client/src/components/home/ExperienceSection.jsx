import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/data/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-32 scroll-mt-32">
      <SectionHeading kicker=" Work & Industry" title="Work Experiences" icon={<Sparkles className="w-4 h-4" />} />
      <div className="border-l border-white/10 pl-10 space-y-16 ml-4">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[54px] top-1 h-7 w-7 rounded-full bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.5)]">
              <job.icon className="h-3 w-3 text-primary" />
            </div>
            <h3 className="text-2xl font-serif">{job.title}</h3>
            <p className="text-primary font-bold uppercase tracking-wider text-xs">{job.company}</p>
            <p className="text-xs text-gray-500 font-mono mt-1">{job.year}</p>
            <ul className="mt-4 space-y-3 text-gray-400 max-w-2xl">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}