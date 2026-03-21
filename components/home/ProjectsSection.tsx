// import { projects } from "./data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="animate-rise border-y border-[--line] bg-[color-mix(in_srgb,var(--surface-soft)_68%,white_32%)] px-0 py-16 [animation-delay:240ms] md:py-20"
    >
      <div className="mx-auto w-[92vw] max-w-7xl">
        <p className="mb-4 text-[0.72rem] uppercase tracking-[0.14em] text-[--ink-soft]">Selected projects</p>
        <h2 className="max-w-[20ch] font-(--font-playfair-display) text-3xl leading-tight md:text-5xl">
          Delivery with context, not templates.
        </h2>
        <div className="mt-6 overflow-hidden rounded-[0.8rem] border border-[--line]">
          {projects.map((project) => (
            <article
              key={project.name}
              className="grid gap-3 border-t border-[--line] bg-[--surface] px-5 py-4 first:border-t-0 md:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <h3 className="font-(--font-playfair-display) text-xl">{project.name}</h3>
                <p className="mt-1 text-[--ink-soft]">{project.type}</p>
              </div>
              <p className="text-[--ink-soft]">{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
