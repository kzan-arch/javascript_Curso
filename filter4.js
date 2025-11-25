let notas = [5, 15, 8, 25, 3, 18, 10, 30, 7];

let aprovados= notas.filter((nota) => {

    return nota < 10;
});

console.log(notas);
console.log(aprovados)