# Estratégia de versionamento

A estratégia de ramificação (branching) dita o fluxo de desenvolvimento no interior de um projeto de software. O GitFlow é um dos modelos mais adotados globalmente, proporcionando uma separação estrutural entre o código de desenvolvimento constante (develop), as novas funcionalidades (feature/), a correção de falhas urgentes (hotfix/) e as versões de lançamento (main ou master).

Assegure-se de que o repositório reflete fielmente esta estrutura, mesmo trabalhando individualmente, para demonstrar proficiência em metodologias colaborativas em equipa.

Descreva a utilização das branches de acordo com o padrão GitFlow implementado nesta etapa. Explique como separou o código de desenvolvimento constante (develop) das novas funcionalidades (feature) e versões de lançamento (main/master).

Responsa no bloco seguinte com no máximo 900 chars (Descreva a estrutura de ramificação adotada...)

```
Adotei GitFlow neste repositório, mesmo em trabalho individual.

main guarda só o código estável de lançamento. A base da ONG Esperança Viva (EP3) entrou aqui como primeira versão publicável. Feature não entra direto em main.

develop é a linha de integração contínua da EP4. É o ponto de partida do dia a dia e o destino do merge das features.

feature/* nasce de develop. Nesta etapa abri feature/versionamento-documentacao para organizar o app em src/ e registrar esta estratégia. Ao fechar, a feature volta para develop.

release/* fica reservada para o ajuste fino antes de produção: sai de develop e, ao concluir, faz merge em main e em develop.

hotfix/* sai de main para correção urgente e volta para main e develop, sem passar por feature.

Assim main permanece publicável, develop acumula o trabalho em curso e as funcionalidades ficam isoladas até a revisão.
```