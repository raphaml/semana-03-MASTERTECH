const iP = require('./identificador-de-paridade');
let numeros = [2, 3, 5, 6, 7, 9, 11, 20, 33, 44]
let impares = [];
let pares = [];


iP.retornarParidade(numeros, pares, impares);
console.log(pares);
console.log(impares);
