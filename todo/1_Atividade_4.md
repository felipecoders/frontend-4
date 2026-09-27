# Documentação técnica e criação do README

O ficheiro README.md constitui, regra geral, o primeiro ponto de contacto de qualquer profissional com o seu projeto. Este documento deve ser exaustivo, fornecendo uma visão geral da aplicação, os pré-requisitos para a sua execução, as instruções para instalação de dependências e os comandos para gerar a build e executar os testes.

Um README bem estruturado diminui substancialmente o tempo de onboarding e atesta o rigor técnico do(a) seu(sua) autor(a).

Liste as secções principais incluídas no seu ficheiro README.md, detalhando a apresentação do projeto e as tecnologias utilizadas em cada uma.

Preencha a tabela abaixo

- Nome da secção: max 100 chars.
- Descrição e tecnologias mencionadas: max 300 chars.

| Nome da secção | Descrição e tecnologias mencionadas |
| -------------- | ----------------------------------- |
| Visão geral | Apresenta a SPA da ONG Esperança Viva. Rotas /, /projetos e /cadastro no shell HTML. JS troca o #app sem reload. |
| Tecnologias | HTML, CSS, JavaScript (ES modules) e Node.js (http, fs, path em src/server.js). Sem framework, bundler ou npm deps. |
| Pré-requisitos | Node.js (v24) e npm. npm só dispara o script start; não instala pacotes. |
| Instalação | Copiar ou clonar o repo, abrir a raiz do package.json. Sem npm install: não há dependencies. |
| Execução | npm start corre node src/server.js em http://localhost:5500/. Lista as três rotas da SPA. |
| Estrutura | Mapa de src/html, src/css, src/js, src/imagens e server.js. package.json guarda start e a versão SemVer. |
| Build e testes | Sem minificação e sem suite. Verificação manual das rotas (HTTP 200) e estáticos. Build fica para a próxima etapa. |
| Versionamento | GitFlow (main, develop, feature, release, hotfix), Conventional Commits e tag v1.0.0. Sem remote GitHub. |

Explique o passo a passo de instalação local que documentou e quais as informações fornecidas sobre as práticas de versionamento empregues no projeto.

Responsa no bloco seguinte com no máximo 900 chars (Explique as instruções detalhadas...)

```
Instalação local que documentei no README:
1. Ter Node.js (e o npm que o acompanha).
2. Copiar ou clonar o projeto e abrir a pasta do package.json.
3. Não correr npm install: não há dependencies.
4. npm start sobe node src/server.js em http://localhost:5500/.
5. Abrir /, /projetos e /cadastro. Se a 5500 estiver ocupada, paro o outro processo.

Versionamento no README:
GitFlow real: main só lança, develop integra a EP4, feature/* nasce e volta para develop, release/* fecha produção (usei release/1.0.0), hotfix/* sai de main. Conventional Commits (chore, docs, chore(release)). SemVer: tag anotada v1.0.0 em main, version 1.0.0 no package.json. Sem remote GitHub; merges --no-ff no Git local.
```