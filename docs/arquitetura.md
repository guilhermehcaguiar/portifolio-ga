# Arquitetura — portifolio-ga

## Stack

Next.js 16.4.3, React 19.3.0, TypeScript, Tailwind CSS 4, Geist/Geist Mono e Simple Icons. Playwright é dependência de desenvolvimento para checks de navegador. Node.js 22 é a versão de referência da CI. Use `npm ci` para reproduzir o lockfile.

Next.js e eslint-config-next passaram de 16.4.0 para 16.4.3 em 26/10/2026 para corrigir vulnerabilidades reportadas pelo npm audit, não apenas por atualização de versão. A dependência transitiva Zod também recebeu correção compatível. O audit terminou sem vulnerabilidades conhecidas.

## Rotas e documento

- `/`: `src/app/(pt-BR)/page.tsx` e layout raiz em português.
- `/en`: `src/app/(en)/en/page.tsx` e layout raiz inglês.
- Não há `src/app/layout.tsx` ou `src/app/page.tsx` concorrendo com os grupos.
- Os layouts importam `PortfolioDocument`: um único html/body/main por documento, lang correto, fontes, skip-link, Navbar, Footer e JSON-LD Person.
- `HomeContent` compõe os mesmos componentes nos dois idiomas: Hero → Projetos → Sobre → Stack → Interesses → Contato.
- Cada layout é uma raiz; trocar de idioma pode carregar um novo documento. IDs e âncoras permanecem iguais nos dois idiomas.

## Conteúdo e traduções

Fatos, URLs e textos pessoais vivem em `src/data/portfolio.ts`. `getPortfolio(locale)` retorna os textos do idioma preservando os dados comuns. `ProjectKey` define os sete IDs de projeto; `Record<ProjectKey, ProjectCopy>` exige tradução para todos eles. Tecnologias adicionais da migração incompleta não foram assumidas como habilidades confirmadas.

`src/i18n/dictionary.ts` exige os mesmos rótulos de interface em PT/EN. `src/lib/section-links.ts` constrói links a partir do dicionário; não existe link público para experiência vazia. A seção antiga de experiência permanece disponível para futura integração com dados reais.

## Componentes e acessibilidade

Server Components por padrão. Navbar é cliente para o disclosure mobile e indicador de seção ativa; ProjectGallery gerencia galeria/ampliação; MotionEnhancements aplica entradas progressivas via IntersectionObserver. Menu com Enter/Espaço, Escape, clique fora e fechamento ao passar para desktop. Ao escolher uma seção no mobile, o foco vai para o destino, que recebe tabindex=-1. Não há focus trap, pois não é modal.

Um h1 por página, headings por seção, IDs únicos, foco visível, skip-link, offsets para navbar fixa, accordion nativo e rótulos de nova aba traduzidos. mailto não abre nova aba. Respeito a prefers-reduced-motion. CTAs usam branco sobre blue-600; links de texto usam azul claro/ciano com contraste sobre o fundo escuro. Validação por navegador não equivale a certificação WCAG completa.

Cards usam ações explícitas para site e GitHub; a imagem do destaque é um botão acessível para ampliar a captura em um dialog nativo. Isso facilita selecionar texto e distinguir demonstração de repositório. Secundários usam details/summary. Nenhuma URL pendente gera link falso.

## Arquivos estáticos e currículo

- `public/projetos/alambrado.webp`: captura real do site público, autorizada no contexto da revisão pelo autor. Servida via next/image com sizes responsivo e lazy loading.
- `public/curriculos/`: PDFs `guilherme-aguiar-pt-br.pdf` e `guilherme-aguiar-en.pdf`.
- `src/lib/resume.ts`: detecta o PDF do idioma no servidor durante a renderização estática. Links de download aparecem na navbar/contato somente quando ele existe. Rebuild/restart necessário ao adicionar PDFs.
- `public/og.png`: imagem social 1200×630, gerada por `scripts/generate-social-image.mjs` a partir de SVG; não é uma imagem de projeto fabricada.
- `src/app/icon.svg`: favicon GA.; favicon do template removido.

## SEO

`src/lib/metadata.ts` gera title, description, Open Graph e Twitter por idioma. JSON-LD Person usa nome, atuação, e-mail e perfis confirmados.

A variável `SITE_URL` deve ser a origem pública confirmada do PORTFÓLIO. Quando definida antes do build, habilita metadataBase, canonical, hreflang recíproco, og:url, imagem social e URLs no sitemap. Sem domínio, o sitemap fica vazio e não são inventadas URLs. `robots.ts` permite crawling e anuncia o sitemap somente com domínio configurado. `.env.example` está versionável.

## Qualidade e publicação

Checks: `npm run lint`, `npm run build`, `npm run typecheck`, `npm run test:e2e`. Os testes de produção em Chromium cobrem os dois idiomas em 320/375/768/1024/1440 px, conteúdo, imagem, teclado, seleção de idioma e integridade estrutural. Workflow `.github/workflows/quality.yml` executa os checks em push/PR.

Nenhum agente realiza commit, push ou deploy automaticamente. Publicação e dados de experiência continuam pendentes. Consultar roadmap para a evidência final desta revisão.

## Posicionamento de conteúdo atualizado

Apresentação profissional: Software Developer / Desenvolvedor de Software. A maior parte dos projetos atuais é em front-end, muito por influência da faculdade; isso descreve o volume atual de projetos. Estudos em aprofundamento: front-end com React, Java e Python, mantendo interesse e estudo em outras áreas da computação. Interesses confirmados: Machine Learning e cibersegurança; exploração adicional de hardware e automação. O card de Sobre se chama Estudos e interesses atuais para distinguir estudo/interesse de experiência comprovada. Esses interesses aparecem também em Explorando e nos cards de interesses, sem sugerir especialização ou atuação profissional não confirmada.

## Galeria, navegação e movimento — revisão autorizada

- `ProjectGallery` recebe as três capturas reais (início, catálogo e carrinho vazio) e rótulos traduzidos. A prévia mantém a captura exibida enquanto a próxima carrega e sobrepõe temporariamente as duas durante o fade. A versão ampliada é renderizada somente ao abrir o dialog nativo.
- Ampliação via botão com aria-haspopup=dialog; fechamento por botão, Escape e backdrop; foco retorna ao acionador. Rolagem do body é bloqueada apenas enquanto aberto e restaurada no fechamento/unmount. O dialog nativo fornece modalidade; um ciclo explícito de Tab/Shift+Tab mantém o foco nos controles internos.
- `Navbar` atualiza aria-current=location ao rolar, usando listener passivo e requestAnimationFrame; recalcula as posições das seções, inclusive após expansão de projetos. PT/EN continuam sem prefetch entre layouts raiz.
- `MotionEnhancements` observa títulos e cards abaixo da primeira viewport, aplica uma entrada de 360 ms uma única vez e desconecta o observer no unmount. Não deixa conteúdo oculto aguardando JavaScript.
- Hero usa sequência CSS curta; cards com links respondem com elevação apenas em dispositivos com hover/ponteiro preciso; setas respondem também ao foco por teclado.
- Menu usa transição discreta de display quando suportada. Accordion permanece details/summary, com interpolação de tamanho em navegadores compatíveis e fallback nativo nos demais.
- prefers-reduced-motion desativa animações e transições, incluindo pseudo-elementos, dialog/backdrop e movimento no hover. Nenhuma biblioteca de animação foi adicionada.

## Complemento: cinco efeitos de interação

1. A galeria separa captura solicitada de captura exibida. Mantém a imagem anterior até o onLoad da próxima e faz crossfade de 200 ms via Web Animations API. Área com aspect-ratio fixa; cliques rápidos cancelam a transição anterior e somente o último pedido pode concluir. Falha de carregamento preserva a captura anterior.
2. IntersectionObserver distribui atrasos de 60 ms entre cards irmãos que entram juntos na viewport, limitados a 180 ms. Cada card entra uma vez; foco por teclado elimina espera visual. Conteúdo continua visível sem JavaScript.
3. A navbar usa um indicador decorativo compartilhado em cada conjunto de links, com transição de posição/largura de 220 ms. useLayoutEffect e ResizeObserver alinham o indicador ao link ativo no desktop e no menu mobile. aria-current continua sendo o estado acessível.
4. Controles recebem compressão de 3% em :active, com transição curta. O efeito é desativado com movimento reduzido.
5. O dialog usa os limites da miniatura e do modal para interpolar posição e escala na abertura (260 ms) e retorno (200 ms). Escape, backdrop e botão compartilham o fechamento; cliques repetidos são protegidos. Ativar movimento reduzido durante uma animação a finaliza imediatamente. Sem Element.animate, as operações são instantâneas.

Nenhuma dependência ou biblioteca de animação foi adicionada.
