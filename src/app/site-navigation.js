"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const THEME_CHANGE_EVENT = "portfolio-theme-change";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

function subscribeToTheme(onStoreChange) {
  document.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => document.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="inline-flex min-h-[35px] items-center gap-[7px] border border-line bg-transparent px-[10px] text-[10px] text-secondary transition-colors hover:border-green hover:text-ink"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg
          className="h-[15px] w-[15px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg
          className="h-[15px] w-[15px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" />
        </svg>
      )}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default function SiteNavigation({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <header className="relative z-10 border-b border-line">
      <nav
        className="relative mx-auto flex min-h-[66px] w-[calc(100%-2.5rem)] max-w-[1120px] items-center justify-between md:min-h-[76px] md:w-[calc(100%-4rem)]"
        aria-label="Main navigation"
      >
        <a
          className="inline-flex items-center gap-[10px] text-[13px] font-semibold tracking-[-0.03em]"
          href="#home"
          onClick={closeMenu}
        >
          <span
            className="grid h-[30px] w-[30px] place-items-center border border-green font-mono text-[13px] text-green"
            aria-hidden="true"
          >
            s.
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="order-2 flex items-center gap-3 md:order-none md:contents">
          <div className="md:hidden">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-line bg-transparent md:hidden"
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-links"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span
              className={`h-px w-[15px] bg-ink transition-transform ${
                isOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-[15px] bg-ink transition-transform ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-[-20px] right-[-20px] top-full z-20 flex-col gap-0 border-b border-line bg-paper px-5 pb-[15px] pt-2 md:static md:flex md:flex-row md:items-center md:gap-[29px] md:border-0 md:bg-transparent md:p-0`}
          id="primary-links"
        >
          <a
            className="border-b border-line-soft py-3 text-[13px] text-ink md:border-0 md:p-0 md:text-xs"
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
          {links.map(([label, href]) => (
            <a
              className="border-b border-line-soft py-3 text-[13px] text-secondary transition-colors hover:text-ink last:border-0 md:border-0 md:p-0 md:text-xs"
              key={href}
              href={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>

        <span className="hidden items-center gap-2 text-[11px] text-muted lg:flex">
          <span className="h-[7px] w-[7px] rounded-full bg-green" />
          Open to opportunities
        </span>
        <div className="hidden md:block">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </nav>
    </header>
  );
}
