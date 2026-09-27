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
  var path = location.pathname.replace(/\/$/, "") || "/";
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

export function render() {
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
}

export function navegar(path) {
  if (location.pathname !== path) {
    history.pushState({ rota: path }, "", path);
  }
  render();
}

export function getApp() {
  return app;
}
