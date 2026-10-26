import type { Dictionary } from "@/i18n/dictionary";
import { getSectionLinks } from "@/lib/section-links";
export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border py-9">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            className="brand"
            href="#inicio"
            aria-label={`GA. — ${dict.footer.top}`}
          >
            GA<span>.</span>
          </a>
          <nav
            aria-label={dict.footer.label}
            className="flex flex-wrap gap-x-6"
          >
            {getSectionLinks(dict).map((link) => (
              <a key={link.key} href={link.href} className="nav-link text-sm">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 text-xs leading-relaxed text-secondary sm:flex-row sm:justify-between">
          <p>© 2026 Guilherme Aguiar</p>
          <p>{dict.footer.built}</p>
        </div>
      </div>
    </footer>
  );
}
