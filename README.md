# GA. — Portfólio de Guilherme Aguiar

Portfólio pessoal de desenvolvimento de software, disponível em português (`/`) e inglês (`/en`). Reúne projetos, apresentação, tecnologias, estudos e canais de contato.

## Funcionalidades

- Projetos com contexto, participação e resultados qualitativos confirmados.
- Alambrado em destaque, com site, repositório e galeria de capturas reais.
- Galeria com transição entre imagens e ampliação acessível por teclado.
- Navegação responsiva com indicação da seção atual e seleção de idioma.
- Animações discretas e suporte a `prefers-reduced-motion`.
- Contato por e-mail, GitHub e LinkedIn; download de currículo por idioma quando o PDF estiver disponível.
- Metadata traduzida, imagem social e configuração de URLs de produção via `SITE_URL`.

## Tecnologias

Next.js App Router, React, TypeScript, Tailwind CSS, Geist e Simple Icons. Testes de navegador com Playwright. As animações usam CSS e Web Animations API, sem biblioteca adicional.

As dependências estão em [package.json](package.json) e as versões resolvidas em [package-lock.json](package-lock.json). Use npm e mantenha o lockfile versionado.

## Executar localmente

Use Node.js 22 ou superior e npm. A CI usa Node.js 22. Os comandos são os mesmos no Windows e no Linux/Omarchy:

```sh
npm ci
npm run dev
```

O endereço padrão é http://localhost:3000. Se a porta estiver ocupada, consulte a URL exibida no terminal. A prévia usada durante o desenvolvimento pode estar em outra porta.

O projeto carrega Geist com `next/font`; a primeira compilação precisa acessar o provedor das fontes.

## Variáveis de ambiente

Para configurar o domínio, copie [.env.example](.env.example) para `.env.local`, descomente a linha `SITE_URL` e preencha a origem pública confirmada deste portfólio, incluindo `https://`.

A variável pode ficar ausente em desenvolvimento. Quando definida antes do build, habilita canonical, hreflang, URLs de compartilhamento, imagem social e entradas do sitemap com URLs absolutas. Sem ela, o sitemap fica vazio e URLs de produção são omitidas.

`SITE_URL` deve apontar para o domínio do portfólio; o domínio do Alambrado pertence a outro projeto. Na hospedagem, configure a variável no ambiente de build.

Arquivos `.env` locais são ignorados pelo Git. Apenas `.env.example`, com instruções e valores de exemplo, deve ser versionado.

## Currículos

Adicione os PDFs finais em [public/curriculos/](public/curriculos/), com estes nomes exatos:

- Português: `guilherme-aguiar-pt-br.pdf`.
- Inglês: `guilherme-aguiar-en.pdf`.

Os botões aparecem apenas quando existe o arquivo correspondente ao idioma. Reinicie o desenvolvimento ou recompile depois de adicionar ou substituir PDFs.

Os currículos destinados ao site podem ser versionados. Tudo em `public/` fica publicamente acessível quando o site é publicado. Veja as [instruções da pasta](public/curriculos/README.md).

## Organização e conteúdo

| Local                   | Responsabilidade                                                     |
| ----------------------- | -------------------------------------------------------------------- |
| `src/app/`              | Rotas, layouts raiz de PT/EN, estilos, favicon, robots e sitemap.    |
| `src/components/`       | Composição compartilhada, seções, menu, galeria e efeitos.           |
| `src/data/portfolio.ts` | Dados pessoais, projetos, tecnologias, URLs e traduções do conteúdo. |
| `src/i18n/`             | Textos da interface e contrato de tradução.                          |
| `src/lib/`              | Metadata, navegação e detecção dos currículos.                       |
| `public/`               | Capturas dos projetos, imagem social e PDFs públicos.                |
| `tests/`                | Testes de navegador.                                                 |
| `scripts/`              | Geração da imagem social.                                            |
| `.github/workflows/`    | Automação dos checks no GitHub Actions.                              |
| `docs/`                 | Arquitetura, identidade visual, projetos, roadmap e validação.       |

Conteúdo profissional e resultados devem usar informações confirmadas. Empresa, cargo, período e contribuições individuais ainda pendentes permanecem documentados; a seção vazia de experiência fica oculta.

## Qualidade e testes

```sh
npm run lint
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
```

Execute o build antes dos testes de navegador. Ele também gera os tipos de rotas usados pelo TypeScript na primeira instalação.

Playwright usa o build de produção na porta `3091`. A configuração local reaproveita um servidor existente nessa porta; antes de testar alterações, encerre a prévia antiga ou reinicie-a com o build atualizado.

A suíte cobre PT/EN em 320, 375, 768, 1024 e 1440 px: estrutura, projetos, âncoras, teclado, galeria, carregamento de imagens, cliques rápidos, modal/foco, navegação ativa e movimento reduzido. Consulte [a verificação registrada](docs/verificacao-2026-10-26.md) para resultados e limitações, incluindo as medições locais de desempenho.

## Pasta `.github`

**Esta pasta deve ser versionada e enviada ao GitHub junto do projeto.** Ela contém [quality.yml](.github/workflows/quality.yml), que configura o GitHub Actions para executar, em pushes e pull requests:

1. Instalação reproduzível com `npm ci`.
2. Lint, build e checagem de tipos.
3. Instalação do Chromium e testes Playwright.
4. Armazenamento dos resultados de navegador como artefato se houver falha.

Acompanhe as execuções na aba **Actions** do repositório, com GitHub Actions habilitado. O workflow atual executa validações; a publicação do site é uma configuração separada.

## Build e publicação

Depois de configurar o domínio e adicionar os arquivos públicos desejados:

```sh
npm run build
npm start
```

`public/og.png` é a imagem de compartilhamento. Para regenerá-la:

```sh
node scripts/generate-social-image.mjs
```

Domínio e deploy do portfólio continuam pendentes. Commits são responsabilidade do proprietário; agentes seguem [AGENTS.md](AGENTS.md) e não executam commit ou push automaticamente.

## O que versionar

Inclua código, `public/`, `tests/`, `scripts/`, `.github/`, documentação, configurações, `.gitignore`, `.env.example` e `package-lock.json`.

O [.gitignore](.gitignore) exclui dependências instaladas, builds, caches, relatórios de teste, arquivos de ambiente locais, logs e temporários. Ele não retira do histórico arquivos que já tenham sido versionados.

## Documentação do projeto

Leia antes de alterar o projeto:

- [Regras dos agentes](AGENTS.md).
- [Arquitetura](docs/arquitetura.md).
- [Identidade visual](docs/identidade-visual.md).
- [Projetos e fontes de conteúdo](docs/projetos.md).
- [Roadmap e pendências](docs/roadmap.md).
