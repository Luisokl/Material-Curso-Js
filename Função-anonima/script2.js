Alguma das formas de se escrever uma função são:

function somar(x, y) {
    return x + y;
}

somar(5, 10);

// --------------------------------------------

let somar = function(x,y) {
    return x + y;
}

somar(5,10);

// E temos a arrow function ----------------

let somar = (x, y) => {
    return x + y;
}

somar(5, 10);

// Podemos simplificar ainda mais adicionando a expressão direto na linha da função.

let somar = (x, y) => x + y;

somar(5, 10);

// Caso a função tenha apeans um parâmetro podemos simplificar ainda mais o comando, pois os parenteses se tornam opicional

let letrasDoNome = nome => nome.length;

letrasDoNome('Luis');

