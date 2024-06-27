/*10. Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC,
 informando se está abaixo do peso,    no peso normal, acima do peso ou obeso.*/

 peso = 104
 altura = 1.82
 imc = (peso / (altura * altura))

 console.log (imc)

 if(imc < 18.5){
    console.log('abaixo do peso')
 }
 else if (imc > 18.5 && imc < 24.9){
    console.log('peso normal')
 }
 else if (imc > 25.0 && imc < 29.9) {
    console.log ('acima do peso')
 }
else {
    console.log ('Obeso I, II ,III etc...')
}
