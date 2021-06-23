// exercicio de interpretação de codigo.

// 1)  resultado = 10

// 2)  a: 19, 21, 23, 25, 27, 30

//     b: sim , poderia ser usado um let .


// 3) (*,**,***,****)

// Escrita de codigo :

// Questão 1, (a).

const pets = Number(prompt("olá , quantos animais de estimação você tem?"))
const numeroDePets = []

conferirPets = (numero) => {
    if (numero <= 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
        let inicio = 0
        let usuario = numero
        while (inicio < usuario) {
            let nomeDoPet = prompt("digite o nome do seu pet , um por um:")
            let adicionaPet = numeroDePets.push(nomeDoPet)
            inicio ++
        }
    
    }
    console.log(numeroDePets)
}
console.log(pets)


