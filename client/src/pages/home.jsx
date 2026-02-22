import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Github,
  GitBranch,
  GraduationCap,
  BookOpen,
  Sparkles,
  Trophy,
  Download,
  Mail,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// UI Component Imports
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ----------------------------------------------------------------------
// DATA CONFIGURATION
// ----------------------------------------------------------------------

const PROFILE = {
  name: "Leo Steel",
  role: "Computing undergraduate",
  tagline: "Computing undergraduate at Bournemouth University with experience in software development, automation, and data-driven systems through industry roles and university projects. Strong problem-solving skills demonstrated through applied AI, machine learning, and full-stack development projects.",
  location: "Bournemouth, UK",
  email: "leowsteel@gmail.com",
};

const SKILLS = [
  { label: "Python", detail: "Pandas, NumPy, Matplotlib, Seaborn" },
  { label: "SQL", detail: "Querying, Schema design" },
  { label: "JavaScript", detail: "React, Node patterns" },
  { label: "Data & AI", detail: "Analysis, Regression, Dashboards" },
  { label: "Concepts", detail: "SDLC, Automation, APIs" },
];

const EXPERIENCE = [
  {
    company: "Volklec",
    title: "Applied Technology & AI",
    year: "2025",
    bullets: [
      "Automated SIOP workflows by integrating AI-driven logic with custom scripts to eliminate manual data entry errors",
      "Simulation models to stress-test inventory levels and operational capacity.",
      "Sales pipeline dashboard that aggregated real-time data to improve forecasting accuracy.",
    ],
    icon: Brain,
  },
  {
    company: "Rebbeck Brothers / My Fire Door LTD",
    title: "IT Support",
    year: "2025",
    bullets: [
      "Migrated physical paper records into a structured relational digital filing system.",
      "AI filtering tools to analyse market data and identify client leads.",
      "Targeted email marketing campaigns using data-driven lead selection.",
    ],
    icon: GitBranch,
  },
  {
    company: "Gold Arrow Camp (California)",
    title: "Waterfront Counsellor",
    year: "2023",
    bullets: [
      "Waterfront activities for groups of children aged 6–16, maintaining safety.",
      "Collaborative teamwork exercises designed to build confidence.",
      "Developed leadership and problem-solving skills by managing group dynamics."
    ],
    icon: Trophy,
  },
];

const PROJECTS = [
  {
    title: "Conversational AI Chatbot",
    year: "2025",
    tags: ["Express.js", "REST API", "Semantic Matching"],
    description: "Full-stack chatbot with semantic matching and accessibility-first frontend.",
    longDescription: "Developed a robust full-stack chatbot using Express.js and REST APIs. The system utilizes a three-layer response architecture: small talk, semantic matching, and AI fallback. Accessibility was a primary focus, validated using WAVE automation tools.",
    icon: Bot,
    links: [
      { label: "Live Demo", url: "/chatbot", type: "primary", icon: Bot },
      { label: "Source Code", url: "https://github.com/realsteel1770/historical-Chatbot", type: "secondary", icon: Github }
    ]
  },
  {
    title: "Air Quality Forecasting System",
    year: "2025",
    tags: ["Python", "Regression", "Visualization"],
    description: "Forecasts AQI using big-data pipeline and regression models.",
    longDescription: "Engineered a big data pipeline to analyze environmental datasets. Applying machine learning through regression analysis, the system successfully forecasts trends in the Air Quality Index. Findings were summarized in a technical report for Bournemouth University faculty.",
    icon: Brain,
    links: [
      { label: "Read Technical Report", url: "/Big_Data_Engineering_and_Analytics.pdf", type: "primary", icon: BookOpen },
      { label: "View Heatmaps", url: "air_quality_correlation_heatmap.png", type: "secondary", icon: Sparkles },
      { label: "Source Code", url: "https://github.com/realsteel1770/AirQualityforecasting", type: "secondary", icon: Github }
    ]
  },
  {
    title: "AWS DeepRacer Competition",
    year: "2025",
    tags: ["Reinforcement Learning", "AWS", "Model Optimisation", "Python"],
    description: "Autonomous racing models designed and optimised using reinforcement learning.",
    longDescription: "Representing Bournemouth University at the MOD Corsham competition, I designed and iteratively optimised autonomous racing models using reinforcement learning principles.",
    icon: Trophy,
  },
  {
    title: "Hackathon (Bournemouth University)",
    year: "2024",
    tags: ["Rapid Prototyping", "UI/UX Design", "Applied AI", "teamwork"],
    description: "Rapidly developed prototypes focusing on sustainability and conversational AI challenges.",
    longDescription: "Participating in multiple hackathons at Bournemouth University, I led technical development for prototypes addressing sustainability and AI challenges. These projects required fast-paced iteration, moving from initial concept to a demo-ready user interface within 24–48 hours. The work focused on solving real-world problems through innovative software design and functional UI polish.",
    icon: GitBranch,
  },
  {
    title: "BAE Systems Referral Prototype (CIB Week)",
    year: "2024",
    tags: ["SQL Design", "Systems Analysis", "Stakeholder Research", "Prototyping"],
    description: "A research-led system prototype designed to modernise referral workflows for BAE Systems.",
    longDescription: "Collaborated during CIB Week to design a functional referral system prototype for BAE Systems. The process involved conducting stakeholder research and thorough systems analysis to identify technical requirements. I architected the underlying SQL database structure and presented the final technical solution to a panel of industry professionals.",
    icon: ArrowUpRight,
  },
];

const EDUCATION = [
  {
    institution: "Bournemouth University",
    degree: "BSc Computing",
    period: "2024 – 2028",
    detail: "Projected high 2:1",
    highlights: ["Applied AI", "Machine Learning", "Full-stack Dev"],
    icon: GraduationCap,
  },
  {
    institution: "Bedes Senior School",
    degree: "A Levels",
    period: "2019 – 2023",
    detail: "Ceramics, BTEC Business & IT — A, Distinction, Distinction",
    highlights: ["BTEC Level 3 National Certificate in IT", "BTEC Level 3 National Certificate in Business"],
    icon: BookOpen,
  },
];

// ----------------------------------------------------------------------
// CUSTOM HOOKS
// ----------------------------------------------------------------------

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -72% 0px", threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

function SectionHeading({ kicker, title, icon }) {
  return (
    <div className="mb-10">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-primary/80 font-bold">
        {icon}
        {kicker}
      </div>
      <h2 className="font-serif text-4xl">{title}</h2>
    </div>
  );
}
// ----------------------------------------------------------------------
// MAIN PAGE COMPONENT
// ----------------------------------------------------------------------

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionIds = useMemo(() => ["top", "projects", "experience", "skills", "education"], []);
  const active = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen text-white bg-black selection:bg-primary/30">
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-2">
        <nav className="glass px-4 py-2 flex items-center justify-between rounded-full border border-white/5 bg-white/10 backdrop-blur-lg">
          <a href="#top" className="h-10 w-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/profile pic.JPG" alt="Profile" className="w-full h-full object-cover" />
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
            {["projects", "experience", "skills", "education"].map((id) => (
              <a 
                key={id} 
                href={`#${id}`} 
                className={`capitalize hover:text-primary transition-colors ${active === id ? "text-primary font-bold" : ""}`}
              >
                {id}
              </a>
            ))}
          </div>
          <a href={`mailto:${PROFILE.email}`} className="bg-primary text-black px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Contact
          </a>
        </nav>
      </header>

      <main className="pt-40 max-w-5xl mx-auto px-4 pb-20">
        {/* HERO SECTION */}
        <section id="top" className="mb-32 grid md:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary mb-8 shadow-lg shadow-primary/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative h-3 w-3 rounded-full bg-primary"></span>
              </span>
              Available for 2026 Placement
            </div>
            <h1 className="text-6xl font-serif leading-tight">
              Leo <span className="text-primary italic">William</span> Steel.
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">{PROFILE.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full h-14 px-8" asChild>
                <a href="#projects">Explore Work <ArrowUpRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button size="lg" className="rounded-full h-14 px-8" asChild>
                <a href="/Leo_Steel_CV.pdf" download>Download CV <Download className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button size="lg" className="rounded-full h-14 px-8 " asChild>
                <a href="https://github.com/realsteel1770" target="_blank" rel="noreferrer">
                  GitHub <Github className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="md:col-span-4">
            <Card className="glass p-8 rounded-3xl border-white/10 bg-white/5 text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/profile pic.JPG" alt="Leo Steel" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif">{PROFILE.name}</h3>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest font-bold">{PROFILE.role}</p>
            </Card>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mt-20 scroll-mt-32">
          <SectionHeading kicker="PORTFOLIO" title="Featured Projects" icon={<Sparkles className="w-4 h-4" />} />
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title} onClick={() => setSelectedProject(p)} className="glass p-6 rounded-3xl cursor-pointer border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 rounded-xl">
                    <p.icon className="text-primary" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{p.year}</span>
                </div>
                <h3 className="text-xl font-serif mt-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{p.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mt-32 scroll-mt-32">
          <SectionHeading kicker="JOURNEY" title="Experience" icon={<GitBranch className="w-4 h-4" />} />
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
        {/* EDUCATION SECTION */}
        <section id="education" className="mt-32 scroll-mt-32">
          <SectionHeading kicker="LEARNING" title="Education" icon={<GraduationCap className="w-4 h-4" />} />
          
          <div className="border-l border-white/10 pl-10 space-y-16 ml-4">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node with Glow effect on hover */}
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

                {/* Highlights Badges */}
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

        {/* PROJECT DIALOG (MODAL) */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass rounded-3xl p-0 max-w-2xl border-white/10 bg-black/95 backdrop-blur-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div className="p-8 md:p-10"> 
                <DialogHeader className="mb-6">
                  <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <selectedProject.icon className="h-7 w-7 text-primary" />
                  </div>
                  <DialogTitle className="text-3xl font-serif text-white">{selectedProject.title}</DialogTitle>
                  <p className="text-primary font-mono text-sm tracking-widest uppercase mt-1">{selectedProject.year}</p>
                </DialogHeader>
                <DialogDescription className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.longDescription}
                </DialogDescription>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map(tag => (
                    <Badge key={tag} className="bg-white/5 border-white/10 text-white px-4 py-1 rounded-full text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  {selectedProject.links?.map((link, idx) => {
                    const isInternal = link.url.startsWith("/");
                    return (
                      <Button 
                        key={idx} 
                        asChild 
                        size="lg"
                        className={`w-full rounded-full h-14 px-8 ${
                          link.type === "primary" 
                            ? "bg-primary text-black" 
                            : "bg-white/5 border border-white/10 text-white"
                        }`}
                      >
                        {isInternal ? (
                          <Link to={link.url}>
                            {link.label} <link.icon className="ml-2 w-5 h-5" />
                          </Link>
                        ) : (
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label} <link.icon className="ml-2 w-5 h-5" />
                          </a>
                        )}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      {/* FOOTER-STYLE CONTACT SECTION */}
      <section id="contact" className="mt-60 scroll-mt-32 text-center pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl mb-8 text-white">Let's connect.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Currently seeking a 2026 industrial placement. I'm always open to 
            discussing new projects or technical roles.
          </p>

          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-12 h-16 text-lg font-medium bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <a href={`mailto:${PROFILE.email}`}>Email me directly</a>
          </Button>

          <div className="mt-40">
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground/50 uppercase font-mono">
              © 2026 {PROFILE.name.toUpperCase()} — DESIGNED WITH FOCUS.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}