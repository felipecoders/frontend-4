# Gestão de repositório e pull requests

Um repositório de qualidade não se resume apenas a armazenar o código. Funciona também como uma ferramenta de gestão de tarefas operacionais, monitorização de metas e validação assíncrona. O uso criterioso de issues e milestones facilita a atribuição de tarefas e o foco da equipa.

Acresce que a integração de código proveniente de ramificações secundárias deve ser tratada através de pull requests (PRs). Mesmo num contexto individual, redigir PRs devidamente descritivos representa uma competência valorizada que documenta o motivo de uma alteração e a sua forma de implementação antes da efetiva fusão (merge).

Indique como utilizou as funcionalidades de issues, milestones e pull requests ao longo desta etapa. Liste os registos mais relevantes e forneça uma breve descrição do contexto de cada um.

Preencha a tabela abaixo

- Tipo de registo: max 150 chars.
- Descrição do contexto e alterações realizadas: max 500 chars.

| Tipo de registo | Descrição do contexto e alterações realizadas |
| --------------- | --------------------------------------------- |
| Milestone local: Etapa 1 (controlo de versões e documentação) | Agrupei GitFlow, SemVer v1.0.0 e esta gestão de PRs. Sem remote GitHub. O marco fecha quando develop tiver as três respostas da etapa. |
| Issue local: adotar GitFlow | Isolar main, develop e feature/*. Resolvi em feature/versionamento-documentacao e descrevi o fluxo em todo/1_Atividade_1.md. |
| Issue local: commits semânticos e release v1.0.0 | Padronizar Conventional Commits e marcar a primeira release. Fechei com release/1.0.0, tag v1.0.0 e a tabela em todo/1_Atividade_2.md. |
| PR local: feature/versionamento-documentacao para develop | Merge --no-ff no Git. Motivo: registrar a ramificação. Implementação: só o texto da atividade 1. SPA intacta. |
| PR local: release/1.0.0 para main (tag v1.0.0) e sync em develop | Merge --no-ff no Git. Motivo: primeira versão pública. Implementação: version 1.0.0 no package.json e tag anotada em main. |
| PR local: feature/commits-releases-semanticos para develop | Merge --no-ff no Git. Motivo: documentar commits e a tag. Implementação: tabela da atividade 2. main permanece em v1.0.0. |