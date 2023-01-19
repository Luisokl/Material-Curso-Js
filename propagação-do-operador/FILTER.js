// FILTER -- utilizamos para filtrar alguma coisa dentro do array com base na sua condição

let palavras = ['Matheus', 'Ana', 'Jose', ' Ricardo Silva'];

let resultado = palavras.filter((item) => {
    return item.length <= 4 ;
})

console.log(resultado);

