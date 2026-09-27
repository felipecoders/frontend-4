# Navegação por teclado e leitores de ecrã

Inúmeros utilizadores, seja por restrições motoras ou incapacidades visuais temporárias/permanentes, navegam na internet dependendo em absoluto do teclado e de sistemas de tradução texto-para-voz (leitores de ecrã como NVDA ou VoiceOver).

Garantir que a ordem lógica de foco em elementos de ecrã segue um percurso natural, aliada a estados visuais percetíveis da propriedade :focus (outline), revela-se um indicador crítico do nível de sofisticação técnica de uma aplicação em conformidade com as exigências WCAG 2.1.

Liste os componentes ou secções vitais da aplicação que necessitaram de ajustes específicos para assegurar uma interação exímia através de teclado e a sua correta verbalização por leitores de ecrã.

Preencha a tabela abaixo

- Nome do componente: max 50 chars.
- Descrição do ajuste ou problema retificado: max 300 chars.

| Nome do componente | Descrição do ajuste ou problema retificado |
| ------------------ | ------------------------------------------ |
| Skip link e main | Tab começa no skip. O main tem tabindex=-1 e outline no :focus. O leitor salta o chrome e ouve o landmark do conteúdo. |
| Nav com aria-current | Tab percorre Início, Projetos e Cadastro. O router marca a página atual. O leitor diz qual vista está ativa. |
| Foco após render da SPA | Ao mudar de rota (link, Enter ou voltar) foco vai ao #app. Evita o leitor ficar no link antigo com o DOM já trocado. |
| :focus-visible interativos | Outline 2px em links, botão, inputs e skip. Tirei outline:none do #app. O teclado vê onde está o foco. |
| Primeiro erro do form | validarFormulario já foca o primeiro inválido. O teclado cai no campo e o aria-invalid/descrita verbaliza o erro. |
| Status do cadastro | role=status e aria-live=polite anunciam o sucesso sem eu mover o foco para o parágrafo. |