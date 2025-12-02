// /*
// Primitivos (imutáveis) - string, number, boolean , undefined, null (bigit, symbol 
// */

// // let nome = 'Glayff'
// // nome = 'junior'
// // console.log(nome)

// // let nome = 'Glayff';
// // nome[0] = 'G'
// // console.log(nome[0], nome);

// // let a = 'A';
// // let b = a; // Cópia

// // console.log(a, b);

// // a = 'Outra coisa'; // Alteração de 'a'

// // console.log(a, b);  // 'b' permanece inalterado     

// // Referência (mutável) - array, object, function

let a = [1, 2, 3];
let b = a; // Referência

console.log(a, b);      
a.push(4); // Alteração de 'a'
console.log(a, b);  // 'b' reflete a alteração feita em 'a' e vice-versa

b.pop(); // Alteração de 'b'
console.log(b)
