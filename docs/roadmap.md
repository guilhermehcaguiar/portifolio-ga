# Roadmap — portifolio-ga

## Etapas e Status

| Etapa | Título | Status | Critérios de Aceitação |
|-------|--------|--------|------------------------|
| **A1** | Fundação técnica | ✅ **Concluída** | Next.js 16.4.0, React 19.3.0, TS 5.x, Tailwind 4, App Router, tokens GA., fontes Geist, layout-base |
| **A2** | Navbar e Hero | ⏳ **Pendente** | Navbar fixa com blur, Hero com tipografia dinâmica, CTAs hierarquizados, responsividade 320–1440px |
| **A3** | Conteúdo e Projetos | ⏳ **Pendente** | Sobre, Experiência, Stack, Beyond the Code, Projetos (Alambrado em destaque), Contato e Footer |
| **A4** | SEO e Acessibilidade | ⏳ **Pendente** | Metadata API, Open Graph, Twitter Cards, JSON-LD Person, contraste, foco, semântica HTML |
| **A5** | Refinamento e Publicação | ⏳ **Pendente** | Responsividade final, refinar visual, animações sutis, performance, otimizações, docs, preparación deploy |

## Dependências
- A1 → Necessária para todas as etapas subsequentes
- A2 → Pré-requisito para A3 (estrutura de sections)
- A3 → Necessária antes de A4 (contentos para aplicar SEO/acessibilidade)
- A4 → Necessária antes de refinamentos finais da A5

## Próximas Ações (após autorização)
1. **A2:** Implementar Navbar fixa + Hero com Alambrado como destaque principal
2. **A3:** Popular seções Sobre, Experiência (AtendCar), Stack, Beyond the Code, Projetos
3. **A4:** Aplicar metadata, Open Graph, Twitter Cards, JSON-LD, auditoria de acessibilidade
4. **A5:** Responsividade final, performance (Lighthouse > 90), preparação para Vercel deploy

## Observações
- **Nenhuma etapa posterior à A1 está autorizada** para implementação automática.
- Cada etapa deve ser solicitada e aprovada individualmente pelo usuário.
- Documentação em `docs/` deve ser atualizada a cada conclusão de etapa.