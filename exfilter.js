let notas = [4.5, 8.0, 6.5, 9.0, 3.0];

let aprovados= notas.filter((nota) => {

    return nota >= 7;

});

console.log(notas);
console.log(aprovados)