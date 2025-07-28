let varA = 'A'; //Quero que seja o Valor de B
let varB = 'B'; //Quero que seja o Valor de C
let varC = 'C'; //Quero que seja o Valor de A

console.log(varA,varB,varC);

//Minha resolução para o problema acima 
/*const A = varB
const B = varC
const C = varA

console.log(A,B,C);*/

//resolução do professor
 /*

 const varAtemp = varA;
varA = varB
varB = varC
varC = varA

 */

//Resolução nova do professor

[varA,varB,varC] = [varB,varC,varA];

console.log(varA,varB,varC)
