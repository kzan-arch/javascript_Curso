let notas = [14, 15, 16, 15, 13, 15, 17, 15, 14, 15]
 
let aprovados = notas.filter((notas) =>{
    return notas == 15;
});
 
console.log(notas);
 
console.log(aprovados);