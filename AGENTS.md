# Regras do Projeto portifolio-ga

## 1. Consultar Documentação Existente
Toda nova sessão deve ler e considerar a documentação em `docs/` antes de prosseguir com qualquer tarefa. Isso garante consistência entre Windows e Omarchy Linux.

## 2. Controle por Etapas
Cada autorização permite executar **apenas uma etapa funcional coerente**. Não iniciar uma próxima etapa automaticamente. Aguardar autorização explícita do usuário.

## 3. Restrição de Commits e Push
- **Nenhum agente pode executar commits ou push automaticamente.**
- Commits são de exclusiva responsabilidade do usuário.
- Sugestões de commits devem seguir Conventional Commits, com tipo em inglês e descrição em português brasileiro.
- Exemplos válidos:
  - `chore: configurar estrutura inicial do portfólio`
  - `docs: documentar arquitetura e planejamento do portfólio`
  - `feat: implementar navegação principal`
  - `feat: desenvolver seção de apresentação`
  - `fix: corrigir navegação em dispositivos móveis`

## 4. Política de Invenção de Dados
- **Informações profissionais e detalhes dos projetos não podem ser inventados.**
- Se houver lacunas no conhecimento, registrar como "pendente" ou "a confirmar" na documentação.
- Nunca criar experiências, cargos, datas, indicadores de resultados ou métricas fabricadas.

## 5. Avanço de Etapas
- **Nenhum agente pode avançar para a próxima etapa sem autorização explícita do usuário.**
- Cada etapa (A1, A2, A3, A4, A5) deve ser concluída e validada antes de iniciar a próxima.
- A aprovação de plano não autoriza implementação das etapas seguintes.

## 6. Documentação Obrigatória
Estes arquivos devem ser versionados no GitHub e utilizados pelos agentes em novas sessões:
- `AGENTS.md` (esta arquivo)
- `docs/identidade-visual.md`
- `docs/arquitetura.md`
- `docs/roadmap.md`
- `docs/projetos.md`