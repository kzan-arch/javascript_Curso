const produtos = [
  "Fone Bluetooth",
  "Carregador USB",
  "Fone de Ouvido",
  "Caixa de Som",
  "Adaptador P2"
];

const resultado = produtos.filter(item => item.toLowerCase().includes("fone".toLowerCase())
);

console.log("Produtos que contêm 'Fone':");
console.log(resultado);