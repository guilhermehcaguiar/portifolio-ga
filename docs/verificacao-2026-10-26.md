# Verificação da revisão — 26/10/2026

## Checks concluídos

- `npm run build`: aprovado, com páginas estáticas `/`, `/en`, `/icon.svg`, `/robots.txt` e `/sitemap.xml`.
- `npm run lint`: aprovado, sem os dois erros anteriores de navegação.
- `npm run typecheck`: aprovado.
- `git diff --check`: aprovado.
- `npm run test:e2e`: **20 testes aprovados** no build final, em Chromium, PT/EN e larguras 320, 375, 768, 1024 e 1440 px.
- `npm audit`: nenhum alerta conhecido após correções. `npm audit --omit=dev` também sem vulnerabilidades conhecidas.
- Next.js declarado, instalado e resolvido pelo lockfile: **16.4.3**.

## Conteúdo e navegação

Checks cobrem um main e um h1 por documento, lang correto, IDs únicos, âncoras válidas, sete projetos presentes, imagem real carregada, URL do Alambrado, e-mail confirmado, ausência de placeholders/controles desabilitados, abertura de accordion por teclado, menu mobile e alternância de idioma.

Inspeção adicional em dez combinações de rota/largura não encontrou rolagem horizontal, destinos de âncora ausentes ou pageerrors. A rota inglesa deixou de apresentar React #418. Capturas completas em PT/EN foram inspecionadas em desktop/mobile.

Na largura de 375 px, Projetos passou de y=1675 para aproximadamente y=987. A página total pode ser mais longa no mobile porque agora inclui o case e os textos solicitados; a redução de espaço vazio não significa remoção de conteúdo.

## Currículos e metadata

- Detecção dos PDFs validada com cinco asserções isoladas usando arquivos temporários fora do repositório: ausência, presença de PT, ausência de EN e presença de EN. Nenhum PDF fictício foi publicado ou deixado em public/curriculos.
- Helper real de metadata validado com sete asserções isoladas: ausência de URLs sem SITE_URL, canonical por idioma, alternates recíprocos, imagem social, título inglês e origem configurada. A origem de teste não foi gravada no projeto.
- Os PDFs reais e o domínio continuam dependentes do usuário. Adicionar PDFs requer reinício/rebuild; SITE_URL precisa ser definida antes do build de produção.

## Lighthouse local

Medição em Chromium headless, servidor de produção local, perfil mobile padrão com simulação de rede e CPU:

| Categoria | Resultado final |
|---|---:|
| Desempenho | 83 |
| Acessibilidade automatizada | 100 |
| Boas práticas | 100 |
| SEO automatizado | 100 |

LCP simulado: 3,0 s; TBT: 440 ms; CLS: 0. A meta de desempenho >90 ainda não foi atingida nesta medição local.

A primeira medição marcou desempenho 40 e revelou prefetch de rotas em outro idioma e nomes acessíveis que não incluíam PT/EN. O prefetch foi desativado nas trocas entre layouts raiz e os nomes foram corrigidos. A auditoria de nome acessível passou no resultado final. As duas execuções também tiveram benchmarks de CPU bastante diferentes (152,5 e 844,5), portanto não se deve atribuir toda a mudança de nota ao código.

Reavaliar desempenho no deploy real e em dispositivo mobile, com várias amostras comparáveis. Não há dados de campo de Core Web Vitals. Notas 100 automatizadas não certificam acessibilidade, indexação ou segurança completas; faltam leitor de tela e outros navegadores.

## Pendências e limites

Faltam PDFs finais, domínio e publicação autorizada, dados reais de empresa/cargo/período e contribuições individuais detalhadas dos demais projetos. TransLog continua sem link público até confirmar destino válido. Não foram executados commit, push, deploy ou envios de mensagens a terceiros.

## Complemento: stack e impactos confirmados

Após incluir Java/SQL/Git, hardware/automação e os resultados operacionais confirmados pelo usuário: build (incluindo TypeScript), lint e diff-check aprovados. Uma checagem direcionada em Chromium verificou PT/EN em 375 e 1440 px: 13 listas de tecnologias por página com um item por linha, sem overflow horizontal ou erros de JavaScript. Presença das novas tecnologias e dos textos de impacto validada; captura da Stack desktop inspecionada visualmente. A suíte completa e o Lighthouse acima correspondem à revisão anterior, não foram repetidos para este complemento.

## Complemento: posicionamento em software e novos interesses

Hero, Sobre, card de estudos, Explorando, interesses e metadata alinhados em PT/EN com aprofundamento em Java/Python e interesse em Machine Learning/cibersegurança; imagem social regenerada. Build (com TypeScript), lint e diff-check aprovados. Checagem direcionada em Chromium nas duas rotas em 375 e 1440 px confirmou os novos textos e títulos, seis cards de interesses, listas de tecnologias verticais e ausência de overflow/pageerrors. A suíte completa e o Lighthouse não foram repetidos neste complemento de conteúdo.

## Refinamento visual, galeria e movimento

- Build de produção (incluindo TypeScript), lint e diff-check aprovados.
- **50 testes aprovados**: suíte anterior e novos checks de seleção de captura, abertura pelo teclado, foco no fechamento, ciclo de Tab, Escape/backdrop, restauração de rolagem, navegação ativa e prefers-reduced-motion, em PT/EN e 320/375/768/1024/1440 px.
- Durante a validação, o ciclo de Tab do modal foi reforçado para manter o foco nos controles internos. O menu disclosure continua sem focus trap.
- Capturas do destaque e modal inspecionadas em 375 e 1440 px. Coluna de imagem computada em rgb(17,24,39), igual ao card; verde decorativo removido. Tecnologias continuam em listas verticais.
- Conteúdo e link para o site do Alambrado confirmados disponíveis com JavaScript desativado nos dois idiomas. A galeria/modal são melhorias que dependem de JavaScript; os textos permanecem visíveis.
- Imagens adicionais são capturas reais de catálogo e carrinho vazio. Não houve compra, envio de WhatsApp ou uso de dados pessoais.

### Medição local após os efeitos

Lighthouse mobile nesta revisão: desempenho **69**, acessibilidade **100**, boas práticas **100** e SEO **100**. LCP simulado 3,4 s, TBT 960 ms, CLS 0. O benchmark de CPU nesta execução foi 442, contra 844,5 na medição anterior de desempenho 83; as execuções não constituem comparação controlada. A meta >90 permanece pendente. Medir em ambiente de produção e dispositivo real antes de concluir sobre desempenho; os 50 testes funcionais não substituem essa avaliação. Relatório local: `/tmp/portfolio-lighthouse-motion.json`.

## Complemento de animações 1–5

Build (com TypeScript), lint e diff-check aprovados. **50 testes passaram** em PT/EN e 320/375/768/1024/1440 px. A suíte agora retém a requisição de uma captura para verificar que a anterior permanece visível, confirma altura estável e a última seleção após cliques rápidos, valida alinhamento do indicador deslizante e verifica que o dialog não executa animações JavaScript em movimento reduzido. Fechamento por Escape/botão/backdrop, foco e rolagem continuam cobertos.

Checagem adicional em Chromium desktop confirmou atrasos de cards em 0/60/120/180 ms, compressão real de controles para matrix(.97,0,0,.97,0,0), keyframes de expansão com origem nos limites da miniatura e finalização da animação ao ativar movimento reduzido durante o uso. Modal e navbar inspecionados em capturas. Nenhuma biblioteca adicional foi instalada. Lighthouse não foi repetido; a nota anterior e a pendência de medição em produção permanecem como registradas acima.

## Revisão de README, gitignore e pasta .github

Validação com git check-ignore --no-index: 32 caminhos de arquivos locais/gerados ignorados e 21 caminhos de conteúdo/configuração preservados para versionamento. Nenhum arquivo já rastreado corresponde às regras de exclusão. Os 14 links locais do README existem. YAML do workflow analisado e eventos/scripts conferidos com package.json; contém apenas checks e coleta de artefatos, sem passos de commit, push ou deploy. A execução real do GitHub Actions depende de enviar o workflow ao repositório com Actions habilitado. Nenhum código da aplicação foi alterado e os testes de navegador não foram repetidos para esta revisão documental.
