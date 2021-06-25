/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



    const jogoBlackJack = ("Boas vindas ao jogo de Blackjack!")
    console.log(jogoBlackJack)

    if(confirm("Você quer iniciar uma nova rodada?")) {

   } else {

      console.log("O jogo acabou")
   }

   const carta = comprarCarta(); 

   console.log(carta.texto) 
   console.log(carta.valor)


    const cartasJogador = [comprarCarta(), comprarCarta()];
    const cartasComputador = [comprarCarta(),comprarCarta()];

    const pontosJogador = cartasJogador[0].valor + cartasJogador[1].valor

    const pontosComputador = cartasComputador[0].valor + cartasComputador[1].valor

    if (confirm("Quer iniciar uma nova rodada")){
       console.log("Boas vindas ao jogo")

       console.log(`Usuario - cartas:${cartasJogador[0].texto} ${cartasJogador[1].texto} - pontuação ${pontosJogador}`)

       console.log(`Computador - cartas:${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontosComputador}`)

       if(pontosJogador > pontosComputador){
          console.log("O usuario ganhou!")

       } else if(pontosJogador < pontosComputador){
          console.log("O computador ganhou!")

       } else if(pontosJogador === pontosComputador)
       console.log("Empate")

    } else{
       console.log("Ojogo acabou!")
    }
