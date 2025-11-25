const usuarios = [
  { nome: "Ana", estado: "MG" },
  { nome: "Cauã", estado: "SP" },
  { nome: "Marina", estado: "MG" },
  { nome: "Bianca", estado: "RJ" }
];

const usuariosMG = usuarios.filter(u => u.estado === "MG");

console.log("Usuários de MG:");
console.log(usuariosMG);