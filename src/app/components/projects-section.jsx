import { PageWidth, SectionHeading, SectionIntro } from "./common";

function ProjectCard({ project }) {
  return (
    <article className="grid grid-cols-[39px_minmax(0,1fr)] border-b border-line py-[29px] md:grid-cols-[4.5rem_minmax(0,1fr)] md:py-[39px]">
      <span className="pt-1 font-mono text-[10px] text-green">
        {project.number}
      </span>
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-5">
          <div>
            <p className="mb-[9px] mt-0 font-mono text-[9px] uppercase tracking-[0.045em] text-muted">
              {project.type}
            </p>
            <h3 className="m-0 text-[23px] font-medium tracking-[-0.055em] md:text-[30px]">
              {project.name}
            </h3>
          </div>
          {project.github ? (
            <a
              className="grid h-[34px] w-[34px] shrink-0 place-items-center border border-line text-[15px] text-green transition-colors hover:bg-green-dark hover:text-button"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} on GitHub`}
            >
              ↗
            </a>
          ) : (
            <span
              className="grid h-[34px] w-[34px] shrink-0 place-items-center border border-line text-[15px] text-green"
              aria-hidden="true"
            >
              ↗
            </span>
          )}
        </div>
        <p className="mt-4 max-w-[600px] text-[13px] leading-[1.8] text-secondary">
          {project.description}
        </p>
        <div className="mt-[22px] grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.045em] text-muted">
              What it does
            </p>
            <ul className="m-0 grid list-none gap-2 p-0">
              {project.features.map((feature) => (
                <li
                  className="relative pl-[14px] text-[11px] leading-[1.55] text-secondary before:absolute before:left-0 before:top-[7px] before:h-1 before:w-1 before:bg-green"
                  key={feature}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.045em] text-muted">
              Built with
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0">
              {project.stack.map((technology) => (
                <li
                  className="border border-line px-[7px] py-[5px] text-[10px] text-secondary"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[22px] flex flex-wrap gap-[18px] font-mono text-[9px] uppercase text-muted">
          {project.github ? (
            <a
              className="transition-colors hover:text-green-dark"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
          ) : (
            <span>GitHub URL to add</span>
          )}
          {project.demo ? (
            <a
              className="transition-colors hover:text-green-dark"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo ↗
            </a>
          ) : (
            <span>Demo URL to add</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection({ projects }) {
  return (
    <section className="border-t border-line py-[69px] md:py-[95px]" id="projects">
      <PageWidth>
        <SectionHeading number="03">Selected projects</SectionHeading>
        <SectionIntro aside={`${projects.length.toString().padStart(2, "0")} projects`}>
          A few ideas made tangible. Each project started with a problem worth
          understanding.
        </SectionIntro>
        <div className="mt-[27px] border-t border-line md:mt-[39px]">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
        <p className="ml-[39px] mt-[17px] text-[10px] leading-[1.7] text-muted md:ml-[4.5rem]">
          Project repositories and live demos are placeholders until links are
          added.
        </p>
      </PageWidth>
    </section>
  );
}
