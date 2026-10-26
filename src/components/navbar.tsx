"use client";
import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getSectionLinks } from "@/lib/section-links";

function positionIndicator(container: HTMLDivElement | null) {
  if (!container) return;
  const indicator = container.querySelector<HTMLElement>(
    "[data-nav-indicator]",
  );
  const active = container.querySelector<HTMLElement>(
    'a[aria-current="location"]',
  );
  if (!indicator) return;
  if (!active || !container.getClientRects().length) {
    indicator.dataset.visible = "false";
    return;
  }
  const vertical = container.dataset.orientation === "vertical";
  indicator.style.width = `${vertical ? 24 : active.offsetWidth}px`;
  indicator.style.transform = `translate(${active.offsetLeft + (vertical ? 12 : 0)}px, ${active.offsetTop + active.offsetHeight - 5}px)`;
  indicator.dataset.visible = "true";
}

export default function Navbar({
  dict,
  locale,
  resume,
}: {
  dict: Dictionary;
  locale: Locale;
  resume: string | null;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLAnchorElement>(null);
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);
  const focusOnOpen = useRef(false);
  const links = getSectionLinks(dict);
  useLayoutEffect(() => {
    positionIndicator(desktopLinksRef.current);
    positionIndicator(mobileLinksRef.current);
  }, [activeSection, menuOpen]);
  useEffect(() => {
    if (!("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(() => {
      positionIndicator(desktopLinksRef.current);
      positionIndicator(mobileLinksRef.current);
    });
    if (desktopLinksRef.current) observer.observe(desktopLinksRef.current);
    if (mobileLinksRef.current) observer.observe(mobileLinksRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const sections = ["projetos", "sobre", "stack", "contato"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;
    const update = () => {
      frame = 0;
      const position = scrollY + 140;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= position) current = section.id;
      }
      if (
        scrollY > 0 &&
        innerHeight + scrollY >= document.documentElement.scrollHeight - 4
      )
        current = "contato";
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    if (focusOnOpen.current) {
      firstRef.current?.focus();
      focusOnOpen.current = false;
    }
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const pointerdown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", pointerdown);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("pointerdown", pointerdown);
    };
  }, [menuOpen]);
  useEffect(() => {
    const media = matchMedia("(min-width: 768px)");
    const change = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    focusOnOpen.current = event.detail === 0;
    setMenuOpen((open) => !open);
  };
  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    const section = document.querySelector<HTMLElement>(
      event.currentTarget.hash,
    );
    // Transfer focus to the destination after the disclosure closes.
    requestAnimationFrame(() => {
      section?.focus({ preventScroll: true });
    });
  };
  return (
    <nav
      ref={navRef}
      aria-label={dict.nav.label}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="brand"
          aria-label={`GA. — ${dict.footer.top}`}
        >
          GA<span>.</span>
        </a>
        <div
          ref={desktopLinksRef}
          className="desktop-section-links hidden items-center gap-5 text-sm md:flex lg:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="nav-link"
              aria-current={activeSection === link.key ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
          <span
            data-nav-indicator
            className="nav-indicator"
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center gap-3">
          <div
            aria-label={dict.nav.language}
            className="flex items-center rounded-full border border-border p-1 text-xs font-medium"
          >
            <Link
              href="/"
              prefetch={false}
              hrefLang="pt-BR"
              lang="pt-BR"
              aria-label="PT — Português (Brasil)"
              aria-current={locale === "pt-BR" ? "page" : undefined}
              className={`language-link ${locale === "pt-BR" ? "active" : ""}`}
            >
              PT
            </Link>
            <Link
              href="/en"
              prefetch={false}
              hrefLang="en"
              lang="en"
              aria-label="EN — English"
              aria-current={locale === "en" ? "page" : undefined}
              className={`language-link ${locale === "en" ? "active" : ""}`}
            >
              EN
            </Link>
          </div>
          {resume && (
            <a
              href={resume}
              download
              className="button button-secondary resume-desktop"
            >
              {dict.nav.resume} ↓
            </a>
          )}
          <button
            ref={toggleRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? dict.nav.close : dict.nav.open}
            onClick={toggle}
            className="flex h-11 w-11 items-center justify-center rounded-md text-primary md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="m6 6 12 12M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background md:hidden"
      >
        <div
          ref={mobileLinksRef}
          data-orientation="vertical"
          className="mobile-section-links container flex flex-col py-5"
        >
          {links.map((link, index) => (
            <a
              key={link.key}
              ref={index === 0 ? firstRef : undefined}
              href={link.href}
              onClick={navigate}
              aria-current={activeSection === link.key ? "location" : undefined}
              className="nav-link rounded px-3 py-3 text-lg"
            >
              {link.label}
            </a>
          ))}
          <span
            data-nav-indicator
            className="nav-indicator"
            aria-hidden="true"
          />
          {resume && (
            <a href={resume} download className="button button-secondary mt-3">
              {dict.nav.resume} ↓
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
