import { asset } from "./base.js";

export const CONTATOS = [
  { rotulo: "E-mail", valor: "contato@esperancaviva.org" },
  { rotulo: "Telefone", valor: "(11) 99999-9999" },
  { rotulo: "Endereço", valor: "Rua da Esperança, 123 - São Paulo/SP" },
];

export const ATIVIDADES = [
  "Oficinas pedagógicas e reforço escolar",
  "Distribuição de cestas básicas e mantimentos",
  "Apoio jurídico e psicológico comunitário",
];

export const PROJETOS = [
  {
    titulo: "Projeto Futuro na Comunidade",
    descricao:
      "Atendemos mais de 200 crianças no contraturno escolar com atividades esportivas e culturais.",
    imagem: asset("imagens/projeto-voluntariado.svg"),
    alt: "Voluntários entregando alimentos e materiais educativos para famílias atendidas",
    largura: 640,
    altura: 280,
  },
  {
    titulo: "Horta comunitária",
    descricao:
      "Captação para irrigação e insumos em regiões periféricas, com mutirões mensais de voluntários.",
    imagem: asset("imagens/apresentacao.svg"),
    alt: "Voluntários da ONG em ação comunitária ao ar livre",
    largura: 640,
    altura: 280,
  },
  {
    titulo: "Rede de doações emergentes",
    descricao:
      "Organização de campanhas pontuais de cestas e materiais escolares para famílias em situação de urgência.",
    imagem: asset("imagens/logo.svg"),
    alt: "Logotipo da ONG Esperança Viva",
    largura: 160,
    altura: 64,
  },
];
