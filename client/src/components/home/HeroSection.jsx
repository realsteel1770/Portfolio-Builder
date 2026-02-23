import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PROFILE } from "@/data/portfolioData";

export function HeroSection() {
  return (
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
            <a href="https://www.linkedin.com/in/leo-steel-630182355/">Linkedin <Linkedin className="ml-2 h-5 w-5" /></a>
          </Button>
          <Button size="lg" className="rounded-full h-14 px-8" asChild>
            <a href="/Leo_Steel_CV.pdf" download>Download CV <Download className="ml-2 h-5 w-5" /></a>
          </Button>
          <Button size="lg" className="rounded-full h-14 px-8" asChild>
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
  );
}