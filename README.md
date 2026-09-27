# ONG Esperança Viva

SPA da ONG Esperança Viva (Experiência Prática IV). Site institucional com início, projetos e cadastro/doação, servido localmente por um servidor Node.

## Visão geral

A aplicação é uma Single Page Application. O shell fica em `src/html/index.html`. As rotas `/`, `/projetos` e `/cadastro` devolvem o mesmo HTML; o JavaScript troca o conteúdo de `#app` sem recarregar a página.

## Tecnologias

- HTML e CSS para marcação e apresentação
- JavaScript (ES modules) para rotas, formulário, validação e `localStorage`
- Node.js (`http`, `fs`, `path`) em `src/server.js` para servir ficheiros e o fallback da SPA
- Vite (devDependency) para bundle e minificação de HTML, CSS e JS

## Pré-requisitos

- Node.js (testado com a v24)
- npm (vem com o Node)

## Instalação

1. Copie ou clone este repositório.
2. Abra a pasta raiz (onde está o `package.json`).
3. Corra `npm install` para obter o Vite.

## Execução

```bash
npm start
```

O comando corre `node src/server.js` e sobe em `http://localhost:5500/`.

Rotas da SPA:

- `http://localhost:5500/`
- `http://localhost:5500/projetos`
- `http://localhost:5500/cadastro`

Se a porta 5500 já estiver ocupada, pare o outro processo antes de voltar a correr `npm start`.

## Estrutura

```text
src/
  html/       shell e redirecionamentos
  css/        styles.css
  js/         app, router, cadastro, validação, storage
  imagens/    SVG da ONG
  server.js   servidor HTTP na porta 5500
package.json  scripts start/build e versão SemVer
vite.config.js  input do shell e outDir dist
```

## Build e testes

```bash
npm run build
```

O Vite (esbuild) minifica o shell, o CSS e os módulos JS para `dist/`. O IMask continua no CDN. Não há suite automatizada.

Depois da build, `npm start` serve o HTML e os assets de `dist/` quando a pasta existe. Sem `dist/`, o servidor usa os ficheiros de `src/`.

Verificação: abrir `/`, `/projetos` e `/cadastro`. Imagens continuam em `/imagens`.

## Versionamento

Trabalho individual com GitFlow:

- `main`: código estável de lançamento
- `develop`: integração contínua da EP4
- `feature/*`: entregas isoladas (nascem de `develop` e voltam para `develop`)
- `release/*`: ajuste fino antes de produção; merge em `main` e `develop`
- `hotfix/*`: correção urgente a partir de `main`

Commits no padrão Conventional Commits (`chore`, `docs`, `chore(release)`). Versionamento semântico: a tag anotada `v1.0.0` em `main` é a primeira versão pública (`package.json` na `1.0.0`).

## Produção

Publicado no GitHub Pages a partir da branch `main`:

https://felipecoders.github.io/frontend-4/
