let numero = [5, 15, 8, 25, 3, 18];

let contador = 0

numero.forEach((numero, index) =>{

     console.log(`${index > 10}. ${numero} `);

     if(numero > 10){
        contador++;
     }
})

console.log("Quantidade de números maiores que 10: ", contador)