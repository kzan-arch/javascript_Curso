let compras = ["Banana" ,"Arroz", "Miojo", "Farinha", "Presunto", "Macarrão", "Queijo", "Peixe", "Carne", "Batata-Palha"]

compras.push("Mussarela")

compras.forEach((compras, index) =>{

     console.log(`${index + 1}. ${compras} `);
})