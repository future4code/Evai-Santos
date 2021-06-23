// exercicio de interpretação
// 1 :
// A) o codigo pede para o usuario digitar um numero e depois verifica se é um numero inteiro e seu resto seja igual a "0" , se caso for ele
// retorna passou no teste , caso não seja ele vai retornar não passou no teste.

// B) para número pares sem resto .

// C) para número impar que possue resto na divisão.


// atividade 2 

// A) para verificar o preço de um determinado produto de acordo com oq ue o usuario escolher.

// B) o valor impresso será 5

// C) ele vai me devolver o valor da que está abaixo do defaut que é 5.


// atividade 03 

// A) pede para o usuario digitar o primeiro numero.

// B) se ele digitar 10 , vai imprimir que o numero passou no teste.

// C) 



// Exercicio de escrita de codigo 

// atividade 1)

// const PerguntaIdade = Number(prompt("Qual a sua idade?"))

// if (PerguntaIdade >= 18) {
//     console.log("Você pode dirigir" )
// } else {
//     console.log("Você não pode dirigir.")
// }


// atividade 2)

// const turnoDoAluno = prompt("qual o seu turno: digitar M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
// const daOi = (turno) => {
// console.log(turno)
// if (turno === "M"){
//     console.log("Bom dia")
// } else if (turno === "V"){
//     console.log("Boa tarde")
// } else if (turno === "N"){
//     console.log("Boa noite")
// } else {
//     console.log("Não entendi")
// }
// }
// daOi (turnoDoAluno)


// atividade 4 

// const turnoDoAluno = prompt("qual o seu turno: digitar M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()

// switch (turnoDoAluno) {
//     case "M":
//         console.log("Bom dia")
//         break
//     case "V":
//         console.log("Boa tarde")
//         break
//     case "N":
//         console.log("Boa noite")
//         break
//     default:
//         console.log("horario não encontrado")
//         break
// }

// atividade 4

const vamosAoCinema = () => {
    const tipoDeFilme = prompt("Insira o gênero do filme que você vai assitir")
    const valorDoTicket = Number(prompt("Qual o valor do ticket?"))
    if (tipoDeFilme === "fantasia" && valorDoTicket === 18) {
        console.log("Bom filme")
    } else {
        console.log("escolha outro filme")
    }
}

vamosAoCinema()