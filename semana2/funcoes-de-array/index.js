// Exercicio de interpretação de codigo.
// 1) a: será impressso um novo array com os segintes dados: nome , apelido e a posição do array.

// nome: "Amanda Rangel", apelido: "Mandi" [0]
// nome: "Laís Petra", apelido: "Laura" [1]
// nome: "Letícia Chijo" apelido: "Chijo" [2]

// 2) a:
// retorna tdos os nomes e a posição de cada um dentro do array.

// [0] "Amanda Rangel"
// [1] "Laís Petra"
// [2] "Letícia Chijo"


// 3) a:

// o console vai imprimi todos os nomes, apelidos e posições com excessão do "chijo" 

// [0] "Amanda Rangel" apelido: "Mandi"
// [1] "Laís Petra" apelido: "Laura"


// Exercicio de escrita de codigo:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

   // const novoArrayA = pets.map((item) => {
   //   return item.nome
   // })

   // console.log(novoArrayA)


  // 1 b)

  // const novoArrayB = pets.filter((item, index) => {
  //   return item.raca === "Salsicha"
  // })

  //console.log(novoArrayB)


  // 1) C:
  
//   const novoArrayC = pets.filter((item) => {
//       return item.raca === "Poodle"
//   }).map((item) => {
//     return "Você ganhou um cupom de desconto de 10% para tosar o/a" + item.nome
// } ) 


//   console.log(novoArrayC)

//   const novoArrayD = novoArrayC.map((item) => {
//       return "Você ganhou um cupom de desconto de 10% para tosar o/a" + item.nome
//   } ) 

//   console.log(novoArrayD)

// 

// 2) , a:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const novosProdutos = produtos.map((item) => {
     return item.nome
 })

 console.log(novosProdutos)

  
