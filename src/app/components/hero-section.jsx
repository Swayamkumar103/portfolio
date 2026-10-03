import { PageWidth } from "./common";

function SocialLink({ href, children }) {
  return (
    <a
      className="transition-colors hover:text-green-dark"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children} ↗
    </a>
  );
}

function CodeNote() {
  return (
    <div className="border border-line bg-panel">
      <div className="flex min-h-[42px] items-center justify-between border-b border-line-soft px-[17px] font-mono text-[9px] text-muted">
        <span>working-notes.js</span>
        <span>01 — 12</span>
      </div>
      <pre className="m-0 overflow-x-auto px-[22px] py-[27px] font-mono text-[11px] leading-[1.95] text-code-ink sm:text-xs">
        <code>
          <span className="text-code-green">const</span> approach = {"{"}
          {"\n"}
          {"  "}curiosity: <span className="text-code-amber">&quot;always&quot;</span>,
          {"\n"}
          {"  "}details: <span className="text-code-amber">&quot;matter&quot;</span>,
          {"\n"}
          {"  "}ship: <span className="text-code-amber">&quot;with care&quot;</span>,
          {"\n"}
          {"};"}
          {"\n\n"}
          <span className="text-code-green">function</span> build(idea) {"{"}
          {"\n"}
          {"  "}
          <span className="text-code-muted">
            {"// make it useful, then make it better"}
          </span>
          {"\n"}
          {"  "}
          <span className="text-code-green">return</span> idea;
          {"\n"}
          {"}"}
        </code>
      </pre>
      <div className="flex min-h-[39px] items-center justify-between border-t border-line-soft px-[17px] font-mono text-[9px] text-muted">
        <span>Made with intent</span>
        <span className="h-[11px] w-1.5 bg-green" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function HeroSection({ profile }) {
  return (
    <PageWidth>
      <section
        className="relative grid gap-[45px] py-[69px] pb-[93px] md:min-h-[570px] md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-[34px] md:py-[90px] md:pb-[115px] lg:min-h-[625px] lg:gap-[55px] lg:py-[90px] lg:pb-[115px]"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="pt-1">
          <p className="mb-[23px] flex items-center gap-[10px] font-mono text-[10px] uppercase tracking-[0.045em] text-muted md:mb-7">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-green" />
            Developer portfolio <span className="text-subtle">/</span> 2026
          </p>
          <h1
            className="m-0 text-[clamp(2.75rem,13vw,4.25rem)] font-medium leading-[0.99] tracking-[-0.085em] md:text-[clamp(3.1rem,7vw,4.1rem)] lg:text-[clamp(3.5rem,6.4vw,4.75rem)]"
            id="hero-title"
          >
            {profile.name}
            <span className="text-green">.</span>
          </h1>
          <p className="animate-typing mt-[17px] w-fit overflow-hidden whitespace-nowrap border-r-2 border-green pr-1 text-[21px] font-normal tracking-[-0.045em] text-green-dark md:mt-[22px] md:text-[25px] typing">
            {profile.role}
          </p>
          <p className="mt-5 max-w-[430px] text-sm leading-[1.85] text-secondary md:text-[15px]">
            I build thoughtful web and mobile experiences, from the first
            interface to the data behind it. I care about making software
            useful, clear, and a little easier to use.
          </p>
          <div className="mt-[29px] flex flex-wrap items-center gap-3">
            <a
              className="inline-flex min-h-[43px] items-center justify-center gap-[18px] bg-green-dark px-4 text-xs text-button transition-colors hover:bg-green-hover"
              href="#projects"
            >
              View projects <span aria-hidden="true">↘</span>
            </a>
            <a
              className="inline-flex min-h-[43px] items-center justify-center border border-line px-4 text-xs text-ink transition-colors hover:border-green hover:text-green-dark"
              href="#contact"
            >
              Contact me
            </a>
          </div>
          <div
            className="mt-[27px] flex flex-wrap items-center gap-[10px] text-[11px] text-muted"
            aria-label="Social profiles"
          >
            <SocialLink href={profile.github}>GitHub</SocialLink>
            <span className="text-subtle" aria-hidden="true">
              /
            </span>
            <SocialLink href={profile.linkedin}>LinkedIn</SocialLink>
          </div>
        </div>
        <div className="w-full max-w-[440px] md:max-w-[388px] md:justify-self-end">
          <CodeNote />
          <p className="mt-[15px] text-[11px] text-muted">
            Good software starts with asking better questions.
          </p>
        </div>
        <a
          className="absolute bottom-[29px] left-0 flex items-center gap-[11px] font-mono text-[9px] uppercase text-muted md:bottom-[34px]"
          href="#about"
        >
          <span className="h-px w-[31px] bg-green" aria-hidden="true" />
          Scroll to explore
        </a>
        <span className="absolute bottom-[29px] right-0 font-mono text-[10px] uppercase text-muted md:bottom-[34px]">
          01 / 06
        </span>
      </section>
    </PageWidth>
  );
}
