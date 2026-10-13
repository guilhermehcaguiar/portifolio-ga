# Roadmap — portifolio-ga

## Etapas e Status

| Etapa | Título | Status | Critérios de Aceitação |
|-------|--------|--------|------------------------|
| **A1** | Fundação técnica | ✅ **Concluída** | Next.js 16.4.0, React 19.3.0, TS 5.x, Tailwind 4, App Router, tokens GA., fontes Geist, layout-base |
| **A2** | Navbar e Hero | ✅ **Concluída** | Navbar fixa com blur, Hero com tipografia dinâmica, CTAs hierarquizados, responsividade 320–1440px; inclui correções P1 (contraste do CTA primário e breakpoint `md` da navbar) e `lang="pt-BR"` |
| **A3** | Conteúdo e Projetos | ✅ **Concluída** | Sobre, Experiência, Stack, Beyond the Code, Projetos (Alambrado em destaque), Contato e Footer — estrutura completa das 6 seções + footer com camada centralizada de dados; conteúdo definitivo pendente por decisão (ver seção abaixo) |
| **A4** | SEO e Acessibilidade | ✅ **Concluída** | Metadata API (Open Graph/Twitter/robots/themeColor), JSON-LD Person, skip-link `#conteudo`, `prefers-reduced-motion` no chevron, P2.1/P2.2/P2.3 resolvidos, contraste AA auditado; canonical/OG image/schema WebSite aguardam domínio real (A5) |
| **A5** | Refinamento e Publicação | ✅ **Concluída (sem deploy — ver A5b)** | Cards de projetos clicáveis (regra deploy > GitHub, URLs verificadas nos repositórios reais), Stack com ícones (Simple Icons + fallback Lucide), unificações arquiteturais, limpeza do globals.css, touch targets; **A5b** (pós-domínio): metadataBase/canonical/og:url/OG image/WebSite schema/sitemap, Lighthouse e deploy Vercel |

## Dependências
- A1 → Necessária para todas as etapas subsequentes
- A2 → Pré-requisito para A3 (estrutura de sections)
- A3 → Necessária antes de A4 (conteúdo para aplicar SEO/acessibilidade)
- A4 → Necessária antes de refinamentos finais da A5

## Subetapas da A3 (todas concluídas e validadas)
- **A3.1** — Fundação de seção (SectionHeading) + Sobre + Experiência
- **A3.2** — Projetos (destaque Alambrado, internos em grid, secundários em accordion nativo) + CTA real `#projetos` no Hero
- **A3.3** — Stack + Beyond the Code
- **A3.4** — Contato + Footer
- **A3.5** — Integração final, auditoria e documentação

## Etapa A5 (executada; deploy fica na A5b)
- **Cards clicáveis** — regra `deployUrl > repositoryUrl > não clicável`; overlay/stretched link (sem `<a>` aninhado); ação GitHub secundária quando houver deploy; indicador discreto "Site/GitHub ↗"
- **URLs verificadas**: AutoShop-Payables, AutoFilter-Search, VetCare, TransLog (repositório do colaborador `arthurniceass-jpg`), forma-store, orbit — **Alambrado sem URL verificada** (card não clicável, sem links falsos)
- **Stack com ícones** `[ícone] Nome`: marcas via **simple-icons** (monocromático, fill currentColor, server-rendered); conceitos (IA) e fallback via Lucide no mesmo tamanho/cor
- **Unificações**: `src/lib/section-links.ts` (navbar+footer), `githubProfileUrl` (única fonte), conteúdo do Hero centralizado (`HeroData`)
- **Limpeza**: globals.css sem bloco dark duplicado e sem `btn-*` mortos
- **Touch targets**: links da navbar/footer com `py-2` (~40px, sem mudança visual relevante)

## Pendências de conteúdo da A3 (intencionais — não bloqueantes)

Preencher quando disponível, **somente em `src/data/portfolio.ts`** (os componentes consomem via props; sem tocar em JSX):

1. **Experiência**: empresa, cargo, período, resumo e contribuições reais.
2. **Projetos**: RESTAM — URL de repositório/deploy do **Alambrado** (card permanece não clicável) e deploys públicos dos demais quando existirem. Descrições, stacks e repositoryUrl já preenchidos com dados verificados (A5): AutoShop-Payables, AutoFilter-Search, VetCare, TransLog (repo do colaborador arthurniceass-jpg), forma-store e orbit.
3. **Stack**: itens das categorias vazias "Banco de dados" e "Ferramentas".
4. **Beyond the Code**: descrições e links dos interesses.
5. **E-mail**: endereço real (preencher `href` com `mailto:` — o card aparece automaticamente).
6. **Currículo**: PDF para ativar o botão da navbar (integração pendente).

Regra permanente do projeto: **não inventar experiências, métricas, URLs ou tecnologias**.

## Próximas Ações (após autorização)
1. **A5b — pós-domínio:** definir domínio/deploy Vercel; então metadataBase, canonical, og:url, OG image (`public/og.png` — plano aprovado: fundo #0B0F14, GA. com ponto azul, nome, "Software Developer", mono ciano), twitter:image, schema WebSite e `app/sitemap.ts`; Lighthouse (meta >90, executado pelo usuário com Chrome)
2. **Conteúdo:** preencher pendências acima conforme dados reais disponíveis

## Observações
- Etapas A2, A3 e A4 foram concluídas com aprovação individual do usuário.
- Cada etapa futura (A4, A5) deve ser solicitada e aprovada individualmente.
- Documentação em `docs/` atualizada a cada conclusão de etapa (feito na A3.5).
