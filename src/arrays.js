const alunosDaSala = [
    { nome: 'Kenny', nota: 10},
    { nome: 'Alex', nota: 4},
    { nome: 'João', nota: 8},
    { nome: 'Bruna', nota: 7},
    { nome: 'Valéria', nota: 6},
    { nome: 'Santos', nota: 6},
    { nome: 'Silva', nota: 5},
    { nome: 'Maria', nota: 7},
    { nome: 'Carmém', nota: 9},
    { nome: 'Kaline', nota: 3},
    { nome: 'Célia', nota: 8},
    { nome: 'Manuela', nota: 2},
];

function alunosAprovados(alunosNotaMaiorOuIgual) {       
    return alunosNotaMaiorOuIgual.filter(aluno => aluno.nota >= 6); 
}

const estudantesAprovados = alunosAprovados(alunosDaSala); 
console.log(estudantesAprovados);