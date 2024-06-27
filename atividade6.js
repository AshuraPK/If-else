/*6. Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação 
(nota entre 5 e 7) ou reprovado (nota menor que 5).*/
 
nota = 6 

if (nota >= 7){
    console.log ("O aluno está aprovado")
}
 else if (nota < 5){
        console.log ("O aluno está reprovado")
    }
else if(nota == 5|6) {
    console.log("O aluno está em recuperação")
}

/* Observação; na linha 12 eu poderia ter usar somente o "ELSE" que ele resloveria de forma automatica o meu problema.
pois por dedução ele pegaria os numeros faltantes e entenderia que o 5 e o 6 seriam a recuperação pois foram os unicos que sobrando*/