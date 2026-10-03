import { PageWidth, SectionHeading } from "./common";

export default function ExperienceSection() {
  return (
    <section
      className="border-t border-line bg-paper-deep py-[69px] md:py-[95px]"
      id="experience"
    >
      <PageWidth>
        <SectionHeading number="04">Experience &amp; education</SectionHeading>
        <div className="ml-12 mt-[35px] grid grid-cols-1 gap-[27px] md:ml-[4.5rem] md:mt-[50px] md:grid-cols-[1fr_1.35fr] md:gap-[36px]">
          <p className="m-0 max-w-[270px] text-[22px] font-normal leading-[1.45] tracking-[-0.05em] md:text-2xl">
            The things I&apos;ve learned along the way.
          </p>
          <div className="grid grid-cols-[10px_1fr] items-start gap-3 pt-[5px] md:grid-cols-[10px_1fr_auto] md:gap-[15px]">
            <span
              className="mt-0.5 h-[7px] w-[7px] rounded-full bg-green"
              aria-hidden="true"
            />
            <div>
              <p className="mb-[10px] mt-0 font-mono text-[9px] uppercase tracking-[0.045em]">
                Your background goes here
              </p>
              <p className="m-0 max-w-[380px] text-xs leading-[1.8] text-secondary">
                Add your education, internships, certifications, or relevant
                experience. Nothing is assumed or invented.
              </p>
            </div>
            <span className="col-start-2 font-mono text-[9px] uppercase text-muted md:col-start-auto">
              To be added
            </span>
          </div>
        </div>
      </PageWidth>
    </section>
  );
}
