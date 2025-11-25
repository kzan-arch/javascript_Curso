const prompt = require('prompt-sync')({ sigint: true })
const produtos = [
{id: 1, nome: "Fone Bluetooth"},
  {id: 2, nome:"Carregador USB"},
  {id: 3, nome:"Fone de Ouvido"},
  {id: 4, nome: "Caixa de Som"},
  {id: 5, nome: "Adaptador P2"},
];

const resultado = produtos.filter(f => f.nome.includes("Fone") );
console.table(resultado);