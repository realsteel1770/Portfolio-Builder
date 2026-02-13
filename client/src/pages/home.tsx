import { motion } from "framer-motion";
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
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    icon: Bot,
  },
  {
    title: "Air quality forecasting system",
    year: "2025",
    tags: ["big data pipeline", "regression", "visualisation"],
    description:
      "Built a data pipeline to collect and analyse environmental datasets, then applied regression to forecast the Air Quality Index and communicated insights with clear charts.",
    icon: Sparkles,
  },
  {
    title: "AWS DeepRacer competition (MOD Corsham)",
    year: "2025",
    tags: ["reinforcement learning", "optimisation", "AWS"],
    description:
      "Designed and optimised autonomous racing models using reinforcement learning and competed on AWS representing Bournemouth University.",
    icon: Trophy,
  },
  {
    title: "Hackathon projects (Bournemouth University)",
    year: "2024–2025",
    tags: ["prototyping", "sustainability", "conversational AI"],
    description:
      "Developed prototypes for sustainability and conversational AI challenges, iterating quickly from concept to demo-ready UI.",
    icon: GitBranch,
  },
  {
    title: "Referral system prototype (BAE Systems — CIB week)",
    year: "2025",
    tags: ["stakeholder research", "systems analysis", "SQL design"],
    description:
      "Designed a referral system prototype: researched stakeholders, performed systems analysis, designed SQL database structure, and presented to industry professionals.",
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
    <div className="mb-6 flex items-end justify-between gap-6">
      <div>
        <div
          className="mb-2 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground"
          data-testid={`text-kicker-${kicker.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/70 bg-card/60">
            {icon}
          </span>
          {kicker}
        </div>
        <h2
          className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl"
          data-testid={`text-heading-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function HomePage() {
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
    <div className="min-h-screen grid-sheen noise">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm"
        data-testid="link-skip-content"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a
            href="#top"
            className="group inline-flex items-center gap-2"
            data-testid="link-home"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl shine-border">
              <span className="font-mono text-xs text-foreground/90">LS</span>
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-foreground/90 md:inline">
              {PROFILE.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-card/60 ${
                    isActive
                      ? "bg-card/70 text-foreground"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="rounded-full"
              data-testid="button-email"
            >
              <a href={`mailto:${PROFILE.email}`} data-testid="link-email">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="hidden rounded-full md:inline-flex"
              data-testid="button-download-cv"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}
                data-testid="link-download-cv"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section id="top" className="grid gap-8 md:grid-cols-12" data-testid="section-hero">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.8, 0.2, 1] }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              Open to internships · 2026+
            </div>
            <h1
              className="mt-4 text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
              data-testid="text-hero-title"
            >
              Building calm, practical software — with a sharp edge for AI.
            </h1>
            <p
              className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              data-testid="text-hero-tagline"
            >
              {PROFILE.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Pill>
                <MapPin className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                <span data-testid="text-location">{PROFILE.location}</span>
              </Pill>
              <Pill>
                <GraduationCap className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                <span data-testid="text-degree">BSc Computing (2024–2028)</span>
              </Pill>
              <Pill>
                <Brain className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                <span data-testid="text-focus">Automation & data</span>
              </Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full"
                asChild
                data-testid="button-view-projects"
              >
                <a href="#projects" data-testid="link-view-projects">
                  View projects <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full"
                asChild
                data-testid="button-contact"
              >
                <a href="#contact" data-testid="link-contact">
                  Contact
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border/70 bg-background/30"
                asChild
                data-testid="button-github"
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  data-testid="link-github"
                  aria-label="GitHub (add your profile link)"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.21, 0.8, 0.2, 1] }}
            className="md:col-span-5"
          >
            <Card className="glass shine-border overflow-hidden rounded-3xl p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="text-sm text-muted-foreground"
                    data-testid="text-profile-role"
                  >
                    {PROFILE.role}
                  </div>
                  <div
                    className="mt-1 font-serif text-2xl tracking-tight"
                    data-testid="text-profile-name"
                  >
                    {PROFILE.name}
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="rounded-full border border-border/60 bg-card/60"
                  data-testid="badge-availability"
                >
                  2:1 projected
                </Badge>
              </div>

              <Separator className="my-5" />

              <div className="grid gap-3">
                <a
                  className="group flex items-center justify-between rounded-2xl border border-border/70 bg-card/40 px-4 py-3 transition-colors hover:bg-card/60"
                  href={`mailto:${PROFILE.email}`}
                  data-testid="link-contact-email"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background/30">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid="text-email"
                      >
                        {PROFILE.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  className="group flex items-center justify-between rounded-2xl border border-border/70 bg-card/40 px-4 py-3 transition-colors hover:bg-card/60"
                  href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                  data-testid="link-contact-phone"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background/30">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium">Phone</div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid="text-phone"
                      >
                        {PROFILE.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <div
                  className="rounded-2xl border border-border/70 bg-card/40 px-4 py-4"
                  data-testid="card-highlights"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Highlights
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="rounded-full" data-testid="badge-highlight-automation">
                      automation
                    </Badge>
                    <Badge className="rounded-full" data-testid="badge-highlight-ai">
                      AI
                    </Badge>
                    <Badge className="rounded-full" data-testid="badge-highlight-forecasting">
                      forecasting
                    </Badge>
                    <Badge className="rounded-full" data-testid="badge-highlight-rl">
                      reinforcement learning
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        <section id="projects" className="mt-14" data-testid="section-projects">
          <SectionHeading
            kicker="Selected work"
            title="Projects"
            icon={<Sparkles className="h-3.5 w-3.5 text-primary" />}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  <Card className="glass shine-border rounded-3xl p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-background/30">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <div
                            className="font-serif text-lg tracking-tight"
                            data-testid={`text-project-title-${idx}`}
                          >
                            {p.title}
                          </div>
                          <div
                            className="text-sm text-muted-foreground"
                            data-testid={`text-project-year-${idx}`}
                          >
                            {p.year}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="rounded-full border border-border/60 bg-card/60"
                        data-testid={`badge-project-${idx}`}
                      >
                        case study
                      </Badge>
                    </div>

                    <p
                      className="mt-4 text-sm leading-relaxed text-muted-foreground"
                      data-testid={`text-project-description-${idx}`}
                    >
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="rounded-full border-border/70 bg-background/20"
                          data-testid={`badge-project-tag-${idx}-${t
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mt-14" data-testid="section-experience">
          <SectionHeading
            kicker="Where I’ve worked"
            title="Experience"
            icon={<GitBranch className="h-3.5 w-3.5 text-primary" />}
          />

          <div className="grid gap-4">
            {EXPERIENCE.map((x, idx) => {
              const Icon = x.icon;
              return (
                <Card
                  key={x.company}
                  className="glass shine-border rounded-3xl p-5"
                  data-testid={`card-experience-${idx}`}
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-background/30">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <div className="text-sm text-muted-foreground">{x.year}</div>
                        <div
                          className="mt-1 font-serif text-lg tracking-tight"
                          data-testid={`text-experience-title-${idx}`}
                        >
                          {x.title}
                        </div>
                        <div
                          className="text-sm text-foreground/90"
                          data-testid={`text-experience-company-${idx}`}
                        >
                          {x.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <Badge
                        className="rounded-full"
                        variant="secondary"
                        data-testid={`badge-experience-${idx}`}
                      >
                        impact
                      </Badge>
                    </div>
                  </div>

                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                    {x.bullets.map((b, bi) => (
                      <li
                        key={b}
                        className="flex gap-2"
                        data-testid={`text-experience-bullet-${idx}-${bi}`}
                      >
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="skills" className="mt-14" data-testid="section-skills">
          <SectionHeading
            kicker="What I use"
            title="Skills"
            icon={<Brain className="h-3.5 w-3.5 text-primary" />}
          />

          <Card className="glass shine-border rounded-3xl p-5">
            <div className="grid gap-4 md:grid-cols-2">
              {SKILLS.map((s, idx) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/70 bg-card/40 p-4"
                  data-testid={`card-skill-${idx}`}
                >
                  <div
                    className="text-sm font-medium"
                    data-testid={`text-skill-label-${idx}`}
                  >
                    {s.label}
                  </div>
                  <div
                    className="mt-1 text-sm text-muted-foreground"
                    data-testid={`text-skill-detail-${idx}`}
                  >
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="education" className="mt-14" data-testid="section-education">
          <SectionHeading
            kicker="Background"
            title="Education"
            icon={<GraduationCap className="h-3.5 w-3.5 text-primary" />}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="glass shine-border rounded-3xl p-5" data-testid="card-edu-uni">
              <div className="text-sm text-muted-foreground">2024–2028</div>
              <div className="mt-1 font-serif text-lg tracking-tight">BSc Computing</div>
              <div className="text-sm text-foreground/90">Bournemouth University</div>
              <div className="mt-4 text-sm text-muted-foreground">
                Projected high 2:1.
              </div>
            </Card>
            <Card className="glass shine-border rounded-3xl p-5" data-testid="card-edu-alevels">
              <div className="text-sm text-muted-foreground">2019–2023</div>
              <div className="mt-1 font-serif text-lg tracking-tight">A Levels</div>
              <div className="text-sm text-foreground/90">Bedes Senior School</div>
              <div className="mt-4 text-sm text-muted-foreground">
                Ceramics, BTEC Business and IT — A, D, D
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="mt-14" data-testid="section-contact">
          <SectionHeading
            kicker="Let’s build something"
            title="Contact"
            icon={<Mail className="h-3.5 w-3.5 text-primary" />}
          />

          <Card className="glass shine-border rounded-3xl p-6">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="font-serif text-xl tracking-tight">Reach out</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I’m happy to chat about internships, project work, or anything around
                  automation, data, and applied AI.
                </p>

                <div className="mt-5 grid gap-3">
                  <a
                    className="group flex items-center justify-between rounded-2xl border border-border/70 bg-card/40 px-4 py-3 transition-colors hover:bg-card/60"
                    href={`mailto:${PROFILE.email}`}
                    data-testid="link-footer-email"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background/30">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-sm font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">{PROFILE.email}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    className="group flex items-center justify-between rounded-2xl border border-border/70 bg-card/40 px-4 py-3 transition-colors hover:bg-card/60"
                    href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                    data-testid="link-footer-phone"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background/30">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-sm font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">{PROFILE.phone}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-3xl border border-border/70 bg-background/20 p-5">
                  <div className="text-xs font-medium tracking-wide text-muted-foreground">
                    Quick summary
                  </div>
                  <div className="mt-3 grid gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Focus</span>
                      <span data-testid="text-summary-focus">AI · automation · data</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Tools</span>
                      <span data-testid="text-summary-tools">Python · SQL · JS</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Availability</span>
                      <span data-testid="text-summary-availability">Internships</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-xs text-muted-foreground">
                    References available on request.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="mt-14 pb-10">
          <div className="flex flex-col gap-3 border-t border-border/70 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground" data-testid="text-footer-copy">
              © {new Date().getFullYear()} {PROFILE.name}. Built with React.
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/20"
                data-testid="badge-footer-python"
              >
                Python
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/20"
                data-testid="badge-footer-sql"
              >
                SQL
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full border-border/70 bg-background/20"
                data-testid="badge-footer-js"
              >
                JavaScript
              </Badge>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
