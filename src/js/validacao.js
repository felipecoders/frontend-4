export const REGRAS = {
  nome: {
    teste: function (v) {
      return v.trim().length >= 3;
    },
    erro: "Informe o nome com pelo menos 3 caracteres.",
  },
  email: {
    teste: function (v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    },
    erro: "Informe um e-mail válido.",
  },
  cpf: {
    teste: function (v) {
      return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v);
    },
    erro: "Use o formato 000.000.000-00.",
  },
  data_nascimento: {
    teste: function (v) {
      if (!v) {
        return false;
      }
      return new Date(v) <= new Date();
    },
    erro: "Informe uma data de nascimento válida (não futura).",
  },
  telefone: {
    teste: function (v) {
      return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(v);
    },
    erro: "Use o formato (11) 99999-9999.",
  },
  cep: {
    teste: function (v) {
      return /^\d{5}-\d{3}$/.test(v);
    },
    erro: "Use o formato 00000-000.",
  },
  logradouro: {
    teste: function (v) {
      return v.trim().length > 0;
    },
    erro: "Informe o logradouro.",
  },
  cidade: {
    teste: function (v) {
      return v.trim().length > 0;
    },
    erro: "Informe a cidade.",
  },
  estado: {
    teste: function (v) {
      return /^[A-Za-z]{2}$/.test(v);
    },
    erro: "Informe a UF com 2 letras.",
  },
};

export function validarCampo(campo) {
  var regra = REGRAS[campo.id];
  if (!regra) {
    return true;
  }

  var ok = regra.teste(campo.value);
  campo.classList.toggle("is-erro", !ok);
  campo.classList.toggle("is-sucesso", ok);
  campo.classList.toggle("is-preenchido", campo.value.trim() !== "");
  campo.setAttribute("aria-invalid", ok ? "false" : "true");

  var msg = document.querySelector("[data-erro='" + campo.id + "']");
  if (msg) {
    msg.textContent = ok ? "" : regra.erro;
  }

  return ok;
}

export function validarFormulario(form) {
  var campos = form.querySelectorAll("input");
  var valido = true;
  var primeiroErro = null;

  campos.forEach(function (campo) {
    if (!validarCampo(campo)) {
      valido = false;
      if (!primeiroErro) {
        primeiroErro = campo;
      }
    }
  });

  if (primeiroErro) {
    primeiroErro.focus();
  }

  return valido;
}
