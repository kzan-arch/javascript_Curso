const prompt = require('prompt-sync')({sigint: true});
 
const qtd = 10;
 
const numeros = [];
 
for(let i = 1; i <= qtd; i++){
  const numero = Number(prompt(`Digite o número ${i}: `));
  numeros.push(numero);
}
 
console.table(numeros);