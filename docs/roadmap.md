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

## Revisão integrada autorizada — 26/10/2026

O usuário autorizou nesta conversa aplicar as melhorias da auditoria em uma etapa funcional de revisão do portfólio. Esta autorização inclui estabilização PT/EN, conteúdo, UI/UX, contato e preparação de currículos/SEO. Não inclui commit, push ou publicação.

### Entregas desta revisão

- Composição e documento compartilhados; eliminadas rota portuguesa concorrente, HTML aninhado, main/IDs duplicados e navegação inglesa quebrada.
- Tradução de interface e conteúdo; seletor de idioma nas duas páginas.
- Projetos antes de Sobre, espaçamento revisado e interesses compactos com texto.
- Alambrado com URL pública, captura real e autoria integral confirmada, contexto e resultado.
- E-mail confirmado: `guilherme.ghca@hotmail.com`, links mailto sem nova aba.
- Pasta `public/curriculos/` preparada para os PDFs PT/EN com ativação automática por idioma no build.
- Experiência vazia oculta e removida da navegação; nenhuma empresa, data ou cargo inventado.
- Dependências alinhadas e corrigidas para vulnerabilidades conhecidas; Next.js/eslint-config-next 16.4.3.
- Metadata traduzida, imagem social GA., favicon, robots e sitemap preparados via SITE_URL.
- README real, documentação atualizada e testes de navegador/CI adicionados.

### Pendências reais após a revisão

1. Adicionar PDFs finais em `public/curriculos/guilherme-aguiar-pt-br.pdf` e `public/curriculos/guilherme-aguiar-en.pdf`; reiniciar/recompilar depois.
2. Fornecer empresa, cargo, período e contribuições para a experiência; a seção permanece fora da página até integração autorizada.
3. Confirmar novo destino público de TransLog e contribuições individuais detalhadas dos demais projetos.
4. Informar domínio público do portfólio, definir SITE_URL e autorizar deploy. A URL do Alambrado não é o domínio deste portfólio.
5. Validar com leitor de tela e em outros navegadores/dispositivos, além dos checks de Chromium executados nesta etapa.

Os itens históricos acima descrevem entregas anteriores; esta revisão substitui as pendências antigas de e-mail e deploy do Alambrado. Nenhuma nova etapa começa automaticamente.

### Validação da revisão

Build, lint, TypeScript e 20 testes de navegador aprovados; npm audit sem vulnerabilidades conhecidas. Lighthouse mobile local: desempenho 83, acessibilidade 100, boas práticas 100 e SEO 100. A meta de desempenho >90 continua pendente de otimização/medição no deploy. Evidências e limites em `docs/verificacao-2026-10-26.md`.

### Complemento de conteúdo e stack — 26/10/2026

- Java, SQL e Git confirmados pelo usuário e incluídos na Stack; Banco de dados e Ferramentas agora têm conteúdo.
- Hardware e automação adicionados a Explorando, com tradução para inglês e textos de interesses atualizados.
- Tecnologias dos cards de Stack e Projetos organizadas verticalmente, uma por linha.
- Resultados qualitativos de AutoShop Payables e AutoFilter Search atualizados com os impactos confirmados pelo usuário. Payables está em operação; não foi inventada uma URL pública nem métricas numéricas.

### Posicionamento profissional e estudos — 26/10/2026

A pedido do usuário, a apresentação passou a enfatizar desenvolvimento de software de forma ampla. Java e Python são os estudos em aprofundamento; Machine Learning e cibersegurança são interesses confirmados. Hardware e automação continuam como exploração. Hero, Sobre, card de estudos, Stack/Explorando, interesses, metadata e imagem social foram alinhados em PT/EN. Não se atribui experiência profissional, projetos ou especialização em ML/cibersegurança. React e tecnologias web permanecem associados aos projetos e à Stack, sem definir exclusivamente o foco de estudos.

Correção do resumo: aprofundamento em front-end com React mantido junto de Java e Python no Hero, Sobre e card de estudos em PT/EN. Ampliar o posicionamento para software não deve apagar a dedicação a front-end. Interesses em Machine Learning, cibersegurança, hardware e automação preservados.

Precisão adicional do resumo: front-end concentra a maior parte dos projetos atuais, muito por influência das atividades da faculdade. Isso deve aparecer como contexto da prática atual, junto do estudo de Java, Python e outras áreas, preservando os interesses em Machine Learning, cibersegurança, hardware e automação. Hero e Sobre alinhados em PT/EN.

### Refinamento visual e movimento — 26/10/2026

Usuário autorizou aplicar as propostas de layout/animação: fundo do destaque unificado à paleta GA., imagem centralizada e ampliável, galeria com capturas reais de catálogo/carrinho, hierarquia das ações, alinhamento dos cards, indicador de seção ativa, entrada de seções/Hero, hover, menu e accordion suaves. Tecnologias verticais preservadas, com suporte a movimento reduzido e sem biblioteca de animação adicional. Novos testes cobrem galeria, modal/foco, navegação ativa e reduced motion. Commit, push e deploy não foram executados.

Validação do refinamento: build, lint e 50 testes PT/EN aprovados. Lighthouse local: acessibilidade/boas práticas/SEO 100; desempenho 69 em execução com benchmark de CPU inferior ao da medição anterior. Meta >90 continua pendente e precisa ser reavaliada em produção. Detalhes em `docs/verificacao-2026-10-26.md`.

### Complemento de animações 1–5 — 26/10/2026

Autorizados e implementados os cinco efeitos propostos: crossfade da galeria, entrada sequencial de cards, indicador deslizante da navbar, resposta ao pressionar botões e ampliação conectada à miniatura. Build, lint e 50 testes de navegador aprovados. A suíte inclui carregamento de captura controlado, cliques rápidos, altura estável, alinhamento do indicador e ausência de animação no modal em reduced motion. Sem novas dependências, commit, push ou deploy. Desempenho em produção permanece pendente; não se atribui nova nota Lighthouse a esta etapa.

### Revisão de documentação e versionamento — 26/10/2026

README atualizado com funcionalidades, setup Windows/Linux, ambiente, currículos, estrutura, testes, publicação e explicação da pasta .github. Gitignore organizado para dependências, builds, relatórios, ambiente local, logs, temporários, arquivos de sistema e chaves. .github, documentação, código, assets públicos, currículos finais, .env.example e lockfile continuam versionáveis. Workflow revisado sem alteração: executa checks em push/PR. Nenhum commit ou push executado.
