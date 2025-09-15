// const pessoa1 = {
//     nome : 'Glayff',
//     sobrenome : 'Junior',
//     idade: 26
// };

// console.log(pessoa1.nome);

// function criaPessoa (nome, sobrenome, idade) {
//      return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//      }
// }

// const pessoa1 = criaPessoa('Glayff', 'Junior', 26);
// console.log(pessoa1)


// function criaPessoa (nome, sobrenome, idade) {
//      return {nome,sobrenome,idade}
//        }
// const pessoa1 = criaPessoa('Glayff', 'Junior', 26);
// const pessoa2 = criaPessoa('Leticia', 'Valares', 26);
// const pessoa3 = criaPessoa('Eleonora', 'Valares', 4);
// const pessoa4 = criaPessoa('Valentim', 'Gonçalves', 2);
// const pessoa5 = criaPessoa('Aqueleque', 'permanece', '??');
// console.log(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5);


const pessoa1 = {
    nome:'Glayff',
    sobrenome: 'Junior',
    idade: 26,

    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
      },

};

pessoa1.fala();

//incrementaIdade() {
// this.idade++;
// pessoa1.fala();
// pessoa1.incrementaIdade();
// };