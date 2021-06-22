
// Exercicio de interpretação de texto

// 1 - a - vai ser impresso "Matheus nachtergaele", "Virginia Cavendish", "canal Globo", 14h.



//  2 - a - cahorro:  "Juca", idade: 3, raca: "SRD   
//          gato: "Juba", idade: 3, raca: "SRD"
//        tartaruga:  "Jubo", idade: 3, raca: "SRD"
// a sintaxe dos três pontos faz uma copia inteira de um objeto para outro, você pode mudar ou adicionar uma outra propriedade.


// a -rertorna : nome: caio, idade 23, false.
// a - retorna : undefined
// b- na primeira opção o valor impresso é false devido ao backender ter sido declarado como false.
// b - na segunda opção o resultado é undefined, devido a existir a opção altura que é um valor que não esta, declarado.

 
// exercicio 1 escrita de codigos:

// const pessoa = {
//     nome: "lucas",
//     apelidos: ["motoboy", "tafarel", "louco"],
// }

// function imprimePessoa(objeto){
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

// }

//imprimePessoa(pessoa)

// b -


// const novaPessoa = {...pessoa, apelidos:[
//     "motoboy", "tafarel", "louco"
// ]}


// imprimePessoa(novaPessoa)



// Exercicio 2 letra a:


// const pessoa = {
//     nome: "paulo",
//     idade: 25,
//     profissao: "arquiteto"
// }

// function imprimeInfos(person){
//     return [person.nome, person.nome.length, person.idade, person.profissao, person.profissao.length]
// }

// console.log(imprimeInfos(pessoa))


// exercicio 3 

// a :

const carrinho = []

// b:

const frutas1 = {
    nome: "abacaxi",
    disponibilidade: true

}

const frutas2 = {
    nome: "uva",
    disponibilidade: true

}

const frutas3 = {
    nome: "pera",
    disponibilidade: true

}

const frutas4 = {
    nome: "laranja",
    disponibilidade: true

}

// c -

function adicionaFrutaNoCarrinho(fruta) {
carrinho.push(fruta)
}

adicionaFrutaNoCarrinho(abacaxi)
adicionaFrutaNoCarrinho(uva)
adicionaFrutaNoCarrinho(pera)
adicionaFrutaNoCarrinho(laranja)


console.log(carrinho)







 







