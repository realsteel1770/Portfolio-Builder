import { PROFILE } from "@/data/portfolioData";

export function NavBar({ active }) {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-2">
      <nav className="glass px-4 py-2 flex items-center justify-between rounded-full border border-white/5 bg-white/10 backdrop-blur-lg">
        <a href="#top" className="h-10 w-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
          <img src="/profile pic.JPG" alt="Profile" className="w-full h-full object-cover" />
        </a>
        
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          {["Chat", "projects", "Events", "experience", "skills", "education"].map((id) => (
            <a 
              key={id}
              href={`#${id}`}
              className={`capitalize hover:text-primary transition-colors ${
                active === id ? "text-primary font-bold" : "text-white/70"
              }`}
            >
              {id === "Events" ? "Events" : id} 
            </a>
          ))}
        </div>

        <a 
          href={`mailto:${PROFILE.email}`} 
          className="bg-primary text-black px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}