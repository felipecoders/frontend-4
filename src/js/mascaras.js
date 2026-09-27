export function aplicarMascaras() {
  if (typeof IMask === "undefined") {
    return;
  }

    var cpf = document.getElementById("cpf");
    if (cpf) {
      cpf._imask = IMask(cpf, { mask: "000.000.000-00" });
    }

    var telefone = document.getElementById("telefone");
    if (telefone) {
      telefone._imask = IMask(telefone, { mask: "(00) 00000-0000" });
    }

    var cep = document.getElementById("cep");
    if (cep) {
      cep._imask = IMask(cep, { mask: "00000-000" });
    }
}
