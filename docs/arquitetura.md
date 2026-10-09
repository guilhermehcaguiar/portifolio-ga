# Arquitetura do Projeto portifolio-ga

## Stack Verificada
| Camada | Tecnologia | Versão | Observação |
|--------|------------|--------|-----------|
| Framework | Next.js | 16.4.0 | App Router ativo |
| View Layer | React | 19.3.0 | Compatível com TS 5.x |
| Language | TypeScript | 5.x | Tipagem em todo código |
| Styling | Tailwind CSS | 4.0 | Configurado via `@import "tailwindcss"` |
| Fontes | Geist + Geist Mono | Google Fonts | Variáveis CSS em `layout.tsx` |
| Estrutura | App Router | Next.js 16 | Diretório `src/app/` |

## Estrutura de Diretórios
```
src/
├── app/
│   ├── layout.tsx        ← Raiz (fonts, meta global)
│   └── page.tsx          ← Home placeholder → futuro Hero + seções
│   └── globals.css       ← Tokens da paleta GA., @import tailwind
│   └── favicon.ico
│   └── ...
├── components/           ← (a ser criado nas etapas A2–A5)
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── sobre.tsx
│   ├── projetos.tsx
│   ├── stack.tsx
│   ├── beyond-the-code.tsx
│   ├── contato.tsx
│   └── footer.tsx
└── types/                ← (a ser criado) interfaces TypeScript

## Convenções
- **Componentes:** Arquivos `.tsx` no diretório `components/`, exportação default nomeada
- **Tailwind:** Tokens definidos em `globals.css` via `:root` e `@theme inline`
- **Metadados:** `metadata` em `layout.tsx`, título/description por página quando necessário
- **Responsividade:** `sm:` breakpoint como mínimo para transições, mobile-first por padrão
- **Tipagem:** Use TypeScript em todos os arquivos novos; evitar `any` quando possível

## Decisões Técnicas Consolidadas
1. **A1 concluída:** Fundação técnica (Next.js, React, TS, Tailwind, fontes, tokens) — status: ✅
2. **Sem alterações de dependências:** Versões já instaladas não serão mudadas apenas por serem "mais recentes"
3. **Docs persistentes:** Criadas para acompanhar o projeto entre sistemas operacionais
4. **Git:** Nenhum agente executa `git add`, `git commit`, `git push` sem autorização explícita do usuário
5. **Deploy futuro:** Vercel, somente quando autorizado pelo usuário (A5)