# ONG Esperança Viva

SPA da ONG Esperança Viva (Experiência Prática IV). Site institucional com início, projetos e cadastro/doação, servido localmente por um servidor Node.

## Visão geral

A aplicação é uma Single Page Application. O shell fica em `src/html/index.html`. As rotas `/`, `/projetos` e `/cadastro` devolvem o mesmo HTML; o JavaScript troca o conteúdo de `#app` sem recarregar a página.

## Tecnologias

- HTML e CSS para marcação e apresentação
- JavaScript (ES modules) para rotas, formulário, validação e `localStorage`
- Node.js (`http`, `fs`, `path`) em `src/server.js` para servir ficheiros e o fallback da SPA

Não há framework, bundler nem dependências npm.

## Pré-requisitos

- Node.js (testado com a v24)
- npm (vem com o Node; neste projeto não instala pacotes)

## Instalação

1. Copie ou clone este repositório.
2. Abra a pasta raiz (onde está o `package.json`).
3. Não é necessário `npm install`: o `package.json` não declara `dependencies`.

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
package.json  script start e versão SemVer
```

## Build e testes

Nesta etapa não há build de produção (sem minificação nem bundler). Também não há suite automatizada.

Verificação manual: subir o servidor e abrir as três rotas. O servidor deve devolver o shell (HTTP 200) e os estáticos em `/css`, `/js` e `/imagens`.

Build, otimização e deploy entram na etapa seguinte da experiência prática.

## Versionamento

Trabalho individual com GitFlow:

- `main`: código estável de lançamento
- `develop`: integração contínua da EP4
- `feature/*`: entregas isoladas (nascem de `develop` e voltam para `develop`)
- `release/*`: ajuste fino antes de produção; merge em `main` e `develop`
- `hotfix/*`: correção urgente a partir de `main`

Commits no padrão Conventional Commits (`chore`, `docs`, `chore(release)`). Versionamento semântico: a tag anotada `v1.0.0` em `main` é a primeira versão pública (`package.json` na `1.0.0`). Não há remote GitHub neste repositório.
