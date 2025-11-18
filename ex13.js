const prompt = require('prompt-sync')({sigint: true});

const p1 = Number(prompt("Digite a sua nota na prova 1 do ENEM: "));


const p2 = Number(prompt("Digite a sua nota na prova 2 do ENEM: "));

const reda = Number(prompt("Digite a nota da sua redação: "));

r= p1 + p2 + reda

if(r >= 1500){
    console.log("Você pode ir para UFLA " )
}
else{
    console.log("Você pode estudar na UNILAVRAS ")
} 
if(r <1000) {

    console.log("Volte ano que veem")
}