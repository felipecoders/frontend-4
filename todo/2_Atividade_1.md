# Diretrizes WCAG e estrutura semântica

O alicerce da acessibilidade web assenta sobre uma estruturação de HTML correta. O uso impreciso de tags genéricas, como <div>, desprovidas de significado funcional, compromete a leitura interpretativa e a lógica documental da página para bots e leitores de ecrã.

As diretrizes WCAG orientam a adoção rigorosa de marcos de conteúdo estruturais (landmarks) como <header>, <nav>, <main> e <footer>, além da incorporação precisa de atributos de estado WAI-ARIA (Accessible Rich Internet Applications) quando as tags HTML nativas se revelem insuficientes.

Liste as alterações semânticas fundamentais efetuadas na base de código do seu projeto para responder aos requisitos de acessibilidade. Refira o uso dos landmarks inseridos e enumere as estratégias WAI-ARIA adotadas em elementos interativos essenciais (botões, modais ou formulários).

Preencha a tabela abaixo

- Elemento modificado ou tag implementada: max 100 chars.
- Justificação e impacto na acessibilidade: max 300 chars.

| Elemento modificado ou tag implementada | Justificação e impacto na acessibilidade |
| --------------------------------------- | ---------------------------------------- |
| a.skip-link para #app | Primeiro foco do documento. Leitor e teclado saltam header/nav e vão ao main. tabindex=-1 no main recebe o foco. |
| nav aria-label=Principal e main aria-label | Distingue o landmark de navegação do conteúdo. O leitor anuncia o nome do marco, não só "navegação" ou "principal". |
| h2 nas views projetos e cadastro | O h1 único fica no header (nome da ONG). Evita dois h1 por página e mantém a ordem de headings. |
| ul#lista-projetos com aria-label | Troquei a div genérica por lista. Cada projeto é li+article. O leitor conta itens em vez de um bloco sem estrutura. |
| aria-describedby e ids erro-* | Liga cada input à mensagem. O erro deixa de ser texto visual solto e passa a ser lido com o campo. |
| aria-invalid em validarCampo | Estado WAI-ARIA no input. O leitor informa inválido/válido. No reset do form volto a aria-invalid=false. |
| status-cadastro role=status aria-live=polite | Anuncia o sucesso sem roubar o foco. hidden some no erro de validação. |
| aria-current=page na nav (router) | Já existia. O link da rota atual é marcado como página. O leitor diferencia a vista ativa. |