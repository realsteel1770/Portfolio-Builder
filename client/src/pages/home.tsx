import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Download,
  GitBranch,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PROFILE = {
  name: "Leo Steel",
  role: "Computing undergraduate",
  tagline:
    "Software development • automation • data-driven systems — with hands-on projects in conversational AI, forecasting, and reinforcement learning.",
  location: "Bournemouth, UK",
  phone: "07553 831194",
  email: "leowsteel@gmail.com",
};

const SKILLS = [
  {
    label: "Python",
    detail: "Pandas, NumPy, matplotlib, seaborn",
  },
  { label: "SQL", detail: "querying, schema thinking" },
  { label: "JavaScript", detail: "React, Node patterns" },
  { label: "Data & AI", detail: "analysis, visualisation, regression" },
  { label: "Concepts", detail: "SDLC, automation, APIs" },
];

const EXPERIENCE = [
  {
    company: "Volklec",
    title: "Applied technology & AI (Supply Chain & Logistics)",
    year: "2025",
    bullets: [
      "Automated SIOP workflows using AI tools, spreadsheets, and code.",
      "Built simulation models to support inventory and operations planning.",
      "Developed a dashboard and automated sales pipeline to improve accuracy and efficiency.",
    ],
    icon: Brain,
  },
  {
    company: "Rebbeck Brothers & My Fire Door LTD",
    title: "IT work",
    year: "2025",
    bullets: [
      "Digitised paper records into a structured digital filing system.",
      "Used AI tools to identify and filter potential clients.",
      "Supported targeted email campaign using data-driven lead selection.",
    ],
    icon: GitBranch,
  },
  {
    company: "Gold Arrow Camp (California)",
    title: "Waterfront Counsellor",
    year: "2023",
    bullets: [
      "Supported water activities and taught water safety to children aged 6–16.",
      "Organised group activities and encouraged teamwork and responsibility.",
    ],
    icon: Trophy,
  },
];

const PROJECTS = [
  {
    title: "Conversational AI chatbot",
    year: "2025",
    tags: ["Express.js", "REST API", "semantic embeddings", "accessibility"],
    description:
      "Full-stack chatbot with a three-layer response system: small talk, semantic matching, and AI fallback. Frontend designed for accessibility and validated with WAVE tools.",
    longDescription: "This project involved creating a sophisticated conversational agent that could handle varied user intents. I implemented a robust backend using Express.js and integrated semantic search to ensure contextually relevant responses even when exact keyword matches weren't found. The frontend was a priority, ensuring high accessibility standards were met, which I verified using WAVE automation tools.",
    icon: Bot,
  },
  {
    title: "Air quality forecasting system",
    year: "2025",
    tags: ["big data pipeline", "regression", "visualisation"],
    description:
      "Built a data pipeline to collect and analyse environmental datasets, then applied regression to forecast the Air Quality Index and communicated insights with clear charts.",
    longDescription: "Developed during a focused research period, this system ingests large volumes of environmental sensor data. I built a custom ETL pipeline to clean and normalize the data before feeding it into a machine learning model. Using regression analysis, the system predicts AQI trends, providing actionable insights through interactive dashboards built with modern visualization libraries.",
    icon: Sparkles,
  },
  {
    title: "AWS DeepRacer competition (MOD Corsham)",
    year: "2025",
    tags: ["reinforcement learning", "optimisation", "AWS"],
    description:
      "Designed and optimised autonomous racing models using reinforcement learning and competed on AWS representing Bournemouth University.",
    longDescription: "Representing Bournemouth University, I dived deep into reinforcement learning. I iteratively refined racing models by tuning hyper-parameters and reward functions. The competition at MOD Corsham was a platform to test these models against industry peers on AWS infrastructure, focusing on speed and track stability.",
    icon: Trophy,
  },
  {
    title: "Hackathon projects (Bournemouth University)",
    year: "2024–2025",
    tags: ["prototyping", "sustainability", "conversational AI"],
    description:
      "Developed prototypes for sustainability and conversational AI challenges, iterating quickly from concept to demo-ready UI.",
    longDescription: "Participating in multiple hackathons at Bournemouth University, I led small teams to deliver functional prototypes within 24-48 hours. Our projects focused on solving real-world sustainability issues and pushing the boundaries of conversational interfaces, often winning praise for UI polish and technical feasibility.",
    icon: GitBranch,
  },
  {
    title: "Referral system prototype (BAE Systems — CIB week)",
    year: "2025",
    tags: ["stakeholder research", "systems analysis", "SQL design"],
    description:
      "Designed a referral system prototype: researched stakeholders, performed systems analysis, designed SQL database structure, and presented to industry professionals.",
    longDescription: "During the CIB week, I collaborated with BAE Systems to modernize their referral workflows. This involved conducting interviews with key stakeholders, mapping out complex system requirements, and architecting a relational database schema. The final prototype was presented to a panel of senior engineers and managers.",
    icon: ArrowUpRight,
  },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -72% 0px", threshold: [0.05, 0.12, 0.2, 0.35] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  return active;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs text-foreground/90">
      {children}
    </span>
  );
}

function SectionHeading({
  kicker,
  title,
  icon,
}: {
  kicker: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div>
        <div
          className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary/80"
          data-testid={`text-kicker-${kicker.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {icon}
          {kicker}
        </div>
        <h2
          className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl"
          data-testid={`text-heading-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  
  const sectionIds = useMemo(
    () => ["top", "projects", "experience", "skills", "education", "contact"],
    [],
  );
  const active = useActiveSection(sectionIds);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen grid-sheen noise selection:bg-primary/30 selection:text-primary-foreground">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm"
        data-testid="link-skip-content"
      >
        Skip to content
      </a>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <nav className="glass rounded-full px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/40 border-white/5" aria-label="Primary">
          <a
            href="#top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform active:scale-90"
            data-testid="link-home"
          >
            <span className="font-mono text-xs font-bold">LS</span>
          </a>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all hover:text-foreground ${
                    isActive
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground/80"
                  }`}
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <Button
            asChild
            size="sm"
            className="rounded-full hidden sm:flex h-9 px-4"
            data-testid="button-email"
          >
            <a href={`mailto:${PROFILE.email}`} data-testid="link-email">
              Hire Me
            </a>
          </Button>
        </nav>
      </header>

      <main id="content" className="mx-auto max-w-6xl px-4 pt-32 pb-20 md:px-10">
        <section id="top" className="grid gap-12 md:grid-cols-12 items-center" data-testid="section-hero">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.8, 0.2, 1] }}
            className="md:col-span-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Internships
            </div>
            <h1
              className="text-balance font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
              data-testid="text-hero-title"
            >
              Building the <span className="text-primary italic">next</span> era of AI.
            </h1>
            <p
              className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
              data-testid="text-hero-tagline"
            >
              {PROFILE.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base shadow-xl shadow-primary/20"
                asChild
                data-testid="button-view-projects"
              >
                <a href="#projects" data-testid="link-view-projects">
                  Explore Work <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-base border-white/10 hover:bg-white/5"
                asChild
                data-testid="button-contact"
              >
                <a href="#contact" data-testid="link-contact">
                  Let's Talk
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.21, 0.8, 0.2, 1] }}
            className="md:col-span-4"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <Card className="glass shine-border relative h-full w-full rounded-[40px] flex flex-col items-center justify-center p-8 text-center border-white/10">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center shadow-2xl shadow-primary/40 rotate-6">
                  <span className="font-serif text-4xl font-bold text-background -rotate-6">LS</span>
                </div>
                <h3 className="font-serif text-2xl tracking-tight">{PROFILE.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{PROFILE.role}</p>
                <div className="mt-6 flex gap-2">
                  <Badge className="rounded-full bg-white/5 text-white border-white/10">Bournemouth</Badge>
                  <Badge className="rounded-full bg-white/5 text-white border-white/10">UK</Badge>
                </div>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-32" data-testid="section-projects">
          <SectionHeading
            kicker="PORTFOLIO"
            title="Featured Projects"
            icon={<Sparkles className="h-4 w-4" />}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <Card className="glass shine-border h-full group transition-all duration-500 hover:bg-white/[0.03] rounded-[32px] overflow-hidden flex flex-col p-6 border-white/5">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                        <Icon className="h-6 w-6 group-hover:text-primary transition-colors duration-500" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground/60">{p.year}</span>
                    </div>
                    
                    <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors" data-testid={`text-project-title-${idx}`}>
                      {p.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground/80 leading-relaxed flex-grow line-clamp-3" data-testid={`text-project-description-${idx}`}>
                      {p.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/40 px-2 py-1 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                      {p.tags.length > 2 && (
                        <span className="text-[10px] font-bold text-muted-foreground/40 px-2 py-1">
                          +{p.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass border-white/10 rounded-[32px] max-w-2xl p-0 overflow-hidden shadow-2xl">
            {selectedProject && (
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <selectedProject.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <DialogTitle className="font-serif text-2xl tracking-tight mb-1">{selectedProject.title}</DialogTitle>
                      <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-white/5" onClick={() => setSelectedProject(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Overview</h4>
                    <DialogDescription className="text-base text-foreground/80 leading-relaxed">
                      {selectedProject.longDescription}
                    </DialogDescription>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-full bg-white/5 border-white/5 px-3 py-1 text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <Button className="rounded-full flex-grow h-12">
                      View Source <Github className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="rounded-full flex-grow h-12 border-white/10">
                      Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <section id="experience" className="mt-32" data-testid="section-experience">
          <SectionHeading
            kicker="JOURNEY"
            title="Work Experience"
            icon={<GitBranch className="h-4 w-4" />}
          />

          <div className="relative border-l border-white/5 ml-4 pl-10 space-y-16">
            {EXPERIENCE.map((x, idx) => {
              const Icon = x.icon;
              return (
                <div key={x.company} className="relative">
                  <div className="absolute -left-[54px] top-0 h-7 w-7 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <Icon className="h-3 w-3 text-primary" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-2xl tracking-tight mb-1" data-testid={`text-experience-title-${idx}`}>{x.title}</h3>
                      <p className="text-primary font-medium" data-testid={`text-experience-company-${idx}`}>{x.company}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground/60">{x.year}</span>
                  </div>

                  <ul className="grid gap-3 text-muted-foreground/80 text-sm md:text-base max-w-3xl">
                    {x.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-4">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-white/20 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills" className="mt-32" data-testid="section-skills">
          <SectionHeading
            kicker="TOOLKIT"
            title="Technical Mastery"
            icon={<Brain className="h-4 w-4" />}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, idx) => (
              <Card key={s.label} className="glass rounded-[24px] p-6 border-white/5 hover:border-primary/20 transition-colors">
                <h4 className="font-semibold text-lg mb-2">{s.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-32" data-testid="section-contact">
          <Card className="shine-border rounded-[40px] p-10 md:p-16 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight mb-6 text-balance">Let’s craft the future of tech together.</h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-10">Currently open to internship opportunities for 2026. Let's discuss how I can add value to your team.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-16 px-10 text-lg shadow-2xl shadow-primary/20" asChild>
                  <a href={`mailto:${PROFILE.email}`}>Send an Email</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg border-white/10 hover:bg-white/5" asChild>
                  <a href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}>Book a Call</a>
                </Button>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground/60">
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </Card>
        </section>

        <footer className="mt-32 text-center text-muted-foreground/40 text-xs font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Leo Steel — Designed with focus.
        </footer>
      </main>
    </div>
  );
}
