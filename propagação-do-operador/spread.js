// Spread Operator

let primeiros = [ 1, 2, 3];

let numeros = [...primeiros, 4, 5, 6];  // ... invoca o spread operator
// passamos todos os valores de (primeiros) para o array (numeros)
console.log(numeros);

// Vamos usar o Spread Operator em um objeto:

let pessoa = {
    nome: 'Matheus',
    idade: 45,
    cargo: 'RH'
}

let novaPessoa = {
    ...pessoa,
    status: 'Ativo',
    cidade: 'Campo Grande / MS'
}

console.log(novaPessoa);

// EX:

function novoUsuario(info) {
    let dados = {
        ...info,
        status: 'ATIVO',
        inicio: '20/03/2023',
        codigo: 123123
    }

    console.log(dados);
}

novoUsuario({ nome: 'Jose', sobrenome: 'Silva', cargo: 'DEV'})