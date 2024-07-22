function multiplicação(num1: number, num2: number): number {
    const resulted = num1 * num2;
    console.log(`O resultado da multiplicação entre ${num1} e ${num2} é ${resulted}`);
    return resulted;
}

function saudação(nome: string): string {
    const mensagem = `diz ola ${nome}!`;
    console.log(mensagem);
    return mensagem;
}

function multiplicar(a: number, b: number, c: number): number {
    return a * b * c;
}

function dizOla(nome: string): string {
    return `${nome} diz oi`;
}

console.log(multiplicar(10, 20, 25));
console.log(dizOla("Kenny"));
