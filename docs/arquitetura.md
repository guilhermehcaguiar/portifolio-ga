# Arquitetura do Projeto portifolio-ga

## Stack Verificada
| Camada | Tecnologia | Versão | Observação |
|--------|------------|--------|-----------|
| Framework | Next.js | 16.4.0 | App Router ativo (Turbopack, `cacheComponents`) |
| View Layer | React | 19.3.0 | Compatível com TS 5.x |
| Language | TypeScript | 5.x | Tipagem em todo código |
| Styling | Tailwind CSS | 4.0 | Configurado via `@import "tailwindcss"` + `@theme inline` |
| Fontes | Geist + Geist Mono | Google Fonts | Variáveis CSS em `layout.tsx` |
| Estrutura | App Router | Next.js 16 | Diretório `src/app/` |

## Estrutura de Diretórios (real — pós A3)
```
src/
├── app/
│   ├── layout.tsx          ← Raiz (lang pt-BR, fontes, meta global)
│   ├── page.tsx            ← Composição: Hero + 6 seções + Footer
│   ├── globals.css         ← Tokens da paleta GA., @import tailwind, @theme inline
│   └── favicon.ico
├── components/
│   ├── navbar.tsx          ← Fixa (h-20), menu mobile disclosure (único client component)
│   ├── hero.tsx            ← Hero com CTAs hierarquizados (server component)
│   ├── section-heading.tsx ← Kicker numerado + h2 + lede opcional (compartilhado)
│   ├── sobre.tsx
│   ├── projetos.tsx        ← Destaque + grid + accordion nativo <details>
│   ├── experiencia.tsx
│   ├── stack.tsx
│   ├── beyond-the-code.tsx
│   ├── contato.tsx         ← Cards-link com canais verificados
│   └── footer.tsx          ← Logo GA., âncoras das seções, © 2026
├── types/
│   └── portfolio.ts        ← AboutData, ExperienceItem, ProjectLink, Project, ProjectsData, StackCategory, BeyondInterest, ContactChannel
└── data/
    └── portfolio.ts        ← Camada centralizada de dados (única fonte de conteúdo)
```

## Convenções
- **Componentes:** Arquivos `.tsx` em `src/components/`, export default; Server Components por padrão (apenas `navbar.tsx` é client)
- **Camada de dados:** Todo dado pessoal/profissional vive em `src/data/portfolio.ts` (interfaces em `src/types/portfolio.ts`), consumido via props; campos pendentes = `null` + comentário `PENDÊNCIA`; textos fixos de interface podem permanecer nos componentes
- **Links:** `href: null` nunca renderiza como clicável; links externos com `target="_blank"`, `rel="noopener noreferrer"` e dica `sr-only` de nova aba
- **Tailwind:** Tokens da identidade em `globals.css` via `:root` e `@theme inline` (gera utilitários com variantes)
- **Seções:** casca padrão `scroll-mt-28 border-t border-border py-24 sm:py-32` + container `mx-auto max-w-5xl px-6 sm:px-8` + `SectionHeading` com kickers numerados fixos (01 Sobre, 02 Projetos, 03 Experiência, 04 Stack, 05 Beyond the Code, 06 Contato)
- **Ícones:** Lucide inline SVG (sem dependências), mapa por nome + fallback
- **Acessibilidade:** foco visível `focus-visible:outline-accentBlue`, `aria-labelledby` por seção, accordion nativo `<details>/<summary>`, um único h1 (Hero) e um h2 por seção
- **Metadados:** `metadata` em `layout.tsx`, título/description por página quando necessário
- **Responsividade:** mobile-first; navbar mobile até `md` (768px)
- **Tipagem:** TypeScript em todos os arquivos; evitar `any` quando possível

## Decisões Técnicas Consolidadas
1. **A1 concluída:** Fundação técnica (Next.js, React, TS, Tailwind, fontes, tokens) — status: ✅
2. **A2 concluída:** Navbar + Hero, incluindo correções P1 (contraste do CTA primário, breakpoint `md` da navbar) — status: ✅
3. **A3 concluída:** 6 seções + footer com camada centralizada de dados (A3.1–A3.5) — status: ✅; conteúdo definitivo pendente por decisão (ver `docs/roadmap.md`)
4. **Sem alterações de dependências:** Versões já instaladas não serão mudadas apenas por serem "mais recentes"
5. **Docs persistentes:** Criadas para acompanhar o projeto entre sistemas operacionais
6. **Git:** Nenhum agente executa `git add`, `git commit`, `git push` sem autorização explícita do usuário
7. **Deploy futuro:** Vercel, somente quando autorizado pelo usuário (A5)
8. **Duplicações conhecidas (registradas; unificação opcional na A5):** `navLinks` (navbar) ↔ `footerLinks` (footer); URL do GitHub em 3 fontes (hero, footer, data)
9. **Currículo:** botão da navbar desabilitado até a integração do PDF
