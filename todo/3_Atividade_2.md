# Otimização de imagens e performance

Num projeto de desenvolvimento front-end com vocação comercial, o maior peso da largura de banda, regra geral, advém de ficheiros estáticos não otimizados. Submeter uma página repleta de imagens extensas de vários megabytes desvirtua os padrões de usabilidade e destrói o desempenho em dispositivos móveis e em redes limitadas.

Assegurar uma gestão adequada dos recursos estáticos impõe a conversão de formatos mais antigos (como PNG/JPEG estáticos) para vertentes otimizadas como WebP, bem como o uso de compressão com ou sem perda substancial de nitidez aparente.

Responsa no bloco seguinte com no máximo 970 chars (Quais os formatos de imagem utilizados e porquê?)

```
Usei só SVG: logo.svg (391 B, 160x64), apresentacao.svg (599 B) e projeto-voluntariado.svg (554 B), ambos 640x280. São gráficos geométricos com texto, não fotografias.

Não converti para WebP nem para PNG/JPEG. Um raster fixo seria maior e borrava ao escalar. WebP ajuda foto de megabytes; aqui o total das três imagens é 1544 bytes. Manter SVG é a compressão certa: vetor, nítido em qualquer DPI, cache simples.

O alt e o role=img no SVG cobrem o leitor. O servidor continua a servir /imagens a partir de src/, fora do bundle do Vite.
```

Responsa no bloco seguinte com no máximo 1000 chars (Como foi gerida a resolução das imagens face ao tamanho na viewport?)

```
Cada img declara width e height iguais ao viewBox (160x64 no logo, 640x280 nas ilustrações). O browser reserva o espaço e o CLS não salta.

No CSS, img { max-width: 100%; height: auto; }. No telemóvel a caixa encolhe; o SVG redesenha à largura útil, sem eu gerar 1x/2x.

Nas ilustrações de conteúdo pus sizes="(max-width: 640px) 100vw, 640px", loading=lazy e decoding=async. O logo do header não tem lazy: entra no primeiro ecrã (LCP).

Não usei srcset raster. O SVG já é resolução-independente. dados.js guarda largura/altura por projeto e o template dos cards reutiliza isso.
```

Responsa no bloco seguinte com no máximo 910 chars (Qual o impacto estimado na métrica de tempo de carregamento global da página?)

```
O payload das imagens já era baixo: 1.5 kB no total. Não havia megabytes para cortar, por isso o tempo de rede quase não muda (na ordem de milissegundos em 3G).

O ganho está no rendering: width/height reduzem CLS; lazy nas ilustrações tira-as do caminho crítico do primeiro paint; o logo fica eager para o LCP. O JS/CSS minificado (atividade anterior) pesa mais que as imagens.

Estimo o peso das imagens abaixo de 2% de uma carga típica desta SPA (HTML+CSS+JS+SVG). Sem WebP extra, evitei acrescentar pedidos e bytes. Em dispositivo lento, o benefício visível é layout estável, não um corte de segundos.
```