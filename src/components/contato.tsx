import type { ContactChannel } from "@/types/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { email } from "@/data/portfolio";
import SectionHeading from "./section-heading";
export default function Contato({
  channels,
  dict,
  resume,
}: {
  channels: ContactChannel[];
  dict: Dictionary;
  resume: string | null;
}) {
  return (
    <section
      id="contato"
      tabIndex={-1}
      aria-labelledby="contato-title"
      className="section"
    >
      <div className="container">
        <div className="rounded-2xl border border-accentBlue/25 bg-surface p-6 sm:p-10">
          <SectionHeading
            id="contato"
            kicker="05"
            title={dict.contact.title}
            lede={dict.contact.lede}
          />
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`mailto:${email}`} className="button button-primary">
              {dict.contact.email} <span aria-hidden="true">↗</span>
            </a>
            {resume && (
              <a href={resume} download className="button button-secondary">
                {dict.contact.resume} ↓
              </a>
            )}
          </div>
          <div className="mt-8 grid gap-4 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
            {[...channels]
              .sort(
                (a, b) => Number(b.key === "email") - Number(a.key === "email"),
              )
              .filter((channel) => channel.href)
              .map((channel) => {
                const external = channel.href!.startsWith("https:");
                return (
                  <a
                    key={channel.key}
                    href={channel.href!}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="contact-link rounded-lg py-3"
                  >
                    <span className="text-sm font-medium">
                      {channel.label}{" "}
                      <span aria-hidden="true" className="text-accentCyan">
                        ↗
                      </span>
                    </span>
                    <span className="mt-2 block break-all text-xs leading-relaxed text-secondary">
                      {channel.handle}
                    </span>
                    {external && <span className="sr-only">{dict.newTab}</span>}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
