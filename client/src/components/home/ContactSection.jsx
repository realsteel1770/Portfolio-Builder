import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/data/portfolioData";

export function ContactSection() {
  return (
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
  );
}