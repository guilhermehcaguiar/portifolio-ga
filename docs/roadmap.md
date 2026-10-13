# Roadmap — portifolio-ga

## Etapas e Status

| Etapa | Título | Status | Critérios de Aceitação |
|-------|--------|--------|------------------------|
| **A1** | Fundação técnica | ✅ **Concluída** | Next.js 16.4.0, React 19.3.0, TS 5.x, Tailwind 4, App Router, tokens GA., fontes Geist, layout-base |
| **A2** | Navbar e Hero | ✅ **Concluída** | Navbar fixa com blur, Hero com tipografia dinâmica, CTAs hierarquizados, responsividade 320–1440px; inclui correções P1 (contraste do CTA primário e breakpoint `md` da navbar) e `lang="pt-BR"` |
| **A3** | Conteúdo e Projetos | ✅ **Concluída** | Sobre, Experiência, Stack, Beyond the Code, Projetos (Alambrado em destaque), Contato e Footer — estrutura completa das 6 seções + footer com camada centralizada de dados; conteúdo definitivo pendente por decisão (ver seção abaixo) |
| **A4** | SEO e Acessibilidade | ⏳ **Pendente** | Metadata API, Open Graph, Twitter Cards, JSON-LD Person, contraste, foco, semântica HTML |
| **A5** | Refinamento e Publicação | ⏳ **Pendente** | Responsividade final, refinar visual, animações sutis, performance, otimizações, docs, preparação deploy |

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

## Pendências de conteúdo da A3 (intencionais — não bloqueantes)

Preencher quando disponível, **somente em `src/data/portfolio.ts`** (os componentes consomem via props; sem tocar em JSX):

1. **Experiência**: empresa, cargo, período, resumo e contribuições reais.
2. **Projetos**: tecnologias de cada projeto; URLs de site/repositório (Alambrado e demais); contexto geral autorizado dos sistemas internos; descrições dos projetos secundários.
3. **Stack**: itens das categorias vazias "Banco de dados" e "Ferramentas".
4. **Beyond the Code**: descrições e links dos interesses.
5. **E-mail**: endereço real (preencher `href` com `mailto:` — o card aparece automaticamente).
6. **Currículo**: PDF para ativar o botão da navbar (integração pendente).

Regra permanente do projeto: **não inventar experiências, métricas, URLs ou tecnologias**.

## Próximas Ações (após autorização)
1. **A4:** Aplicar metadata, Open Graph, Twitter Cards, JSON-LD, auditoria formal de acessibilidade/contraste, `prefers-reduced-motion`, skip-link
2. **A5:** Responsividade final, performance (Lighthouse > 90), unificações registradas na arquitetura, animações sutis, preparação para Vercel deploy

## Observações
- Etapas A2 e A3 foram concluídas com subetapas aprovadas individualmente pelo usuário.
- Cada etapa futura (A4, A5) deve ser solicitada e aprovada individualmente.
- Documentação em `docs/` atualizada a cada conclusão de etapa (feito na A3.5).
