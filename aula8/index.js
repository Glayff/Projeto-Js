let nome = 'Glayff Gonçalves';
let sobrenome = 'Araujo Junior';
const idade = 26;
const peso = 65.0;
const altura = 1.76;
const alturaAoQuadrado = altura ** 2;
const IMC = peso / alturaAoQuadrado;
let arredondado = Math.round (IMC * 100)/100;
const anoDeNascimento = 2025 - idade;

// console.log(nome, sobrenome,'tem',idade,'anos de idade','pesa', peso,'kg', 'tem', altura,'de altura', 'e seu IMC é de', IMC, 'nascido em', anoDeNascimento);
console.log(`${nome} ${sobrenome} tem ${idade} Anos pesa ${peso} Kg.`);
console.log(`Tem ${altura} metros de altura e seu IMC é de ${arredondado}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento}.`)