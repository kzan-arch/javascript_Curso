const prompt = require('prompt-sync')({sigint: true});

const qtd = 5;
 
const emails = [];
 
for(let i = 1; i <= qtd; i++){
  const email = prompt(`Digite o email ${i}: `);
  emails[i] = email;
}
 
console.table(emails);