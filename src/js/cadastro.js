import {
  CHAVE_CADASTROS,
  CHAVE_RASCUNHO,
  gravarJson,
  lerJson,
} from "./storage.js";
import { validarCampo, validarFormulario } from "./validacao.js";

function dadosDoForm(form) {
  var dados = {};
  form.querySelectorAll("input").forEach(function (campo) {
    dados[campo.id] = campo.value;
  });
  return dados;
}

function preencherForm(form, dados) {
  Object.keys(dados).forEach(function (id) {
    var campo = form.querySelector("#" + id);
    if (campo) {
      campo.value = dados[id];
      if (campo._imask) {
        campo._imask.updateValue();
      }
      if (String(dados[id] || "").trim() !== "") {
        validarCampo(campo);
      }
    }
  });
}

function pintarListaCadastros() {
  var lista = document.getElementById("lista-cadastros");
  if (!lista) {
    return;
  }

  var cadastros = lerJson(CHAVE_CADASTROS, []);
  if (!Array.isArray(cadastros)) {
    cadastros = [];
  }
  lista.innerHTML = cadastros
    .map(function (item) {
      return `<li>${item.nome} (${item.email})</li>`;
    })
    .join("");
}

export function restaurarCadastro() {
  var form = document.getElementById("form-cadastro");
  if (!form) {
    return;
  }

  var rascunho = lerJson(CHAVE_RASCUNHO, null);
  if (rascunho) {
    preencherForm(form, rascunho);
  }

  pintarListaCadastros();
}

export function onSubmit(event) {
  var form = event.target;
  if (!form.matches("#form-cadastro")) {
    return;
  }

  event.preventDefault();

  if (!validarFormulario(form)) {
    form.classList.remove("is-enviado");
    var statusErro = document.getElementById("status-cadastro");
    if (statusErro) {
      statusErro.hidden = true;
    }
    return;
  }

    var cadastros = lerJson(CHAVE_CADASTROS, []);
    if (!Array.isArray(cadastros)) {
      cadastros = [];
    }
    cadastros.push(dadosDoForm(form));
  gravarJson(CHAVE_CADASTROS, cadastros);
  localStorage.removeItem(CHAVE_RASCUNHO);

  form.reset();
  form.querySelectorAll("input").forEach(function (campo) {
    campo.classList.remove("is-erro", "is-sucesso", "is-preenchido");
    campo.setAttribute("aria-invalid", "false");
  });
  form.querySelectorAll(".msg-campo").forEach(function (msg) {
    msg.textContent = "";
  });

  form.classList.add("is-enviado");
  var status = document.getElementById("status-cadastro");
  if (status) {
    status.hidden = false;
  }

  pintarListaCadastros();
}

export function onInput(event) {
  var campo = event.target;
  if (!campo.matches("#form-cadastro input")) {
    return;
  }

  validarCampo(campo);
  gravarJson(CHAVE_RASCUNHO, dadosDoForm(campo.form));
}
