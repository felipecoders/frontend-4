export const CHAVE_RASCUNHO = "ong.rascunho";
export const CHAVE_CADASTROS = "ong.cadastros";

export function lerJson(chave, fallback) {
  var bruto = localStorage.getItem(chave);
  if (!bruto) {
    return fallback;
  }

  try {
    return JSON.parse(bruto);
  } catch (erro) {
    return fallback;
  }
}

export function gravarJson(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}
