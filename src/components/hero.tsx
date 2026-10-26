import type { Dictionary } from "@/i18n/dictionary";
import { hero } from "@/data/portfolio";
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="hero section-anchor"
    >
      <div className="container grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
        <div>
          <p data-hero-step="1" className="eyebrow mb-5">
            {dict.hero.kicker}
          </p>
          <h1
            id="hero-title"
            data-hero-step="2"
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[1.03] tracking-[-0.055em]"
          >
            {hero.firstName}
            <br />
            <span className="text-secondary">
              {hero.lastName}
              <span className="text-accentBlue">.</span>
            </span>
          </h1>
          <p
            data-hero-step="3"
            className="mt-7 text-xl font-medium sm:text-2xl"
          >
            {dict.hero.title}
          </p>
          <p
            data-hero-step="3"
            className="mt-4 max-w-xl text-base leading-relaxed text-secondary sm:text-lg"
          >
            {dict.hero.description}
          </p>
          <div data-hero-step="4" className="mt-7 flex flex-wrap gap-3">
            <a href="#projetos" className="button button-primary">
              {dict.hero.projects} <span aria-hidden="true">↘</span>
            </a>
            <a href="#contato" className="button button-secondary">
              {dict.hero.contact} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div
          data-hero-step="4"
          className="hero-note rounded-xl border border-border bg-surface/60 p-6 sm:p-7"
        >
          <p className="eyebrow">{dict.hero.featured}</p>
          <p className="mt-5 text-3xl font-semibold tracking-tight">
            Alambrado<span className="text-accentCyan"> ↗</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-secondary">
            {dict.hero.note}
          </p>
          <a
            href="#projeto-alambrado"
            className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm text-primary"
          >
            {dict.projects.featured} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
