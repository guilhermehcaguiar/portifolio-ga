"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

import { sectionLinks } from "@/lib/section-links";

/**
 * Navbar — Etapa A2
 *
 * Navbar fixa com fundo translúcido e blur moderado (identidade GA.),
 * links de navegação por âncora e menu mobile acessível.
 *
 * Pendências documentadas:
 * - Os links apontam para seções que serão criadas na etapa A3
 *   (#sobre, #projetos, #experiencia, #stack, #contato).
 * - O botão Currículo permanece desabilitado até a integração do PDF.
 * - O logo GA. é texto sem link: não há destino real ainda (decisão de
 *   honestidade — nenhum elemento falso apresentado como funcional).
 */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  // P2.1: instrui o efeito a focar o primeiro link apenas quando o menu
  // for aberto por teclado (Enter/Espaço). Ref, não state — não precisa
  // re-renderizar e evita set-state-in-effect.
  const focusOnOpenRef = useRef(false);

  // Ao abrir por teclado: foca o primeiro link (P2.1 — apenas quando a
  // abertura veio de Enter/Espaço; mouse/toque não teleporta o foco).
  // Escape: fecha e devolve o foco ao botão de alternância.
  // Clique fora (P2.2): fecha sem mover o foco. Painel é disclosure
  // não-modal — focus trap deliberadamente rejeitado (decisão registrada
  // em docs/arquitetura.md).
  useEffect(() => {
    if (!menuOpen) return;

    if (focusOnOpenRef.current) {
      firstMobileLinkRef.current?.focus();
      focusOnOpenRef.current = false;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  // Fecha o menu se a viewport voltar ao breakpoint desktop (md).
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // P2.1: event.detail === 0 indica ativação por teclado (Enter/Espaço).
  const toggleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    if (menuOpen) {
      closeMenu();
      return;
    }
    focusOnOpenRef.current = event.detail === 0;
    setMenuOpen(true);
  };

  // Fecha o menu devolvendo o foco ao botão de alternância — usado no
  // clique de link porque o link deixa o DOM quando o painel fecha.
  const closeMenu = () => {
    setMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  return (
    <nav
      ref={navRef}
      aria-label="Navegação principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo GA. — ponto azul conforme identidade visual */}
        <span className="text-2xl font-bold tracking-wider">
          GA<span className="text-accentBlue">.</span>
        </span>

        {/* Links de navegação (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="py-2 text-secondary transition-colors hover:text-accentBlue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Lado direito: Currículo (desktop) + hambúrguer (mobile) */}
        <div className="flex items-center gap-4">
          {/* Botão Currículo — desabilitado até a integração do PDF */}
          <button
            type="button"
            disabled
            title="Currículo em PDF — integração pendente"
            className="hidden items-center gap-2 rounded border border-border px-4 py-2 font-medium text-secondary disabled:cursor-not-allowed disabled:opacity-50 md:inline-flex"
          >
            Currículo
            <span className="sr-only">(disponível em breve)</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </button>

          {/* Botão de alternância do menu mobile */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={
              menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
            }
            className="p-2 text-accentBlue transition-colors hover:text-accentCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue md:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Painel do menu mobile (padrão disclosure, sob a barra) */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6 sm:px-8">
          {sectionLinks.map((link, index) => (
            <a
              key={link.key}
              href={link.href}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              onClick={closeMenu}
              className="rounded px-3 py-3 text-xl font-medium text-secondary transition-colors hover:text-accentBlue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
            >
              {link.label}
            </a>
          ))}

          {/* Currículo no menu mobile — desabilitado até a integração do PDF */}
          <button
            type="button"
            disabled
            title="Currículo em PDF — integração pendente"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded border border-border px-4 py-3 font-medium text-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Currículo
            <span className="sr-only">(disponível em breve)</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
