import { PageWidth } from "./common";

function ContactLink({ label, href, children }) {
  const isEmail = href.startsWith("mailto:");

  return (
    <div className="flex justify-between gap-4 border-b border-line py-[14px]">
      <span className="font-mono text-[10px] uppercase tracking-[0.045em] text-muted">
        {label}
      </span>
      <a
        className="break-all text-right text-[11px] text-secondary transition-colors hover:text-green-dark sm:text-xs"
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noreferrer"}
      >
        {children}
      </a>
    </div>
  );
}

export default function ContactSection({ profile }) {
  return (
    <section className="pb-0 pt-[26px] md:pt-[35px]" id="contact">
      <PageWidth>
        <div className="flex justify-between gap-3 border-b border-line pb-[18px] font-mono text-[8px] uppercase tracking-[0.045em] text-muted md:text-[9px]">
          <span>05 / Contact</span>
          <span>Have a good one in mind?</span>
        </div>
        <div className="grid grid-cols-1 gap-[37px] py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-[70px] md:py-[70px]">
          <div>
            <h2 className="m-0 text-[clamp(2.8rem,12vw,3.8rem)] font-medium leading-[1.06] tracking-[-0.075em] md:text-[clamp(2.5rem,6vw,4.125rem)]">
              Let&apos;s make
              <br />
              something <span className="text-green">useful.</span>
            </h2>
            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.8] text-secondary">
              If you&apos;d like to talk about a project, share an idea, or just
              say hello, I&apos;d be glad to hear from you.
            </p>
          </div>
          <div className="w-full self-end">
            <ContactLink
              label="Email"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </ContactLink>
            <ContactLink label="GitHub" href={profile.github}>
              github.com/Swayamkumar103 ↗
            </ContactLink>
            <ContactLink label="LinkedIn" href={profile.linkedin}>
              linkedin.com/in/103swayam ↗
            </ContactLink>
            <a
              className="mt-[22px] inline-flex gap-[10px] text-[11px] text-green-dark"
              href="#home"
            >
              Back to the top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
        <footer className="flex flex-wrap justify-between gap-[18px] border-t border-line py-[19px] text-[9px] text-muted md:text-[10px]">
          <span>© 2026 {profile.name}</span>
          <span>Designed &amp; built with care</span>
          <a className="hover:text-green-dark" href="#home">
            Back to top ↑
          </a>
        </footer>
      </PageWidth>
    </section>
  );
}
