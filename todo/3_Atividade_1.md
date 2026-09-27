# Preparação e minificação de ficheiros

Na sua vertente primitiva, os ficheiros escritos por programadores incluem vastos espaçamentos em branco, quequebras de linha e comentários que, embora auxiliem a leitura humana, resultam em bytes desnecessários durante a transmissão em rede.

A preparação de uma build de produção invoca ferramentas automáticas (bundlers como Webpack, Vite ou equivalentes) com a função crítica de compilar os módulos e de aplicar a minificação em todos os componentes de estilo, interatividade e layout (CSS, JS, HTML).

Responsa no bloco seguinte com no máximo 1000 chars (Qual a ferramenta de bundler utilizada e como foi configurada?)

```
Usei Vite 7 (devDependency) com minify esbuild. vite.config.js define outDir dist, emptyOutDir e rollupOptions.input em src/html/index.html. publicDir fica false: as imagens SVG não entram no bundle.

No shell troquei /css e /js por caminhos relativos (../css/styles.css e ../js/app.js) para o Vite resolver os módulos. npm run build gera dist/src/html/index.html e dist/assets/*.css|js com hash. O IMask continua no CDN (script externo), fora do grafo.

O server.js, se achar o HTML em dist, serve essa build nas rotas SPA e os /assets; /imagens sai de src/. Sem dist, o fluxo de desenvolvimento mantém-se. Scripts: npm run build e npm start.
```

Responsa no bloco seguinte com no máximo 950 chars (Qual foi a percentagem aproximada de redução de tamanho dos ficheiros base após a minificação?)

```
Somei o shell, o CSS e os 9 JS de src/ (sem server.js): 19467 bytes. A build ficou em 14743 bytes (HTML 6271, CSS 1207, JS 7265). Redução global de cerca de 24%.

Só CSS+JS: 13242 para 8472 bytes, cerca de 36%. O CSS baixou de 1643 para 1207 (26%). O JS de 11599 para 7265 (37%). O HTML quase não encolheu: os <template> da SPA ficam no shell e o Vite só troca os href dos assets.

Em gzip o Vite reportou CSS 0.52 kB e JS 2.89 kB. A percentagem que uso na atividade é a dos bytes em disco, sem compressão HTTP.
```

Responsa no bloco seguinte com no máximo 900 chars (Que desafios encontrou ao garantir que a minificação não afetasse a lógica da aplicação?)

```
O maior risco foi o HTML da SPA: as views vivem em <template>. Se o minifier apagasse ids ou aria-*, o router e o form partiam. Confirmei view-inicio, aria-describedby e IMask no dist.

Os JS viram um chunk com hash. O server tinha de achar dist/src/html/index.html e servir /assets, senão /projetos devolvia o fonte antigo. /imagens permanece em src porque o publicDir está desligado.

O IMask é global no window. Não o bundlizei para não quebrar mascaras.js. localStorage (ong-tema, cadastros) e os seletores do tema/validação mantiveram os mesmos ids. Testei as três rotas após npm run build.
```