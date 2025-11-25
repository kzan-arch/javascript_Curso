const carros = [
  { modelo: "Onix", marca: "Chevrolet" },
  { modelo: "Argo", marca: "FIAT" },
  { modelo: "Mobi", marca: "FIAT" },
  { modelo: "HB20", marca: "Hyundai" }
];

const fiat = carros.filter(carro => carro.marca.toUpperCase() === "FIAT");

console.table("Carros da FIAT:");
console.table(fiat);