const usuarios = [
  { nome: "Ana", estado: "MG" },
  { nome: "Carlos", estado: "SP" },
  { nome: "Marina", estado: "MG" },
  { nome: "Bruno", estado: "RJ" }
];

const usuariosMG = usuarios.filter(u => u.estado === "MG");

console.log("Usuários de MG:");
console.log(usuariosMG);