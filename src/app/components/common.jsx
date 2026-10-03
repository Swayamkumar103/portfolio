export function PageWidth({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-[calc(100%-2.5rem)] max-w-[1120px] md:w-[calc(100%-4rem)] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ number, children }) {
  return (
    <div className="grid grid-cols-[3rem_1fr] items-start md:grid-cols-[4.5rem_1fr]">
      <span className="pt-1.5 font-mono text-[9px] uppercase tracking-[0.045em] text-green md:pt-2 md:text-[10px]">
        {number}
      </span>
      <h2 className="m-0 text-[clamp(1.8rem,4vw,2.7rem)] font-medium leading-[1.15] tracking-[-0.065em]">
        {children}
      </h2>
    </div>
  );
}

export function SectionIntro({ children, aside }) {
  return (
    <div className="ml-12 mt-5 flex flex-col gap-2 md:ml-[4.5rem] md:flex-row md:items-baseline md:justify-between md:gap-6">
      <p className="m-0 text-[13px] leading-[1.7] text-secondary">{children}</p>
      <span className="font-mono text-[9px] uppercase text-muted">{aside}</span>
    </div>
  );
}
