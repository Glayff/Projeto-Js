//tem um modo não muito utilizado mas fica de resalva, quando quero abrir uma string com aspas duplas e usar aspas duplas dentro dessa string eu utilizo \ - barra invertida, exemplo

// let umaString = "Um \"texto\" Qualquer."

// console.log(umaString);

//strings são indexaveis - qualquer ponto é representado por um numero que podemos pegar.

// let umaString = "Um texto Qualquer."

// console.log(umaString[9]);

//Formas de cocatenação 

// let umaString = "Um texto qualquer mesmo"

// console.log(umaString,'' + 'em' + ' '  + 'um' + ' ' + 'lindo' + ' ' + 'dia');
// console.log(umaString.concat(' em um lindo dia'));
// console.log(umaString + ' em um lindo dia');
// console.log(`${umaString} em um lindo dia`);


//forma de encontrar o index.
// let umaString = "Um texto qualquer mesmo";

// console.log(umaString.indexOf('mesmo'));
// console.log(umaString.lastIndexOf('o', 18));

//Encontrar letras maisculas ou minusculas - expressoões regulares.

// let umaString = "Um Texto Qualquer Mesmo";

// console.log(umaString.match(/[a-z]/g));

let umaString = "Um Texto Qualquer Mesmo";

console.log(umaString.replace('Um', 'Mesmo'));

let outraString = 'O rato roeu a roupa do rei de roma'

// console.log(outraString.replace(/r/g, '#')); //outra maneira 
// console.log(umaString.length); //ver o tamanho da string
// console.log(outraString.length);

// console.log(outraString.slice(-5));
// // console.log(outraString.length - 3);

// console.log(outraString.split("r"));

console.log(outraString.toLocaleUpperCase())
console.log(outraString.toLocaleLowerCase())