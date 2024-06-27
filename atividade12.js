//12. Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.

tri1 = 97
tri2 = 98
tri3 = 99

if (tri1 == tri2 && tri2 == tri3 && tri1 == tri3){
    console.log('É um Triângulo Equilátero')
}
else if(tri1 == tri2 && tri2 != tri3 || tri1 != tri2 && tri2 == tri3 || tri1 != tri2 && tri1 == tri3 ) {
    console.log ('é um Triângulo Isósceles')
}
   else{ 
console.log ("É um triangulo Escaleno")
}