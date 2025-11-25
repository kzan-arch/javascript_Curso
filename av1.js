const alunos = [
  { nome: "Ana", nota: 7.5 },
  { nome: "Bruno", nota: 5.2 },
  { nome: "Carla", nota: 8.0 },
  { nome: "Diego", nota: 4.9 },
  { nome: "Eduarda", nota: 6.3 },
];

const aprovados = alunos.filter(aluno => aluno.nota > 6);

console.log("Alunos com nota acima de 6:");
console.log(aprovados);