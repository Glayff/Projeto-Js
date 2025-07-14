const numero = prompt('Digite um Numero: ');
const raizquadrada = numero ** 0.5
let num1 = Number(numero);

document.querySelector('#titulo').innerHTML = `Seu numero é: ${num1}`;

document.body.innerHTML += `A Raiz quadrada é: <strong>${raizquadrada}</strong><br />`;
document.body.innerHTML += `<strong>${num1}</strong> é inteiro:<strong>${Number.isInteger(num1)}</strong><br />`;
document.body.innerHTML += `É NaN: <strong>${Number.isNaN(num1)}</strong><br />`
document.body.innerHTML += `Arredondando para baixo fica: <strong>${Math.floor(num1)}</strong><br />`;
document.body.innerHTML += `Arredondando para baixo fica: <strong>${Math.ceil(num1)}</strong><br />`;
document.body.innerHTML += `Colocando com duas casa decimais fica: <strong>${num1.toFixed(2)}</strong><br />`;

console.log(Number.isInteger(numero));
