var CHAVE_TEMA = "ong-tema";
var TEMA_ALTO = "alto-contraste";

function aplicarTema(ativo) {
  var html = document.documentElement;
  var botao = document.getElementById("btn-alto-contraste");

  if (ativo) {
    html.setAttribute("data-tema", TEMA_ALTO);
  } else {
    html.removeAttribute("data-tema");
  }

  if (botao) {
    botao.setAttribute("aria-pressed", ativo ? "true" : "false");
  }
}

export function iniciarTema() {
  var gravado = localStorage.getItem(CHAVE_TEMA) === TEMA_ALTO;
  aplicarTema(gravado);

  var botao = document.getElementById("btn-alto-contraste");
  if (!botao) {
    return;
  }

  botao.addEventListener("click", function () {
    var ativo = document.documentElement.getAttribute("data-tema") !== TEMA_ALTO;
    if (ativo) {
      localStorage.setItem(CHAVE_TEMA, TEMA_ALTO);
    } else {
      localStorage.removeItem(CHAVE_TEMA);
    }
    aplicarTema(ativo);
  });
}
