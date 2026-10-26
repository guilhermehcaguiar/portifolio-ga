# Identidade Visual — GA.

## Marca
- **Nome:** GA.
- **Acentuação:** O ponto final do monograma deve ser estilizado em azul `#3B82F6`.
- **Espaçamento:** Always use generous spacing (at least 1.5x line height) for breathability.

## Paleta de Cores
| Variável | Hex | Uso |
|----------|-----|-----|
| `--background` | `#0B0F14` | Fundo geral |
| `--surface` | `#111827` | Superfícies cards, sections |
| `--border` | `#253040` | Bordas divisórias |
| `--primary` | `#F8FAFC` | Texto principal |
| `--secondary` | `#A4B1C2` | Texto secundário, metadados |
| `--accentBlue` | `#3B82F6` | CTAs, links, destaques, ponto da marca |
| `--accentCyan` | `#22D3EE` | Detalhes menores, hover states |

## Tipografia
- **Fonte Sans:** Geist (`--font-geist-sans`) — usados em textos corporais, navbars, hero
- **Fonte Mono:** Geist Mono (`--font-geist-mono`) — elementos técnicos, rótulos, tags, código

## Componentes e Diretrizes
- **Navbar:** Fixada, fundo translúcido com blur moderado, links por âncora, legenda GA. à esquerda
- **Hero:** Tipografia dinâmica do nome "Guilherme Aguiar", subtítulo profissional, dois CTAs hierarquizados (azul primário, ciano secundário/transparente)
- **Seções:** Espaçamento generoso entre seções, borders discretos (`1px` em `--border`), cantos levemente arredondados
- **Responsividade:** Mobile-first, breakpoint em `640px` mínimo para transição de layout
- **Acessibilidade:** Contraste adequado (background `#0B0F14` sobre texto `#F8FAFC`), foco visível, navegação por teclado preservada
- **Animações:** Sutis — fade-in com deslocamento curto, entradas de 300–400 ms e interações de 150–250 ms; respeitar movimento reduzido.
- **Ícones:** Lucide monocromático, consistente peso visual
## Revisão de UI/UX — 26/10/2026

- Preservada a marca GA., fundo escuro, Geist e acentos azul/ciano.
- Container compartilhado de até 1152 px; seções com 64–80 px de respiro, interesses com 48–56 px, em vez de padding uniforme muito alto.
- Hero mais compacto, com nome em destaque, proposta profissional, acesso a projetos e contato, e referência ao Alambrado.
- Projetos antes de Sobre; destaque com captura real, contexto, participação e resultado qualitativo.
- Interesse pessoal usa itens mais compactos com descrições; nenhuma experiência foi inventada.
- Tokens de secundário/borda ajustados para legibilidade: #A4B1C2 e #253040. CTA primário permanece #2563EB com branco; acento da marca continua #3B82F6.
- Alternância PT/EN na navbar, estado ativo visível, áreas de toque e foco. Sem botões de currículo desabilitados ou placeholders públicos.
- Documento e componentes têm a mesma hierarquia em português e inglês.
- Tecnologias dentro dos cards de Stack e Projetos aparecem uma por linha, com alinhamento vertical, em todas as larguras. As seis categorias de Stack formam uma grade de até três colunas.

## Refinamento de cards e animações

- Destaque Alambrado usa fundo `--surface` (#111827) também ao redor da imagem; verde decorativo #101a16 removido. A identidade verde aparece somente nas capturas reais do projeto.
- Coluna visual maior e centralizada verticalmente, com proporção original das imagens, borda discreta e seletor de captura. Tecnologias seguem uma por linha.
- Visitar site é ação primária; GitHub é secundária quando há demonstração. Cards irmãos alinham as ações pela base.
- Navbar marca a seção atual com texto e sublinhado ciano. Hover de cards interativos sobe 3 px; setas deslocam 2 px; entradas usam até 12 px.
- Movimento reduzido respeitado globalmente; foco e controles permanecem funcionais.

## Complemento de movimento autorizado

- Galeria: fade de 200 ms após carregar a próxima captura, com enquadramento estável.
- Cards: sequência de 60 ms entre irmãos visíveis, até 180 ms de atraso.
- Navbar: um sublinhado compartilhado desliza entre links, em vez de reaparecer em cada um.
- Controles: compressão discreta para scale(.97) durante o pressionamento.
- Imagem ampliada: modal cresce a partir da miniatura e retorna a ela ao fechar.
- Movimento reduzido cobre tanto CSS quanto animações JavaScript e alterações da preferência durante o uso.
