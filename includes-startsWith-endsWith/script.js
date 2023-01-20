// includes, startsWith, endsWith  - retorna sempre um valor boolean

// includes - permite realizar buscar em um array 

let nomes = ['Luis', 'Ana', 'Carlos'];

//console.log(nomes.includes('Luis'));

if(nomes.includes('marcos')) {     // includes é sensitivo então letras maiúsculas e minúsculas fazem diferença na busca
    console.log('Esta ná lista!')
} else {
    console.log('Não esta na Lista!')
}

// startsWith - realiza buscas com base nas primeiras letras Ex:

let nome = 'Luis'

console.log(nome.startsWith('L'));

// endsWith - realiza a busca com base na ultimas letras Ex:

console.log(nome.endsWith('s'));

// startsWith e endsWith serve tanto para realizar busca através da primeira e ultima letra com, palavras e frases