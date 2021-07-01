// exercicio de interpretação de codigo.

// 1)  resultado = 10

// 2)  a: 19, 21, 23, 25, 27, 30

//     b: sim , poderia ser usado um let com a palavra indice e depois imprimir .


// 3) (*,**,***,****)

// Escrita de codigo :

// Questão 1, (a), (b), (C)

// const bichinhos = Number(prompt("olá , quantos animais de estimação você tem?"))
// console.log(bichinhos)

// if(bichinhos === 0) { 
//     console.log("que pena! você pode adotar um pet!")
// }

// if(bichinhos > 0){
//     let arrayBichinhos = []
//     for(let i = 0; i < bichinhos; i++){
//         arrayBichinhos.push(prompt("Diga o nome do seus bichinhos"))
//     }

//     console.log(arrayBichinhos)
// }

// Questão 2 , (a)


// const arrayOriginal = [22, 8, 10, 123, 11]

// function imprimirValorArray (arrayOriginal) {
//     for(let valor of arrayOriginal){
//         console.log(valor)
//     }
// }

// imprimirValorArray(arrayOriginal)


// 2 (b):


// const arrayOriginal = [22, 8, 10, 123, 11]

// function imprimirValorArray (arrayOriginal) {
//     for(let valor of arrayOriginal){
//         console.log(valor/10)
//     }
// }

// imprimirValorArray(arrayOriginal)

 
// 2 (c):


// const arrayOriginal = [22, 8, 10, 123, 11]

// function imprimirValoresPares (arrayOriginal) {
//     let arrayNumerosPares = []
//     for(let valor of arrayOriginal){
//         if(valor % 2 === 0){
//             console.log(valor)
//         }
        
//     }
//     console.log(arrayNumerosPares)
// }

// imprimirValoresPares(arrayOriginal)

// 2 (d):

// function imprimirArrayDeStrings (arrayOriginal){
//     let arrayDeStrings = []
//     let i = 0
//     for(let valor of arrayOriginal){
//         arrayDeStrings.push(`O elemento do index ${i} é: ${valor}`)
//         i++
//     }
//     console.log(arrayDeStrings)
// }
// imprimirArrayDeStrings(arrayOriginal)

// 2 (e):

const arrayOriginal = [5, 22, 98, 121, 10]

function pegarMaiorOuMenor (arrayOriginal){
    let maiorNumero = Infinity;
    let menorNumero = 0;
    for(let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i] < menorNumero){
            menorNumero = arrayOriginal[i]
        }else if(arrayOriginal[i] > maiorNumero){
            maiorNumero = arrayOriginal[i]
        }
    }
    console.log("O maior numero é:", maiorNumero)
    console.log(" O menor numero é:", menorNumero)
}
