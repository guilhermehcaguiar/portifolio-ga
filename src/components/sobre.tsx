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
      className="section"
    >
      <div className="container">
        <SectionHeading id="sobre" kicker="02" title={dict.about.title} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-relaxed ${index === 0 ? "text-lg text-primary" : "text-secondary"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="self-start rounded-xl border border-border bg-surface p-6">
            <h3 className="eyebrow">{dict.about.focus}</h3>
            <ul className="mt-5 space-y-4">
              {about.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accentBlue"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
