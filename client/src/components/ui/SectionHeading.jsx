
export function SectionHeading({ kicker, title, icon }) {
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