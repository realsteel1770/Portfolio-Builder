import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function ProjectDialog({ project, onClose }) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="glass rounded-3xl p-0 max-w-2xl border-white/10 bg-black/95 backdrop-blur-2xl max-h-[90vh] overflow-y-auto">
        {project && (
          <div className="p-8 md:p-10">
            <DialogHeader className="mb-6">
              <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <project.icon className="h-7 w-7 text-primary" />
              </div>
              <DialogTitle className="text-3xl font-serif text-white">{project.title}</DialogTitle>
              <p className="text-primary font-mono text-sm tracking-widest uppercase mt-1">{project.year}</p>
            </DialogHeader>
            <DialogDescription className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.longDescription}
            </DialogDescription>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map(tag => (
                <Badge key={tag} className="bg-white/5 border-white/10 text-white px-4 py-1 rounded-full text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {project.links?.map((link, idx) => {
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
  );
}