import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionary";
import { hero } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
export default function Hero({
  dict,
  featured,
}: {
  dict: Dictionary;
  featured?: Project;
}) {
  return (
    <section
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="hero section-anchor"
    >
      <div className="container hero-layout">
        <div>
          <p data-hero-step="1" className="eyebrow hero-role mb-4">
            {dict.hero.kicker}
          </p>
          <h1
            id="hero-title"
            data-hero-step="2"
            className="hero-name font-semibold"
          >
            {hero.firstName}
            <br />
            <span className="hero-surname">
              {hero.lastName}
              <span className="text-accentBlue">.</span>
            </span>
          </h1>
          <p
            data-hero-step="3"
            className="mt-5 max-w-md text-base leading-relaxed text-secondary sm:text-lg"
          >
            {dict.hero.description}
          </p>
          <div data-hero-step="4" className="mt-6 flex flex-wrap gap-3">
            <a href="#projetos" className="button button-primary">
              {dict.hero.projects} <span aria-hidden="true">↘</span>
            </a>
            <a href="#contato" className="button button-secondary">
              {dict.hero.contact} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        {featured && (
          <a data-hero-step="4" href="#projeto-alambrado" className="hero-preview">
            <div className="hero-preview-heading">
              <div>
                <p className="eyebrow">{dict.projects.featured}</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">{featured.name}</p>
              </div>
              <span aria-hidden="true" className="hero-preview-arrow">↘</span>
            </div>
            <div className="hero-preview-media">
              <Image
                src="/projetos/alambrado-catalogo.webp"
                alt=""
                width={1440}
                height={1000}
                unoptimized
              />
            </div>
            <div className="hero-preview-footer">
              <span>{featured.type}</span>
              <span className="font-medium text-primary">{dict.hero.featured}</span>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
