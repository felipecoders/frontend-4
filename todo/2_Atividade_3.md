# Contraste visual e modos de ecrã

As escolhas cromáticas impactam de forma categórica a experiência de leitura e interação do utilizador. As diretrizes de acessibilidade estipulam um rácio de contraste mínimo de 4.5:1 para texto normal face ao seu fundo circundante.

Responder a este requisito pode implicar a refatoração de folhas de estilo e, idealmente, a implementação de perfis cromáticos adaptáveis, como o dark mode ou uma versão deliberada de alto dontraste com total observância do balanço cromático para pessoas com visão reduzida ou daltonismo.

Explique a estratégia implementada para garantir o modo escuro e/ou uma versão de alto contraste na sua aplicação.

Responsa no bloco seguinte com no máximo 1300 chars (Explique a técnica utilizada para gerir os modos de cor...)

```
Organizei as cores com tokens CSS (--cor-fundo, --cor-texto, --cor-link, --cor-erro, --cor-foco). O tema claro é o :root. O escuro entra com prefers-color-scheme: dark, sem JavaScript. O alto contraste é um perfil explícito em html[data-tema=alto-contraste]: preto, branco e amarelo. Esse seletor vem depois do media query, então prevalece sobre o dark.

O botão Alto contraste no header (aria-pressed) grava ong-tema no localStorage. tema.js aplica o data-tema no load e no clique. Assim quem precisa do perfil não depende do SO.

Pintei body, links, skip, botão e erros com as variáveis. O outline de foco usa --cor-foco. Escolhi pares acima de 4.5:1 (AA texto normal) e conferi no WebAIM Contrast Checker. Amarelo no preto ajuda daltonismo; o erro não é só vermelho, também tem texto.
```

Preencha a tabela abaixo

- Elemento: max 100 chars.
- Cores utilizadas e rácio obtido: max 150 chars.
- Ferramenta de validação utilizada: max 100 chars.

| Elemento | Cores utilizadas e rácio obtido | Ferramenta de validação utilizada |
| -------- | ------------------------------- | --------------------------------- |
| Texto do body (tema claro) | #14221c sobre #f7f8f7. Rácio 15.47:1 (AAA). | WebAIM Contrast Checker |
| Link (tema claro) | #0a4d38 sobre #f7f8f7. Rácio 9.25:1 (AAA). | WebAIM Contrast Checker |
| Erro .msg-campo (tema claro) | #8b1e16 sobre #f7f8f7. Rácio 8.59:1 (AAA). | WebAIM Contrast Checker |
| Texto do body (tema escuro) | #f2f2f2 sobre #121212. Rácio 16.73:1 (AAA). | WebAIM Contrast Checker |
| Texto (alto contraste) | #ffffff sobre #000000. Rácio 21.00:1 (AAA). | WebAIM Contrast Checker |