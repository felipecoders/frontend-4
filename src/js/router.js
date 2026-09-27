import { pathDaUrl, urlDaRota } from "./base.js";
import { restaurarCadastro } from "./cadastro.js";
import { aplicarMascaras } from "./mascaras.js";
import { preencherTemplates } from "./templates.js";

var app = document.getElementById("app");

var rotas = {
  "/": {
    template: document.getElementById("view-inicio"),
    title: "ONG Esperança Viva - Página Inicial",
  },
  "/projetos": {
    template: document.getElementById("view-projetos"),
    title: "Nossos Projetos - ONG Esperança Viva",
  },
  "/cadastro": {
    template: document.getElementById("view-cadastro"),
    title: "Cadastro - ONG Esperança Viva",
  },
};

function rotaAtual() {
  var path = pathDaUrl(location.pathname);
  return rotas[path] ? path : "/";
}

function atualizarNav(rota) {
  document.querySelectorAll("nav a[data-route]").forEach(function (link) {
    if (link.getAttribute("data-route") === rota) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

export function render(opcoes) {
  if (!app) {
    return;
  }

  var view = rotas[rotaAtual()] || rotas["/"];

  app.replaceChildren();
  app.appendChild(view.template.content.cloneNode(true));
  preencherTemplates();
  aplicarMascaras();
  restaurarCadastro();

  document.title = view.title;
  atualizarNav(rotaAtual());

  if (opcoes && opcoes.focar) {
    app.focus();
  }
}

export function navegar(path) {
  var alvo = pathDaUrl(path);
  var dest = urlDaRota(alvo);
  if (rotaAtual() === alvo && pathDaUrl(location.pathname) === alvo) {
    app.focus();
    return;
  }
  history.pushState({ rota: alvo }, "", dest);
  render({ focar: true });
}

export function getApp() {
  return app;
}
