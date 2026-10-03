import { PageWidth, SectionHeading } from "./common";

export default function AboutSection() {
  return (
    <section className="border-t border-line py-[69px] md:py-[95px]" id="about">
      <PageWidth>
        <SectionHeading number="01">A little about me</SectionHeading>
        <div className="ml-12 mt-[35px] grid grid-cols-1 gap-[27px] md:ml-[4.5rem] md:mt-[52px] md:grid-cols-[1fr_0.9fr] md:gap-[50px] lg:gap-[95px]">
          <div>
            <p className="m-0 max-w-[475px] text-[25px] font-normal leading-[1.47] tracking-[-0.05em] md:text-[clamp(22px,3vw,32px)]">
              I&apos;m a developer who enjoys figuring out how things fit
              together — a thoughtful interface, a dependable API, and the
              details that make both feel right.
            </p>
          </div>
          <div className="text-xs leading-[1.9] text-secondary md:text-[13px]">
            <p className="mb-[18px] mt-0">
              I like building full-stack products that solve everyday problems,
              especially tools that make useful information easier to
              understand. My work spans React and Next.js on the frontend,
              Node.js and Express on the backend, and databases such as MongoDB
              and Firebase.
            </p>
            <p className="mb-[18px] mt-0">
              Lately, I&apos;ve been exploring better ways to structure
              applications, work with data, and build interfaces that stay
              simple as a product grows. I learn by making things, testing
              assumptions, and coming back to refine the rough edges.
            </p>
            <p className="mt-7 flex gap-[10px] text-xs leading-[1.65] text-green-dark">
              <span className="text-green" aria-hidden="true">
                ↳
              </span>
              Small personal detail to add — a habit, interest, or side project
              that feels like you.
            </p>
          </div>
        </div>
      </PageWidth>
    </section>
  );
}
