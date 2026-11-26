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
        <div className="contact-panel">
          <div>
            <SectionHeading
              id="contato"
              title={dict.contact.title}
              lede={dict.contact.lede}
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${email}`} className="button button-primary">
                {dict.contact.email} <span aria-hidden="true">↗</span>
              </a>
              {resume && (
                <a href={resume} download className="button button-secondary">
                  {dict.contact.resume} <span aria-hidden="true">↓</span>
                </a>
              )}
            </div>
          </div>
          <div className="contact-channels">
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
                    className="contact-link"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{channel.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed break-words text-secondary">
                        {channel.handle}
                      </span>
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-accentCyan">↗</span>
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
