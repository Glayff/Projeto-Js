// const pessoa01 = {

//     nome: 'Glayff',
//     sobrenome: 'Junior',
//     idade: 26,
    
// };

// console.log(pessoa01);
// console.log(pessoa01.nome);
// console.log(pessoa01.sobrenome);
// console.log(pessoa01.idade);

function criaPessoa (nome,sobrenome,idade) {
    return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade,
    }

}
const pessoa1 = criaPessoa('Glayff', 'Junior', 26);
const pessoa2 = criaPessoa('Leticia', 'Valares', 24);
const pessoa3 = criaPessoa('Melinda', 'Valares Gonçalves', 1);
const pessoa4 = criaPessoa('Monkey', 'dLuffy', 26);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa3.nome);
console.log(pessoa3.sobrenome);
console.log(pessoa4.nome);
console.log(pessoa4.sobrenome);