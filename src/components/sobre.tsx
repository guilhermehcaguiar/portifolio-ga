import type { Dictionary } from "@/i18n/dictionary";
import type { AboutData } from "@/types/portfolio";
import SectionHeading from "./section-heading";
export default function Sobre({
  about,
  dict,
}: {
  about: AboutData;
  dict: Dictionary;
}) {
  return (
    <section
      id="sobre"
      tabIndex={-1}
      aria-labelledby="sobre-title"
      className="section about-section"
    >
      <div className="container about-layout">
        <div>
          <SectionHeading id="sobre" title={dict.about.title} />
          <div className="mt-6 max-w-2xl space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-relaxed ${index === 0 ? "text-lg text-primary" : "text-secondary"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <aside className="about-focus">
          <h3 className="text-lg font-semibold">{dict.about.focus}</h3>
          <ul className="mt-4 divide-y divide-border">
            {about.focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 py-3 text-sm text-secondary">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue"
                />
                {area}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
