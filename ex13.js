const prompt = require("prompt-sync")({sigint: true})
 
class Estudante{
  #somaDasNotas = 0
  constructor(nome) {
    console.log(`Olá , meu nome é ${nome} e eu sou um estudante!`);
  }
 
  calcularMedia(nota1, nota2) {
    const soma = this.#somaDasNotas = nota1 + nota2
 
    if (this.#somaDasNotas >= 1500) return console.log("Voce pode estudar na UFLA");
    if (this.#somaDasNotas <= 1000) return console.log("Voce pode estudar na UNILAVRAS");
 
    console.log("Estude mais ano que vem");
  }
}
 
let estudante = new Estudante("Leopoldino")
let nota1 = prompt("Digite a nota da primeira prova: ")
let nota2 = prompt("Digite a nota da segunda prova: ")
estudante.calcularMedia(nota1, nota2)
 