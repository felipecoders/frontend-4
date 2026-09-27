# Histórico de commits e releases semânticos

A legibilidade do histórico de um projeto reside na padronização das mensagens de commit. Utilizar Conventional Commits facilita a revisão de código e a geração automatizada de relatórios de alterações.

Em paralelo, o estabelecimento do sistema de releases com versionamento semântico consolida as entregas e atesta a rastreabilidade do ciclo de vida da aplicação.

Liste as releases ou blocos de commits fundamentais do seu projeto. Descreva a estratégia de versionamento semântico adotada e indique a mensagem de commit ou tag associada.

Preencha a tabela abaixo

- Mensagem: máximo 100 chars
- Descrição máximo 300 chars

| Mensagem de commit ou tag da release | Descrição e justificação da alteração |
| ------------------------------------ | ------------------------------------- |
| v1.0.0 | Primeira release semântica em main. MAJOR 1: SPA pública (/, /projetos, /cadastro). MINOR e PATCH em 0: ainda sem incremento. |
| chore: importa base da ONG Esperanca Viva | Commit raiz em main. Trouxe src, package.json e os enunciados. chore porque é bootstrap, não feature nova. |
| docs: descreve estrategia GitFlow da etapa | Conventional Commit docs na feature/versionamento-documentacao. Só a ramificação. A SPA não mudou. |
| merge: integra feature/versionamento-documentacao em develop | Fechei a feature no GitFlow. develop ficou com a doc das branches. main segue estável até o release. |
| chore(release): v1.0.0 | Declarei version 1.0.0 no package.json na release/1.0.0 e amarrei a tag anotada em main. |