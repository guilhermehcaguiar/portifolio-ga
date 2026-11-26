# Projetos — portifolio-ga

## Projetos Principais (em destaque)

### 1. Alambrado
- **Tipo:** E-commerce de camisas de futebol — site público
- **Identidade própria:** Sim, proposta de site público com branding próprio
- **Estrutura de estudo de caso (futuro):**
  - Problema → Solução → Arquitetura → Tecnologias → Resultados → Imagens
- **Restrições:** Não expor código proprietário, dados da empresa ou screenshots não autorizados
- **Status:** Confirmado como destaque principal (substitui VetCare entre os três)

### 2. AutoShop Payables
- **Tipo:** Sistema interno (relacionado à experiência profissional)
- **Autenticação:** Requer autenticação interna
- **Informações públicas limitadas:** Apenas contexto geral, sem detalhes operacionais
- **Restrições:** Não expor código proprietário, dados da empresa, informações comerciais privadas

### 3. AutoFilter Search
- **Tipo:** Sistema interno (relacionado à experiência profissional)
- **Autenticação:** Requer autenticação interna
- **Informações públicas limitadas:** Apenas contexto geral, sem detalhes operacionais
- **Restrições:** Não expor código proprietário, dados da empresa, informações comerciais privadas

## Ordem Atual de Destaque
1. Alambrado (e-commerce público)
2. Beyond the Prompt (destaque acadêmico)
3. TransLog (destaque acadêmico)
4. AutoShop Payables (sistema interno)
5. AutoFilter Search (sistema interno)

### Beyond the Prompt

Plataforma educacional sobre uso responsável de IA, criada em equipe como projeto de extensão da Uninassau. Tem cartão próprio com [arte oficial do projeto](https://beyondtheprompt-ia.vercel.app/social.png), [site publicado](https://beyondtheprompt-ia.vercel.app/) e [repositório](https://github.com/guilhermehcaguiar/beyondtheprompt).

### TransLog

Sistema de logística acadêmico. Tem cartão próprio com acesso direto ao [site publicado](https://translogbr.vercel.app/) e ao [repositório](https://github.com/arthurniceass-jpg/translog).

## Projetos Secundários (compactos)
- **VetCare** — sistema veterinário (informações confirmadas, consulta separada)
- **FORMA Store** — loja institucional
- **Orbit** — Sistema Integrado Estudantil

## Apresentação no Portfólio
- **Projetos principais:** Cada um terá sua própria section com problema, solução, tecnologias usadas
- **Projetos secundários:** Apresentação compacta com expansão acessível (modal/accordion) ao selecionar
- **Imagens:** Utilizar apenas screenshots autorados ou mockups genéricos; não usar imagens confidenciais
- **Metodologia:** Problem → Solution → Technologies → Results (sem inventar métricas)
## Atualização confirmada — 26/10/2026

### Alambrado

- URL pública confirmada pelo autor: https://alambradowear.vercel.app/
- Repositório tornado público e confirmado em 26/10/2026: https://github.com/guilhermehcaguiar/alambrado. Ações de site e GitHub disponíveis nos dois idiomas.
- Guilherme confirmou responsabilidade integral pelo **planejamento, desenvolvimento e deploy**.
- Funcionalidades observadas na página pública: navegação por coleções/ligas, catálogo de camisas, páginas de produto, seleção de tamanho, carrinho e finalização pelo WhatsApp. A revisão não efetuou compra nem enviou mensagens.
- Stack confirmada no README público: Next.js (App Router), TypeScript, Tailwind CSS e Supabase (Database e Storage), hospedado na Vercel. React é a camada de UI do Next.js. Tecnologias exibidas atualizadas com essa evidência.
- Captura real otimizada em `public/projetos/alambrado.webp`, usada como evidência visual. Nenhuma tela de sistema interno foi capturada.
- Case bilíngue apresenta contexto, autoria integral e resultado qualitativo, sem métricas comerciais.

### Demais projetos

- AutoShop Payables e AutoFilter Search receberam contexto e resultado derivados das descrições já verificadas. Contribuições individuais detalhadas continuam a confirmar; não foram inventadas.
- Impactos confirmados por Guilherme em 26/10/2026: AutoShop Payables está em uso e trouxe melhora substancial na rapidez do processo de contas a pagar e no planejamento financeiro; AutoFilter Search melhora o fluxo de consulta e a assertividade das referências. Textos PT/EN atualizados sem inventar percentuais ou tempos. A URL pública do Payables continua pendente; uso operacional não implica demonstração pública.
- TransLog é colaboração acadêmica. URL anterior `https://github.com/arthurniceass-jpg/translog` retornou 404 na consulta pública da auditoria: o link está suspenso até confirmação, mas o projeto permanece apresentado.
- Demais repositórios foram preservados. FORMA Store mantém a descrição já confirmada; novas funcionalidades ou versões não foram inferidas de outros projetos locais.

### Galeria do Alambrado

Além da captura inicial, foram adicionadas `public/projetos/alambrado-catalogo.webp` e `public/projetos/alambrado-carrinho.webp`, obtidas das páginas públicas em 26/10/2026. Carrinho registrado no estado vazio; nenhuma compra, envio de WhatsApp ou inserção de dados pessoais foi executada. Galeria PT/EN com ampliação acessível.

## Revisão das tecnologias por repositório

A revisão consultou a branch padrão dos oito projetos. Os cartões mostram as tecnologias centrais. Os arquivos abaixo permitem conferir a composição de cada aplicação, incluindo ferramentas e integrações que não precisam ocupar espaço no cartão.

| Projeto | Tecnologias e evidências |
|---|---|
| **Alambrado** | Next.js com App Router, React, TypeScript, Tailwind CSS e Supabase para o banco e as imagens. Hospedagem na Vercel. [Manifesto](https://github.com/guilhermehcaguiar/alambrado/blob/main/package.json) · [README](https://github.com/guilhermehcaguiar/alambrado/blob/main/README.md) |
| **AutoShop Payables** | React, Vite e Tailwind CSS na interface. Python, FastAPI, SQLAlchemy e PostgreSQL no servidor. O README ainda menciona SQLite. A lista do cartão segue o código de conexão e o driver PostgreSQL declarados na branch atual. [Interface](https://github.com/guilhermehcaguiar/AutoShop-Payables/blob/main/frontend/package.json) · [Conexão](https://github.com/guilhermehcaguiar/AutoShop-Payables/blob/main/backend/database.py) · [Dependências](https://github.com/guilhermehcaguiar/AutoShop-Payables/blob/main/backend/requirements.txt) |
| **AutoFilter Search** | Python, Streamlit e pandas. Os catálogos são arquivos CSV consultados localmente. [Dependências](https://github.com/guilhermehcaguiar/AutoFilter-Search/blob/main/requirements.txt) · [README](https://github.com/guilhermehcaguiar/AutoFilter-Search/blob/main/README.md) |
| **Beyond the Prompt** | Next.js com exportação estática, React, TypeScript, Tailwind CSS e ícones Lucide. [Manifesto](https://github.com/guilhermehcaguiar/beyondtheprompt/blob/main/package.json) · [Configuração](https://github.com/guilhermehcaguiar/beyondtheprompt/blob/main/next.config.ts) |
| **VetCare** | React, Vite, React Router, Tailwind CSS e Axios na interface. Python, Django, Django REST Framework e SQLite no servidor. [Interface](https://github.com/guilhermehcaguiar/VetCare/blob/main/frontend/package.json) · [Dependências](https://github.com/guilhermehcaguiar/VetCare/blob/main/backend/requirements.txt) · [README](https://github.com/guilhermehcaguiar/VetCare/blob/main/README.md) |
| **TransLog** | React, JavaScript, Vite, React Router e CSS na interface. Java 21, Spring Boot, Spring Security, Spring Data JPA e Flyway na API. H2 para desenvolvimento e PostgreSQL em produção, conforme o README. Frontend na Vercel e API configurada para o Render. [Interface](https://github.com/arthurniceass-jpg/translog/blob/main/frontend/package.json) · [API](https://github.com/arthurniceass-jpg/translog/blob/main/backend/pom.xml) · [README](https://github.com/arthurniceass-jpg/translog/blob/main/README.md) |
| **FORMA Store** | React, JavaScript, Vite, React Router e CSS na interface. Node.js, Express e PostgreSQL na API. O repositório documenta as integrações de pagamento e frete em ambiente de teste e a homologação pendente. [Interface](https://github.com/guilhermehcaguiar/forma-store/blob/main/package.json) · [API](https://github.com/guilhermehcaguiar/forma-store/blob/main/server/package.json) · [README](https://github.com/guilhermehcaguiar/forma-store/blob/main/README.md) |
| **Orbit** | TypeScript, Next.js, React e Tailwind CSS no app web. NestJS com Fastify, PostgreSQL e Drizzle ORM na API. O monorepo usa npm workspaces e Turborepo. [Web](https://github.com/guilhermehcaguiar/orbit/blob/main/apps/web/package.json) · [API](https://github.com/guilhermehcaguiar/orbit/blob/main/apps/api/package.json) · [Manifesto raiz](https://github.com/guilhermehcaguiar/orbit/blob/main/package.json) |

O endereço público do TransLog foi fornecido pelo autor e respondeu com HTTP 200. O repositório do colaborador também voltou a responder publicamente, e seu README aponta para o mesmo endereço.
