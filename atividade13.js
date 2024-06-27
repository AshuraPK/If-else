/*13. Crie um programa que simule um jogo de adivinhação, 
onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, 
com dicas de "maior" ou "menor" após cada palpite.
Desafio*/

var n1 = 50
var n2 = "40"



if (n2 > n1 ){
console.log("É menor")
}
  else if (n2 < n1){
    console.log("É maior")
  }
 else {
    console.log ("exatamente! seu número é:",n1,)
 }