

// Funções anonimas ou arrow function

/*
sintaxe:  () => {}

1- Os parênteses, é por onde a função recebe os argumentos (assim como nas funçoes tradicionais)
2- 'seta' =>   - responsável pelo nome "arrow"
3- E as chaves: onde vai o bloco de código que representa o corpo da função.

*/

function somar(a, b) {
    let total = a + b
    return console.log(total);
}

somar(10, 30);

// Ex utilizando a arrow fuction

let subtrair = (valor1, valor2) => {
    let resultado = valor1 - valor2;
    console.log(resultado);
}

subtrair(50, 15)

let numeros = [1, 3, 4, 5];

numeros.map((item) => {
    console.log(item)
}) 