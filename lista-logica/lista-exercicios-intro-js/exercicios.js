// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const usuarioAltura = Number(prompt(" digite a altura"))
  const usuarioLargura = Number(prompt(" digite a largura"))
  const area = usuarioAltura * usuarioLargura
  console.log(area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("digite o ano atual"))
  const anoDeNacimento = Number(prompt("digite seu ano de nascimento"))
  const idade = anoAtual - anoDeNacimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoAltura = peso / (altura * altura)
return pesoAltura
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("digite o seu nome")
  const idade = Number(prompt("digite a sua idade"))
  const email = prompt("digite o seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite uma cor")
  const cor2 = prompt("digite uma segunda cor")
  const cor3 = prompt("digite uma terceira cor")
  const todasAsCores = [cor1, cor2,cor3]
  console.log(todasAsCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const valorDoEspetaculo = custo / valorIngresso
  return valorDoEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoDasStrings = string1.length === string2.length
  return tamanhoDasStrings

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroValor = array[0]
  const ultimoValor = array[array.length -1]
  array.splice(0, 1, ultimoValor )
  array.splice(array.length -1, 1, primeiroValor)
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}