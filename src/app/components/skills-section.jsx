import { PageWidth, SectionHeading, SectionIntro } from "./common";

const categoryIcons = {
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 8h18M7 6h.01M10 6h.01" />
    </>
  ),
  backend: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1" />
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <path d="M7 7h.01M7 17h.01M10 7h6M10 17h6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  programming: <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />,
  tools: (
    <path d="M14.5 6.5a5 5 0 0 0-6.9 6.9l-5 5a2.1 2.1 0 1 0 3 3l5-5a5 5 0 0 0 6.9-6.9l-3 3-3-3 3-3Z" />
  ),
};

function CategoryIcon({ name }) {
  return (
    <svg
      className="h-[21px] w-[21px] text-green"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {categoryIcons[name]}
    </svg>
  );
}

function SkillMark({ mark }) {
  return (
    <svg className="h-[29px] w-[29px]" viewBox="0 0 36 36" aria-hidden="true">
      <rect
        x="0.5"
        y="0.5"
        width="35"
        height="35"
        rx="1"
        fill="none"
        stroke="var(--line)"
      />
      <text
        x="18"
        y="19"
        fill="var(--green-dark)"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="11"
        fontWeight="600"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {mark}
      </text>
    </svg>
  );
}

function SkillCard({ group, index }) {
  return (
    <article
      className={`min-w-0 border border-line bg-paper p-[17px] md:p-[21px] ${
        index === 0 ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-[15px] flex min-h-[27px] items-center justify-between">
        <CategoryIcon name={group.icon} />
        <span className="font-mono text-[9px] text-muted">
          0{index + 1} / 05
        </span>
      </div>
      <h3 className="mb-[17px] text-[15px] font-medium tracking-[-0.025em]">
        {group.category}
      </h3>
      <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0 md:gap-[9px]">
        {group.items.map(([skill, mark]) => (
          <li
            className="inline-flex min-h-[39px] items-center gap-2 border border-line py-[3px] pl-1 pr-[9px] text-[10px] text-secondary"
            key={skill}
          >
            <SkillMark mark={mark} />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function SkillsSection({ skills }) {
  return (
    <section
      className="border-t border-line bg-paper-deep py-[69px] md:py-[95px]"
      id="skills"
    >
      <PageWidth>
        <SectionHeading number="02">Tools of the trade</SectionHeading>
        <SectionIntro aside="Familiar tools, always learning">
          A practical toolkit for taking ideas from interface to implementation.
        </SectionIntro>
        <div className="ml-12 mt-[29px] grid grid-cols-1 gap-3 md:ml-[4.5rem] md:mt-[37px] md:grid-cols-2">
          {skills.map((group, index) => (
            <SkillCard group={group} index={index} key={group.category} />
          ))}
        </div>
      </PageWidth>
    </section>
  );
}
