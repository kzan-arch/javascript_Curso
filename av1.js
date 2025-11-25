const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Pedro", nota: 5 },
  { nome: "Carla", nota: 9 },
  { nome: "Lucas", nota: 4 },
];

const aprovados = alunos.filter(aluno => aluno.nota > 6);

console.log("Alunos com nota acima de 6:");
console.log(aprovados);