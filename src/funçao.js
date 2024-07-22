"use strict";
function multiplicação(num1, num2) {
    const resulted = num1 * num2;
    console.log(`O resultado da multiplicação entre ${num1} e ${num2} é ${resulted}`);
    return resulted;
}
function saudação(nome) {
    const mensagem = `Olá ${nome}!`;
    console.log(mensagem);
    return mensagem;
}
function multiplicar(a, b, c) {
    return a * b * c;
}
function cumprimentar(nome) {
    return `Olá ${nome}`;
}
console.log(multiplicar(10, 20, 25));
console.log(cumprimentar("Kenny"));
