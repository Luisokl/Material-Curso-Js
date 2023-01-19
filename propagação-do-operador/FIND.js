// FIND - realiza uma busca na lista através de uma condição e retorna o valor

let listagem = ['ana', 2, 4, 'jose', 5, 20];

let busca = listagem.find((item) => {
    return item === 'jose'
})

console.log(busca);