import { ATIVIDADES, CONTATOS, PROJETOS } from "./dados.js";

function cardProjeto(projeto) {
  return `<li>
    <article>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <img src="${projeto.imagem}" alt="${projeto.alt}" width="${projeto.largura}" height="${projeto.altura}" sizes="(max-width: 640px) 100vw, 640px" loading="lazy" decoding="async">
    </article>
  </li>`;
}

export function preencherTemplates() {
  var listaContatos = document.getElementById("lista-contatos");
  if (listaContatos) {
    listaContatos.innerHTML = CONTATOS.map(function (contato) {
      return `<li><strong>${contato.rotulo}:</strong> ${contato.valor}</li>`;
    }).join("");
  }

  var listaAtividades = document.getElementById("lista-atividades");
  if (listaAtividades) {
    listaAtividades.innerHTML = ATIVIDADES.map(function (atividade) {
      return `<li>${atividade}</li>`;
    }).join("");
  }

  var listaProjetos = document.getElementById("lista-projetos");
  if (listaProjetos) {
    listaProjetos.innerHTML = PROJETOS.map(cardProjeto).join("");
  }
}
